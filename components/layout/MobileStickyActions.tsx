"use client";

import { MessageCircle, Phone, CalendarDays } from "lucide-react";
import { SITE } from "@/constants/site";
import { trackEvent } from "@/lib/analytics";

export function MobileStickyActions() {
  const whatsapp = `https://api.whatsapp.com/send/?phone=${SITE.whatsapp}&text=${encodeURIComponent("Hi Kairos Home Realty Team, I’d like help finding the right property.")}`;
  return <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-3 gap-1 rounded-2xl border border-white/20 bg-navy/95 p-1.5 text-[11px] font-semibold text-white shadow-2xl backdrop-blur-md md:hidden">
    <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} onClick={() => trackEvent("call_click", { source: "mobile_sticky" })} className="flex min-h-11 items-center justify-center gap-1 rounded-xl px-2 py-2 hover:bg-white/10"><Phone size={15} /> Call</a>
    <a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("whatsapp_click", { source: "mobile_sticky" })} className="flex min-h-11 items-center justify-center gap-1 rounded-xl bg-[#25D366] px-2 py-2 text-navy hover:bg-[#49e985]"><MessageCircle size={15} /> WhatsApp</a>
    <a href="/contact" onClick={() => trackEvent("site_visit_open", { source: "mobile_sticky" })} className="flex min-h-11 items-center justify-center gap-1 rounded-xl bg-gold px-2 py-2 text-navy hover:bg-gold-light"><CalendarDays size={15} /> Site visit</a>
  </div>;
}
