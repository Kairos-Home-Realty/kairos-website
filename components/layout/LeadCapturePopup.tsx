"use client";

import { useEffect, useRef } from "react";
import { useLeadFlow } from "@/components/leads/LeadFlow";

type PopupReason = "visit" | "exit";

// Tuned to be less aggressive:
// - The first popup waits for real engagement: 45s dwell OR 50% page scroll.
// - Once shown (or once submitted) the popup never auto-opens again on any
//   future visit, persisted via localStorage.
// - Exit-intent offers one last-chance popup per visit, only after the visitor
//   has actually engaged — never on a quick bounce.
// The dialog itself is rendered by <LeadFlowProvider>; this component only
// decides when to open it.
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
  const { openLead, isOpen } = useLeadFlow();

  // Latest-value ref so event listeners never act on a stale dialog state.
  const isLeadDialogOpenRef = useRef(isOpen);
  useEffect(() => {
    isLeadDialogOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    if (hasPopupBeenShownBefore()) return;

    let visitPopupShown = false;
    let visitPopupDismissed = false;
    let visitPopupSubmitted = false;
    let exitPopupOffered = false;

    const openPopup = (reason: PopupReason) => {
      // Never hijack a dialog the visitor opened themselves (CTA buttons, etc.)
      if (isLeadDialogOpenRef.current) return;
      visitPopupShown = true;
      markPopupShown();
      openLead({
        kind: "property",
        title:
          reason === "exit"
            ? "Before you go…"
            : "How can we help you find your home?",
        onClose: () => {
          visitPopupDismissed = true;
        },
        onSuccess: () => {
          visitPopupSubmitted = true;
          markPopupSubmitted();
        },
      });
    };

    const hasEngaged = () =>
      window.scrollY > 300 || performance.now() > TIME_ON_PAGE_TRIGGER_MS;

    const onScroll = () => {
      if (visitPopupShown) return;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable >= SCROLL_DEPTH_TRIGGER_RATIO) {
        openPopup("visit");
      }
    };

    const onMouseOut = (event: MouseEvent) => {
      if (event.clientY > 0 || event.relatedTarget !== null) return;
      if (exitPopupOffered || visitPopupSubmitted) return;
      // Only a last chance after the main popup was shown and dismissed —
      // and never while the dialog is still open.
      if (!visitPopupDismissed) return;
      // Exit-intent only counts as a genuine "about to leave" moment if the
      // visitor engaged first; otherwise stay silent and let them go.
      if (!hasEngaged()) return;
      exitPopupOffered = true;
      openPopup("exit");
    };

    const timer = window.setTimeout(() => {
      if (!visitPopupShown) openPopup("visit");
    }, TIME_ON_PAGE_TRIGGER_MS);

    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
    };
  }, [openLead]);

  return null;
}
