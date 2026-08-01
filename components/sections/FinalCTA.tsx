import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight, PhoneCall } from "lucide-react";

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
            <Button href="/contact" size="lg">
              Book Free Consultation <ArrowRight size={18} />
            </Button>
            <Button href="tel:+911234567890" variant="outline" size="lg">
              <PhoneCall size={18} /> Call Now
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
