"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page rendering error:", error);
  }, [error]);

  return (
    <section className="section-pad flex min-h-[60vh] items-center justify-center text-center">
      <div className="max-w-xl">
        <h1 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
          This page is temporarily unavailable
        </h1>
        <p className="mt-4 text-slate/70">
          Please try again, or return to the Kairos Home Realty homepage.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="min-h-12 rounded-full bg-navy px-6 py-3 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-navy/20 px-6 py-3 font-semibold text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Go to home
          </Link>
        </div>
      </div>
    </section>
  );
}
