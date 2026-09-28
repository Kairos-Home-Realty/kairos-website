import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-pad flex min-h-[60vh] items-center justify-center text-center">
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-navy sm:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 text-slate/70">
          The page may have moved, or the project details are no longer available at this address.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <ArrowLeft size={17} aria-hidden="true" /> Back to home
        </Link>
      </div>
    </section>
  );
}
