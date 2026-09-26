import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrigadeResidentialDetails } from "@/components/projects/BrigadeResidentialDetails";
import { FEATURED_PROJECTS } from "@/constants/site";

export const metadata: Metadata = {
  title: "Brigade Enclave, Moti Nagar | Kairos Home Realty",
  description: "Explore Brigade Enclave in Moti Nagar: 3 and 4 BHK homes, amenities, master plan, nearby places and indicative pricing.",
};

export default function BrigadeEnclavePage() {
  const project = FEATURED_PROJECTS.find((item) => item.name === "Brigade Enclave");
  if (!project) notFound();
  return <BrigadeResidentialDetails project={project} />;
}
