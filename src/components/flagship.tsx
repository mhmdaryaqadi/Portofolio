"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import {
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  ExternalLink,
  Zap,
  Activity,
  PackageCheck,
  Boxes,
  Radio,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function Flagship() {
  const flagship = projectsData.find((p) => p.isFlagship) || projectsData[0];
  const [activeNode, setActiveNode] = useState<string>("bridge");

  return (
    <section id="flagship" className="py-20 md:py-28 border-b border-[var(--line)] relative bg-[var(--bg)] overflow-hidden">
      {/* Background Subtle Accent Radial */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] opacity-25 blur-[150px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,105,1,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[var(--frame)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          {/* Section Category Badge with Hazard Crawl Strip */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[var(--surface)] border border-[var(--line)] rounded-[2px] mb-6 overflow-hidden relative">
            <span className="w-2 h-2 bg-[var(--accent)] rounded-[1px] shadow-[0_0_8px_rgba(255,105,1,0.8)] animate-pulse" />
            <span className="font-[var(--font-functional)] text-xs font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
              FLAGSHIP SYSTEM ARCHITECTURE
            </span>
            <div className="w-12 h-2 animate-hazard-crawl opacity-40 ml-1 rounded-xs" />
          </div>

          {/* Section Headline */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--fg)] leading-tight">
                GAMEZONE PLATFORM &amp; IPC ENGINE.
              </h2>
              <p className="font-[var(--font-reading)] text-base sm:text-lg text-[var(--muted)] max-w-2xl mt-3">
                Solusi desktop hybrid mandiri berkinerja tinggi yang menggabungkan native Python core dengan web runtime, SQLite WAL, dan automated release toolchain.
              </p>
            </div>

            <div className="flex-shrink-0 flex items-center gap-3">
              <span className="px-3 py-1 bg-[rgba(255,105,1,0.1)] border border-[var(--accent)] text-[var(--accent)] text-xs font-[var(--font-functional)] font-bold rounded-xs tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-ping" />
                {flagship.status}
              </span>
              <a
                href={flagship.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--surface)] hover:bg-[var(--surface-raised)] border border-[var(--line)] hover:border-[var(--accent)] text-[var(--fg)] text-xs font-[var(--font-functional)] font-bold rounded-xs tracking-wider transition-all duration-150 hover:-translate-y-0.5"
              >
                <GithubIcon size={14} />
                <span>RELEASES</span>
                <ExternalLink size={12} className="text-[var(--accent)]" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Flagship Hero Card Frame with Kinetic Shimmer Border */}
        <Reveal delayMs={150}>
          <div className="relative rounded-xs border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-10 transition-all duration-300 animate-shimmer-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)]">
            {/* Top Status Bar Inside Card */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[var(--line)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xs bg-[var(--surface-raised)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] shadow-[0_0_12px_rgba(255,105,1,0.2)]">
                  <Cpu size={22} />
                </div>
                <div>
                  <span className="font-[var(--font-functional)] text-[11px] text-[var(--muted)] tracking-wider uppercase block">
                    ARCHITECTURE DOMAIN
                  </span>
                  <span className="font-[var(--font-heading)] text-sm sm:text-base font-bold text-[var(--fg)] uppercase tracking-tight">
                    Hybrid Python 3 + WebView2 Subsystem
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 font-[var(--font-functional)] text-xs text-[var(--muted)]">
                <Radio size={14} className="text-[var(--accent)] animate-pulse" />
                <span className="text-[var(--accent)] font-semibold">LIVE PIPELINE: ACTIVE</span>
              </div>
            </div>

            {/* Main Grid: Architecture Diagram & Technical Description */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10">
              {/* Left: Deep Technical Description & Problem Solved */}
              <div className="lg:col-span-6 space-y-5">
                <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold uppercase tracking-tight text-[var(--fg)]">
                  Low Latency Desktop-to-OS IPC Bridge
                </h3>
                <p className="font-[var(--font-reading)] text-sm sm:text-base text-[var(--prose)] leading-relaxed">
                  Tantangan utama pada platform desktop modern adalah memadukan fleksibilitas visual berbasis web dengan kontrol sistem operasi tingkat rendah tanpa membebani memori seperti Electron tradisional.
                </p>
                <p className="font-[var(--font-reading)] text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                  GameZone memecahkan masalah ini dengan merancang bridge IPC dua arah berukuran <strong>112 KB (<code className="text-[var(--fg)] font-mono">api.py</code>)</strong> yang menghubungkan antarmuka grafis langsung ke thread native Python. Seluruh panggilan API dieksekusi secara asinkron dengan persistensi data lokal berbasis <strong>SQLite WAL (Write-Ahead Logging)</strong>.
                </p>

                {/* Architectural Highlights */}
                <div className="pt-2 space-y-3">
                  <div className="flex items-start gap-3 p-2 rounded-xs hover:bg-[var(--surface-raised)] transition-colors">
                    <div className="w-5 h-5 rounded-xs bg-[rgba(255,105,1,0.1)] border border-[rgba(255,105,1,0.3)] flex items-center justify-center text-[var(--accent)] flex-shrink-0 mt-0.5">
                      <Zap size={12} />
                    </div>
                    <div>
                      <span className="font-[var(--font-heading)] text-xs font-bold text-[var(--fg)] uppercase tracking-wide block">
                        Bi-directional IPC Protocol
                      </span>
                      <span className="font-[var(--font-reading)] text-xs text-[var(--muted)]">
                        Komunikasi zero-overhead antara JavaScript UI dan Python runtime via window.pywebview.api tanpa server HTTP perantara.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2 rounded-xs hover:bg-[var(--surface-raised)] transition-colors">
                    <div className="w-5 h-5 rounded-xs bg-[rgba(255,105,1,0.1)] border border-[rgba(255,105,1,0.3)] flex items-center justify-center text-[var(--accent)] flex-shrink-0 mt-0.5">
                      <Database size={12} />
                    </div>
                    <div>
                      <span className="font-[var(--font-heading)] text-xs font-bold text-[var(--fg)] uppercase tracking-wide block">
                        SQLite Write-Ahead Logging (WAL)
                      </span>
                      <span className="font-[var(--font-reading)] text-xs text-[var(--muted)]">
                        Mekanisme konkurensi database lokal yang memungkinkan pembacaan multi-thread tanpa mengunci transaksi penulisan data.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2 rounded-xs hover:bg-[var(--surface-raised)] transition-colors">
                    <div className="w-5 h-5 rounded-xs bg-[rgba(255,105,1,0.1)] border border-[rgba(255,105,1,0.3)] flex items-center justify-center text-[var(--accent)] flex-shrink-0 mt-0.5">
                      <PackageCheck size={12} />
                    </div>
                    <div>
                      <span className="font-[var(--font-heading)] text-xs font-bold text-[var(--fg)] uppercase tracking-wide block">
                        Automated Delta Packaging &amp; Hotfix
                      </span>
                      <span className="font-[var(--font-reading)] text-xs text-[var(--muted)]">
                        Pipeline rilis mandiri berbasis skrip build Inno Setup, kompilasi PyInstaller, dan sinkronisasi delta rilis via version.json.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2 rounded-xs hover:bg-[var(--surface-raised)] transition-colors">
                    <div className="w-5 h-5 rounded-xs bg-[rgba(255,105,1,0.1)] border border-[rgba(255,105,1,0.3)] flex items-center justify-center text-[var(--accent)] flex-shrink-0 mt-0.5">
                      <ShieldCheck size={12} />
                    </div>
                    <div>
                      <span className="font-[var(--font-heading)] text-xs font-bold text-[var(--fg)] uppercase tracking-wide block">
                        Multi-Service Session Handling
                      </span>
                      <span className="font-[var(--font-reading)] text-xs text-[var(--muted)]">
                        Integrasi aman sesi Discord OAuth2, protokol IPC Steam Client lokal, dan verifikasi status lisensi game.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Technical Blueprint with Moving SVG Data Flow */}
              <div className="lg:col-span-6 bg-[var(--bg)] border border-[var(--line)] rounded-xs p-5 sm:p-6 font-[var(--font-functional)] relative overflow-hidden">
                {/* Subtle Hazard Edge Pattern */}
                <div className="absolute top-0 left-0 right-0 h-1 animate-hazard-crawl opacity-70" />

                {/* Terminal Title Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--line)] text-xs text-[var(--muted)]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--line)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--line)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                    <span className="font-mono text-[11px] text-[var(--ink)] ml-2">ARCH_BLUEPRINT // IPC_FLOW</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[10px] text-emerald-400 font-semibold uppercase">LIVE BUS</span>
                  </div>
                </div>

                {/* Layer 1: UI / Presentation Layer */}
                <div
                  onClick={() => setActiveNode("ui")}
                  className={`border transition-all duration-200 p-3.5 rounded-xs text-center cursor-pointer ${
                    activeNode === "ui"
                      ? "border-[var(--accent)] bg-[rgba(255,105,1,0.08)] shadow-[0_0_15px_rgba(255,105,1,0.2)]"
                      : "border-[var(--line)] bg-[var(--surface)] hover:border-[var(--color-rail-mark)]"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2 text-[var(--fg)] font-bold text-xs uppercase mb-1">
                    <Layers size={14} className="text-[var(--accent)]" />
                    <span>UI / Presentation Layer (Edge WebView2)</span>
                  </div>
                  <div className="text-[11px] text-[var(--muted)]">
                    DOM Event Handlers • JS Async Dispatch • Zero Chromium Bloat
                  </div>
                </div>

                {/* SVG Animated Transmission Cables (UI to Core) */}
                <div className="relative h-12 my-1 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 200 48" preserveAspectRatio="none">
                    {/* Background Static Track */}
                    <line x1="100" y1="0" x2="100" y2="48" stroke="var(--line)" strokeWidth="2" />
                    {/* Animated Data Packets Flowing Down */}
                    <line
                      x1="100"
                      y1="0"
                      x2="100"
                      y2="48"
                      stroke="var(--accent)"
                      strokeWidth="2.5"
                      className="animate-route-flow"
                    />
                  </svg>
                  {/* Central IPC Label Pill */}
                  <div className="absolute px-2.5 py-0.5 bg-[var(--surface-raised)] border border-[var(--line)] rounded-full text-[10px] text-[var(--accent)] font-mono tracking-wider shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-ping" />
                    <span>window.pywebview.api (JSON Bridge)</span>
                  </div>
                </div>

                {/* Layer 2: Python Native Core Bridge */}
                <div
                  onClick={() => setActiveNode("bridge")}
                  className={`border transition-all duration-200 p-4 rounded-xs text-center cursor-pointer relative ${
                    activeNode === "bridge"
                      ? "border-[var(--accent)] bg-[rgba(255,105,1,0.1)] shadow-[0_0_20px_rgba(255,105,1,0.3)]"
                      : "border-[rgba(255,105,1,0.4)] bg-[rgba(255,105,1,0.03)] hover:border-[var(--accent)]"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2 text-[var(--fg)] font-bold text-xs uppercase mb-1">
                    <Cpu size={14} className="text-[var(--accent)]" />
                    <span>Native Core Bridge (api.py • 112 KB)</span>
                  </div>
                  <div className="text-[11px] text-[var(--muted)]">
                    Win32 Process Worker • Async Task Queue • Thread Pool Dispatch
                  </div>
                </div>

                {/* SVG Animated Split Cables (Core to Subsystems) */}
                <div className="relative h-12 my-1">
                  <svg className="w-full h-full" viewBox="0 0 300 48" preserveAspectRatio="none">
                    {/* Line to Left (SQLite) */}
                    <path
                      d="M 150 0 L 150 16 L 50 28 L 50 48"
                      fill="none"
                      stroke="var(--line)"
                      strokeWidth="2"
                    />
                    <path
                      d="M 150 0 L 150 16 L 50 28 L 50 48"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      className="animate-route-flow"
                    />

                    {/* Line to Center (Steam IPC) */}
                    <line x1="150" y1="0" x2="150" y2="48" stroke="var(--line)" strokeWidth="2" />
                    <line
                      x1="150"
                      y1="0"
                      x2="150"
                      y2="48"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      className="animate-route-flow"
                    />

                    {/* Line to Right (Discord) */}
                    <path
                      d="M 150 0 L 150 16 L 250 28 L 250 48"
                      fill="none"
                      stroke="var(--line)"
                      strokeWidth="2"
                    />
                    <path
                      d="M 150 0 L 150 16 L 250 28 L 250 48"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      className="animate-route-flow"
                    />
                  </svg>
                </div>

                {/* Layer 3: Subsystems Tri-Columns */}
                <div className="grid grid-cols-3 gap-2.5 text-center text-[10px]">
                  <div
                    onClick={() => setActiveNode("sqlite")}
                    className={`border p-2.5 rounded-xs cursor-pointer transition-all ${
                      activeNode === "sqlite"
                        ? "border-[var(--accent)] bg-[rgba(255,105,1,0.08)] shadow-[0_0_12px_rgba(255,105,1,0.25)]"
                        : "border-[var(--line)] bg-[var(--surface)] hover:border-[var(--color-rail-mark)]"
                    }`}
                  >
                    <Database size={15} className="mx-auto text-[var(--accent)] mb-1" />
                    <div className="font-bold text-[var(--fg)] uppercase">SQLite WAL</div>
                    <div className="text-[9px] text-[var(--muted)]">Multi-reader Sync</div>
                  </div>

                  <div
                    onClick={() => setActiveNode("steam")}
                    className={`border p-2.5 rounded-xs cursor-pointer transition-all ${
                      activeNode === "steam"
                        ? "border-[var(--accent)] bg-[rgba(255,105,1,0.08)] shadow-[0_0_12px_rgba(255,105,1,0.25)]"
                        : "border-[var(--line)] bg-[var(--surface)] hover:border-[var(--color-rail-mark)]"
                    }`}
                  >
                    <Boxes size={15} className="mx-auto text-[var(--accent)] mb-1" />
                    <div className="font-bold text-[var(--fg)] uppercase">Steam IPC</div>
                    <div className="text-[9px] text-[var(--muted)]">Named Pipe Socket</div>
                  </div>

                  <div
                    onClick={() => setActiveNode("discord")}
                    className={`border p-2.5 rounded-xs cursor-pointer transition-all ${
                      activeNode === "discord"
                        ? "border-[var(--accent)] bg-[rgba(255,105,1,0.08)] shadow-[0_0_12px_rgba(255,105,1,0.25)]"
                        : "border-[var(--line)] bg-[var(--surface)] hover:border-[var(--color-rail-mark)]"
                    }`}
                  >
                    <ShieldCheck size={15} className="mx-auto text-[var(--accent)] mb-1" />
                    <div className="font-bold text-[var(--fg)] uppercase">Discord Auth</div>
                    <div className="text-[9px] text-[var(--muted)]">OAuth2 Session</div>
                  </div>
                </div>

                {/* Live Diagnostic Telemetry Bar */}
                <div className="mt-4 pt-3 border-t border-[var(--line)] flex flex-wrap items-center justify-between text-[11px] text-[var(--muted)] gap-2">
                  <div className="flex items-center gap-1.5">
                    <Activity size={12} className="text-[var(--accent)] animate-pulse" />
                    <span>Telemetry: <strong className="text-[var(--fg)] font-mono">0ms IPC Latency</strong></span>
                  </div>
                  <span className="font-mono text-[var(--fg)] text-[10px] bg-[var(--surface-raised)] px-2 py-0.5 border border-[var(--line)] rounded-xs">
                    qa_runner.py (100% Pass)
                  </span>
                </div>
              </div>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[var(--line)]">
              {flagship.metrics?.map((metric, idx) => (
                <div key={idx} className="bg-[var(--bg)] border border-[var(--line)] p-4 rounded-xs hover:border-[var(--accent)] transition-all">
                  <div className="font-[var(--font-functional)] text-[11px] text-[var(--muted)] uppercase tracking-wider mb-1">
                    {metric.label}
                  </div>
                  <div className="font-[var(--font-heading)] text-xl sm:text-2xl font-black text-[var(--fg)]">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Badges List */}
            <div className="mt-6 pt-5 border-t border-[rgba(255,255,255,0.04)] flex flex-wrap items-center gap-2">
              <span className="font-[var(--font-functional)] text-xs text-[var(--muted)] mr-2">
                STACK TECH:
              </span>
              {flagship.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-[var(--bg)] border border-[var(--line)] rounded-xs text-xs font-[var(--font-functional)] text-[var(--fg)] hover:border-[var(--accent)] hover:bg-[rgba(255,105,1,0.08)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
