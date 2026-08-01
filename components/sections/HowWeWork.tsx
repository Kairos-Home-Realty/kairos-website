import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { PROCESS_STEPS } from "@/constants/site";

export function HowWeWork() {
  return (
    <section className="section-pad bg-offwhite">
      <div className="container-xl px-0">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            How We Work
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
            Your journey, in eight clear steps
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <StaggerItem key={step.step}>
              <div className="card-hover h-full rounded-xl2 bg-white p-7 shadow-card">
                <span className="font-display text-3xl font-bold text-gold/70">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate/70">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
