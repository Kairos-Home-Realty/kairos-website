"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { FEATURED_PROJECTS } from "@/constants/site";
import { trackAnalyticsEvent } from "@/lib/analytics";

export function AnalyticsNavigationTracker() {
  const pathname = usePathname();

  useEffect(() => {
    trackAnalyticsEvent("page_view", { page: pathname ?? "/" });
    const project = FEATURED_PROJECTS.find((item) => item.detailsPage === pathname);
    if (project) {
      trackAnalyticsEvent("project_view", { page: pathname ?? "/", project: project.name });
    }

    const onContactClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const details = {
        page: pathname ?? "/",
        project: link.dataset.project ?? project?.name,
      };
      if (href.startsWith("tel:")) {
        trackAnalyticsEvent("call_click", details);
      } else if (href.startsWith("https://wa.me/")) {
        trackAnalyticsEvent("whatsapp_click", details);
      }
    };

    document.addEventListener("click", onContactClick);
    return () => document.removeEventListener("click", onContactClick);
  }, [pathname]);

  return null;
}
