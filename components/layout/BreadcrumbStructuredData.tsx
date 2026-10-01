"use client";

import { usePathname } from "next/navigation";
import { FEATURED_PROJECTS } from "@/constants/site";

const SEGMENT_LABELS: Record<string, string> = {
  about: "About Us",
  services: "Services",
  projects: "Projects",
  "home-loans": "Home Loans",
  "why-kairos": "Why Kairos",
  contact: "Contact",
  "privacy-policy": "Privacy Policy",
  "terms-conditions": "Terms & Conditions",
};

const BASE_URL = "https://www.kairoshomerealty.com";

const PROJECT_NAMES = new Map(
  FEATURED_PROJECTS.flatMap((project) =>
    project.detailsPage ? [[project.detailsPage, project.name] as const] : []
  )
);

function labelForSegment(segment: string): string {
  if (SEGMENT_LABELS[segment]) return SEGMENT_LABELS[segment];
  return segment
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function BreadcrumbStructuredData() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }];

  let path = "";
  segments.forEach((segment, index) => {
    path += `/${segment}`;
    items.push({
      "@type": "ListItem",
      position: index + 2,
      name: PROJECT_NAMES.get(path) ?? labelForSegment(segment),
      item: `${BASE_URL}${path}`,
    });
  });

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
