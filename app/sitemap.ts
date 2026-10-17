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
  ].concat(FEATURED_PROJECTS.flatMap((project) => project.detailsPage ? [project.detailsPage] : []));

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
