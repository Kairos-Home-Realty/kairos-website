import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { TESTIMONIALS } from "@/constants/site";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-xl px-0">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Client Stories
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
            Trusted by families across Hyderabad
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <div className="card-hover relative h-full rounded-xl2 border border-navy/5 bg-offwhite p-8 shadow-card">
                <Quote className="absolute right-6 top-6 text-gold/20" size={40} />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-base leading-relaxed text-slate/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-navy/10 pt-4">
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-slate/60">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
