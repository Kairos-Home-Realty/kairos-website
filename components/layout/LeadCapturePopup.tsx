"use client";

import { useEffect, useState } from "react";
import { useLeadFlow } from "@/components/leads/LeadFlow";

type PopupReason = "visit" | "exit";

export function LeadCapturePopup() {
  const { openLead, isOpen } = useLeadFlow();
  const [dismissed, setDismissed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const visitKey = "kairos-lead-popup-visit-shown";
    const submittedKey = "kairos-lead-popup-submitted";
    if (sessionStorage.getItem(visitKey) || sessionStorage.getItem(submittedKey)) return;

    const timer = window.setTimeout(() => {
      if (isOpen) return;
      sessionStorage.setItem(visitKey, "true");
      openPopup("visit");
    }, 2500);
    return () => window.clearTimeout(timer);

    function openPopup(reason: PopupReason) {
      openLead({
        kind: "property",
        title: reason === "exit" ? "Before you go…" : "How can we help you find your home?",
        onClose: () => setDismissed(true),
        onSuccess: () => {
          setSubmitted(true);
          sessionStorage.setItem("kairos-lead-popup-submitted", "true");
        },
      });
    }
  }, [isOpen, openLead]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let hasScrolledDown = false;
    const openExitPopup = () => {
      const visitShown = sessionStorage.getItem("kairos-lead-popup-visit-shown");
      const exitShown = sessionStorage.getItem("kairos-lead-popup-exit-shown");
      const hasSubmitted = sessionStorage.getItem("kairos-lead-popup-submitted");
      if (visitShown && dismissed && !submitted && !hasSubmitted && !exitShown && !isOpen) {
        sessionStorage.setItem("kairos-lead-popup-exit-shown", "true");
        openLead({
          kind: "property",
          title: "Before you go…",
          onClose: () => setDismissed(true),
          onSuccess: () => {
            setSubmitted(true);
            sessionStorage.setItem("kairos-lead-popup-submitted", "true");
          },
        });
      }
    };

    const onMouseOut = (event: MouseEvent) => {
      if (event.clientY <= 0 && event.relatedTarget === null) openExitPopup();
    };
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 300) hasScrolledDown = true;
      if (hasScrolledDown && currentScrollY < lastScrollY && currentScrollY < 100) openExitPopup();
      lastScrollY = currentScrollY;
    };

    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("scroll", onScroll);
    };
  }, [dismissed, submitted, isOpen, openLead]);

  return null;
}
