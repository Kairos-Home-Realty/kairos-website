import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import type { FeaturedProject } from "@/types";

export function SattvaProjectDetails({ project }: { project: FeaturedProject }) {
  return (
    <>
      <section className="bg-navy-gradient pt-32 pb-14 text-white md:pt-40 md:pb-20">
        <div className="container-xl px-6 lg:px-12">
          <FadeIn>
            <a href="/projects" className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"><ArrowLeft size={16} /> All projects</a>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Sattva · Neopolis, Kokapet</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold md:text-6xl">{project.name}</h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">{project.overview}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">Enquire about this project <ArrowRight size={17} /></Button>
              {project.masterLayout && <a href="#plans" className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10">View plans</a>}
            </div>
          </FadeIn>
          {project.coverImage && <FadeIn delay={0.1}><div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl2 border border-white/15 bg-white shadow-card"><Image src={project.coverImage} alt={`${project.name} project plan`} fill priority className="object-contain" unoptimized /></div></FadeIn>}
        </div>
      </section>

      {project.quickFacts && (
        <section className="bg-offwhite py-8">
          <div className="container-xl grid grid-cols-2 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
            {project.quickFacts.map((fact) => <div key={fact.label} className="rounded-xl bg-white p-5 shadow-card"><p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">{fact.label}</p><p className="mt-2 text-sm font-medium leading-relaxed text-navy">{fact.value}</p></div>)}
          </div>
        </section>
      )}

      {project.masterLayout && (
        <section id="plans" className="section-pad scroll-mt-24 bg-white">
          <div className="container-xl px-6 lg:px-12">
            <FadeIn>
              <div className="mb-8 max-w-2xl"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Plans and layouts</span><h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Explore the project plan</h2><p className="mt-3 text-sm leading-relaxed text-slate/70">Select the plan to open a larger view. Final plans and inventory are subject to confirmation by Sattva.</p></div>
              <a href={project.masterLayout} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl2 border border-navy/10 bg-offwhite p-2 shadow-card"><Image src={project.masterLayout} alt={`${project.name} master plan`} width={2200} height={1800} className="h-auto w-full rounded-lg" unoptimized /></a>
            </FadeIn>
          </div>
        </section>
      )}

      {project.galleryImages && (
        <section className="section-pad bg-offwhite">
          <div className="container-xl px-6 lg:px-12">
            <FadeIn><div className="mb-8 max-w-2xl"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Supplied brochure plans</span><h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Tower floor plans</h2></div></FadeIn>
            <div className="grid gap-5 md:grid-cols-2">
              {project.galleryImages.map((image) => <a key={image.src} href={image.src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl2 border border-navy/10 bg-white p-2 shadow-card"><Image src={image.src} alt={image.alt} width={1800} height={1200} className="h-auto w-full rounded-lg" unoptimized /><p className="px-3 py-3 text-sm text-slate/70">{image.alt} · Open larger image</p></a>)}
            </div>
          </div>
        </section>
      )}

      {project.amenities && (
        <section className="section-pad bg-white">
          <div className="container-xl px-6 lg:px-12">
            <FadeIn><div className="mb-8 max-w-2xl"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Community spaces</span><h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Amenities shown in the supplied plan</h2></div></FadeIn>
            <StaggerContainer className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.amenities.map((amenity, index) => <StaggerItem key={amenity}><div className="flex h-full items-start gap-3 rounded-xl border border-navy/10 bg-offwhite p-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-semibold text-navy">{index + 1}</span><p className="pt-1 text-sm leading-relaxed text-slate/80">{amenity}</p></div></StaggerItem>)}
            </StaggerContainer>
          </div>
        </section>
      )}

      {project.specifications && (
        <section className="section-pad bg-offwhite">
          <div className="container-xl px-6 lg:px-12">
            <FadeIn><div className="mb-8 max-w-2xl"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">From supplied project materials</span><h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Project details</h2></div></FadeIn>
            <div className="grid gap-5 md:grid-cols-2">
              {project.specifications.map((group) => <article key={group.category} className="rounded-xl2 bg-white p-6 shadow-card md:p-7"><h3 className="font-display text-xl font-semibold text-navy">{group.category}</h3><ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate/75">{group.details.map((detail) => <li key={detail} className="flex gap-2"><span className="text-gold-dark">•</span><span>{detail}</span></li>)}</ul></article>)}
            </div>
          </div>
        </section>
      )}

      {project.priceTableRows && (
        <section className="section-pad bg-white">
          <div className="container-xl px-6 lg:px-12">
            <FadeIn><div className="mb-8 max-w-3xl"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Indicative price information</span><h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">{project.name} pricing</h2><p className="mt-3 text-sm leading-relaxed text-slate/70">Pricing is shown as provided in the supplied price sheet and may have changed. Contact Kairos or Sattva for a current written quote.</p></div></FadeIn>
            <div className="overflow-x-auto rounded-xl2 border border-navy/10 bg-white shadow-card">
              <table className="w-full min-w-[540px] text-left text-sm"><thead className="bg-navy text-white"><tr><th className="px-5 py-4 font-semibold">Configuration / charge</th><th className="px-5 py-4 font-semibold">Area</th><th className="px-5 py-4 text-right font-semibold">Price / amount</th></tr></thead><tbody>{project.priceTableRows.map((row) => <tr key={`${row.label}-${row.area ?? ""}`} className="border-b border-navy/10 last:border-0"><td className="px-5 py-4 text-slate/80">{row.label}</td><td className="px-5 py-4 text-slate/80">{row.area ?? "—"}</td><td className="px-5 py-4 text-right font-medium text-navy">{row.amount}</td></tr>)}</tbody></table>
            </div>
            {project.priceTableNote && <p className="mt-4 max-w-4xl text-xs leading-relaxed text-slate/60">{project.priceTableNote}</p>}
          </div>
        </section>
      )}

      <section className="bg-navy-gradient py-16 text-white md:py-20">
        <div className="container-xl px-6 text-center lg:px-12"><FadeIn><h2 className="font-display text-3xl font-semibold md:text-4xl">Want current availability or pricing?</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">Contact Kairos to ask about unit availability, current pricing, inclusions and a site visit.</p><div className="mt-7 flex justify-center"><Button href="/contact" size="lg">Enquire about this project <ArrowRight size={17} /></Button></div><p className="mx-auto mt-8 max-w-4xl text-xs leading-relaxed text-white/55">Project information and prices are summarized from user-supplied notes, brochures, plans and price sheets. Availability, pricing, taxes, charges, approvals and specifications may change; confirm details and current documents directly with Sattva before making a purchase decision.</p></FadeIn></div>
      </section>
    </>
  );
}
