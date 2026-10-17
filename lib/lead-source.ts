export type LeadSource = {
  page: string;
  source: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

export function getLeadSource(source = "website_form"): LeadSource {
  if (typeof window === "undefined") return { page: "server", source };
  const params = new URLSearchParams(window.location.search);
  return {
    page: window.location.pathname,
    source,
    utmSource: params.get("utm_source") || undefined,
    utmMedium: params.get("utm_medium") || undefined,
    utmCampaign: params.get("utm_campaign") || undefined,
  };
}
