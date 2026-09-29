"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

export function TrackedContactLink({
  project,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  project?: string;
  children: ReactNode;
}) {
  return (
    <a
      {...props}
      data-project={project}
    >
      {children}
    </a>
  );
}
