"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrambleText } from "@/components/scramble-text";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MegaMenuProps) {
  const [isRendered, setIsRendered] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;
    let t3: NodeJS.Timeout;

    if (isOpen) {
      t1 = setTimeout(() => {
        setIsRendered(true);
      }, 0);
      t2 = setTimeout(() => {
        setAnimateIn(true);
      }, 15);
    } else {
      t2 = setTimeout(() => {
        setAnimateIn(false);
      }, 0);
      t3 = setTimeout(() => {
        setIsRendered(false);
      }, 300);
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

  const getItemAnim = (delayMs: number) => ({
    className: `transition-all duration-350 ease-out transform ${
      animateIn
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 translate-y-5 pointer-events-none"
    }`,
    style: {
      transitionDelay: `${delayMs}ms`,
    },
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen Navigation Menu"
      className={`fixed top-16 left-0 right-0 bottom-0 z-40 bg-[var(--bg)]/98 backdrop-blur-2xl border-b border-[var(--line)] flex flex-col justify-between overflow-x-hidden overflow-y-auto overscroll-contain transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_30px_60px_rgba(0,0,0,0.25)] ${
        animateIn
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
      style={{ height: "calc(100dvh - 64px)" }}
    >
      {/* Background Decorative Radar Spin & Hazard Pattern (Safely Contained to Prevent Horizontal Overflow) */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        <div className="absolute -top-12 -right-12 w-72 h-72 sm:w-80 sm:h-80 opacity-20">
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
      </div>

      {/* Main 3-Column Structural Nav Content with Staggered Per-Text Fade-In from Bottom */}
      <div className="max-w-[var(--frame)] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative z-10 flex-1 overflow-x-hidden">
        {/* Column 1: PLATFORM & ARCHITECTURE */}
        <div className="space-y-4">
          <div
            className={`font-[var(--font-functional)] text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.2em] pb-2 border-b border-[var(--line)] flex items-center justify-between ${getItemAnim(40).className}`}
            style={getItemAnim(40).style}
          >
            <span>PLATFORM</span>
            <span className="text-[var(--accent)] font-mono text-[10px]">01</span>
          </div>

          <div className="space-y-4 pt-2">
            <div>
              <span
                className={`text-[10px] font-mono text-[var(--muted-soft)] uppercase tracking-wider block mb-1 ${getItemAnim(80).className}`}
                style={getItemAnim(80).style}
              >
                FOUNDATION
              </span>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className={`font-[var(--font-heading)] text-2xl font-black uppercase text-[var(--fg)] hover:text-[var(--accent)] transition-colors block group cursor-pointer ${getItemAnim(110).className}`}
                style={getItemAnim(110).style}
              >
                <ScrambleText text="About Developer" durationMs={140} />
              </a>
            </div>

            <div>
              <span
                className={`text-[10px] font-mono text-[var(--muted-soft)] uppercase tracking-wider block mb-1 ${getItemAnim(140).className}`}
                style={getItemAnim(140).style}
              >
                COMPETENCY
              </span>
              <a
                href="#skills"
                onClick={(e) => handleSmoothScroll(e, "skills")}
                className={`font-[var(--font-heading)] text-2xl font-black uppercase text-[var(--fg)] hover:text-[var(--accent)] transition-colors block group cursor-pointer ${getItemAnim(170).className}`}
                style={getItemAnim(170).style}
              >
                <ScrambleText text="Skills Matrix" durationMs={140} />
              </a>
            </div>

            <div>
              <span
                className={`text-[10px] font-mono text-[var(--muted-soft)] uppercase tracking-wider block mb-1 ${getItemAnim(200).className}`}
                style={getItemAnim(200).style}
              >
                HYBRID DESKTOP ENGINE
              </span>
              <a
                href="#flagship"
                onClick={(e) => handleSmoothScroll(e, "flagship")}
                className={`font-[var(--font-heading)] text-2xl font-black uppercase text-[var(--fg)] hover:text-[var(--accent)] transition-colors block group cursor-pointer ${getItemAnim(230).className}`}
                style={getItemAnim(230).style}
              >
                <ScrambleText text="GameZone v3.1.2" durationMs={140} />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: REPOSITORIES & ENGINEERING */}
        <div className="space-y-4">
          <div
            className={`font-[var(--font-functional)] text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.2em] pb-2 border-b border-[var(--line)] flex items-center justify-between ${getItemAnim(270).className}`}
            style={getItemAnim(270).style}
          >
            <span>ENGINEERING</span>
            <span className="text-[var(--accent)] font-mono text-[10px]">02</span>
          </div>

          <div className="space-y-4 pt-2">
            <div>
              <span
                className={`text-[10px] font-mono text-[var(--muted-soft)] uppercase tracking-wider block mb-1 ${getItemAnim(300).className}`}
                style={getItemAnim(300).style}
              >
                PRODUCTION WORK
              </span>
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "projects")}
                className={`font-[var(--font-heading)] text-2xl font-black uppercase text-[var(--fg)] hover:text-[var(--accent)] transition-colors block group cursor-pointer ${getItemAnim(330).className}`}
                style={getItemAnim(330).style}
              >
                <ScrambleText text="Projects Catalog" durationMs={140} />
              </a>
            </div>

            <div>
              <span
                className={`text-[10px] font-mono text-[var(--muted-soft)] uppercase tracking-wider block mb-1 ${getItemAnim(360).className}`}
                style={getItemAnim(360).style}
              >
                EXPERIENCE ROADMAP
              </span>
              <a
                href="#experience"
                onClick={(e) => handleSmoothScroll(e, "experience")}
                className={`font-[var(--font-heading)] text-2xl font-black uppercase text-[var(--fg)] hover:text-[var(--accent)] transition-colors block group cursor-pointer ${getItemAnim(390).className}`}
                style={getItemAnim(390).style}
              >
                <ScrambleText text="Career Experience" durationMs={140} />
              </a>
            </div>

            <div>
              <span
                className={`text-[10px] font-mono text-[var(--muted-soft)] uppercase tracking-wider block mb-1 ${getItemAnim(420).className}`}
                style={getItemAnim(420).style}
              >
                DIRECT INQUIRY
              </span>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className={`font-[var(--font-heading)] text-2xl font-black uppercase text-[var(--fg)] hover:text-[var(--accent)] transition-colors block group cursor-pointer ${getItemAnim(450).className}`}
                style={getItemAnim(450).style}
              >
                <ScrambleText text="Contact & Dispatch" durationMs={140} />
              </a>
            </div>
          </div>
        </div>

        {/* Column 3: SYSTEM CONTROLS & CHANNELS */}
        <div className="space-y-4">
          <div
            className={`font-[var(--font-functional)] text-[11px] font-bold text-[var(--muted)] uppercase tracking-[0.2em] pb-2 border-b border-[var(--line)] flex items-center justify-between ${getItemAnim(490).className}`}
            style={getItemAnim(490).style}
          >
            <span>SYSTEM &amp; CONNECT</span>
            <span className="text-[var(--accent)] font-mono text-[10px]">03</span>
          </div>

          {/* Social Direct Links */}
          <div className="space-y-2.5 pt-2">
            <span
              className={`text-[10px] font-mono text-[var(--muted-soft)] uppercase tracking-wider block mb-1 ${getItemAnim(520).className}`}
              style={getItemAnim(520).style}
            >
              DIRECT CHANNELS
            </span>
            <a
              href="https://wa.me/628987316516"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between p-2.5 bg-[var(--surface)] border border-[var(--line)] rounded-xs hover:border-[var(--accent)] transition-colors group cursor-pointer ${getItemAnim(550).className}`}
              style={getItemAnim(550).style}
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
              className={`flex items-center justify-between p-2.5 bg-[var(--surface)] border border-[var(--line)] rounded-xs hover:border-[var(--accent)] transition-colors group cursor-pointer ${getItemAnim(580).className}`}
              style={getItemAnim(580).style}
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
              className={`flex items-center justify-between p-2.5 bg-[var(--surface)] border border-[var(--line)] rounded-xs hover:border-[var(--accent)] transition-colors group cursor-pointer ${getItemAnim(610).className}`}
              style={getItemAnim(610).style}
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
            <span
              className={`text-[10px] font-mono text-[var(--muted-soft)] uppercase tracking-wider block mb-2 ${getItemAnim(640).className}`}
              style={getItemAnim(640).style}
            >
              THEME MODE
            </span>
            <div className={getItemAnim(670).className} style={getItemAnim(670).style}>
              <ThemeToggle className="w-full justify-around py-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar Inside Dropdown */}
      <div className="max-w-[var(--frame)] w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--muted)] font-[var(--font-functional)] relative z-10 flex-shrink-0 overflow-x-hidden">
        <div className={getItemAnim(710).className} style={getItemAnim(710).style}>
          Muhammad Arya Alqadi © {new Date().getFullYear()}
        </div>
        <div className={`font-mono text-[11px] text-[var(--accent)] ${getItemAnim(740).className}`} style={getItemAnim(740).style}>
          SYSTEM_STATUS: ACTIVE // IPC_CONNECTED
        </div>
      </div>
    </div>
  );
}
