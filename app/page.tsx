import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { MissionQuote } from "@/components/sections/MissionQuote";
import { TrustedBar } from "@/components/sections/TrustedBar";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { FeaturedBuilders } from "@/components/sections/FeaturedBuilders";
import { BankPartnersSection } from "@/components/sections/BankPartnersSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { createPageMetadata } from "@/lib/metadata";
import { ProjectAdvantages } from "@/components/sections/ProjectAdvantages";

export const metadata: Metadata = createPageMetadata({
  title: "Kairos Home Realty | Property & Financial Advisory",
  description:
    "Discover the right property and secure the best home loan through Kairos Home Realty's trusted builder and banking partnerships.",
  pathname: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <WhyChoose />
      <ProjectAdvantages />
      <AboutPreview />
      <MissionQuote />
      <ServicesOverview />
      <HowWeWork />
      <FeaturedBuilders />
      <BankPartnersSection />
      <TrustedBar />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
