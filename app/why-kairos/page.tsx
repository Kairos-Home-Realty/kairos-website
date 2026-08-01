import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { COMPARISON_ROWS } from "@/constants/site";
import { Check, X, Layers, ShieldCheck, HandCoins, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Kairos",
  description:
    "See why customers choose Kairos Home Realty over traditional brokers — transparent advice, verified partnerships and end-to-end support.",
};

const REASONS = [
  { icon: Layers, title: "One Platform, Multiple Options", desc: "Compare builders and banks side by side instead of chasing them separately." },
  { icon: ShieldCheck, title: "Transparent & Unbiased", desc: "We recommend what fits you, not what pays the highest commission." },
  { icon: HandCoins, title: "Better Financing Terms", desc: "Our banking volume helps negotiate rates individual buyers rarely access." },
  { icon: Users, title: "A Dedicated Advisor", desc: "One point of contact accompanies you from first visit to final possession." },
];

export default function WhyKairosPage() {
  return (
    <>
      <section className="bg-navy-gradient pt-40 pb-24 text-white md:pt-48">
        <div className="container-xl px-6 text-center lg:px-12">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Why Kairos</span>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold md:text-5xl lg:text-6xl">
              A better way to buy your next home
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-white/70">
              See how our model compares to working with a traditional
              broker or going it alone.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl px-0">
          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((r) => (
              <StaggerItem key={r.title}>
                <div className="card-hover h-full rounded-xl2 border border-navy/5 p-7 text-center shadow-card">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy-gradient text-gold">
                    <r.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-navy">{r.title}</h3>
                  <p className="mt-2 text-sm text-slate/70">{r.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-pad bg-offwhite">
        <div className="container-xl px-0">
          <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Comparison</span>
            <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">
              Kairos vs. Traditional Brokers
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-xl2 border border-navy/10 bg-white shadow-soft">
              <div className="grid grid-cols-3 bg-navy-gradient text-white">
                <div className="p-5 text-sm font-semibold">Feature</div>
                <div className="p-5 text-center text-sm font-semibold text-gold">Kairos</div>
                <div className="p-5 text-center text-sm font-semibold">Traditional Broker</div>
              </div>
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 items-center ${i % 2 === 0 ? "bg-white" : "bg-offwhite"}`}
                >
                  <div className="p-5 text-sm text-slate/80">{row.feature}</div>
                  <div className="flex justify-center p-5">
                    {row.kairos ? (
                      <Check className="text-success" size={20} />
                    ) : (
                      <X className="text-red-400" size={20} />
                    )}
                  </div>
                  <div className="flex justify-center p-5">
                    {row.traditional ? (
                      <Check className="text-success" size={20} />
                    ) : (
                      <X className="text-red-400" size={20} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="mt-12 flex justify-center">
            <Button href="/contact" size="lg">
              Experience the Difference <ArrowRight size={18} />
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
