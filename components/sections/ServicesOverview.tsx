import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SERVICES, SERVICE_ICONS } from "@/constants/site";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ServicesOverview() {
  return (
    <section className="section-pad bg-white">
      <div className="container-xl px-0">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            What We Offer
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
            End-to-end guidance, under one roof
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate/70">
            From discovery to documentation, our services are designed to
            remove friction from every stage of your property journey.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon as keyof typeof SERVICE_ICONS];
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="card-hover group flex h-full flex-col rounded-xl2 border border-navy/5 bg-offwhite p-8 shadow-card"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-navy-gradient text-gold shadow-soft transition-transform group-hover:scale-110">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-semibold text-navy">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate/70">
                    {service.shortDescription}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark">
                    Learn more
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn className="mt-14 flex justify-center">
          <Button href="/services" variant="secondary">
            View All Services <ArrowRight size={18} />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
