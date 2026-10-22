"use client";

import React from "react";
import { ScrambleText } from "@/components/scramble-text";

interface BracketButtonProps {
  children?: React.ReactNode;
  label?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
  scramble?: boolean;
}

export function BracketButton({
  children,
  label,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  scramble = true,
}: BracketButtonProps) {
  const content = label || (typeof children === "string" ? children : null);

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs tracking-wider",
    md: "px-5 py-2.5 text-xs sm:text-sm tracking-wider",
    lg: "px-6 py-3.5 text-sm sm:text-base tracking-widest",
  }[size];

  const variantClasses = {
    primary:
      "bg-[var(--fg)] text-[var(--bg)] font-[var(--font-heading)] font-black uppercase shadow-xs hover:opacity-95",
    secondary:
      "bg-[var(--surface)] text-[var(--fg)] border border-[var(--line)] font-[var(--font-heading)] font-bold uppercase hover:bg-[var(--surface-raised)] hover:border-[var(--accent)]",
    outline:
      "bg-transparent text-[var(--fg)] border border-[var(--line)] font-[var(--font-heading)] font-bold uppercase hover:border-[var(--accent)] hover:bg-[rgba(255,105,1,0.06)]",
    ghost:
      "bg-transparent text-[var(--muted)] font-[var(--font-functional)] font-semibold uppercase hover:text-[var(--fg)]",
  }[variant];

  const innerContent = (
    <>
      {/* 4 Corner Siku Brackets (Exact Blackbox.ai Signature Bracket Button) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[var(--accent)] transition-all duration-200 group-hover:-top-1.5 group-hover:-left-1.5 group-hover:scale-110 opacity-70 group-hover:opacity-100"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[var(--accent)] transition-all duration-200 group-hover:-top-1.5 group-hover:-right-1.5 group-hover:scale-110 opacity-70 group-hover:opacity-100"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[var(--accent)] transition-all duration-200 group-hover:-bottom-1.5 group-hover:-left-1.5 group-hover:scale-110 opacity-70 group-hover:opacity-100"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[var(--accent)] transition-all duration-200 group-hover:-bottom-1.5 group-hover:-right-1.5 group-hover:scale-110 opacity-70 group-hover:opacity-100"
      />

      <span className="flex items-center justify-center gap-2 relative z-10">
        {content && scramble ? (
          <ScrambleText text={content} />
        ) : (
          children || content
        )}
        {icon}
      </span>
    </>
  );

  const baseClasses = `relative group inline-flex items-center justify-center rounded-xs transition-all duration-150 cursor-pointer select-none active:scale-[0.98] ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={baseClasses}>
        {innerContent}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {innerContent}
    </button>
  );
}
