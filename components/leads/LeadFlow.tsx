"use client";

import {
  createContext,
  type FormEvent,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { FEATURED_PROJECTS } from "@/constants/site";
import { captureLeadSource, trackAnalyticsEvent } from "@/lib/analytics";

type LeadKind = "property" | "site-visit";
type LeadRequest = {
  kind: LeadKind;
  project?: string;
  title?: string;
  source?: ReturnType<typeof captureLeadSource>;
  onClose?: () => void;
  onSuccess?: () => void;
};
type LeadContextValue = { openLead: (request: LeadRequest) => void; isOpen: boolean };

const LeadContext = createContext<LeadContextValue | null>(null);

const locations = Array.from(new Set(FEATURED_PROJECTS.map((project) => project.location)));
const configurations = Array.from(new Set(FEATURED_PROJECTS.map((project) => project.configurations)));
const budgets = [
  "Under ₹50 Lakhs",
  "₹50 Lakhs – ₹1 Crore",
  "₹1 – 2 Crore",
  "₹2 – 5 Crore",
  "Above ₹5 Crore",
  "Not sure yet",
];
const inputClass =
  "lead-input mt-1.5 block box-border w-full rounded-lg border border-navy/15 bg-white px-3.5 py-3 text-sm text-navy";
const labelClass = "block text-sm font-medium text-navy";

function projectType(name?: string) {
  const project = FEATURED_PROJECTS.find((item) => item.name === name);
  if (!project) return "";
  if (project.category === "villa") return "villa";
  if (project.configurations.toLowerCase().includes("plot")) return "plot";
  return "apartment";
}

export async function submitLead(values: Record<string, string>) {
  const currentSource = captureLeadSource(values.sourceCTA || "direct-form");
  let response: Response;
  try {
    response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        quick: true,
        sourcePage: values.sourcePage || currentSource.sourcePage,
        sourceCTA: values.sourceCTA || currentSource.sourceCta,
        utmSource: values.utmSource || currentSource.utmSource,
        utmMedium: values.utmMedium || currentSource.utmMedium,
        utmCampaign: values.utmCampaign || currentSource.utmCampaign,
      }),
    });
  } catch {
    throw new Error("We couldn’t connect. Check your internet connection and try again.");
  }
  const result = await response.json().catch(() => null) as { success?: boolean; error?: string } | null;
  if (!response.ok || result?.success !== true) {
    throw new Error(result?.error || "Unable to send your enquiry. Please try again.");
  }
}

