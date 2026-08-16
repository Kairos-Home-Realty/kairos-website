import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { TIMELINE, SITE } from "@/constants/site";
import { Eye, Target, HeartHandshake, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kairos Home Realty's story, vision, mission and values as a trusted property and financial advisory firm.",
};

const VALUES = [
  { icon: HeartHandshake, title: "Transparency", description: "No hidden agendas, no biased pushing — every recommendation is honest." },
  { icon: Target, title: "Customer-First", description: "Your needs and budget always come before any partner relationship." },
  { icon: Sparkles, title: "Excellence", description: "We hold ourselves to the same premium standard we expect from our partners." },
  { icon: Eye, title: "Integrity", description: "We say what we mean, even when it means recommending you wait." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-gradient pt-40 pb-24 text-white md:pt-48">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="container-xl px-6 text-center lg:px-12">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              About Kairos
            </span>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold md:text-5xl lg:text-6xl">
              Why we exist, and who we serve
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-white/70">
              Kairos Home Realty was founded on a simple belief — buying a
              home shouldn&apos;t require you to navigate builders, banks and
              paperwork alone.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl grid grid-cols-1 gap-10 px-0 lg:grid-cols-3">
          <FadeIn direction="up">
            <div className="h-full rounded-xl2 border border-navy/5 p-8 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-navy">Our Story</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate/70">
                Kairos Home Realty is a professional property and financial
                advisory firm committed to simplifying the home-buying
                journey. We bridge the gap between property buyers, reputed
                builders and leading banks by providing end-to-end guidance —
                from project discovery and comparison to home loan assistance
                and complete documentation support.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <div className="h-full rounded-xl2 border border-navy/5 p-8 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-navy">Our Vision</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate/70">
                To become India&apos;s most trusted property and financial
                advisory platform — empowering individuals and families to
                make informed real estate decisions while delivering seamless
                financing through technology, transparency and strong
                industry partnerships.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="h-full rounded-xl2 border border-navy/5 p-8 shadow-card">
              <h2 className="font-display text-2xl font-semibold text-navy">Our Mission</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate/70">
                <li>• Help customers discover the right property</li>
                <li>• Partner with reputed builders and banks</li>
                <li>• Deliver honest, transparent guidance</li>
                <li>• Simplify the complete buying journey</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-offwhite">
        <div className="container-xl px-0">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Values</span>
            <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">What guides every decision we make</h2>
          </FadeIn>
          <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <StaggerItem key={v.title}>
                <div className="card-hover h-full rounded-xl2 bg-white p-7 text-center shadow-card">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy-gradient text-gold">
                    <v.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate/70">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl px-0">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Journey</span>
            <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">From an idea to 500+ families served</h2>
          </FadeIn>
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="absolute left-[27px] top-0 h-full w-px bg-navy/10 md:left-1/2" />
            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <FadeIn key={item.year} direction={i % 2 === 0 ? "right" : "left"}>
                  <div className="relative flex items-start gap-6 md:justify-center">
                    <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold-gradient font-display text-sm font-bold text-navy shadow-gold md:absolute md:left-1/2 md:-translate-x-1/2">
                      {item.year}
                    </div>
                    <div className="rounded-xl2 border border-navy/5 bg-offwhite p-6 shadow-card md:ml-24 md:w-[calc(50%-3rem)]">
                      <h3 className="font-semibold text-navy">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate/70">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy-gradient text-white">
        <div className="container-xl grid grid-cols-1 items-center gap-10 px-0 lg:grid-cols-[auto_1fr]">
          <FadeIn direction="right">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gold-gradient font-display text-3xl font-bold text-navy shadow-gold">
              AT
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Founder&apos;s Message</span>
            <p className="mt-4 max-w-2xl font-display text-xl leading-relaxed text-white/90 md:text-2xl">
              &ldquo;We started Kairos because we watched too many families
              make the biggest financial decision of their lives without a
              trusted guide. Our promise is simple: honest advice, every
              time.&rdquo;
            </p>
            <p className="mt-4 text-sm text-white/60">
              {SITE.founder.name} · {SITE.founder.role}, Kairos Home Realty
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
