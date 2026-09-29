"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";

type PopupReason = "visit" | "exit";

// Tuned to be less aggressive:
// - The first popup waits for real engagement: 45s dwell OR 50% page scroll.
// - Dismissal/submission persist across visits via localStorage, so returning
//   visitors are never nagged again.
// - Exit-intent offers one last-chance popup per visit, only after the
//   visitor has actually engaged — never on a quick bounce.
const POPUP_STORAGE_KEYS = {
  shown: "kairos-lead-popup-shown",
  submitted: "kairos-lead-popup-submitted",
} as const;

const TIME_ON_PAGE_TRIGGER_MS = 45_000;
const SCROLL_DEPTH_TRIGGER_RATIO = 0.5;

function hasPopupBeenShownBefore(): boolean {
  try {
    return Boolean(
      localStorage.getItem(POPUP_STORAGE_KEYS.shown) ||
        localStorage.getItem(POPUP_STORAGE_KEYS.submitted)
    );
  } catch {
    return false;
  }
}

function markPopupShown(): void {
  try {
    localStorage.setItem(POPUP_STORAGE_KEYS.shown, "true");
  } catch {
    // Storage unavailable (private mode, etc.) — popup just behaves per-visit
  }
}

function markPopupSubmitted(): void {
  try {
    localStorage.setItem(POPUP_STORAGE_KEYS.submitted, "true");
  } catch {
    // Storage unavailable (private mode, etc.)
  }
}

export function LeadCapturePopup() {
  const [reason, setReason] = useState<PopupReason | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (hasPopupBeenShownBefore()) return;

    let exitAlreadyOffered = false;

    const hasEngaged = () =>
      window.scrollY > 300 || performance.now() > TIME_ON_PAGE_TRIGGER_MS;

    const openPopup = (nextReason: PopupReason) => {
      setReason((current) => {
        if (current) return current;
        markPopupShown();
        return nextReason;
      });
    };

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable >= SCROLL_DEPTH_TRIGGER_RATIO) {
        openPopup("visit");
      }
    };

    const onMouseOut = (event: MouseEvent) => {
      if (event.clientY > 0 || event.relatedTarget !== null) return;
      if (exitAlreadyOffered) return;
      // Exit-intent only counts as a genuine "about to leave" moment if the
      // visitor engaged first; otherwise stay silent and let them go.
      if (!hasEngaged()) return;
      exitAlreadyOffered = true;
      openPopup("exit");
    };

    const timer = window.setTimeout(
      () => openPopup("visit"),
      TIME_ON_PAGE_TRIGGER_MS
    );

    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!reason) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
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

  const closePopup = () => setReason(null);

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
            markPopupSubmitted();
            setReason(null);
          }}
        />
      </section>
    </div>
  );
}
