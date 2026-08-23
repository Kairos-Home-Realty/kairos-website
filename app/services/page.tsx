import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { SERVICES, SERVICE_ICONS } from "@/constants/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Kairos Home Realty's full range of property advisory, builder guidance, home loan and documentation services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-gradient pt-40 pb-24 text-white md:pt-48">
        <div className="container-xl px-6 text-center lg:px-12">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Services</span>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold md:text-5xl lg:text-6xl">
              Complete support, from search to settlement
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-white/70">
              Six dedicated services designed to remove every point of
              friction in your property journey.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="bg-white">
        {SERVICES.map((service, index) => {
          const Icon = SERVICE_ICONS[service.icon as keyof typeof SERVICE_ICONS];
          const reversed = index % 2 === 1;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className={`section-pad scroll-mt-24 ${index % 2 === 0 ? "bg-white" : "bg-offwhite"}`}
            >
              <div className="container-xl px-0">
                <div
                  className={`grid grid-cols-1 items-center gap-14 lg:grid-cols-2 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <FadeIn direction={reversed ? "left" : "right"}>
                    <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl3 bg-navy-gradient shadow-soft">
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                      ) : (
                        <>
                          <Icon size={100} className="text-gold/40" strokeWidth={1} />
                          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
                        </>
                      )}
                    </div>
                  </FadeIn>
                  <FadeIn direction={reversed ? "right" : "left"} delay={0.1}>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">
                      Service {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-slate/70">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5 text-sm text-slate/80">
                          <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={18} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button href="/contact" variant="secondary">
                        Get Started <ArrowRight size={18} />
                      </Button>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}