function LeadForm({
  request,
  onSuccess,
}: {
  request: LeadRequest;
  onSuccess: () => void;
}) {
  const [project, setProject] = useState(request.project ?? "");
  const [propertyType, setPropertyType] = useState(projectType(request.project));
  const [location, setLocation] = useState(
    FEATURED_PROJECTS.find((item) => item.name === request.project)?.location ?? ""
  );
  const [configuration, setConfiguration] = useState(
    FEATURED_PROJECTS.find((item) => item.name === request.project)?.configurations ?? ""
  );
  const [submitting, setSubmitting] = useState(false);
  const submissionLock = useRef(false);

  useEffect(() => {
    setProject(request.project ?? "");
    const selected = FEATURED_PROJECTS.find((item) => item.name === request.project);
    setPropertyType(projectType(request.project));
    setLocation(selected?.location ?? "");
    setConfiguration(selected?.configurations ?? "");
  }, [request.project]);

  const selectProject = (name: string) => {
    setProject(name);
    const selected = FEATURED_PROJECTS.find((item) => item.name === name);
    setPropertyType(projectType(name));
    setLocation(selected?.location ?? "");
    setConfiguration(selected?.configurations ?? "");
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submissionLock.current) return;
    if (!event.currentTarget.reportValidity()) return;
    submissionLock.current = true;
    setSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [key, String(value).trim()])
    );
    const leadSource = request.source ?? captureLeadSource("direct-form");
    values.sourcePage = leadSource.sourcePage;
    values.sourceCTA = leadSource.sourceCta;
    values.utmSource = leadSource.utmSource;
    values.utmMedium = leadSource.utmMedium;
    values.utmCampaign = leadSource.utmCampaign;
    try {
      await submitLead(values);
      trackAnalyticsEvent(
        request.kind === "site-visit" ? "site_visit_submit" : "enquiry_submit",
        { page: values.sourcePage, project: project || undefined }
      );
      toast.success("Thank you. Our team will be in touch about your enquiry.");
      onSuccess();
    } catch (error) {
      console.error("Lead form error:", error);
      toast.error(error instanceof Error ? error.message : "Unable to send your enquiry.");
    } finally {
      submissionLock.current = false;
      setSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <input type="hidden" name="leadType" value={request.kind} />
      <input type="hidden" name="sourcePage" value={request.source?.sourcePage ?? ""} />
      <input type="hidden" name="sourceCTA" value={request.source?.sourceCta ?? ""} />
      <input type="hidden" name="utmSource" value={request.source?.utmSource ?? ""} />
      <input type="hidden" name="utmMedium" value={request.source?.utmMedium ?? ""} />
      <input type="hidden" name="utmCampaign" value={request.source?.utmCampaign ?? ""} />
      {request.kind === "property" ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>
              Full name
              <input className={inputClass} name="fullName" autoComplete="name" required minLength={2} />
            </label>
            <label className={labelClass}>
              Indian mobile / WhatsApp number
              <input
                className={inputClass}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                pattern="(?:\+91[ -]?)?[6-9][0-9]{4}[ -]?[0-9]{5}"
                title="Enter a valid 10-digit Indian mobile number."
                required
              />
            </label>
          </div>
          <label className={labelClass}>
            Interested project (optional)
            <select
              className={inputClass}
              name="projectName"
              value={project}
              onChange={(event) => selectProject(event.target.value)}
            >
              <option value="">Help me explore options</option>
              {FEATURED_PROJECTS.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>
              Property type
              <select className={inputClass} name="propertyType" value={propertyType} onChange={(event) => setPropertyType(event.target.value)} required>
                <option value="">Select property type</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="plot">Plot</option>
                <option value="investment">Investment property</option>
              </select>
            </label>
            <label className={labelClass}>
              Preferred location
              <select className={inputClass} name="location" value={location} onChange={(event) => setLocation(event.target.value)} required>
                <option value="">Select a listed location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>
              Budget
              <select className={inputClass} name="budget" defaultValue="" required>
                <option value="">Select your budget</option>
                {budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
              </select>
            </label>
            <label className={labelClass}>
              Configuration
              <select
                className={inputClass}
                name="configuration"
                value={configuration}
                onChange={(event) => setConfiguration(event.target.value)}
                required
              >
                <option value="">Select configuration</option>
                {configurations.map((configuration) => (
                  <option key={configuration} value={configuration}>{configuration}</option>
                ))}
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </label>
          </div>
          <label className={labelClass}>
            Will you need home-loan assistance?
            <select className={inputClass} name="homeLoanRequired" defaultValue="" required>
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </label>
        </>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>
              Full name
              <input className={inputClass} name="fullName" autoComplete="name" required minLength={2} />
            </label>
            <label className={labelClass}>
              Indian mobile / WhatsApp number
              <input
                className={inputClass}
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                pattern="(?:\+91[ -]?)?[6-9][0-9]{4}[ -]?[0-9]{5}"
                title="Enter a valid 10-digit Indian mobile number."
                required
              />
            </label>
          </div>
          <label className={labelClass}>
            Project
            <select
              className={inputClass}
              name="projectName"
              value={project}
              onChange={(event) => setProject(event.target.value)}
              required
            >
              <option value="">Select a project</option>
              {FEATURED_PROJECTS.map((item) => (
                <option key={item.name} value={item.name}>{item.name}</option>
              ))}
            </select>
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>
              Preferred date (optional)
              <input className={inputClass} name="preferredDate" type="date" min={new Date().toISOString().slice(0, 10)} />
            </label>
            <label className={labelClass}>
              Preferred time (optional)
              <select className={inputClass} name="preferredTime" defaultValue="">
                <option value="">No preference</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
            </label>
          </div>
        </>
      )}
      <label className={labelClass}>
        Anything else we should know? (optional)
        <textarea className={inputClass} name="message" rows={3} />
      </label>
      <Button type="submit" disabled={submitting} className="w-full justify-center">
        {submitting ? "Sending..." : request.kind === "site-visit" ? "Request a Site Visit" : "Send My Requirement"}
      </Button>
      <p className="text-xs leading-relaxed text-slate/65">
        We&apos;ll use your details to respond to this enquiry. See our{" "}
        <a href="/privacy-policy" className="font-medium text-navy underline underline-offset-2">Privacy Policy</a>.
      </p>
    </form>
  );
}

