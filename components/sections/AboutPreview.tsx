import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="section-pad bg-offwhite">
      <div className="container-xl grid grid-cols-1 items-center gap-14 px-0 lg:grid-cols-2">
        <FadeIn direction="right">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl3 bg-navy-gradient shadow-soft">
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <ShieldCheck className="mb-4 text-gold" size={40} />
              <p className="font-display text-2xl text-white">
                Transparency is not a promise. It&apos;s our process.
              </p>
            </div>
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.1}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            About Kairos
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
            A trusted bridge between customers, builders and banks.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate/80">
            Kairos Home Realty is a professional property and financial
            advisory firm committed to simplifying the home-buying journey.
            We bring together verified builders, leading banks and expert
            guidance under one roof — so every decision you make is informed,
            transparent and entirely your own.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="secondary">
              Discover Our Story <ArrowRight size={18} />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
