import { profileData } from "@/data/profile";
import { ArrowUpRight, Mail, ShieldCheck, Terminal, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-[var(--line)]">
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
        className="pointer-events-none absolute -top-12 -right-16 w-80 h-80 sm:w-96 sm:h-96 opacity-30 select-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[spin_45s_linear_infinite]">
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
        <Reveal delayMs={0}>
          {/* Category Badge Tag with Hazard Crawl Strip */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[var(--surface)] border border-[var(--line)] rounded-[2px] mb-6 overflow-hidden relative">
            <span className="w-2 h-2 bg-[var(--accent)] rounded-[1px] shadow-[0_0_8px_rgba(255,105,1,0.8)]" />
            <span className="font-[var(--font-functional)] text-xs font-semibold tracking-[0.14em] text-[var(--muted)] uppercase">
              FULLSTACK &amp; SYSTEMS ARCHITECTURE
            </span>
            <span className="text-[var(--accent)] font-mono text-[10px] font-bold">{"// SYS_READY"}</span>
          </div>

          {/* Huge Bold Headline (Archivo Typography) with Live Terminal Cursor */}
          <h1 className="font-[var(--font-heading)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[var(--fg)] leading-[1.04] mb-6 max-w-5xl">
            HIGH-PERFORMANCE HYBRID SYSTEMS.{" "}
            <span className="text-[var(--prose)]">ENGINEERED FROM HARDWARE TO CLOUD.</span>
            <span className="inline-block w-2.5 h-7 sm:w-3.5 sm:h-12 bg-[var(--accent)] ml-2 animate-terminal-blink align-middle" />
          </h1>

          {/* Narrative Subtitle */}
          <p className="font-[var(--font-reading)] text-base sm:text-lg md:text-xl text-[var(--muted)] max-w-3xl leading-relaxed mb-10">
            Saya <strong className="text-[var(--fg)] font-semibold">{profileData.name}</strong> — menjembatani fondasi infrastruktur jaringan fisik &amp; hardware (TKJ + PTIK) dengan arsitektur software modern: dari desktop engine hybrid (GameZone v3.1.2) ber-IPC instan hingga aplikasi web fullstack berskala produksi.
          </p>

          {/* CTA Button Row */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--fg)] text-[var(--bg)] font-[var(--font-heading)] text-xs sm:text-sm font-black uppercase tracking-wider rounded-xs hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 shadow-sm"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowUpRight size={16} className="stroke-[2.5]" />
            </a>

            <a
              href="#flagship"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--surface)] text-[var(--fg)] border border-[var(--line)] font-[var(--font-heading)] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs hover:bg-[var(--surface-raised)] hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all duration-150"
            >
              <Terminal size={16} className="text-[var(--accent)]" />
              <span>FLAGSHIP: GAMEZONE</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-[var(--muted)] hover:text-[var(--fg)] font-[var(--font-functional)] text-xs uppercase tracking-wider transition-colors"
            >
              <span>GET IN TOUCH</span>
            </a>
          </div>
        </Reveal>

        {/* Key Metrics Strip (Blackbox Metric Style) with Staggered Reveal */}
        <Reveal delayMs={150}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-[var(--line)]">
            <div className="border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5 rounded-xs hover:border-[var(--accent)] transition-all duration-150 hover:-translate-y-0.5 group">
              <div className="flex items-center justify-between mb-1">
                <span className="font-[var(--font-heading)] text-2xl sm:text-3xl font-black text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">v3.1.2</span>
                <Cpu size={16} className="text-[var(--accent)]" />
              </div>
              <div className="font-[var(--font-functional)] text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                GameZone Platform
              </div>
              <div className="font-[var(--font-reading)] text-[11px] text-[var(--muted-soft)] mt-1">
                Stable Hybrid Desktop Release
              </div>
            </div>

            <div className="border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5 rounded-xs hover:border-[var(--accent)] transition-all duration-150 hover:-translate-y-0.5 group">
              <div className="flex items-center justify-between mb-1">
                <span className="font-[var(--font-heading)] text-2xl sm:text-3xl font-black text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">23+</span>
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
                <span className="font-[var(--font-heading)] text-2xl sm:text-3xl font-black text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">TKJ + PTIK</span>
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
                <span className="font-[var(--font-heading)] text-2xl sm:text-3xl font-black text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">2024-2028</span>
                <Terminal size={16} className="text-[var(--accent)]" />
              </div>
              <div className="font-[var(--font-functional)] text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                Univ. Pancasila
              </div>
              <div className="font-[var(--font-reading)] text-[11px] text-[var(--muted-soft)] mt-1">
                S1 Teknik Informatika
              </div>
            </div>
          </div>
        </Reveal>

        {/* Social Links Row */}
        <Reveal delayMs={250}>
          <div className="flex items-center gap-4 mt-8">
            <span className="font-[var(--font-functional)] text-xs text-[var(--muted-soft)] uppercase tracking-widest">
              CONNECT:
            </span>
            <div className="flex items-center gap-2">
              <a
                href={profileData.socials[0].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--surface)] border border-[var(--line)] rounded-xs text-xs font-[var(--font-functional)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-all hover:-translate-y-0.5"
              >
                <GithubIcon size={14} />
                <span>GITHUB</span>
              </a>

              <a
                href={profileData.socials[1].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--surface)] border border-[var(--line)] rounded-xs text-xs font-[var(--font-functional)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-all hover:-translate-y-0.5"
              >
                <LinkedinIcon size={14} />
                <span>LINKEDIN</span>
              </a>

              <a
                href={profileData.socials[2].url}
                aria-label="Email"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--surface)] border border-[var(--line)] rounded-xs text-xs font-[var(--font-functional)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-all hover:-translate-y-0.5"
              >
                <Mail size={14} />
                <span>EMAIL</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
