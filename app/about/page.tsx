import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { FEATURED_PROJECTS, SITE } from "@/constants/site";
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

const TRUST_STATS = [
  { value: "12+", label: "Builder partners" },
  { value: "12+", label: "Banking partners" },
  { value: `${FEATURED_PROJECTS.length}`, label: "Projects showcased" },
  { value: "100+", label: "Families assisted" },
  { value: "Hyderabad", label: "Our market" },
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Kairos in numbers</span>
            <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">A growing network, grounded in guidance</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate/70">Our network helps customers compare property and financing options across Hyderabad with one clear point of contact.</p>
          </FadeIn>
          <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
            {TRUST_STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="h-full rounded-xl2 border border-navy/8 bg-offwhite p-6 text-center shadow-card">
                  <p className="font-display text-3xl font-semibold text-navy">{stat.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gold-dark">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-pad bg-offwhite">
        <div className="container-xl grid gap-10 px-0 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Our beginning</span>
            <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl">Built to make the home journey clearer.</h2>
            <p className="mt-5 text-sm leading-relaxed text-slate/70">Kairos Home Realty began in Hyderabad in 2026 under the leadership of Abraham P Thomas, Founder and CEO. The firm brings property discovery, builder comparison and home-loan guidance together so families can make an informed decision with confidence.</p>
          </FadeIn>
          <FadeIn direction="left">
            <div className="rounded-xl3 bg-navy p-8 text-white shadow-soft md:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient font-display text-xl font-bold text-navy">2026</div>
                <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Founded in Hyderabad</p><h3 className="mt-1 text-xl font-semibold">One trusted point of contact</h3></div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/70">From the first property shortlist to the final financing conversation, our role is to make the process easier to understand—not to replace the independent decisions of the customer, builder or lender.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-navy-gradient text-white">
        <div className="container-xl grid grid-cols-1 items-center gap-10 px-0 lg:flex lg:flex-row lg:justify-center">
          <FadeIn direction="right">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gold-gradient font-display text-3xl font-bold text-navy shadow-gold">
              AT
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.1} className="max-w-2xl lg:text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Founder&apos;s Message</span>
            <p className="mt-4 font-display text-xl leading-relaxed text-white/90 md:text-2xl">
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
