import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { BUILDERS } from "@/constants/site";
import { Building2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects & Builders",
  description:
    "Explore Kairos Home Realty's trusted builder partners including Prestige Group, Brigade Group, Godrej Properties, Auro Realty, Ramky Group and Hallmark Infracon.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-navy-gradient pt-40 pb-24 text-white md:pt-48">
        <div className="container-xl px-6 text-center lg:px-12">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Builder Partners</span>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold md:text-5xl lg:text-6xl">
              Verified projects from India&apos;s most trusted developers
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-white/70">
              Every builder in our network is vetted for construction
              quality, delivery track record and regulatory compliance.
            </p>
          </FadeIn>
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
                        <Image
                          src={builder.logo}
                          alt={`${builder.name} logo`}
                          fill
                          className="object-contain p-2"
                          sizes="144px"
                        />
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
                      {builder.tagline} · Est. {builder.established}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-slate/70">
                      {builder.description}
                    </p>
                    <div className="mt-5 border-t border-navy/10 pt-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy/50">
                        Featured Projects
                      </p>
                      <ul className="space-y-1 text-sm text-slate/70">
                        {builder.projects.map((p) => (
                          <li key={p}>• {p}</li>
                        ))}
                      </ul>
                    </div>
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
        </div>
      </section>
    </>
  );
}