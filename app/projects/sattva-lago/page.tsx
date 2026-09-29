import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SattvaProjectDetails } from "@/components/projects/SattvaProjectDetails";
import { FEATURED_PROJECTS } from "@/constants/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Sattva Lago, Neopolis Kokapet",
  description: "Explore Sattva Lago Phase 2 in Neopolis, Kokapet: towers, floor plans, amenities and supplied pre-launch price details.",
  pathname: "/projects/sattva-lago",
});

export default function SattvaLagoPage() {
  const project = FEATURED_PROJECTS.find((item) => item.name === "Sattva Lago");
  if (!project) notFound();
  return <SattvaProjectDetails project={project} />;
}
