import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { FEATURED_PROJECTS } from "@/constants/site";

export const metadata: Metadata = {
  title: "Unnathi Premium Villas by Auro Realty | Kairos Home Realty",
  description: "Explore Unnathi premium villas at Munirabad Junction: plot sizes, indicative pre-launch offer, price sheet and site visit enquiry.",
};

export default function UnnathiPage() {
  const project = FEATURED_PROJECTS.find((item) => item.name === "Unnathi");
  if (!project) notFound();

  return (
    <>
      <section className="bg-navy-gradient pt-32 pb-14 text-white md:pt-40 md:pb-20">
        <div className="container-xl px-6 lg:px-12">
          <FadeIn>
            <a href="/projects" className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"><ArrowLeft size={16} /> All projects</a>
            <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <Image src="/builders/auro-realty.png" alt="Auro Realty" width={180} height={72} className="h-14 w-auto rounded bg-white p-2 object-contain" />
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Launching soon · Munirabad Junction</p>
                <h1 className="mt-3 font-display text-5xl font-semibold md:text-7xl">Unnathi</h1>
                <p className="mt-4 flex items-center gap-2 text-sm text-white/75 md:text-base"><MapPin size={17} />{project.location}</p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">Premium Auro Realty villas with 400, 500 and 600 sq. yd. plot options, advertised from 5,172 sq. ft.</p>
                <div className="mt-7 rounded-xl border border-gold/40 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Exclusive pre-launch offer</p>
                  <p className="mt-2 font-display text-3xl font-semibold">From ₹6.2 Cr*</p>
                  <p className="mt-1 text-sm text-white/70">Savings up to ₹50 lakh advertised · confirm current terms and availability</p>
                </div>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact" size="lg">Plan a site visit <ArrowRight size={17} /></Button>
                  <a href="#details" className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10">Explore villa details</a>
                </div>
              </div>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-xl2 border border-white/20 bg-white/10 shadow-card">
                <Image src="/projects/unnathi-launch-offer.png" alt="Unnathi premium villas pre-launch promotion for Munirabad Junction" fill priority sizes="(max-width: 1024px) 90vw, 40vw" className="object-contain" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {project.quickFacts && <section className="bg-offwhite py-8"><div className="container-xl grid grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-6 lg:px-12">{project.quickFacts.map((fact) => <div key={fact.label} className="rounded-xl bg-white p-5 shadow-card"><p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">{fact.label}</p><p className="mt-2 text-sm font-medium leading-relaxed text-navy">{fact.value}</p></div>)}</div></section>}

      <section id="details" className="section-pad scroll-mt-24 bg-white">
        <div className="container-xl grid gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-12">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Auro Realty · Premium villas</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">A pre-launch villa opportunity at Munirabad Junction</h2>
            <p className="mt-5 text-sm leading-relaxed text-slate/75">The project brief and promotional image describe Unnathi as a premium villa community near ORR Exit No. 6. The supplied promotional material also says sales experience centres are open and invites customers to plan a guided visit.</p>
            <p className="mt-4 text-sm leading-relaxed text-slate/75">The advertised plot sizes are 400, 500 and 600 sq. yd., with villa sizes starting from 5,172 sq. ft. Project inventory, plans, included features and offer terms should be confirmed with Auro Realty before booking.</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-xl2 bg-offwhite p-7 md:p-9">
              <h3 className="font-display text-2xl font-semibold text-navy">Plan your visit</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate/70">Speak with Abraham for site visit support and current pricing.</p>
              <a href="tel:+918089202089" className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-light">Call Abraham · 80892 02089 <ArrowRight size={16} /></a>
              <p className="mt-5 text-xs leading-relaxed text-slate/60">The promotional image states approximately 2 minutes from ORR Exit 6 and 45 minutes from HITEC City. Travel time varies by route and traffic.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {project.specifications && <section className="section-pad bg-offwhite"><div className="container-xl px-6 lg:px-12"><FadeIn><div className="mb-8 max-w-2xl"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Project snapshot</span><h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Unnathi villa details</h2></div></FadeIn><div className="grid gap-5 md:grid-cols-2">{project.specifications.map((group) => <article key={group.category} className="rounded-xl2 bg-white p-6 shadow-card md:p-7"><h3 className="font-display text-xl font-semibold text-navy">{group.category}</h3><ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate/75">{group.details.map((detail) => <li key={detail} className="flex gap-2"><span className="text-gold-dark">•</span><span>{detail}</span></li>)}</ul></article>)}</div></div></section>}

      {project.priceTableRows && <section id="pricing" className="section-pad scroll-mt-24 bg-white"><div className="container-xl px-6 lg:px-12"><FadeIn><div className="mb-8 max-w-3xl"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Price sheet supplied</span><h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Indicative pricing and charges</h2><p className="mt-3 text-sm leading-relaxed text-slate/70">The flyer advertises a pre-launch starting price of ₹6.2 Cr*. Charges below are transcribed from the separate price sheet.</p></div></FadeIn><div className="overflow-x-auto rounded-xl2 border border-navy/10 bg-white shadow-card"><table className="w-full min-w-[540px] text-left text-sm"><thead className="bg-navy text-white"><tr><th className="px-5 py-4 font-semibold">Price / charge</th><th className="px-5 py-4 font-semibold">Basis</th><th className="px-5 py-4 text-right font-semibold">Amount</th></tr></thead><tbody>{project.priceTableRows.map((row) => <tr key={row.label} className="border-b border-navy/10 last:border-0"><td className="px-5 py-4 text-slate/80">{row.label}</td><td className="px-5 py-4 text-slate/80">{row.area ?? "—"}</td><td className="px-5 py-4 text-right font-medium text-navy">{row.amount}</td></tr>)}</tbody></table></div>{project.priceTableNote && <p className="mt-4 max-w-4xl text-xs leading-relaxed text-slate/60">{project.priceTableNote}</p>}</div></section>}

      {project.paymentSchedule && <section className="section-pad bg-offwhite"><div className="container-xl px-6 lg:px-12"><FadeIn><div className="mb-8 max-w-2xl"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Supplied price sheet</span><h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Construction-linked payment schedule</h2></div></FadeIn><div className="grid gap-3 md:grid-cols-2">{project.paymentSchedule.map((item) => <div key={item.stage} className="flex items-center justify-between gap-4 rounded-xl border border-navy/10 bg-white p-4"><p className="text-sm leading-relaxed text-slate/75">{item.stage}</p><span className="shrink-0 rounded-full bg-gold/20 px-3 py-1.5 text-sm font-semibold text-navy">{item.percentage}</span></div>)}</div><p className="mt-4 text-xs leading-relaxed text-slate/60">GST applies as noted in the price sheet. Taxes, registration, local authority fees and other applicable costs may be extra. Ask Auro Realty for the current payment terms.</p></div></section>}

      {project.galleryImages && <section className="section-pad bg-white"><div className="container-xl px-6 lg:px-12"><FadeIn><div className="mb-8 max-w-2xl"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Project visuals</span><h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Unnathi promotional images</h2><p className="mt-3 text-sm leading-relaxed text-slate/70">Images supplied for this project. Renderings and offers are illustrative and subject to confirmation.</p></div></FadeIn><StaggerContainer className="grid gap-5 md:grid-cols-2">{project.galleryImages.map((image) => <StaggerItem key={image.src}><a href={image.src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl2 border border-navy/10 bg-offwhite p-2 shadow-card"><Image src={image.src} alt={image.alt} width={1200} height={1500} className="mx-auto h-auto max-h-[760px] w-full rounded-lg object-contain" unoptimized /><p className="px-3 py-3 text-sm text-slate/70">{image.alt} · Open larger image</p></a></StaggerItem>)}</StaggerContainer></div></section>}

      <section className="bg-navy-gradient py-16 text-white md:py-20"><div className="container-xl px-6 text-center lg:px-12"><FadeIn><h2 className="font-display text-3xl font-semibold md:text-4xl">Experience Unnathi</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">Contact Kairos to arrange a guided site visit and confirm current pricing, villa availability and offer terms.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Button href="/contact" size="lg">Request a site visit <ArrowRight size={17} /></Button><a href="tel:+918089202089" className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10">Call Abraham · 80892 02089</a></div><p className="mx-auto mt-8 max-w-4xl text-xs leading-relaxed text-white/55">Prices, charges and launch offers are based on supplied materials and may change. Confirm current approvals, specifications, taxes, availability and payment terms with Auro Realty before booking.</p></FadeIn></div></section>
    </>
  );
}
