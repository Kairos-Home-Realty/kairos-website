import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { FEATURED_PROJECTS } from "@/constants/site";

export const metadata: Metadata = {
  title: "Casagrand Windsor Court Villas, South Hyderabad",
  description:
    "Explore Casagrand Windsor Court in Mankhal, South Hyderabad: villa highlights, amenities, master plan, Vaastu notes and indicative pricing.",
};

export default function CasagrandWindsorCourtPage() {
  const project = FEATURED_PROJECTS.find((item) => item.name === "Casagrand Windsor Court");
  if (!project) notFound();

  const price = project.priceSheet;

  return (
    <>
      <section className="bg-navy-gradient pt-32 pb-14 text-white md:pt-40 md:pb-20">
        <div className="container-xl px-6 lg:px-12">
          <FadeIn>
            <a href="/projects" className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white">
              <ArrowLeft size={16} /> All projects
            </a>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Casagrand · South Hyderabad</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold md:text-6xl">Casagrand Windsor Court</h1>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/75 md:text-base"><MapPin size={17} />{project.location}</p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">{project.overview} A collection of 21 villas with London-inspired elevations and private outdoor living spaces.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">Ask about this project <ArrowRight size={17} /></Button>
              <a href="#master-plan" className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10">View master plan</a>
            </div>
          </FadeIn>
          {project.coverImage && (
            <FadeIn delay={0.1}>
              <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-xl2 border border-white/15 shadow-card">
                <Image src={project.coverImage} alt="Casagrand Windsor Court villa exterior" fill priority className="object-cover" unoptimized />
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <section className="bg-offwhite py-8">
        <div className="container-xl grid grid-cols-2 gap-4 px-6 md:grid-cols-4 lg:px-12">
          {[
            ["Community", "About 3.9 acres · 21 villas"],
            ["Villa plots", "Approx. 438–616 sq. yd."],
            ["Configurations", "4 BHK and 5 BHK+"],
            ["Open space", "77% · 10,600 sq. ft. clubhouse"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl bg-white p-5 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">{label}</p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-navy">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl grid gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-12">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">A private villa community</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Modern living with a London-inspired character</h2>
            <p className="mt-5 text-sm leading-relaxed text-slate/75">The project brief describes a blend of modern and traditional architecture in a gated community at Mankhal, close to Tukkuguda Exit No. 14. Villas are G+2 (part) and are described as 100% Vaastu-compliant.</p>
            <p className="mt-4 text-sm leading-relaxed text-slate/75">The supplied information lists 4 BHK homes and 5 BHK homes with a maid’s room, home office and home theatre. Each villa is described as having two dedicated car parks, an 11 ft canopy and a 550 sq. ft. entrance deck that extends the living area outdoors.</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-xl2 bg-offwhite p-7 md:p-9">
              <h3 className="font-display text-2xl font-semibold text-navy">At a glance</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate/75">
                <li>• 21 exclusive villas across about 3.9 acres</li>
                <li>• Plot sizes stated as approximately 438–616 sq. yd.</li>
                <li>• 77% open space and more than 25 amenities</li>
                <li>• 10,600 sq. ft. grand clubhouse</li>
                <li>• 4 BHK and 5 BHK+maid+office+theatre layouts</li>
                <li>• Location: Mankhal, South Hyderabad, near Tukkuguda Exit No. 14</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {project.masterLayout && (
        <section id="master-plan" className="section-pad scroll-mt-24 bg-offwhite">
          <div className="container-xl px-6 lg:px-12">
            <FadeIn>
              <div className="mb-8 max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Explore the community</span>
                <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Villa master plan</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate/70">Open the supplied plan at full size to inspect villa placement, landscaped spaces and community amenities.</p>
              </div>
              <a href={project.masterLayout} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl2 bg-white p-2 shadow-card">
                <Image src={project.masterLayout} alt="Casagrand Windsor Court master plan" width={2200} height={2200} className="h-auto w-full rounded-lg" unoptimized />
              </a>
              <p className="mt-3 text-xs text-slate/60">The plan is reproduced from the supplied brochure. Refer to the builder’s approved documents for final plans and specifications.</p>
            </FadeIn>
          </div>
        </section>
      )}

      {project.amenities && (
        <section className="section-pad bg-white">
          <div className="container-xl px-6 lg:px-12">
            <FadeIn>
              <div className="mb-8 max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Green spaces and recreation</span>
                <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Amenities shown in the brochure</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate/70">The project information describes 25+ modern amenities. These items are transcribed from the supplied master plan.</p>
              </div>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.amenities.map((amenity, index) => (
                <StaggerItem key={amenity}>
                  <div className="flex h-full items-start gap-3 rounded-xl border border-navy/10 bg-offwhite p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-semibold text-navy">{index + 1}</span>
                    <p className="pt-1 text-sm leading-relaxed text-slate/80">{amenity}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {project.specifications && (
        <section className="section-pad bg-offwhite">
          <div className="container-xl px-6 lg:px-12">
            <FadeIn>
              <div className="mb-8 max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">From supplied project materials</span>
                <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Villa features and Vaastu highlights</h2>
              </div>
            </FadeIn>
            <div className="grid gap-5 md:grid-cols-2">
              {project.specifications.map((group) => (
                <article key={group.category} className="rounded-xl2 bg-white p-6 shadow-card md:p-7">
                  <h3 className="font-display text-xl font-semibold text-navy">{group.category}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate/75">
                    {group.details.map((detail) => <li key={detail} className="flex gap-2"><span className="text-gold-dark">•</span><span>{detail}</span></li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {price && (
        <section className="section-pad bg-white">
          <div className="container-xl px-6 lg:px-12">
            <FadeIn>
              <div className="mb-8 max-w-3xl">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Indicative example · Villa {price.villaNo}</span>
                <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Price and payment schedule</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate/70">The figures below are transcribed from the price sheet you shared. The sheet is undated; reconfirm all amounts and availability with Casagrand before relying on them.</p>
              </div>
            </FadeIn>
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <article className="rounded-xl2 bg-offwhite p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">Villa {price.villaNo} · {price.status}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-navy">{price.grandTotal}</h3>
                <p className="mt-2 text-sm text-slate/70">{price.villaType} · {price.landArea} plot · {price.superBuiltUpArea}</p>
                <dl className="mt-6 divide-y divide-navy/10 text-sm">
                  {[
                    ["Basic cost", price.basicCost],
                    ["Other charges", price.otherCharges],
                    ["PLC", price.plc],
                    ["Total before GST", price.totalBeforeGst],
                    ["GST", price.gst],
                    ["Grand total", price.grandTotal],
                  ].map(([label, value]) => <div key={label} className="flex justify-between gap-4 py-3"><dt className="text-slate/70">{label}</dt><dd className="text-right font-medium text-navy">{value}</dd></div>)}
                </dl>
                <p className="mt-4 text-xs leading-relaxed text-slate/60">{price.exclusions}</p>
              </article>
              <article className="overflow-hidden rounded-xl2 border border-navy/10 bg-white shadow-card">
                <h3 className="px-6 py-5 font-display text-xl font-semibold text-navy">Payment milestones</h3>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[440px] text-left text-sm">
                    <thead className="bg-navy text-white"><tr><th className="px-5 py-3 font-semibold">Stage</th><th className="px-5 py-3 text-right font-semibold">Share</th><th className="px-5 py-3 text-right font-semibold">Amount</th></tr></thead>
                    <tbody>{price.paymentSchedule.map((stage) => <tr key={stage.stage} className="border-b border-navy/10 last:border-0"><td className="px-5 py-3 text-slate/80">{stage.stage}</td><td className="px-5 py-3 text-right text-slate/80">{stage.percentage}</td><td className="px-5 py-3 text-right font-medium text-navy">{stage.amount}</td></tr>)}</tbody>
                  </table>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      <section className="bg-navy-gradient py-16 text-white md:py-20">
        <div className="container-xl px-6 text-center lg:px-12">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Interested in Windsor Court?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">Contact Kairos for a discussion about current availability, final pricing, inclusions and a site visit.</p>
            <div className="mt-7 flex justify-center"><Button href="/contact" size="lg">Enquire about this project <ArrowRight size={17} /></Button></div>
            <p className="mx-auto mt-8 max-w-4xl text-xs leading-relaxed text-white/55">Project information is summarized from user-supplied notes, brochure, Vaastu highlights and an undated Villa 9 price sheet. Brochure imagery and plans are representative. Confirm approved plans, current availability, final pricing, taxes, registration, corpus fund, inclusions and applicable RERA details directly with the builder before making a purchase decision.</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
