import { profileData } from "@/data/profile";
import { ArrowUpRight, Mail, ShieldCheck, Terminal, Cpu, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { CodeTerminal } from "@/components/code-terminal";
import { CountUp } from "@/components/count-up";
import { BracketButton } from "@/components/bracket-button";

export function Hero() {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-[var(--line)]">
      {/* Background Radial Ambient Glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] opacity-20 blur-[110px]"
        style={{
          background: "radial-gradient(ellipse at center, #ff6901 0%, rgba(124,58,237,0.12) 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative Circular Radar Wireframe Accent with continuous spin */}
      <div
        className="pointer-events-none absolute -top-12 -right-16 w-80 h-80 sm:w-96 sm:h-96 opacity-25 select-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[spin_50s_linear_infinite]">
          <circle cx="100" cy="100" r="95" stroke="#ff6901" strokeWidth="0.75" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="75" stroke="#ff6901" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="55" stroke="#ff6901" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="35" stroke="#ff6901" strokeWidth="0.75" />
          <line x1="5" y1="100" x2="195" y2="100" stroke="#ff6901" strokeWidth="0.5" opacity="0.4" />
          <line x1="100" y1="5" x2="100" y2="195" stroke="#ff6901" strokeWidth="0.5" opacity="0.4" />
          <path d="M100 5 A95 95 0 0 1 195 100" stroke="#ff6901" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-[var(--frame)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid: Headline & Text at Left, Live Interactive Code Terminal at Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-16">
          {/* Left Column: Narrative & CTA (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal delayMs={0}>
              {/* Category Badge Tag with Hazard Crawl Strip */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[var(--surface)] border border-[var(--line)] rounded-[2px] mb-6 overflow-hidden relative">
                <span className="w-2 h-2 bg-[var(--accent)] rounded-[1px] shadow-[0_0_8px_rgba(255,105,1,0.8)] animate-pulse" />
                <span className="font-[var(--font-functional)] text-xs font-semibold tracking-[0.14em] text-[var(--muted)] uppercase">
                  FULLSTACK &amp; SYSTEMS ARCHITECTURE
                </span>
                <span className="text-[var(--accent)] font-mono text-[10px] font-bold">{"// SYS_READY"}</span>
              </div>

              {/* Huge Bold Headline (Archivo Typography) with Live Terminal Cursor */}
              <h1 className="font-[var(--font-heading)] text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--fg)] leading-[1.04] mb-6">
                HIGH-PERFORMANCE HYBRID SYSTEMS.{" "}
                <span className="text-[var(--prose)]">ENGINEERED FROM HARDWARE TO CLOUD.</span>
                <span className="inline-block w-2.5 h-6 sm:w-3 sm:h-10 bg-[var(--accent)] ml-2 animate-terminal-blink align-middle" />
              </h1>

              {/* Narrative Subtitle */}
              <p className="font-[var(--font-reading)] text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-8 max-w-2xl">
                Saya <strong className="text-[var(--fg)] font-semibold">{profileData.name}</strong> — menjembatani fondasi infrastruktur jaringan fisik &amp; hardware (TKJ + PTIK) dengan arsitektur software modern: dari desktop engine hybrid (GameZone v3.1.2) ber-IPC instan hingga aplikasi web fullstack berskala produksi.
              </p>

              {/* CTA Button Row with Blackbox Signature Bracket Buttons & Scramble Effects */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <BracketButton
                  href="#projects"
                  variant="primary"
                  size="md"
                  icon={<ArrowUpRight size={15} className="stroke-[2.5]" />}
                >
                  EXPLORE PROJECTS
                </BracketButton>

                <BracketButton
                  href="#flagship"
                  variant="secondary"
                  size="md"
                  icon={<Terminal size={15} className="text-[var(--accent)]" />}
                >
                  FLAGSHIP: GAMEZONE
                </BracketButton>

                <BracketButton
                  href="#contact"
                  variant="ghost"
                  size="md"
                >
                  GET IN TOUCH
                </BracketButton>
              </div>

              {/* Social Links Row */}
              <div className="flex items-center gap-3 pt-2">
                <span className="font-[var(--font-functional)] text-[11px] text-[var(--muted-soft)] uppercase tracking-widest">
                  CONNECT:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={profileData.socials[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[var(--surface)] border border-[var(--line)] rounded-xs text-xs font-[var(--font-functional)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-all hover:-translate-y-0.5"
                  >
                    <GithubIcon size={13} />
                    <span>GITHUB</span>
                  </a>

                  <a
                    href={profileData.socials[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[var(--surface)] border border-[var(--line)] rounded-xs text-xs font-[var(--font-functional)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-all hover:-translate-y-0.5"
                  >
                    <LinkedinIcon size={13} />
                    <span>LINKEDIN</span>
                  </a>

                  <a
                    href={profileData.socials[2].url}
                    aria-label="Email"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[var(--surface)] border border-[var(--line)] rounded-xs text-xs font-[var(--font-functional)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-all hover:-translate-y-0.5"
                  >
                    <Mail size={13} />
                    <span>EMAIL</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Code Terminal Showcase (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <Reveal delayMs={100}>
              <div className="relative">
                {/* Subtle Ambient Behind Terminal */}
                <div
                  className="pointer-events-none absolute -inset-2 rounded-lg opacity-25 blur-xl -z-10"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(255,105,1,0.4) 0%, rgba(124,58,237,0.2) 60%, transparent 80%)",
                  }}
                  aria-hidden="true"
                />
                <CodeTerminal />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Key Metrics Strip (Blackbox Metric Style) with CountUp Animated Numbers */}
        <Reveal delayMs={150}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-[var(--line)]">
            <div className="border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5 rounded-xs hover:border-[var(--accent)] transition-all duration-150 hover:-translate-y-0.5 group">
              <div className="flex items-center justify-between mb-1">
                <span className="font-[var(--font-heading)] text-2xl sm:text-3xl font-black text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                  v3.1.2
                </span>
                <Cpu size={16} className="text-[var(--accent)]" />
              </div>
              <div className="font-[var(--font-functional)] text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                GameZone Platform
              </div>
              <div className="font-[var(--font-reading)] text-[11px] text-[var(--muted-soft)] mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Stable Hybrid Release</span>
              </div>
            </div>

            <div className="border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5 rounded-xs hover:border-[var(--accent)] transition-all duration-150 hover:-translate-y-0.5 group">
              <div className="flex items-center justify-between mb-1">
                <span className="font-[var(--font-heading)] text-2xl sm:text-3xl font-black text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                  <CountUp target={23} suffix="+" />
                </span>
                <GithubIcon size={16} className="text-[var(--accent)]" />
              </div>
              <div className="font-[var(--font-functional)] text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                GitHub Repositories
              </div>
              <div className="font-[var(--font-reading)] text-[11px] text-[var(--muted-soft)] mt-1">
                Fullstack, Desktop &amp; Tools
              </div>
            </div>

            <div className="border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5 rounded-xs hover:border-[var(--accent)] transition-all duration-150 hover:-translate-y-0.5 group">
              <div className="flex items-center justify-between mb-1">
                <span className="font-[var(--font-heading)] text-xl sm:text-2xl font-black text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                  TKJ + PTIK
                </span>
                <ShieldCheck size={16} className="text-[var(--accent)]" />
              </div>
              <div className="font-[var(--font-functional)] text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                Infrastructure
              </div>
              <div className="font-[var(--font-reading)] text-[11px] text-[var(--muted-soft)] mt-1">
                Fiber Optic, MikroTik, UTP
              </div>
            </div>

            <div className="border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5 rounded-xs hover:border-[var(--accent)] transition-all duration-150 hover:-translate-y-0.5 group">
              <div className="flex items-center justify-between mb-1">
                <span className="font-[var(--font-heading)] text-2xl sm:text-3xl font-black text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                  <CountUp target={100} suffix="% PASS" />
                </span>
                <Sparkles size={16} className="text-[var(--accent)]" />
              </div>
              <div className="font-[var(--font-functional)] text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                Automated QA Suite
              </div>
              <div className="font-[var(--font-reading)] text-[11px] text-[var(--muted-soft)] mt-1">
                Univ. Pancasila TI 2024–2028
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
