"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, PhoneCall } from "lucide-react";
import { SITE } from "@/constants/site";
import { LeadActionButton } from "@/components/leads/LeadFlow";
import { TrackedContactLink } from "@/components/ui/TrackedContactLink";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-xl relative px-6 text-center lg:px-12">
        <FadeIn>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold md:text-4xl lg:text-5xl">
            Ready to find your right property?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            Book a free consultation with our advisory team today and take
            the first confident step toward your new home.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <LeadActionButton size="lg">
              Find My Property <ArrowRight size={18} />
            </LeadActionButton>
            <TrackedContactLink
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/40 px-9 py-4 text-base font-semibold tracking-wide text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <PhoneCall size={18} /> Call Now
            </TrackedContactLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
