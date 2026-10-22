"use client";

import React, { useState, useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrambleText } from "@/components/scramble-text";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isRendered, setIsRendered] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;
    let t3: NodeJS.Timeout;

    if (isOpen) {
      t1 = setTimeout(() => {
        setIsRendered(true);
        setAnimateIn(true);
      }, 10);
    } else {
      t2 = setTimeout(() => {
        setAnimateIn(false);
      }, 0);
      t3 = setTimeout(() => {
        setIsRendered(false);
      }, 280);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isOpen]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    onClose();

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        window.history.pushState(null, "", `#${targetId}`);
      }
    }, 280);
  };

  if (!isRendered) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className={`fixed inset-0 z-[100] w-full h-[100dvh] bg-[var(--bg)]/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto overscroll-contain transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        animateIn
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      {/* Background Decorative Radar Spin & Hazard Stripes */}
      <div
        className="pointer-events-none absolute -top-12 -right-12 w-80 h-80 opacity-20 select-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full animate-[spin_60s_linear_infinite]"
        >
          <circle cx="100" cy="100" r="95" stroke="#ff6901" strokeWidth="0.75" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="75" stroke="#ff6901" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="55" stroke="#ff6901" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="5" y1="100" x2="195" y2="100" stroke="#ff6901" strokeWidth="0.5" opacity="0.4" />
          <line x1="100" y1="5" x2="100" y2="195" stroke="#ff6901" strokeWidth="0.5" opacity="0.4" />
        </svg>
      </div>

      {/* Top Header Bar */}
      <div className="max-w-[var(--frame)] w-full mx-auto px-4 sm:px-6 h-16 flex items-center justify-between border-b border-[var(--line)] relative z-10 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-[2px] bg-[var(--surface-raised)] border border-[var(--line)] flex items-center justify-center">
            <span className="text-[var(--accent)] text-xs font-mono font-bold">&gt;_</span>
          </div>
          <span className="font-[var(--font-heading)] font-black text-lg tracking-tight uppercase text-[var(--fg)]">
            ARYA<span className="text-[var(--accent)]">.DEV</span>
          </span>
          <span className="text-[10px] font-mono text-[var(--muted)] ml-2">
            {"// MENU_OVERLAY"}
          </span>
        </div>

        {/* Close Button with Corner Brackets */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="relative group px-3.5 py-1.5 bg-[var(--surface)] border border-[var(--line)] text-[var(--fg)] rounded-xs flex items-center gap-2 text-xs font-[var(--font-functional)] font-bold tracking-wider hover:border-[var(--accent)] transition-all cursor-pointer"
        >
          {/* Corner Siku: appear on hover */}
          <span className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t-2 border-l-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t-2 border-r-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b-2 border-l-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b-2 border-r-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />

          <ScrambleText text="CLOSE" durationMs={120} />
          <X size={14} className="text-[var(--accent)]" />
        </button>
      </div>

      {/* Main 3-Column Structural Nav Content with Staggered Entrance Animation */}
      <div className="max-w-[var(--frame)] w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative z-10">
        {/* Column 1: PLATFORM & ARCHITECTURE */}
        <div
          className={`space-y-4 transition-all duration-300 ease-out ${
            animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "80ms" }}
        >
          <div className="font-[var(--font-functional)] text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.2em] pb-2 border-b border-[var(--line)] flex items-center justify-between">
            <span>PLATFORM</span>
            <span className="text-[var(--accent)] font-mono text-[10px]">01</span>
          </div>

          <div className="space-y-4 pt-2">
            <div>
              <span className="text-[10px] font-mono text-[var(--muted-soft)] uppercase tracking-wider block mb-1">
                FOUNDATION
              </span>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className="font-[var(--font-heading)] text-2xl font-black uppercase text-[var(--fg)] hover:text-[var(--accent)] transition-colors block group"
              >
                <ScrambleText text="About Developer" durationMs={140} />
              </a>
            </div>

            <div>
              <span className="text-[10px] font-mono text-[var(--muted-soft)] uppercase tracking-wider block mb-1">
                COMPETENCY
              </span>
              <a
                href="#skills"
                onClick={(e) => handleSmoothScroll(e, "skills")}
                className="font-[var(--font-heading)] text-2xl font-black uppercase text-[var(--fg)] hover:text-[var(--accent)] transition-colors block group"
              >
                <ScrambleText text="Skills Matrix" durationMs={140} />
              </a>
            </div>

            <div>
              <span className="text-[10px] font-mono text-[var(--muted-soft)] uppercase tracking-wider block mb-1">
                HYBRID DESKTOP ENGINE
              </span>
              <a
                href="#flagship"
                onClick={(e) => handleSmoothScroll(e, "flagship")}
                className="font-[var(--font-heading)] text-2xl font-black uppercase text-[var(--accent)] hover:underline transition-all block group"
              >
                <ScrambleText text="GameZone v3.1.2" durationMs={140} />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: REPOSITORIES & ENGINEERING */}
        <div
          className={`space-y-4 transition-all duration-300 ease-out ${
            animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "140ms" }}
        >
          <div className="font-[var(--font-functional)] text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.2em] pb-2 border-b border-[var(--line)] flex items-center justify-between">
            <span>ENGINEERING</span>
            <span className="text-[var(--accent)] font-mono text-[10px]">02</span>
          </div>

          <div className="space-y-4 pt-2">
            <div>
              <span className="text-[10px] font-mono text-[var(--muted-soft)] uppercase tracking-wider block mb-1">
                PRODUCTION WORK
              </span>
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "projects")}
                className="font-[var(--font-heading)] text-2xl font-black uppercase text-[var(--fg)] hover:text-[var(--accent)] transition-colors block group"
              >
                <ScrambleText text="Projects Catalog" durationMs={140} />
              </a>
            </div>

            <div>
              <span className="text-[10px] font-mono text-[var(--muted-soft)] uppercase tracking-wider block mb-1">
                EXPERIENCE ROADMAP
              </span>
              <a
                href="#experience"
                onClick={(e) => handleSmoothScroll(e, "experience")}
                className="font-[var(--font-heading)] text-2xl font-black uppercase text-[var(--fg)] hover:text-[var(--accent)] transition-colors block group"
              >
                <ScrambleText text="Career Experience" durationMs={140} />
              </a>
            </div>

            <div>
              <span className="text-[10px] font-mono text-[var(--muted-soft)] uppercase tracking-wider block mb-1">
                DIRECT INQUIRY
              </span>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className="font-[var(--font-heading)] text-2xl font-black uppercase text-[var(--fg)] hover:text-[var(--accent)] transition-colors block group"
              >
                <ScrambleText text="Contact & Dispatch" durationMs={140} />
              </a>
            </div>
          </div>
        </div>

        {/* Column 3: SYSTEM CONTROLS & CHANNELS */}
        <div
          className={`space-y-4 transition-all duration-300 ease-out ${
            animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="font-[var(--font-functional)] text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.2em] pb-2 border-b border-[var(--line)] flex items-center justify-between">
            <span>SYSTEM &amp; CONNECT</span>
            <span className="text-[var(--accent)] font-mono text-[10px]">03</span>
          </div>

          {/* Social Direct Links */}
          <div className="space-y-2.5 pt-2">
            <span className="text-[10px] font-mono text-[var(--muted-soft)] uppercase tracking-wider block mb-1">
              DIRECT CHANNELS
            </span>
            <a
              href="https://wa.me/628987316516"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 bg-[var(--surface)] border border-[var(--line)] rounded-xs hover:border-[var(--accent)] transition-colors group"
            >
              <div className="flex items-center gap-2">
                <WhatsappIcon size={14} className="text-emerald-400" />
                <span className="font-[var(--font-functional)] text-xs font-semibold text-[var(--fg)]">
                  WhatsApp Direct
                </span>
              </div>
              <ArrowUpRight size={13} className="text-[var(--muted)] group-hover:text-[var(--accent)]" />
            </a>

            <a
              href="https://linkedin.com/in/muhammad-arya-alqadi-47939a387/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 bg-[var(--surface)] border border-[var(--line)] rounded-xs hover:border-[var(--accent)] transition-colors group"
            >
              <div className="flex items-center gap-2">
                <LinkedinIcon size={14} className="text-cyan-400" />
                <span className="font-[var(--font-functional)] text-xs font-semibold text-[var(--fg)]">
                  LinkedIn Profile
                </span>
              </div>
              <ArrowUpRight size={13} className="text-[var(--muted)] group-hover:text-[var(--accent)]" />
            </a>

            <a
              href="https://github.com/mhmdaryaqadi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 bg-[var(--surface)] border border-[var(--line)] rounded-xs hover:border-[var(--accent)] transition-colors group"
            >
              <div className="flex items-center gap-2">
                <GithubIcon size={14} />
                <span className="font-[var(--font-functional)] text-xs font-semibold text-[var(--fg)]">
                  GitHub Repositories
                </span>
              </div>
              <ArrowUpRight size={13} className="text-[var(--muted)] group-hover:text-[var(--accent)]" />
            </a>
          </div>

          {/* Theme Selector */}
          <div className="pt-3">
            <span className="text-[10px] font-mono text-[var(--muted-soft)] uppercase tracking-wider block mb-2">
              THEME MODE
            </span>
            <ThemeToggle className="w-full justify-around py-1" />
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar Inside Overlay */}
      <div className="max-w-[var(--frame)] w-full mx-auto px-4 sm:px-6 py-4 border-t border-[var(--line)] flex flex-wrap items-center justify-between text-xs text-[var(--muted)] font-[var(--font-functional)] relative z-10 flex-shrink-0">
        <div>
          Muhammad Arya Alqadi © {new Date().getFullYear()}
        </div>
        <div className="font-mono text-[11px] text-[var(--accent)]">
          SYSTEM_STATUS: READY
        </div>
      </div>
    </div>
  );
}
