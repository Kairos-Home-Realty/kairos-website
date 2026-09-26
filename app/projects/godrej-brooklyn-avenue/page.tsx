import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { FEATURED_PROJECTS } from "@/constants/site";

export const metadata: Metadata = {
  title: "Godrej Brooklyn Avenue, Kukatpally",
  description:
    "Explore Godrej Brooklyn Avenue in Kukatpally, Hyderabad: location highlights, amenities, specifications, master layout, 360° tour and sample apartment videos.",
};

export default function GodrejBrooklynAvenuePage() {
  const project = FEATURED_PROJECTS.find((item) => item.name === "Godrej Brooklyn Avenue");
  if (!project) notFound();

  return (
    <>
      <section className="bg-navy-gradient pt-36 pb-16 text-white md:pt-44 md:pb-20">
        <div className="container-xl px-6 lg:px-12">
          <FadeIn>
            <a href="/projects" className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white">
              <ArrowLeft size={16} /> All projects
            </a>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-gold">Godrej Properties · Kukatpally, Hyderabad</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold md:text-6xl">Godrej Brooklyn Avenue</h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">{project.overview}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {project.virtualTour && (
                <a href={project.virtualTour} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-navy transition-colors hover:bg-gold-light">
                  Explore the 360° view <ExternalLink size={17} />
                </a>
              )}
              <Button href="/contact" variant="outline" className="justify-center">Ask about this project <ArrowRight size={16} /></Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-offwhite py-8">
        <div className="container-xl grid grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
          {[
            ["Location", project.location],
            ["Layouts in brochure", project.configurations],
            ["RERA registration", project.rera ?? "See builder details"],
            ["Permit number", "2189/HMDA/SWBP/2026"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl bg-white p-5 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">{label}</p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-navy">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {project.sampleVideos && project.sampleVideos.length > 0 && (
        <section className="section-pad bg-white">
          <div className="container-xl px-6 lg:px-12">
            <FadeIn>
              <div className="mb-8 max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Take a look inside</span>
                <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Sample apartment videos</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate/70">View the sample apartment videos shared for this project.</p>
              </div>
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-2">
              {project.sampleVideos.map((video) => (
                <div key={video.videoId} className="overflow-hidden rounded-xl2 border border-navy/10 bg-white shadow-card">
                  <div className="aspect-video bg-navy/5">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                      title={`${project.name} ${video.label}`}
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <p className="p-4 text-sm font-semibold text-navy">{video.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.masterLayout && (
        <section className="section-pad bg-offwhite">
          <div className="container-xl px-6 lg:px-12">
            <FadeIn>
              <div className="mb-8 max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Plan your visit</span>
                <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Project master layout</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate/70">See the tower arrangement, landscape spaces, amenities and project infrastructure shown in the supplied master layout.</p>
              </div>
              <a href={project.masterLayout} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-xl2 bg-white p-2 shadow-card">
                <Image src={project.masterLayout} alt={`${project.name} master layout plan`} width={2200} height={1556} className="h-auto w-full rounded-lg" unoptimized />
              </a>
              <p className="mt-3 text-xs text-slate/60">Select the layout to open a larger view. The final plan and specifications are subject to the builder's approved documents.</p>
            </FadeIn>
          </div>
        </section>
      )}

      {project.amenities && (
        <section className="section-pad bg-white">
          <div className="container-xl px-6 lg:px-12">
            <FadeIn>
              <div className="mb-8 max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Outdoor spaces</span>
                <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Landscape amenities</h2>
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
            {project.infrastructure && (
              <div className="mt-12">
                <h3 className="font-display text-2xl font-semibold text-navy">Project infrastructure</h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {project.infrastructure.map((item) => <li key={item} className="rounded-lg border border-navy/10 p-4 text-sm leading-relaxed text-slate/75">{item}</li>)}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {project.specifications && (
        <section className="section-pad bg-offwhite">
          <div className="container-xl px-6 lg:px-12">
            <FadeIn>
              <div className="mb-8 max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">From the supplied brochure</span>
                <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Project specifications</h2>
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

      {project.nearbyPlaces && (
        <section className="section-pad bg-white">
          <div className="container-xl px-6 lg:px-12">
            <FadeIn>
              <div className="mb-8 max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Kukatpally, Hyderabad</span>
                <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Nearby places shown in the brochure</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate/70">The brochure location map highlights the following schools, hospitals, shopping and connectivity options.</p>
              </div>
            </FadeIn>
            <div className="grid gap-5 md:grid-cols-2">
              {project.nearbyPlaces.map((group) => (
                <article key={group.category} className="rounded-xl2 border border-navy/10 bg-offwhite p-6">
                  <h3 className="flex items-center gap-2 font-semibold text-navy"><MapPin size={17} className="text-gold-dark" />{group.category}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.places.map((place) => <li key={place} className="rounded-full bg-white px-3 py-2 text-xs leading-relaxed text-slate/75">{place}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-slate/60">Nearby places are transcribed from the supplied project brochure. Travel times and routes vary with traffic; confirm current distances independently.</p>
          </div>
        </section>
      )}

      <section className="bg-navy-gradient py-16 text-white md:py-20">
        <div className="container-xl px-6 text-center lg:px-12">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Want current availability or pricing?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70">Contact Kairos to ask about available homes, current pricing, inclusions and a site visit.</p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg">Enquire about this project <ArrowRight size={17} /></Button>
              {project.virtualTour && <a href={project.virtualTour} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10">Open 360° view <ExternalLink size={16} /></a>}
            </div>
            <p className="mx-auto mt-8 max-w-4xl text-xs leading-relaxed text-white/55">Project information is summarized from the supplied Godrej Properties brochure and master layout. Images and plans are for representation; final specifications, availability, price, taxes and other charges are subject to builder confirmation and definitive project documents. RERA: {project.rera}; Permit: 2189/HMDA/SWBP/2026. Verify project information through the Telangana RERA portal and the builder before making a purchase decision.</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
