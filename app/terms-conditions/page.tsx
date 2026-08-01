import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Review the terms and conditions governing the use of Kairos Home Realty's website and advisory services.",
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using the Kairos Home Realty website and services, you agree to be bound by these terms and conditions.",
  },
  {
    title: "2. Nature of Services",
    body: "Kairos Home Realty acts as a property and financial advisory intermediary. We do not guarantee the outcome of loan applications or property transactions, which remain subject to the policies of respective builders and financial institutions.",
  },
  {
    title: "3. No Guarantee of Pricing",
    body: "Property prices, loan interest rates and terms displayed or discussed are indicative and subject to change by the respective builder or bank without notice.",
  },
  {
    title: "4. Third-Party Partners",
    body: "We work with independent builders and banking institutions. Kairos Home Realty is not liable for construction delays, quality disputes, or loan servicing issues arising after introduction to a partner.",
  },
  {
    title: "5. Intellectual Property",
    body: "All content on this website, including text, graphics and branding, is the property of Kairos Home Realty and may not be reproduced without permission.",
  },
  {
    title: "6. Limitation of Liability",
    body: "Kairos Home Realty shall not be held liable for any indirect, incidental or consequential damages arising from the use of our advisory services.",
  },
  {
    title: "7. Governing Law",
    body: "These terms shall be governed by and construed in accordance with the laws of India, with courts in Hyderabad, Telangana having exclusive jurisdiction.",
  },
  {
    title: "8. Contact Us",
    body: `For questions regarding these terms, please contact us at ${SITE.email} or ${SITE.phone}.`,
  },
];

export default function TermsConditionsPage() {
  return (
    <section className="section-pad bg-white pt-40 md:pt-48">
      <div className="container-xl px-6 lg:px-12">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Legal</span>
          <h1 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">Terms &amp; Conditions</h1>
          <p className="mt-3 text-sm text-slate/60">Last updated: January 2026</p>
        </FadeIn>

        <div className="mx-auto max-w-3xl space-y-8">
          {SECTIONS.map((s) => (
            <FadeIn key={s.title}>
              <h2 className="mb-2 font-display text-xl font-semibold text-navy">{s.title}</h2>
              <p className="text-sm leading-relaxed text-slate/70">{s.body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
