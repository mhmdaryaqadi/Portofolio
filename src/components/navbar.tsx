"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navItems, profileData } from "@/data/profile";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

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
    <header
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[rgba(8,8,8,0.92)] backdrop-blur-md border-b border-[var(--line)] shadow-lg shadow-black/40"
          : "bg-[rgba(8,8,8,0.7)] backdrop-blur-sm border-b border-[var(--line)]"
      }`}
    >
      <div className="max-w-[var(--frame)] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand & Status Indicator */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 group text-white font-[var(--font-heading)] font-black text-lg tracking-tight uppercase"
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
            <span className="font-[var(--font-functional)] text-[11px] font-semibold tracking-wider text-emerald-400 uppercase">
              {profileData.status.label}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-[var(--font-functional)] text-xs font-medium tracking-wide text-[var(--muted)] hover:text-white transition-colors duration-150 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          {/* GitHub Icon Link */}
          <a
            href="https://github.com/mhmdaryaqadi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 rounded-xs border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:text-white hover:border-[var(--color-rail-mark)] flex items-center justify-center transition-all duration-150"
          >
            <GithubIcon size={16} />
          </a>

          {/* High-Contrast Solid White Button (Exact Blackbox.ai style) */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-white text-black font-[var(--font-heading)] text-xs font-black uppercase tracking-wider rounded-xs hover:bg-neutral-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          >
            <span>CONTACT ME</span>
            <ArrowUpRight size={14} className="stroke-[2.5]" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="lg:hidden w-9 h-9 rounded-xs border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:text-white flex items-center justify-center transition-colors duration-150"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-[var(--line)] bg-[rgba(10,10,10,0.98)] backdrop-blur-xl px-4 py-6 space-y-4 animate-in fade-in duration-150">
          <div className="flex items-center gap-2 px-3 py-1.5 mb-2 w-fit rounded-full bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.25)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-[var(--font-functional)] text-[11px] font-semibold tracking-wider text-emerald-400 uppercase">
              {profileData.status.label}
            </span>
          </div>

          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-[var(--font-functional)] text-sm font-semibold tracking-wide text-[var(--muted)] hover:text-[var(--accent)] transition-colors px-3 py-1.5 rounded-xs hover:bg-[var(--surface)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[var(--line)]">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-black font-[var(--font-heading)] text-xs font-black uppercase tracking-wider rounded-xs hover:bg-neutral-200 transition-colors"
            >
              <span>CONTACT ME</span>
              <ArrowUpRight size={14} className="stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
