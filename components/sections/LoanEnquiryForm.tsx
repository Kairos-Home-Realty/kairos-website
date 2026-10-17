"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";

type EnquiryMode = "new-home-loan" | "balance-transfer";

export function LoanEnquiryForm({ initialMode = "new-home-loan" }: { initialMode?: EnquiryMode }) {
  const [mode, setMode] = useState<EnquiryMode>(initialMode);
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    if (values.website) return;
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, quick: false, requirement: mode }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your enquiry");
      toast.success("Thanks — a Kairos loan advisor will call you within 24 hours.");
      form.reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <div className="flex rounded-full bg-navy/5 p-1" role="tablist" aria-label="Loan enquiry type">
        {(["new-home-loan", "balance-transfer"] as EnquiryMode[]).map((option) => (
          <button key={option} type="button" role="tab" aria-selected={mode === option} onClick={() => setMode(option)} className={`flex-1 rounded-full px-3 py-2 text-xs font-semibold transition ${mode === option ? "bg-navy text-white shadow-sm" : "text-navy/60"}`}>
            {option === "new-home-loan" ? "New home loan" : "Balance transfer"}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Full name" name="fullName" required autoComplete="name" />
        <Input label="Phone number" name="phone" type="tel" required autoComplete="tel" />
      </div>
      <Input label="Email address" name="email" type="email" required autoComplete="email" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label={mode === "balance-transfer" ? "Outstanding balance" : "Loan amount"} name="loanAmount" inputMode="numeric" placeholder="₹ 50,00,000" />
        <Input label="Preferred city / area" name="location" placeholder="e.g. West Hyderabad" />
      </div>
      {mode === "balance-transfer" && <Input label="Current lender" name="currentLender" placeholder="Your existing bank or HFC" />}
      <textarea name="message" rows={3} placeholder="Anything we should know? (optional)" className="input-field resize-none" />
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <Button type="submit" disabled={submitting} className="w-full justify-center">
        {submitting ? "Sending securely…" : "Speak to a loan advisor"} <Send size={16} />
      </Button>
      <p className="text-center text-[11px] leading-relaxed text-slate/55">Your details are used only to respond to this enquiry. No lender approval or rate is guaranteed; final terms are set by the lender after eligibility and document checks.</p>
      <style jsx global>{`.input-field { width:100%; border-radius:.75rem; border:1px solid rgba(7,27,59,.12); padding:.8rem 1rem; font-size:.875rem; color:#071b3b; background:#fff; } .input-field:focus { outline:none; border-color:#d6a84f; box-shadow:0 0 0 3px rgba(214,168,79,.2); }`}</style>
    </form>
  );
}

function Input({ label, name, ...props }: { label: string; name: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return <label className="block text-sm font-medium text-navy/70">{label}<input {...props} name={name} className="input-field mt-1.5" /></label>;
}
