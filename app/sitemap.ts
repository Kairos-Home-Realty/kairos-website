import type { MetadataRoute } from "next";
import { FEATURED_PROJECTS } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.kairoshomerealty.com";
  const routes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/home-loans",
    "/why-kairos",
    "/contact",
    "/privacy-policy",
    "/terms-conditions",
  ];

  const pages = [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...FEATURED_PROJECTS.flatMap((project) =>
      project.detailsPage
        ? [{
            url: `${base}${project.detailsPage}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
          }]
        : []
    ),
  ];

  return pages.map((page) => ({
    ...page,
  }));
}
