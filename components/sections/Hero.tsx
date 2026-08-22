"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/constants/site";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden pt-28 pb-10 md:h-screen md:min-h-[780px] md:py-0">
      <motion.div style={{ y }} className="absolute inset-0 bg-skyline">
        {/* Skyline silhouette illustration, built purely with CSS/SVG shapes */}
        <svg
          className="absolute bottom-0 h-2/3 w-full opacity-70"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <rect x="40" y="120" width="90" height="280" fill="#0a1f42" />
          <rect x="150" y="60" width="70" height="340" fill="#0d254c" />
          <rect x="240" y="160" width="110" height="240" fill="#0a1f42" />
          <rect x="370" y="40" width="60" height="360" fill="#122b56" />
          <rect x="450" y="100" width="95" height="300" fill="#0d254c" />
          <rect x="560" y="20" width="75" height="380" fill="#152f5c" />
          <rect x="655" y="140" width="100" height="260" fill="#0a1f42" />
          <rect x="770" y="70" width="65" height="330" fill="#0d254c" />
          <rect x="850" y="180" width="120" height="220" fill="#122b56" />
          <rect x="990" y="50" width="80" height="350" fill="#152f5c" />
          <rect x="1090" y="130" width="90" height="270" fill="#0a1f42" />
        </svg>
      </motion.div>
      <div className="absolute inset-0 bg-hero-gradient" />

      <motion.div style={{ opacity }} className="relative z-10 flex md:h-full items-center">
        <div className="container-xl w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-2 text-xs tracking-widest text-gold backdrop-blur-sm"
              >
                <Building2 size={14} /> PROPERTY &amp; FINANCIAL ADVISORY
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl font-semibold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Find the Right Property.
                <br />
                <span className="text-gradient-gold">Finance It Right.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
              >
                Helping you discover your dream property while securing the
                best home loan through trusted builder and banking
                partnerships.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-9 flex flex-wrap gap-4"
              >
                <Button href="/contact" size="lg">
                  Book Free Consultation <ArrowRight size={18} />
                </Button>
                <Button href="/projects" variant="outline" size="lg">
                  Explore Projects
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden animate-float rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md lg:block"
            >
              <p className="mb-4 text-xs uppercase tracking-widest text-gold">
                We are the bridge between
              </p>
              <div className="space-y-2.5">
                {["Customers", "Builders", "Banks"].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-white/10 px-4 py-3 text-sm font-medium text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 grid grid-cols-2 gap-5 border-t border-white/15 pt-6 pb-4 sm:mt-16 sm:gap-6 sm:pt-8 sm:pb-0 md:grid-cols-4"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-semibold text-gold md:text-4xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-1 text-xs text-white/60 md:text-sm">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-4 flex justify-center text-white/50 md:hidden"
          >
            <ArrowDown size={20} />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-white/50 md:block"
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}