import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { EMICalculator } from "@/components/sections/EMICalculator";
import { EligibilityChecker } from "@/components/sections/EligibilityChecker";
import { FAQSection } from "@/components/sections/FAQSection";
import { BANKS, PROCESS_STEPS } from "@/constants/site";
import { FileCheck2, Landmark, ClipboardList, BadgeCheck, MoreHorizontal } from "lucide-react";

export const metadata: Metadata = {
  title: "Home Loan Assistance",
  description:
    "Understand the home loan process, eligibility, required documents and partner banks. Use our EMI calculator and eligibility checker.",
};

const DOCUMENTS = [
  "Identity proof (Aadhaar, PAN, Passport)",
  "Address proof (utility bill, rental agreement)",
  "Income proof (salary slips, ITR, Form 16)",
  "Bank statements (last 6 months)",
  "Property documents (sale agreement, title deed)",
  "Passport-size photographs",
];

const FEATURED_BANK_NAMES = ["ICICI Bank", "Federal Bank", "IDFC FIRST Bank"];

export default function HomeLoansPage() {
  const featuredBanks = BANKS.filter((bank) => FEATURED_BANK_NAMES.includes(bank.name));

  return (
    <>
      <section className="bg-navy-gradient pt-40 pb-24 text-white md:pt-48">
        <div className="container-xl px-6 text-center lg:px-12">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Home Loan Assistance</span>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold md:text-5xl lg:text-6xl">
              Financing made simple, terms made clear
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-white/70">
              We compare offers across 12+ banking partners to secure you the
              most competitive rate, then guide you through every document.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl px-0">
          <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">EMI Calculator</span>
            <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">
              Estimate your monthly repayment
            </h2>
          </FadeIn>
          <FadeIn>
            <EMICalculator />
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-offwhite">
        <div className="container-xl px-0">
          <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Eligibility Checker</span>
            <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">
              See how much you may qualify for
            </h2>
          </FadeIn>
          <FadeIn>
            <EligibilityChecker />
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl grid grid-cols-1 gap-14 px-0 lg:grid-cols-2">
          <FadeIn direction="right">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Loan Process</span>
            <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">How financing works with us</h2>
            <div className="mt-8 space-y-5">
              {PROCESS_STEPS.slice(5).map((step) => (
                <div key={step.step} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-gradient font-display text-sm font-bold text-gold">
                    {step.step}
                  </span>
                  <div>
                    <p className="font-semibold text-navy">{step.title}</p>
                    <p className="text-sm text-slate/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Required Documents</span>
            <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">What you&apos;ll need</h2>
            <ul className="mt-8 space-y-4">
              {DOCUMENTS.map((doc) => (
                <li key={doc} className="flex items-start gap-3 rounded-xl2 border border-navy/5 bg-offwhite p-4 text-sm text-slate/80 shadow-card">
                  <FileCheck2 className="mt-0.5 shrink-0 text-gold" size={18} />
                  {doc}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-offwhite">
        <div className="container-xl px-0">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Partner Banks</span>
            <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">Financing options we compare for you</h2>
          </FadeIn>
          <StaggerContainer className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {featuredBanks.map((bank) => (
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
              <p className="text-sm font-semibold text-navy/60">And Many More</p>
              <p className="mt-1 text-xs text-slate/50">12+ banking partners</p>
            </div>
          </StaggerItem>
        </StaggerContainer>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl px-0">
          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: BadgeCheck, title: "Verified Lenders", desc: "Every partner bank is a regulated, established institution." },
              { icon: ClipboardList, title: "Guided Paperwork", desc: "We prepare and review your documentation before submission." },
              { icon: Landmark, title: "Rate Negotiation", desc: "We negotiate on your behalf using our partnership volume." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="card-hover h-full rounded-xl2 border border-navy/5 p-7 text-center shadow-card">
                  <item.icon className="mx-auto mb-4 text-gold" size={32} />
                  <h3 className="font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate/70">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
