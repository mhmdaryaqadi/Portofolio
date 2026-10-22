"use client";

import React from "react";
import { ArrowUp, Terminal } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-[var(--line)] bg-[var(--bg)] relative font-[var(--font-functional)]">
      <div className="max-w-[var(--frame)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[var(--line)]">
          {/* Brand Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 bg-[var(--accent)] rounded-[1px] shadow-[0_0_8px_rgba(255,105,1,0.6)]" />
              <span className="font-[var(--font-heading)] font-black text-sm tracking-wider text-[var(--fg)] uppercase">
                MUHAMMAD ARYA ALQADI
              </span>
              <span className="text-xs text-[var(--muted-soft)] font-mono">{"// PORTFOLIO"}</span>
            </div>
            <p className="text-xs text-[var(--muted)] max-w-md font-[var(--font-reading)]">
              Mahasiswa Teknik Informatika Universitas Pancasila &amp; Pengembang Perangkat Lunak. Memadukan keilmuan infrastruktur jaringan fisik dengan rekayasa sistem modern.
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--muted)]">
            <a href="#about" className="hover:text-[var(--fg)] transition-colors">TENTANG</a>
            <a href="#skills" className="hover:text-[var(--fg)] transition-colors">KEAHLIAN</a>
            <a href="#flagship" className="hover:text-[var(--accent)] transition-colors">GAMEZONE</a>
            <a href="#projects" className="hover:text-[var(--fg)] transition-colors">PROYEK</a>
            <a href="#experience" className="hover:text-[var(--fg)] transition-colors">PENGALAMAN</a>
            <a href="#contact" className="hover:text-[var(--fg)] transition-colors">KONTAK</a>
          </div>

          {/* Actions: Theme Toggle & Back to top button */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3.5 py-2 bg-[var(--surface)] hover:bg-[var(--surface-raised)] border border-[var(--line)] hover:border-[var(--accent)] text-[var(--fg)] text-xs font-semibold rounded-xs transition-colors cursor-pointer group"
            >
              <span>KEMBALI KE ATAS</span>
              <ArrowUp size={14} className="text-[var(--accent)] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Spec */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 text-[11px] text-[var(--muted-soft)]">
          <div className="flex items-center gap-2">
            <Terminal size={12} className="text-[var(--accent)]" />
            <span>&copy; 2026 Muhammad Arya Alqadi. Seluruh hak cipta dilindungi undang-undang.</span>
          </div>

          <div className="flex items-center gap-2">
            <span>SPESIFIKASI: NEXT.JS 16 • TAILWIND CSS V4 • ARCHIVO &amp; HOST GROTESK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
