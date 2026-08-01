import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { BUILDERS } from "@/constants/site";
import { Building2, ArrowRight } from "lucide-react";

export function FeaturedBuilders() {
  return (
    <section className="section-pad bg-white">
      <div className="container-xl px-0">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Featured Builders
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
            Verified partnerships you can trust
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BUILDERS.slice(0, 6).map((builder) => (
            <StaggerItem key={builder.name}>
              <div className="card-hover flex h-full flex-col rounded-xl2 border border-navy/5 p-7 shadow-card">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-navy-gradient text-gold">
                  <Building2 size={22} />
                </div>
                <h3 className="text-lg font-semibold text-navy">{builder.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gold-dark">
                  {builder.tagline}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate/70">
                  {builder.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-14 flex justify-center">
          <Button href="/projects" variant="secondary">
            View All Builder Partners <ArrowRight size={18} />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
