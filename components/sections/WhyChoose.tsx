import { StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2 } from "lucide-react";

const POINTS = [
  "One Platform. Multiple Builders.",
  "One Consultation. Multiple Banks.",
  "Expert Guidance at Every Step.",
  "Transparent & Unbiased Advice.",
  "End-to-End Buying Support.",
  "Trusted, Verified Partnerships.",
];

export function WhyChoose() {
  return (
    <section className="section-pad bg-navy-gradient text-white">
      <div className="container-xl px-0">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr]">
          <FadeIn direction="right">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Why Choose Kairos
            </span>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
              Home buying, finally made simple.
            </h2>
            <p className="mt-6 max-w-md text-white/70">
              We remove the guesswork, the pressure and the endless
              back-and-forth — replacing it with one trusted point of
              contact for your entire journey.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {POINTS.map((point) => (
              <StaggerItem key={point}>
                <div className="card-hover flex items-start gap-3 rounded-xl2 border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={22} />
                  <span className="font-medium leading-snug">{point}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
