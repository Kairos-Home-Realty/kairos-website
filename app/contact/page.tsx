import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/constants/site";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Kairos Home Realty to book a free consultation, discuss home loan options, or plan a site visit.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-gradient pt-40 pb-24 text-white md:pt-48">
        <div className="container-xl px-6 text-center lg:px-12">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Contact Us</span>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold md:text-5xl lg:text-6xl">
              Let&apos;s start your property journey
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-white/70">
              Book a free consultation and our advisory team will reach out
              within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl grid grid-cols-1 gap-14 px-0 lg:grid-cols-[1fr_1.2fr]">
          <FadeIn direction="right">
            <div className="space-y-6">
              <div className="rounded-xl2 border border-navy/5 p-7 shadow-card">
                <h3 className="mb-5 font-display text-xl font-semibold text-navy">
                  Get in Touch
                </h3>
                <ul className="space-y-4 text-sm text-slate/80">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 shrink-0 text-gold" size={18} />
                    {SITE.phone}
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 shrink-0 text-gold" size={18} />
                    {SITE.email}
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 shrink-0 text-gold" size={18} />
                    {SITE.address}
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 shrink-0 text-gold" size={18} />
                    {SITE.hours}
                  </li>
                </ul>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href={`tel:${SITE.phone}`} variant="secondary" className="flex-1 justify-center">
                    <Phone size={16} /> Call Now
                  </Button>
                  <Button href={`https://wa.me/${SITE.whatsapp}`} className="flex-1 justify-center">
                    <MessageCircle size={16} /> WhatsApp
                  </Button>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl2 border border-navy/5 shadow-card">
                <iframe
                  title="Kairos Home Realty location"
                  src="https://www.google.com/maps?q=Hyderabad,Telangana,India&output=embed"
                  width="100%"
                  height="280"
                  loading="lazy"
                  className="border-0"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="rounded-xl3 border border-navy/5 bg-offwhite p-8 shadow-soft md:p-10">
              <h3 className="mb-6 font-display text-2xl font-semibold text-navy">
                Book Your Free Consultation
              </h3>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
