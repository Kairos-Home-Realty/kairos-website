"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface BaseProps {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

interface ButtonProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> {
  href?: undefined;
}

interface LinkButtonProps extends BaseProps {
  href: string;
}

const variantClasses = {
  primary:
    "bg-gold text-navy hover:bg-gold-dark shadow-gold hover:shadow-lg hover:-translate-y-0.5",
  secondary:
    "bg-navy text-white hover:bg-navy-light hover:-translate-y-0.5",
  outline:
    "border border-white/40 text-white hover:bg-white/10 hover:border-white",
  ghost: "text-navy hover:bg-navy/5",
};

const sizeClasses = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm md:text-base",
  lg: "px-9 py-4 text-base md:text-lg",
};

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 ease-out overflow-hidden group";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps | LinkButtonProps) {
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <span className="absolute inset-0 scale-0 rounded-full bg-white/20 transition-transform duration-500 group-hover:scale-150 group-active:scale-200 opacity-0 group-active:opacity-100" />
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 scale-0 rounded-full bg-white/20 transition-transform duration-500 group-hover:scale-150 group-active:scale-200 opacity-0 group-active:opacity-100" />
    </button>
  );
}
