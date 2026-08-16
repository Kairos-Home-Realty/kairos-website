"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled ? "glass shadow-soft py-3" : "bg-transparent py-6"
      )}
    >
      <nav className="container-xl flex items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg shadow-gold">
            <Image src="/logo-icon.png" alt="Kairos Home Realty" fill className="object-cover" priority />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide text-white">
              KAIROS
            </span>
            <span className="text-[10px] tracking-[0.3em] text-gold">
              HOME REALTY
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium text-white/80 transition-colors hover:text-white",
                pathname === link.href && "text-gold hover:text-gold"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-gold"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Button href="/contact" size="sm">
            Book Free Consultation
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium text-white/85 hover:bg-white/10",
                    pathname === link.href && "text-gold"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3">
                <Button href="/contact" className="w-full">
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
