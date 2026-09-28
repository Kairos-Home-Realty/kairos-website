"use client";

import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { submitLead } from "@/components/leads/LeadFlow";
import { Button } from "@/components/ui/Button";

const budgets = [
  "Under ₹50 Lakhs",
  "₹50 Lakhs – ₹1 Crore",
  "₹1 – 2 Crore",
  "₹2 – 5 Crore",
  "Above ₹5 Crore",
  "Not sure yet",
];
const fieldClass =
  "mt-1.5 block w-full rounded-lg border border-navy/15 bg-white px-3.5 py-3 text-sm text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold";
const labelClass = "block text-sm font-medium text-navy";

export function HomeLoanLeadForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setSubmitting(true);
    const formData = new FormData(form);
    const values = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [key, String(value).trim()])
    );
    try {
      await submitLead({ ...values, leadType: "home-loan" });
      setSubmitted(true);
      form.reset();
      toast.success("Thank you. A Kairos advisor will be in touch.");
    } catch (error) {
      console.error("Home-loan enquiry error:", error);
      toast.error(error instanceof Error ? error.message : "Unable to send your enquiry.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="advisor-enquiry" className="scroll-mt-28 rounded-2xl border border-navy/10 bg-offwhite p-5 shadow-card sm:p-8">
      {submitted ? (
        <div role="status" className="rounded-xl bg-white p-6 text-center">
          <h3 className="font-display text-xl font-semibold text-navy">Thanks for getting in touch</h3>
          <p className="mt-2 text-sm text-slate/70">Your loan enquiry has been sent to the Kairos team.</p>
          <button
            type="button"
            className="mt-4 text-sm font-semibold text-navy underline underline-offset-4"
            onClick={() => setSubmitted(false)}
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">Home-loan guidance</span>
          <h2 className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl">Talk to a loan advisor</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate/70">
            Share a few details and we&apos;ll help you understand lender options. Eligibility, rates and approvals are determined by each lender.
          </p>
          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <input type="hidden" name="leadType" value="home-loan" />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={labelClass}>
                Full name
                <input className={fieldClass} name="fullName" autoComplete="name" required minLength={2} />
              </label>
              <label className={labelClass}>
                Indian mobile / WhatsApp number
                <input
                  className={fieldClass}
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
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={labelClass}>
                Property budget
                <select className={fieldClass} name="budget" defaultValue="" required>
                  <option value="">Select a budget</option>
                  {budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
                </select>
              </label>
              <label className={labelClass}>
                Monthly household income (₹)
                <input className={fieldClass} name="income" type="number" min="1" step="1" inputMode="numeric" required />
              </label>
            </div>
            <label className={labelClass}>
              Approximate monthly EMI (optional, ₹)
              <input className={fieldClass} name="emi" type="number" min="0" step="1" inputMode="numeric" />
            </label>
            <label className={labelClass}>
              Message (optional)
              <textarea className={fieldClass} name="message" rows={3} />
            </label>
            <Button type="submit" disabled={submitting} className="w-full justify-center">
              {submitting ? "Sending..." : "Request Loan Guidance"} <Send size={16} />
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
