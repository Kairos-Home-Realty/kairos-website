import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { FEATURED_PROJECTS } from "@/constants/site";
import { LeadActionButton } from "@/components/leads/LeadFlow";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const HOME_FEATURED_PROJECTS = FEATURED_PROJECTS.filter(
  (project) => project.detailsPage
).slice(0, 4);

export function FeaturedProjects() {
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
        <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_FEATURED_PROJECTS.map((project) => (
            <StaggerItem key={project.name} className="min-w-0">
              <article className="flex h-full flex-col overflow-hidden rounded-xl2 border border-navy/10 bg-white shadow-card">
                {project.coverImage && (
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy/5">
                    <Image
                      src={project.coverImage}
                      alt={`${project.name} project image`}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                      className="object-cover"
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
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeIn className="mt-9 flex justify-center">
          <Button href="/projects" variant="secondary">
            Explore All Projects <ArrowRight size={18} />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
