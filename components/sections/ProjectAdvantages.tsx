import { ArrowRight, MapPin } from "lucide-react";
import { FEATURED_PROJECTS } from "@/constants/site";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const LOCATION_PROJECTS = FEATURED_PROJECTS.filter(
  (project) => project.detailsPage && project.highlights.length > 0
).slice(0, 4);

export function ProjectAdvantages() {
  return (
    <section className="section-pad bg-white">
      <div className="container-xl px-0">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">
            Location &amp; Project Advantages
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">
            Compare the details that matter to you
          </h2>
          <p className="mt-4 text-slate/70">
            Review each project&apos;s listed location and highlights, then open its page for the supplied plans and details.
          </p>
        </FadeIn>
        <StaggerContainer className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LOCATION_PROJECTS.map((project) => (
            <StaggerItem key={project.name} className="min-w-0">
              <article className="flex h-full flex-col rounded-xl2 border border-navy/10 bg-offwhite p-5">
                <h3 className="font-display text-lg font-semibold text-navy">{project.name}</h3>
                <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-slate/70">
                  <MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-gold-dark" />
                  {project.location}
                </p>
                <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-slate/75">
                  {project.highlights.slice(0, 2).map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <Button
                  href={project.detailsPage!}
                  variant="ghost"
                  size="sm"
                  className="mt-4 w-fit justify-start px-0"
                >
                  Project details <ArrowRight size={16} />
                </Button>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