export function LeadFlowProvider({ children }: { children: ReactNode }) {
  const [request, setRequest] = useState<LeadRequest | null>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const requestRef = useRef<LeadRequest | null>(null);
  const openLead = useCallback((next: LeadRequest) => {
    const source = next.source ?? captureLeadSource(next.title ?? (next.kind === "site-visit" ? "site-visit" : "property-enquiry"));
    trackAnalyticsEvent(next.kind === "site-visit" ? "site_visit_open" : "enquiry_open", {
      page: source.sourcePage,
      project: next.project,
      sourceCTA: source.sourceCta,
    });
    const requestWithSource = { ...next, source };
    requestRef.current = requestWithSource;
    setRequest(requestWithSource);
  }, []);

  const closeDialog = useCallback((submitted = false) => {
    const currentRequest = requestRef.current;
    requestRef.current = null;
    if (submitted) currentRequest?.onSuccess?.();
    else currentRequest?.onClose?.();
    setRequest(null);
  }, []);
  const contextValue = useMemo(
    () => ({ openLead, isOpen: request !== null }),
    [openLead, request]
  );

  useEffect(() => {
    if (!request) return;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";

    const focusFirstField = () => {
      dialogRef.current?.querySelector<HTMLElement>("input:not([type=hidden]):not([disabled]), select, textarea")?.focus();
    };
    const animationFrame = window.requestAnimationFrame(focusFirstField);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDialog();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])"
        )
      ).filter((element) => element.offsetParent !== null);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [request, closeDialog]);

  return (
    <LeadContext.Provider value={contextValue}>
      <div id="site-content" inert={request ? true : undefined} aria-hidden={request ? true : undefined}>
        {children}
      </div>
      {request && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/75 p-3 backdrop-blur-sm sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDialog();
          }}
        >
          <section
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-dialog-title"
            className="box-border max-h-[92vh] max-h-[92svh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                  {request.kind === "site-visit" ? "Guided project visit" : "Property advisory"}
                </p>
                <h2 id="lead-dialog-title" className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl">
                  {request.title ?? (request.kind === "site-visit" ? "Schedule a site visit" : "Tell us what you’re looking for")}
                </h2>
                {request.project && (
                  <p className="mt-2 text-sm text-slate/70">Project: {request.project}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => closeDialog()}
                aria-label="Close enquiry form"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-navy hover:bg-navy/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              >
                <X size={22} />
              </button>
            </div>
            <LeadForm
              key={`${request.kind}-${request.project ?? ""}`}
              request={request}
              onSuccess={() => closeDialog(true)}
            />
          </section>
        </div>
      )}
    </LeadContext.Provider>
  );
}

export function useLeadFlow() {
  const context = useContext(LeadContext);
  if (!context) throw new Error("useLeadFlow must be used inside LeadFlowProvider.");
  return context;
}

export function LeadActionButton({
  kind = "property",
  project,
  title,
  children,
  ...buttonProps
}: {
  kind?: LeadKind;
  project?: string;
  title?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  "aria-label"?: string;
}) {
  const { openLead } = useLeadFlow();
  return (
    <Button
      {...buttonProps}
      type="button"
      onClick={(event) => {
        const source = captureLeadSource(event.currentTarget.textContent?.trim() || "lead-action");
        openLead({ kind, project, title, source });
      }}
    >
      {children}
    </Button>
  );
}
