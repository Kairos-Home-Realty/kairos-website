import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { FEATURED_PROJECTS } from "@/constants/site";

export const metadata: Metadata = {
  title: "Brigade Barcelona | Neopolis, Hyderabad",
  description: "Discover Brigade Barcelona in Neopolis: Spanish-inspired 3 and 4 BHK residences, eco-deck and sky-deck amenities, brochure plans and project video.",
};

export default function BrigadeBarcelonaPage() {
  const project = FEATURED_PROJECTS.find((item) => item.name === "Brigade Barcelona");
  if (!project) notFound();

  return (
    <>
      <section className="bg-navy-gradient pt-32 pb-14 text-white md:pt-40 md:pb-20">
        <div className="container-xl px-6 lg:px-12">
          <FadeIn>
            <a href="/projects" className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"><ArrowLeft size={16} /> All projects</a>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="relative h-16 w-28 overflow-hidden rounded-lg bg-white p-1"><Image src="/builders/brigade-group.jpg" alt="Brigade Group logo" fill className="object-contain" sizes="112px" /></span>
              <div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Neopolis · Hyderabad</p><h1 className="mt-2 font-display text-4xl font-semibold md:text-6xl">Brigade Barcelona</h1></div>
            </div>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">{project.overview}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">Request project details <ArrowRight size={17} /></Button>
              {project.locationLink && <a href={project.locationLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"><MapPin size={17} /> Open location map</a>}
              <a href="#plans" className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10">Explore brochure</a>
            </div>
          </FadeIn>
          {project.coverImage && <FadeIn delay={0.1}><div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-xl2 border border-white/15 shadow-card"><Image src={project.coverImage} alt="Brigade Barcelona towers in Neopolis, Hyderabad" fill priority className="object-cover" unoptimized /></div></FadeIn>}
        </div>
      </section>

      {project.quickFacts && <section className="bg-offwhite py-8"><div className="container-xl grid grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-6 lg:px-12">{project.quickFacts.map((fact) => <div key={fact.label} className="rounded-xl bg-white p-5 shadow-card"><p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">{fact.label}</p><p className="mt-2 text-sm font-medium leading-relaxed text-navy">{fact.value}</p></div>)}</div></section>}

      {project.specifications && <section className="section-pad bg-white"><div className="container-xl px-6 lg:px-12"><FadeIn><div className="mb-8 max-w-2xl"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">A singular architectural vision</span><h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Elevated living, thoughtfully planned</h2><p className="mt-3 text-sm leading-relaxed text-slate/70">Project highlights and home features below are based on the information you shared and the supplied Brigade brochure.</p></div></FadeIn><div className="grid gap-5 md:grid-cols-2">{project.specifications.map((group) => <article key={group.category} className="rounded-xl2 bg-offwhite p-6 md:p-7"><h3 className="font-display text-xl font-semibold text-navy">{group.category}</h3><ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate/75">{group.details.map((detail) => <li key={detail} className="flex gap-2"><span className="text-gold-dark">•</span><span>{detail}</span></li>)}</ul></article>)}</div></div></section>}

      {project.amenityGroups && <section className="section-pad bg-offwhite"><div className="container-xl px-6 lg:px-12"><FadeIn><div className="mb-8 max-w-2xl"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Spaces to unwind and connect</span><h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Eco Deck, Sky Deck and more</h2><p className="mt-3 text-sm leading-relaxed text-slate/70">Amenities are grouped by the spaces named and illustrated in the project brochure.</p></div></FadeIn>{project.amenityGroups.map((group) => <div key={group.category} className="mt-10 first:mt-0"><h3 className="mb-5 font-display text-2xl font-semibold text-navy">{group.category}</h3><StaggerContainer className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">{group.amenities.map((amenity, index) => <StaggerItem key={amenity}><div className="flex h-full items-start gap-3 rounded-xl border border-navy/10 bg-white p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-semibold text-navy">{index + 1}</span><p className="pt-1 text-sm leading-relaxed text-slate/80">{amenity}</p></div></StaggerItem>)}</StaggerContainer></div>)}</div></section>}

      {project.nearbyPlaces && <section className="section-pad bg-white"><div className="container-xl px-6 lg:px-12"><FadeIn><div className="mb-8 max-w-2xl"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Neopolis, Hyderabad</span><h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Places and connections around the project</h2><p className="mt-3 text-sm leading-relaxed text-slate/70">These landmarks and road connections are identified on the supplied brochure map; distances are not specified here.</p></div></FadeIn><div className="grid gap-5 md:grid-cols-2">{project.nearbyPlaces.map((group) => <article key={group.category} className="rounded-xl2 border border-navy/10 bg-offwhite p-6"><h3 className="flex items-center gap-2 font-display text-xl font-semibold text-navy"><MapPin size={17} className="text-gold-dark" />{group.category}</h3><ul className="mt-4 flex flex-wrap gap-2">{group.places.map((place) => <li key={place} className="rounded-full bg-white px-3 py-2 text-xs leading-relaxed text-slate/75">{place}</li>)}</ul></article>)}</div>{project.locationMap && <div className="mt-8"><h3 className="mb-3 font-display text-xl font-semibold text-navy">Brochure location map</h3><a href={project.locationMap} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl2 border border-navy/10 bg-offwhite shadow-card"><Image src={project.locationMap} alt="Brigade Barcelona Neopolis location map from its supplied brochure" width={1920} height={1080} className="h-auto w-full" unoptimized /></a><a href={project.locationLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-dark">Open shared Google Maps location <ArrowRight size={16} /></a></div>}</div></section>}

      {project.sampleVideos?.[0] && <section className="section-pad bg-offwhite"><div className="container-xl px-6 lg:px-12"><FadeIn><div className="mb-8 max-w-2xl"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Take a closer look</span><h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Brigade Barcelona video</h2></div><div className="overflow-hidden rounded-xl2 border border-navy/10 bg-black shadow-card"><div className="aspect-video"><iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${project.sampleVideos[0].videoId}`} title={project.sampleVideos[0].label} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div></div></FadeIn></div></section>}

      {project.galleryImages && <section id="plans" className="section-pad scroll-mt-24 bg-white"><div className="container-xl px-6 lg:px-12"><FadeIn><div className="mb-8 max-w-2xl"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Supplied Brigade brochure</span><h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Master plan and residence layouts</h2><p className="mt-3 text-sm leading-relaxed text-slate/70">Select a brochure page to view it at a larger size. Layout images are examples; confirm the latest plan and availability with the builder.</p></div></FadeIn><div className="grid gap-5 md:grid-cols-2">{project.galleryImages.map((image) => <a key={image.src} href={image.src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl2 border border-navy/10 bg-offwhite p-2 shadow-card"><Image src={image.src} alt={image.alt} width={1920} height={1080} className="h-auto w-full rounded-lg" unoptimized /><p className="px-3 py-3 text-sm text-slate/70">{image.alt} · Open larger image</p></a>)}</div></div></section>}

      <section className="bg-navy-gradient py-16 text-white md:py-20"><div className="container-xl px-6 text-center lg:px-12"><FadeIn><h2 className="font-display text-3xl font-semibold md:text-4xl">Discover Brigade Barcelona</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">Contact Kairos for current availability, pricing, residence details and a guided project visit.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Button href="/contact" size="lg">Enquire about this project <ArrowRight size={17} /></Button>{project.locationLink && <a href={project.locationLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10"><MapPin size={17} /> Open location map</a>}</div><p className="mx-auto mt-8 max-w-4xl text-xs leading-relaxed text-white/55">Project information is based on the supplied marketing brief and brochure. Renderings and plans are indicative. Confirm current availability, final specifications, approvals, pricing and terms directly with the builder before making a decision.</p></FadeIn></div></section>
    </>
  );
}
