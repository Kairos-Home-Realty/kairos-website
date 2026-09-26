import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Building2, Landmark } from "lucide-react";
import Image from "next/image";

export function AboutPreview() {
  return (
    <section className="section-pad bg-offwhite">
      <div className="container-xl grid grid-cols-1 items-center gap-14 px-0 lg:grid-cols-2">
        <FadeIn direction="right">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl3 shadow-soft">
            {/* Skyline photo */}
            <Image
              src="/about-skyline.png"
              alt="City skyline at dusk"
              fill
              className="object-cover"
              priority
            />

            {/* Gradient overlays for text legibility over the photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-navy/40" />

            {/* Top stat chips */}
            <div className="absolute left-8 right-8 top-8 flex gap-3">
              <div className="flex flex-1 items-center gap-2.5 rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                <Building2 size={18} className="shrink-0 text-gold" />
                <div>
                <p className="font-display text-lg font-semibold leading-none text-white">12+</p>
                <p className="mt-1 text-[11px] leading-none text-white/70">Builder Partners</p>
                </div>
              </div>
              <div className="flex flex-1 items-center gap-2.5 rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                <Landmark size={18} className="shrink-0 text-gold" />
                <div>
                  <p className="font-display text-lg font-semibold leading-none text-white">12+</p>
                  <p className="mt-1 text-[11px] leading-none text-white/70">Banks</p>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <ShieldCheck className="mb-4 text-gold" size={40} />
              <p className="font-display text-2xl text-white drop-shadow-lg">
                Transparency is not a promise. It&apos;s our process.
              </p>
            </div>
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
