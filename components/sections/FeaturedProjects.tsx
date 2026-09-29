"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { FEATURED_PROJECTS } from "@/constants/site";
import { LeadActionButton } from "@/components/leads/LeadFlow";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const HOME_FEATURED_PROJECTS = FEATURED_PROJECTS.filter(
  (project) => project.detailsPage
);

export function FeaturedProjects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  const updateScrollControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollBack(track.scrollLeft > 1);
    setCanScrollForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateScrollControls();
    track.addEventListener("scroll", updateScrollControls, { passive: true });
    window.addEventListener("resize", updateScrollControls);
    return () => {
      track.removeEventListener("scroll", updateScrollControls);
      window.removeEventListener("resize", updateScrollControls);
    };
  }, [updateScrollControls]);

  const moveCarousel = (direction: -1 | 1) => {
    const track = trackRef.current;
    const firstCard = track?.querySelector<HTMLElement>("[data-project-card]");
    if (!track || !firstCard) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({
      left: direction * (firstCard.offsetWidth + gap),
      behavior: reduceMotion ? "instant" : "smooth",
    });
  };

  return (
    <section id="featured-projects" className="section-pad scroll-mt-24 bg-offwhite">
      <div className="container-xl px-0">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">
            Featured Projects
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
            Start with homes that fit your search
          </h2>
          <p className="mt-4 text-slate/70">
            Explore selected projects, their listed locations and configurations. Ask Kairos to confirm current availability and pricing.
          </p>
        </FadeIn>
        <div className="mt-10 flex items-center justify-end gap-3">
          <button
            type="button"
            aria-label="Show previous projects"
            onClick={() => moveCarousel(-1)}
            disabled={!canScrollBack}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 bg-white text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft size={19} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Show next projects"
            onClick={() => moveCarousel(1)}
            disabled={!canScrollForward}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 bg-white text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowRight size={19} aria-hidden="true" />
          </button>
        </div>
        <div
          ref={trackRef}
          role="region"
          aria-label="Featured property projects"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              moveCarousel(-1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              moveCarousel(1);
            }
          }}
          className="project-carousel-track mt-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          {HOME_FEATURED_PROJECTS.map((project) => (
            <article
              key={project.name}
              data-project-card
              aria-label={project.name}
              className="flex min-w-0 shrink-0 basis-[86%] snap-start flex-col overflow-hidden rounded-xl2 border border-navy/10 bg-white shadow-card sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(25%-1.125rem)]"
            >
              {project.coverImage && (
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={project.coverImage}
                    alt={`${project.name} project image`}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className={project.coverImageFit === "contain" ? "object-contain" : "object-cover"}
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
                  {project.builder}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-navy">
                  {project.name}
                </h3>
                <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-slate/70">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-gold-dark" />
                  <span>{project.location}</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate/70">
                  {project.configurations}
                </p>
                {project.indicativeStartingPrice && (
                  <p className="mt-3 text-sm font-semibold text-navy">
                    Indicative price: {project.indicativeStartingPrice}
                  </p>
                )}
                <div className="mt-auto flex flex-col gap-3 pt-5">
                  <LeadActionButton project={project.name} size="sm" className="w-full">
                    {project.indicativeStartingPrice ? "Get Current Price" : "Get Price"}
                  </LeadActionButton>
                  <Button
                    href={project.detailsPage!}
                    variant="secondary"
                    size="sm"
                    className="w-full"
                  >
                    View Project <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <FadeIn className="mt-9 flex justify-center">
          <Button href="/projects" variant="secondary">
            Explore All Projects <ArrowRight size={18} />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
