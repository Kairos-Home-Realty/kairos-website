import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { BUILDERS, FEATURED_PROJECTS } from "@/constants/site";
import { Building2, ArrowRight } from "lucide-react";
import { PartnerLogo } from "@/components/ui/PartnerLogo";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects & Builders",
  description:
    "Explore Kairos Home Realty's builder partners and ask about current project availability.",
};

function BuilderLabel({ name }: { name: string }) {
  const normalizedName = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const builder = BUILDERS.find((item) => item.name.toLowerCase().replace(/[^a-z0-9]/g, "") === normalizedName);

  return (
    <span className="inline-flex items-center gap-2">
      {builder?.logo && (
        <span className="relative h-7 w-12 shrink-0 overflow-hidden rounded bg-white/90 p-0.5">
          <PartnerLogo name={builder.name} src={builder.logo} showFallbackText={false} className="p-0" />
        </span>
      )}
      <span>{name}</span>
    </span>
  );
}

export default function ProjectsPage() {
  const villaProjects = FEATURED_PROJECTS.filter((project) => project.category === "villa");
  const otherProjects = FEATURED_PROJECTS.filter((project) => project.category !== "villa");

  return (
    <>
      <section className="bg-navy-gradient pt-40 pb-24 text-white md:pt-48">
        <div className="container-xl px-6 text-center lg:px-12">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Builder Partners</span>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold md:text-5xl lg:text-6xl">
              Explore our builder partners
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-white/70">
              Browse our builder partners and ask us for current project availability, pricing and project-specific details.
            </p>
          </FadeIn>
        </div>
      </section>

      {villaProjects.length > 0 && (
        <section className="section-pad bg-offwhite">
          <div className="container-xl px-6 lg:px-12">
            <FadeIn>
              <div className="mx-auto mb-10 max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Villa living</span>
                <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Featured villa communities</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate/70">Explore selected villa projects from Casagrand and Sattva, with a dedicated page for each community.</p>
              </div>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 gap-7 lg:grid-cols-2">
              {villaProjects.map((project) => (
                <StaggerItem key={project.name}>
                  <article className="flex h-full flex-col overflow-hidden rounded-xl2 border border-navy/10 bg-white shadow-card">
                    {project.coverImage && <div className="relative aspect-[16/8] bg-offwhite"><Image src={project.coverImage} alt={`${project.name} villa community`} fill className="object-cover" unoptimized /></div>}
                    <div className="flex flex-1 flex-col p-7 md:p-8">
                      <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark"><BuilderLabel name={project.builder} /> · Villa community</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-navy">{project.name}</h3>
                      <p className="mt-3 text-sm text-slate/70"><span className="font-semibold text-navy">Location:</span> {project.location}</p>
                      <p className="mt-2 text-sm text-slate/70"><span className="font-semibold text-navy">Layouts:</span> {project.configurations}</p>
                      <ul className="mt-5 flex-1 space-y-2 text-sm leading-relaxed text-slate/70">
                        {project.highlights.map((highlight) => <li key={highlight}>• {highlight}</li>)}
                      </ul>
                      {project.indicativeStartingPrice && <div className="mt-5 rounded-lg bg-offwhite p-4"><p className="font-semibold text-navy">Indicative price: {project.indicativeStartingPrice}</p><p className="mt-1 text-xs leading-relaxed text-slate/60">{project.priceNote}</p></div>}
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        {project.detailsPage && <Button href={project.detailsPage} variant="secondary" size="sm" className="w-full justify-center">See More Details <ArrowRight size={16} /></Button>}
                        <Button href="/contact" size="sm" className="w-full justify-center">Ask about this villa <ArrowRight size={16} /></Button>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      <section className="section-pad bg-offwhite">
        <div className="container-xl px-6 lg:px-12">
          <FadeIn>
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">More properties</span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">Featured projects to explore</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate/70">Browse apartments and other featured projects, with project details and supplied layouts.</p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {otherProjects.map((project) => (
              <StaggerItem key={project.name}>
                <article className="flex h-full flex-col rounded-xl2 border border-navy/10 bg-white p-7 shadow-card md:p-9">
                  {project.coverImage && (
                    <div className="relative mb-6 aspect-[16/8] overflow-hidden rounded-xl bg-offwhite">
                      <Image src={project.coverImage} alt={`${project.name} villa exterior`} fill className="object-cover" unoptimized />
                    </div>
                  )}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark"><BuilderLabel name={project.builder} /></p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-navy">{project.name}</h3>
                    </div>
                    {project.rera && <span className="rounded-full bg-navy/5 px-3 py-1.5 text-xs text-navy/70">RERA: {project.rera}</span>}
                  </div>
                  <p className="mt-4 text-sm text-slate/70"><span className="font-semibold text-navy">Location:</span> {project.location}</p>
                  <p className="mt-2 text-sm text-slate/70"><span className="font-semibold text-navy">Layouts:</span> {project.configurations}</p>
                  <ul className="mt-5 flex-1 space-y-2 text-sm leading-relaxed text-slate/70">
                    {project.highlights.map((highlight) => <li key={highlight}>• {highlight}</li>)}
                  </ul>
                  {project.virtualTour && (
                    <a
                      href={project.virtualTour}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
                    >
                      Open 360° project view <ArrowRight size={16} />
                    </a>
                  )}
                  {project.masterLayout && (
                    <div className="mt-7 border-t border-navy/10 pt-6">
                      <h4 className="text-sm font-semibold text-navy">Project master layout</h4>
                      <a href={project.masterLayout} target="_blank" rel="noopener noreferrer" className="mt-3 block overflow-hidden rounded-lg bg-offwhite">
                        <Image
                          src={project.masterLayout}
                          alt={`${project.name} master layout plan`}
                          width={2200}
                          height={1556}
                          className="h-auto w-full transition-transform duration-300 hover:scale-[1.02]"
                          unoptimized
                        />
                      </a>
                      <p className="mt-2 text-xs text-slate/60">Select the plan to open a larger view.</p>
                    </div>
                  )}
                  {project.sampleVideos && project.sampleVideos.length > 0 && (
                    <div className="mt-7 border-t border-navy/10 pt-6">
                      <h4 className="text-sm font-semibold text-navy">Sample apartment videos</h4>
                      <div className="mt-3 grid gap-4 sm:grid-cols-2">
                        {project.sampleVideos.map((video) => (
                          <div key={video.videoId}>
                            <p className="mb-2 text-xs font-medium text-slate/70">{video.label}</p>
                            <div className="aspect-video overflow-hidden rounded-lg bg-navy/5">
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
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.indicativeStartingPrice && (
                    <div className="mt-5 rounded-lg bg-offwhite p-4">
                      <p className="font-semibold text-navy">Indicative starting price: {project.indicativeStartingPrice}</p>
                      <p className="mt-1 text-xs leading-relaxed text-slate/60">{project.priceNote}</p>
                    </div>
                  )}
                  <div className="mt-6">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      {project.detailsPage && (
                        <Button href={project.detailsPage} variant="secondary" size="sm" className="w-full justify-center">
                          See More Details <ArrowRight size={16} />
                        </Button>
                      )}
                      <Button href="/contact" size="sm" className="w-full justify-center">Ask about this project <ArrowRight size={16} /></Button>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-slate/60">
            Project details and indicative pricing are based on supplied marketing materials and may change. Verify current availability, final price, inclusions and RERA information with the builder before making a decision. Brochure illustrations are representative only.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl px-0">
          <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BUILDERS.map((builder) => (
              <StaggerItem key={builder.name}>
                <div className="card-hover flex h-full flex-col rounded-xl2 border border-navy/5 shadow-card">
                  <div className="img-zoom relative flex h-44 items-center justify-center overflow-hidden rounded-t-xl2 bg-navy-gradient">
                    {builder.logo ? (
                      <div
                        className={`relative h-28 w-36 overflow-hidden rounded-xl p-4 shadow-gold ${
                          builder.logoBg === "dark" ? "bg-navy" : "bg-white/95"
                        }`}
                      >
                        <PartnerLogo name={builder.name} src={builder.logo} />
                      </div>
                    ) : (
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gold-gradient text-navy shadow-gold">
                        <Building2 size={28} />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-xl font-semibold text-navy">{builder.name}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gold-dark">
                      {builder.tagline}{builder.established ? ` · Est. ${builder.established}` : ""}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-slate/70">
                      {builder.description}
                    </p>
                    {builder.projects.length > 0 ? (
                      <div className="mt-5 border-t border-navy/10 pt-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy/50">
                          Featured Projects
                        </p>
                        <ul className="space-y-1 text-sm text-slate/70">
                          {builder.projects.map((project) => (
                            <li key={project}>• {project}</li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p className="mt-5 border-t border-navy/10 pt-4 text-sm text-slate/65">
                        Contact us for current project availability and details.
                      </p>
                    )}
                    <div className="mt-6">
                      <Button href="/contact" size="sm" className="w-full justify-center">
                        Enquire About This Builder <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-slate/60">
            These are featured partners; other options may be available. Partner and project availability can change. Confirm current inventory, pricing and applicable RERA details with the builder before making a decision.
          </p>
        </div>
      </section>
    </>
  );
}
