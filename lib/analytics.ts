export type AnalyticsEventName =
  | "page_view"
  | "project_view"
  | "enquiry_open"
  | "enquiry_submit"
  | "whatsapp_click"
  | "call_click"
  | "site_visit_open"
  | "site_visit_submit"
  | "home_loan_open"
  | "home_loan_submit";

export type AnalyticsDetails = Record<string, string | number | boolean | undefined>;

export function trackAnalyticsEvent(
  eventName: AnalyticsEventName,
  details: AnalyticsDetails = {}
) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("kairos:analytics", {
      detail: { eventName, ...details },
    })
  );
}

export function captureLeadSource(sourceCta: string) {
  if (typeof window === "undefined") {
    return { sourcePage: "", sourceCta, utmSource: "", utmMedium: "", utmCampaign: "" };
  }

  const params = new URLSearchParams(window.location.search);
  return {
    sourcePage: window.location.pathname,
    sourceCta,
    utmSource: params.get("utm_source") ?? "",
    utmMedium: params.get("utm_medium") ?? "",
    utmCampaign: params.get("utm_campaign") ?? "",
  };
}
