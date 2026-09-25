import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { TRUSTED_BRANDS } from "@/constants/site";

export function TrustedBar() {
  // Duplicate the list so the marquee can loop seamlessly at -50%
  const items = [...TRUSTED_BRANDS, ...TRUSTED_BRANDS];

  return (
    <section className="overflow-hidden border-y border-navy/5 bg-white py-10">
      <div className="container-xl px-6 lg:px-12">
        <FadeIn>
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-navy/40">
            Trusted builder partners
          </p>
        </FadeIn>
      </div>

      <div className="group relative w-full">
        <div className="flex w-max animate-marquee gap-24 group-hover:[animation-play-state:paused]">
          {items.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex h-28 w-72 shrink-0 items-center justify-center"
            >
              <div
                className={`relative flex h-full w-full items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 ${
                  brand.logo && brand.logoBg === "dark"
                    ? "rounded-lg bg-navy/85 p-2.5"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                {brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain p-2"
                    sizes="288px"
                  />
                ) : (
                  <span className="px-4 text-center text-xl font-semibold text-navy">
                    {brand.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Fade the edges so logos scroll in/out smoothly rather than clipping hard */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />
      </div>
    </section>
  );
}
