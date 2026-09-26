import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SattvaProjectDetails } from "@/components/projects/SattvaProjectDetails";
import { FEATURED_PROJECTS } from "@/constants/site";

export const metadata: Metadata = {
  title: "Sattva Lago, Neopolis Kokapet",
  description: "Explore Sattva Lago Phase 2 in Neopolis, Kokapet: towers, floor plans, amenities and supplied pre-launch price details.",
};

export default function SattvaLagoPage() {
  const project = FEATURED_PROJECTS.find((item) => item.name === "Sattva Lago");
  if (!project) notFound();
  return <SattvaProjectDetails project={project} />;
}
