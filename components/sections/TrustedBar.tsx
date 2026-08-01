import { FadeIn } from "@/components/ui/FadeIn";
import { BUILDERS, BANKS } from "@/constants/site";

export function TrustedBar() {
  const names = [...BUILDERS.slice(0, 4).map((b) => b.name), ...BANKS.slice(0, 3).map((b) => b.name)];
  return (
    <section className="border-y border-navy/5 bg-white py-10">
      <div className="container-xl px-6 lg:px-12">
        <FadeIn>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-navy/40">
            Trusted by leading builders and banks
          </p>
        </FadeIn>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {names.map((name) => (
            <span
              key={name}
              className="font-display text-lg font-semibold text-navy/30 transition-colors hover:text-navy/60 md:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
