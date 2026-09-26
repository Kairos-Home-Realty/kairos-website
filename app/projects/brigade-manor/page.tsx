import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrigadeResidentialDetails } from "@/components/projects/BrigadeResidentialDetails";
import { FEATURED_PROJECTS } from "@/constants/site";

export const metadata: Metadata = {
  title: "Brigade Manor, Moti Nagar | Kairos Home Realty",
  description: "Explore Brigade Manor in Moti Nagar: 3 and 4 BHK homes, amenities, master plan, nearby places and indicative pricing.",
};

export default function BrigadeManorPage() {
  const project = FEATURED_PROJECTS.find((item) => item.name === "Brigade Manor");
  if (!project) notFound();
  return <BrigadeResidentialDetails project={project} />;
}
