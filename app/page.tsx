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

export const metadata: Metadata = {
  title: "Kairos Home Realty | Property & Financial Advisory",
  description:
    "Discover the right property and secure the best home loan through Kairos Home Realty's trusted builder and banking partnerships.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionQuote />
      <TrustedBar />
      <AboutPreview />
      <ServicesOverview />
      <WhyChoose />
      <HowWeWork />
      <FeaturedBuilders />
      <BankPartnersSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
