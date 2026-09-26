import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SattvaProjectDetails } from "@/components/projects/SattvaProjectDetails";
import { FEATURED_PROJECTS } from "@/constants/site";

export const metadata: Metadata = {
  title: "Sattva Lake Ridge, Neopolis Kokapet",
  description: "Explore Sattva Lake Ridge in Neopolis, Kokapet: high-rise homes, clubhouse, master plan, floor plans and indicative price-sheet figures.",
};

export default function SattvaLakeRidgePage() {
  const project = FEATURED_PROJECTS.find((item) => item.name === "Sattva Lake Ridge");
  if (!project) notFound();
  return <SattvaProjectDetails project={project} />;
}
