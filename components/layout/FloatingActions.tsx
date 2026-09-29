"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { FEATURED_PROJECTS, SITE } from "@/constants/site";
import { LeadActionButton } from "@/components/leads/LeadFlow";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingActions() {
  const pathname = usePathname();
  const project = FEATURED_PROJECTS.find((item) => item.detailsPage === pathname);
  const whatsappUrl = getWhatsAppUrl(project?.name);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 lg:flex">
        {project && (
          <LeadActionButton
            project={project.name}
            aria-label={`Get current price for ${project.name}`}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy shadow-lg"
          >
            <span className="text-xs font-bold">Price</span>
          </LeadActionButton>
        )}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={project ? `Ask about ${project.name} on WhatsApp` : "Chat on WhatsApp"}
          data-project={project?.name}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
        >
          <span className="relative flex h-7 w-7 items-center justify-center">
            <MessageCircle size={26} strokeWidth={2.5} />
            <Phone size={11} strokeWidth={2.5} className="absolute" />
          </span>
        </motion.a>
        <motion.a
          href={`tel:${SITE.phone.replace(/\s/g, "")}`}
          aria-label="Call now"
          data-project={project?.name}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold shadow-lg"
        >
          <Phone size={22} />
        </motion.a>
      </div>
      <nav
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-1 border-t border-navy/10 bg-white/95 px-2 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(7,27,59,0.12)] backdrop-blur lg:hidden"
      >
        <a
          href={`tel:${SITE.phone.replace(/\s/g, "")}`}
          data-project={project?.name}
          className="flex min-h-12 min-w-0 items-center justify-center gap-1 rounded-lg bg-navy px-1 text-xs font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold sm:px-2 sm:text-sm"
        >
          <Phone size={16} aria-hidden="true" /> Call
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-project={project?.name}
          className="flex min-h-12 min-w-0 items-center justify-center gap-1 rounded-lg bg-[#128C4A] px-1 text-xs font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold sm:px-2 sm:text-sm"
        >
          <MessageCircle size={16} aria-hidden="true" /> WhatsApp
        </a>
        <LeadActionButton
          kind="site-visit"
          project={project?.name}
          className="min-h-12 rounded-lg px-2 text-xs sm:text-sm"
        >
          Site Visit
        </LeadActionButton>
      </nav>
    </>
  );
}
