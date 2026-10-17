import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return <main className="section-pad flex min-h-[70vh] items-center justify-center bg-offwhite pt-40 text-center"><div className="max-w-xl"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">404 · Page not found</p><h1 className="mt-4 text-4xl font-semibold text-navy md:text-5xl">Let&apos;s get you back to the right home.</h1><p className="mt-5 text-sm leading-relaxed text-slate/70">The page may have moved or the project is no longer available at this address.</p><Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white hover:bg-navy-light">Back to homepage <ArrowRight size={17} /></Link></div></main>;
}
