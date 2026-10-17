"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { FEATURED_PROJECTS } from "@/constants/site";
import { FadeIn } from "@/components/ui/FadeIn";

const PROJECT_NAMES = ["Godrej Brooklyn Avenue", "Unnathi", "Sattva Lake Ridge", "Sattva Lago", "Brigade Manor", "Sattva Amora"];
const PROJECTS = PROJECT_NAMES.map((name) => FEATURED_PROJECTS.find((project) => project.name === name)).filter((project): project is NonNullable<typeof project> => Boolean(project));

export function FeaturedProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  const syncActive = useCallback(() => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>("[data-project-card]");
    if (!track || !card) return;
    const next = Math.round(track.scrollLeft / (card.offsetWidth + 20)) % PROJECTS.length;
    if (next !== activeRef.current) {
      activeRef.current = next;
      setActive(next);
    }
  }, []);

  const move = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-project-card]");
    if (!card) return;
    const next = (activeRef.current + direction + PROJECTS.length) % PROJECTS.length;
    track.scrollTo({ left: next * (card.offsetWidth + 20), behavior: "smooth" });
    activeRef.current = next;
    setActive(next);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => move(1), 4800);
    return () => window.clearInterval(timer);
  }, [move]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onPointerRelease = () => window.requestAnimationFrame(syncActive);
    track.addEventListener("scrollend", syncActive);
    track.addEventListener("pointerup", onPointerRelease, { passive: true });
    track.addEventListener("touchend", onPointerRelease, { passive: true });
    return () => {
      track.removeEventListener("scrollend", syncActive);
      track.removeEventListener("pointerup", onPointerRelease);
      track.removeEventListener("touchend", onPointerRelease);
    };
  }, [syncActive]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>("[data-project-card]");
    if (track && card) track.scrollTo({ left: index * (card.offsetWidth + 20), behavior: "smooth" });
    activeRef.current = index;
    setActive(index);
  };

  return <section className="section-pad overflow-hidden bg-offwhite">
    <div className="container-xl px-0">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Featured Projects</span>
        <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">Start with homes that fit your search</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate/65">Explore selected projects, their listed locations and configurations. Ask Kairos to confirm current availability and pricing.</p>
      </FadeIn>

      <div className="mt-10 flex justify-end gap-3">
        <button type="button" onClick={() => move(-1)} aria-label="Previous project" className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition hover:bg-navy hover:text-white"><ArrowLeft size={17} /></button>
        <button type="button" onClick={() => move(1)} aria-label="Next project" className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition hover:bg-navy hover:text-white"><ArrowRight size={17} /></button>
      </div>

      <div ref={trackRef} className="mt-5 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Featured projects carousel">
        {PROJECTS.map((project) => <article key={project.name} data-project-card className="flex min-w-[82%] snap-start flex-col overflow-hidden rounded-xl2 border border-navy/10 bg-white shadow-card sm:min-w-[47%] lg:min-w-[calc(25%-15px)]">
          <Link href={project.detailsPage ?? "/projects"} className="relative block aspect-[4/3] overflow-hidden bg-offwhite">
            {project.coverImage && <Image src={project.coverImage} alt={`${project.name} project`} fill className="object-cover transition duration-700 hover:scale-105" unoptimized />}
          </Link>
          <div className="flex flex-1 flex-col p-5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-gold-dark">{project.builder}</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-navy">{project.name}</h3>
            <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-slate/65"><MapPin size={14} className="mt-0.5 shrink-0 text-gold-dark" />{project.location}</p>
            <p className="mt-2 text-xs leading-relaxed text-slate/65">{project.configurations}</p>
            {project.indicativeStartingPrice && <p className="mt-4 text-xs font-semibold text-navy">Indicative price: {project.indicativeStartingPrice}</p>}
            <div className="mt-auto flex flex-col gap-2 pt-5"><Link href="/contact" className="rounded-full bg-gold px-4 py-2.5 text-center text-xs font-semibold text-navy hover:bg-gold-light">Ask for current price</Link><Link href={project.detailsPage ?? "/projects"} className="rounded-full bg-navy px-4 py-2.5 text-center text-xs font-semibold text-white hover:bg-navy-light">View project <ArrowRight size={14} className="ml-1 inline" /></Link></div>
          </div>
        </article>)}
      </div>
      <div className="mt-2 flex justify-center gap-2" aria-label="Carousel position">{PROJECTS.map((project, index) => <button key={project.name} type="button" aria-label={`Go to ${project.name}`} onClick={() => goTo(index)} className={`h-1.5 rounded-full transition-all ${active === index ? "w-8 bg-gold" : "w-1.5 bg-navy/20"}`} />)}</div>
    </div>
  </section>;
}
