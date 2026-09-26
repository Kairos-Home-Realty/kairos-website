"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";

type PopupReason = "visit" | "exit";

export function LeadCapturePopup() {
  const [reason, setReason] = useState<PopupReason | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const visitKey = "kairos-lead-popup-visit-shown";
    const submittedKey = "kairos-lead-popup-submitted";
    if (sessionStorage.getItem(visitKey) || sessionStorage.getItem(submittedKey)) return;

    const timer = window.setTimeout(() => {
      sessionStorage.setItem(visitKey, "true");
      setReason("visit");
    }, 8000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let hasScrolledDown = false;
    const openExitPopup = () => {
      const visitShown = sessionStorage.getItem("kairos-lead-popup-visit-shown");
      const exitShown = sessionStorage.getItem("kairos-lead-popup-exit-shown");
      const hasSubmitted = sessionStorage.getItem("kairos-lead-popup-submitted");
      if (visitShown && dismissed && !submitted && !hasSubmitted && !exitShown) {
        sessionStorage.setItem("kairos-lead-popup-exit-shown", "true");
        setReason("exit");
      }
    };

    const onMouseOut = (event: MouseEvent) => {
      if (event.clientY <= 0 && event.relatedTarget === null) {
        openExitPopup();
      }
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 300) hasScrolledDown = true;
      if (hasScrolledDown && currentScrollY < lastScrollY && currentScrollY < 100) {
        openExitPopup();
      }
      lastScrollY = currentScrollY;
    };

    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
    };
  }, [dismissed, submitted]);

  useEffect(() => {
    if (!reason) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDismissed(true);
        setReason(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [reason]);

  if (!reason) return null;

  const closePopup = () => {
    setDismissed(true);
    setReason(null);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePopup();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-popup-title"
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
      >
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-navy/60 transition-colors hover:bg-navy/5 hover:text-navy"
        >
          <X size={20} />
        </button>
        <p className="pr-10 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Free consultation
        </p>
        <h2 id="lead-popup-title" className="mt-2 pr-10 font-serif text-2xl font-semibold text-navy sm:text-3xl">
          {reason === "exit" ? "Before you go…" : "How can we help you find your home?"}
        </h2>
        <p className="mb-6 mt-2 text-sm leading-relaxed text-slate/70">
          Leave your name and phone number and our team will get in touch.
        </p>
        <ContactForm
          mode="quick"
          onSuccess={() => {
            setSubmitted(true);
            sessionStorage.setItem("kairos-lead-popup-submitted", "true");
            setReason(null);
          }}
        />
      </section>
    </div>
  );
}
