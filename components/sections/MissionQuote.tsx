import { FadeIn } from "@/components/ui/FadeIn";

export function MissionQuote() {
  return (
    <section className="bg-offwhite py-16 md:py-20">
      <div className="container-xl px-6 lg:px-12">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl italic leading-snug text-navy sm:text-3xl md:text-4xl">
            &ldquo;From Property Search to House Warming —{" "}
            <span className="text-gradient-gold not-italic">We&apos;re With You All the Way.</span>&rdquo;
          </p>
          <p className="mt-6 text-sm leading-relaxed text-slate/70 sm:text-base">
            At Kairos Home Realty, we believe finding a home is more than
            just a property transaction — it&apos;s a journey. From
            understanding your requirements and searching for the right
            property to guiding you through every step of the process, our
            team stays by your side.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}