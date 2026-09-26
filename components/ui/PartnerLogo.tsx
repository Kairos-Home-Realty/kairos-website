"use client";

import Image from "next/image";
import { useState } from "react";

export function PartnerLogo({
  name,
  src,
  className = "",
}: {
  name: string;
  src?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <span
        aria-label={`${name} logo`}
        className={`flex h-full w-full items-center justify-center px-3 text-center font-semibold leading-tight text-navy ${className}`}
      >
        {name}
      </span>
    );
  }

  return (
    <Image
      src={src!}
      alt={`${name} logo`}
      fill
      unoptimized
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`object-contain p-2 ${className}`}
      sizes="288px"
    />
  );
}
