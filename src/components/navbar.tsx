"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems, profileData } from "@/data/profile";
import { Menu, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";
import { BracketButton } from "@/components/bracket-button";
import { ScrambleText } from "@/components/scramble-text";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 left-0 w-full z-40 transition-all duration-200 ${
          scrolled
            ? "bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--line)] shadow-md"
            : "bg-[var(--nav-bg)] backdrop-blur-sm border-b border-[var(--line)]"
        }`}
      >
        <div className="max-w-[var(--frame)] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand & Status Indicator */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 group text-[var(--fg)] font-[var(--font-heading)] font-black text-lg tracking-tight uppercase"
            >
              <div className="w-7 h-7 rounded-[2px] bg-[var(--surface-raised)] border border-[var(--line)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors duration-150">
                <span className="text-[var(--accent)] text-xs font-mono font-bold">&gt;_</span>
              </div>
              <span>
                ARYA<span className="text-[var(--accent)]">.DEV</span>
              </span>
            </Link>

            {/* Live Status Indicator (Exact Blackbox.ai style) */}
            <div className="hidden sm:inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-[var(--font-functional)] text-[11px] font-semibold tracking-wider text-emerald-500 uppercase">
                {profileData.status.label}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links with Live Scramble Effect */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-[var(--font-functional)] text-xs font-semibold tracking-wide text-[var(--muted)] hover:text-[var(--fg)] transition-colors duration-150 py-1 group"
              >
                <ScrambleText text={item.label} />
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Segmented Theme Switcher (Light / Dark / System) */}
            <ThemeToggle />

            {/* GitHub Icon Link */}
            <a
              href="https://github.com/mhmdaryaqadi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xs border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--color-rail-mark)] flex items-center justify-center transition-all duration-150"
            >
              <GithubIcon size={15} />
            </a>

            {/* Blackbox Signature Bracket CTA Button */}
            <div className="hidden sm:block">
              <BracketButton
                href="#contact"
                variant="primary"
                size="sm"
                icon={<ArrowUpRight size={13} className="stroke-[2.5]" />}
              >
                CONTACT ME
              </BracketButton>
            </div>

            {/* Mobile Menu Toggle Button (Blackbox Tech Style with Corner Brackets) */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden relative group p-2 rounded-xs border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] flex items-center justify-center transition-colors cursor-pointer"
            >
              {/* Mini Corner Brackets */}
              <span className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-[var(--accent)] opacity-60 group-hover:opacity-100" />
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t border-r border-[var(--accent)] opacity-60 group-hover:opacity-100" />
              <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b border-l border-[var(--accent)] opacity-60 group-hover:opacity-100" />
              <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-[var(--accent)] opacity-60 group-hover:opacity-100" />

              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Blackbox Tech Overlay for Mobile */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
