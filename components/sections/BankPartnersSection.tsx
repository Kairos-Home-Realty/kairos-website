import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { BANKS } from "@/constants/site";
import { Landmark, MoreHorizontal } from "lucide-react";

export function BankPartnersSection() {
  return (
    <section className="section-pad bg-offwhite">
      <div className="container-xl px-0">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Banking Partners
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
            The best financing, compared for you
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {BANKS.map((bank) => (
            <StaggerItem key={bank.name}>
              <div className="card-hover flex h-full flex-col items-center rounded-xl2 bg-white p-6 text-center shadow-card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-gradient text-gold">
                  <Landmark size={20} />
                </div>
                <p className="text-sm font-semibold text-navy">{bank.name}</p>
                <p className="mt-1 text-xs text-slate/60">{bank.productHighlight}</p>
              </div>
            </StaggerItem>
          ))}
          <StaggerItem>
            <div className="card-hover flex h-full flex-col items-center justify-center rounded-xl2 border-2 border-dashed border-navy/15 bg-transparent p-6 text-center shadow-none">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-navy/40">
                <MoreHorizontal size={20} />
              </div>
              <p className="text-sm font-semibold text-navy/60">&amp; Many More</p>
              <p className="mt-1 text-xs text-slate/50">12+ banking partners</p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
