"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function GlowButton({
  href,
  children,
  variant = "primary",
  className,
}: GlowButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-[0.98]",
    outline:
      "border border-[var(--color-silver)]/30 text-[var(--color-offwhite)] hover:border-[var(--color-accent)] hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] active:scale-[0.98]",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
