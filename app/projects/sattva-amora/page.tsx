import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SattvaProjectDetails } from "@/components/projects/SattvaProjectDetails";
import { FEATURED_PROJECTS } from "@/constants/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Sattva Amora Villas, Narsingi",
  description: "Explore Sattva Amora villas in Narsingi: 42 villas, master plan, plot sizes, location and indicative pricing.",
  pathname: "/projects/sattva-amora",
});

export default function SattvaAmoraPage() {
  const project = FEATURED_PROJECTS.find((item) => item.name === "Sattva Amora");
  if (!project) notFound();
  return <SattvaProjectDetails project={project} />;
}
