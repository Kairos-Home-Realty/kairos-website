import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Kairos Home Realty's privacy policy on how we collect, use and protect your personal information.",
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly to us, such as your name, phone number, email address, budget range and property preferences, when you fill out our contact form or speak with our advisory team.",
  },
  {
    title: "2. How We Use Your Information",
    body: "Your information is used to understand your requirements, connect you with relevant builder and banking partners, provide consultation services, and communicate updates relevant to your enquiry.",
  },
  {
    title: "3. Sharing With Partners",
    body: "We may share relevant details with our verified builder and banking partners solely for the purpose of processing your property or loan enquiry, and only with your consent.",
  },
  {
    title: "4. Data Security",
    body: "We implement reasonable technical and organisational safeguards to protect your personal data against unauthorised access, alteration or disclosure.",
  },
  {
    title: "5. Cookies",
    body: "Our website may use cookies to improve browsing experience and analyse site traffic. You can disable cookies through your browser settings at any time.",
  },
  {
    title: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal information at any time by contacting us using the details below.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this privacy policy periodically. Continued use of our website after changes indicates acceptance of the revised policy.",
  },
  {
    title: "8. Contact Us",
    body: `For any privacy-related questions, please contact us at ${SITE.email} or ${SITE.phone}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="section-pad bg-white pt-40 md:pt-48">
      <div className="container-xl px-6 lg:px-12">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Legal</span>
          <h1 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">Privacy Policy</h1>
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
