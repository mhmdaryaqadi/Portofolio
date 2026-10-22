"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import {
  Mail,
  Copy,
  Check,
  MessageSquare,
  ExternalLink,
  MapPin,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const githubUrl = profileData.socials.find((s) => s.name === "GitHub")?.url || "https://github.com/mhmdaryaqadi";
  const linkedinUrl = profileData.socials.find((s) => s.name === "LinkedIn")?.url || "https://linkedin.com/in/muhammad-arya-alqadi-47939a387/";
  const whatsappUrl = profileData.whatsappUrl || "https://wa.me/628987316516";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[var(--line)] relative bg-[var(--bg)] overflow-hidden">
      {/* Background Accent Glow */}
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-15 blur-[120px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,105,1,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[var(--frame)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--surface)] border border-[var(--line)] rounded-[2px] mb-6">
          <span className="w-2 h-2 bg-[var(--accent)] rounded-[1px] shadow-[0_0_8px_rgba(255,105,1,0.6)]" />
          <span className="font-[var(--font-functional)] text-xs font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
            DIRECT COMMUNICATIONS &amp; INQUIRY
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--fg)] leading-tight">
            LET&apos;S BUILD RESILIENT SYSTEMS TOGETHER.
          </h2>
          <p className="font-[var(--font-reading)] text-base sm:text-lg text-[var(--muted)] mt-4 leading-relaxed">
            Terbuka untuk diskusi teknis, kolaborasi pengembangan arsitektur perangkat lunak, freelance development, maupun kesempatan rekayasa software dan infrastruktur jaringan.
          </p>
        </div>

        {/* Contact Methods Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {/* Email 1-Click Copy Card */}
          <div className="border border-[var(--line)] bg-[var(--surface)] p-6 rounded-xs hover:border-[var(--accent)] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xs bg-[var(--surface-raised)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] mb-4">
                <Mail size={18} />
              </div>
              <div className="font-[var(--font-functional)] text-xs text-[var(--muted)] uppercase tracking-wider mb-1">
                DIRECT INBOX
              </div>
              <div className="font-[var(--font-heading)] text-sm font-bold text-[var(--fg)] mb-2 break-all">
                {profileData.email}
              </div>
              <p className="font-[var(--font-reading)] text-xs text-[var(--muted)] mb-5">
                Salin email atau kirim pesan langsung untuk korespondensi formal.
              </p>
            </div>

            <button
              onClick={handleCopyEmail}
              className={`w-full py-2.5 px-3 rounded-xs font-[var(--font-functional)] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                copied
                  ? "bg-[rgba(34,197,94,0.15)] border border-[rgba(34,197,94,0.5)] text-green-500"
                  : "bg-[var(--surface-raised)] hover:bg-[var(--accent)] text-[var(--fg)] hover:text-white border border-[var(--line)] hover:border-[var(--accent)] cursor-pointer"
              }`}
            >
              {copied ? (
                <>
                  <Check size={14} />
                  <span>EMAIL COPIED!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>COPY EMAIL ADDRESS</span>
                </>
              )}
            </button>
          </div>

          {/* WhatsApp Direct Message Card */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--line)] bg-[var(--surface)] p-6 rounded-xs hover:border-[var(--accent)] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-10 h-10 rounded-xs bg-[var(--surface-raised)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] mb-4">
                <MessageSquare size={18} />
              </div>
              <div className="font-[var(--font-functional)] text-xs text-[var(--muted)] uppercase tracking-wider mb-1">
                INSTANT MESSAGING
              </div>
              <div className="font-[var(--font-heading)] text-sm font-bold text-[var(--fg)] mb-2">
                WhatsApp Direct
              </div>
              <p className="font-[var(--font-reading)] text-xs text-[var(--muted)] mb-5">
                Kanal komunikasi cepat untuk respon singkat dan koordinasi proyek.
              </p>
            </div>

            <div className="inline-flex items-center justify-between text-xs font-[var(--font-functional)] font-bold text-[var(--accent)] group-hover:text-[var(--fg)] pt-3 border-t border-[rgba(255,255,255,0.04)]">
              <span>SEND WHATSAPP MESSAGE</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* LinkedIn Profile Card */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--line)] bg-[var(--surface)] p-6 rounded-xs hover:border-[var(--accent)] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-10 h-10 rounded-xs bg-[var(--surface-raised)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] mb-4">
                <LinkedinIcon size={18} />
              </div>
              <div className="font-[var(--font-functional)] text-xs text-[var(--muted)] uppercase tracking-wider mb-1">
                PROFESSIONAL NETWORK
              </div>
              <div className="font-[var(--font-heading)] text-sm font-bold text-[var(--fg)] mb-2">
                LinkedIn Profile
              </div>
              <p className="font-[var(--font-reading)] text-xs text-[var(--muted)] mb-5">
                Terhubung secara profesional dan pantau riwayat rekayasa terkini.
              </p>
            </div>

            <div className="inline-flex items-center justify-between text-xs font-[var(--font-functional)] font-bold text-[var(--accent)] group-hover:text-[var(--fg)] pt-3 border-t border-[rgba(255,255,255,0.04)]">
              <span>CONNECT ON LINKEDIN</span>
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* GitHub Profile Card */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--line)] bg-[var(--surface)] p-6 rounded-xs hover:border-[var(--accent)] transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-10 h-10 rounded-xs bg-[var(--surface-raised)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] mb-4">
                <GithubIcon size={18} />
              </div>
              <div className="font-[var(--font-functional)] text-xs text-[var(--muted)] uppercase tracking-wider mb-1">
                CODE ARCHIVES
              </div>
              <div className="font-[var(--font-heading)] text-sm font-bold text-[var(--fg)] mb-2">
                GitHub Repositories
              </div>
              <p className="font-[var(--font-reading)] text-xs text-[var(--muted)] mb-5">
                Eksplorasi riwayat commit, arsitektur kode sumber, dan rilis mandiri.
              </p>
            </div>

            <div className="inline-flex items-center justify-between text-xs font-[var(--font-functional)] font-bold text-[var(--accent)] group-hover:text-[var(--fg)] pt-3 border-t border-[rgba(255,255,255,0.04)]">
              <span>VIEW GITHUB PROFILE</span>
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>

        {/* Status Strip & Location */}
        <div className="border border-[var(--line)] bg-[var(--surface)] p-5 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xs bg-[var(--surface-raised)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)]">
              <Sparkles size={16} />
            </div>
            <div>
              <div className="font-[var(--font-functional)] text-xs font-bold text-[var(--fg)] uppercase tracking-wider">
                CURRENT WORK STATUS
              </div>
              <div className="font-[var(--font-reading)] text-xs text-[var(--muted)]">
                {profileData.status.label} • Siap berkontribusi secara on-site di Jabodetabek atau remote.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-[var(--font-functional)] text-[var(--muted)]">
            <MapPin size={14} className="text-[var(--accent)]" />
            <span>{profileData.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
