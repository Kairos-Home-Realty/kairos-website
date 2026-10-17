export type AnalyticsEvent =
  | "project_view"
  | "enquiry_open"
  | "enquiry_submit"
  | "whatsapp_click"
  | "call_click"
  | "site_visit_open"
  | "site_visit_submit"
  | "home_loan_open"
  | "home_loan_submit";

type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(event: AnalyticsEvent, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;
  const detail = { event, ...payload };
  window.dispatchEvent(new CustomEvent("kairos:analytics", { detail }));
  const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
  dataLayer?.push(detail);
}
