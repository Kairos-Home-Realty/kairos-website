import type { MetadataRoute } from "next";
import { FEATURED_PROJECTS } from "@/constants/site";

// Google distrusts `lastmod` values that change on every deploy (it learns to ignore
// the sitemap). Only bump this date when page content meaningfully changes.
const CONTENT_LAST_UPDATED = new Date("2026-09-29");

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
      lastModified: CONTENT_LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...FEATURED_PROJECTS.flatMap((project) =>
      project.detailsPage
        ? [{
            url: `${base}${project.detailsPage}`,
            lastModified: CONTENT_LAST_UPDATED,
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
