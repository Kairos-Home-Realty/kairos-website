"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { FAQS } from "@/constants/site";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad bg-offwhite">
      <div className="container-xl px-0">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            FAQs
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
            Answers to common questions
          </h2>
        </FadeIn>

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {FAQS.map((faq, i) => (
            <FadeIn key={faq.question} delay={i * 0.03}>
              <div className="overflow-hidden rounded-xl2 border border-navy/10 bg-white shadow-card">
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-navy">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "shrink-0 text-gold transition-transform duration-300",
                      open === i && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-slate/70">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
