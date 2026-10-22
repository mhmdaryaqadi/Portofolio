import { profileData } from "@/data/profile";
import { ArrowUpRight, Mail, ShieldCheck, Terminal, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-[var(--line)]">
      {/* Background Radial Ambient Glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 blur-[100px]"
        style={{
          background: "radial-gradient(ellipse at center, #ff6901 0%, rgba(124,58,237,0.12) 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative Circular Radar Wireframe Accent (Exact Blackbox.ai motif) */}
      <div
        className="pointer-events-none absolute -top-12 -right-16 w-80 h-80 sm:w-96 sm:h-96 opacity-25 select-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[spin_60s_linear_infinite]">
          <circle cx="100" cy="100" r="95" stroke="#ff6901" strokeWidth="0.75" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="75" stroke="#ff6901" strokeWidth="0.75" />
          <circle cx="100" cy="100" r="55" stroke="#ff6901" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="35" stroke="#ff6901" strokeWidth="0.75" />
          <line x1="5" y1="100" x2="195" y2="100" stroke="#ff6901" strokeWidth="0.5" opacity="0.4" />
          <line x1="100" y1="5" x2="100" y2="195" stroke="#ff6901" strokeWidth="0.5" opacity="0.4" />
          <path d="M100 5 A95 95 0 0 1 195 100" stroke="#ff6901" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-[var(--frame)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Category Badge Tag (Exact Blackbox.ai style) */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--surface)] border border-[var(--line)] rounded-[2px] mb-6">
          <span className="w-2 h-2 bg-[var(--accent)] rounded-[1px] shadow-[0_0_8px_rgba(255,105,1,0.6)]" />
          <span className="font-[var(--font-functional)] text-xs font-semibold tracking-[0.14em] text-[var(--muted)] uppercase">
            FULLSTACK & SYSTEMS ARCHITECTURE
          </span>
        </div>

        {/* Huge Bold Headline (Archivo Typography) */}
        <h1 className="font-[var(--font-heading)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.04] mb-6 max-w-5xl">
          HIGH-PERFORMANCE HYBRID SYSTEMS.{" "}
          <span className="text-[var(--prose)]">ENGINEERED FROM HARDWARE TO CLOUD.</span>
        </h1>

        {/* Narrative Subtitle */}
        <p className="font-[var(--font-reading)] text-base sm:text-lg md:text-xl text-[var(--muted)] max-w-3xl leading-relaxed mb-10">
          Saya <strong className="text-white font-semibold">{profileData.name}</strong> — menjembatani fondasi infrastruktur jaringan fisik & hardware (TKJ + PTIK) dengan arsitektur software modern: dari desktop engine hybrid (GameZone v3.1.2) ber-IPC instan hingga aplikasi web fullstack berskala produksi.
        </p>

        {/* CTA Button Row */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black font-[var(--font-heading)] text-xs sm:text-sm font-black uppercase tracking-wider rounded-xs hover:bg-neutral-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 shadow-[0_0_20px_rgba(255,255,255,0.18)]"
          >
            <span>EXPLORE PROJECTS</span>
            <ArrowUpRight size={16} className="stroke-[2.5]" />
          </a>

          <a
            href="#flagship"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--surface)] text-white border border-[var(--line)] font-[var(--font-heading)] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs hover:bg-[var(--surface-raised)] hover:border-[var(--color-rail-mark)] hover:-translate-y-0.5 transition-all duration-150"
          >
            <Terminal size={16} className="text-[var(--accent)]" />
            <span>FLAGSHIP: GAMEZONE</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-[var(--muted)] hover:text-white font-[var(--font-functional)] text-xs uppercase tracking-wider transition-colors"
          >
            <span>GET IN TOUCH</span>
          </a>
        </div>

        {/* Key Metrics Strip (Blackbox Metric Style) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-[var(--line)]">
          <div className="border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5 rounded-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-[var(--font-heading)] text-2xl sm:text-3xl font-black text-white">v3.1.2</span>
              <Cpu size={16} className="text-[var(--accent)]" />
            </div>
            <div className="font-[var(--font-functional)] text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
              GameZone Platform
            </div>
            <div className="font-[var(--font-reading)] text-[11px] text-[var(--muted-soft)] mt-1">
              Stable Hybrid Desktop Release
            </div>
          </div>

          <div className="border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5 rounded-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-[var(--font-heading)] text-2xl sm:text-3xl font-black text-white">23+</span>
              <GithubIcon size={16} className="text-[var(--accent)]" />
            </div>
            <div className="font-[var(--font-functional)] text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
              GitHub Repositories
            </div>
            <div className="font-[var(--font-reading)] text-[11px] text-[var(--muted-soft)] mt-1">
              Fullstack, Desktop & Tools
            </div>
          </div>

          <div className="border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5 rounded-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-[var(--font-heading)] text-2xl sm:text-3xl font-black text-white">TKJ + PTIK</span>
              <ShieldCheck size={16} className="text-[var(--accent)]" />
            </div>
            <div className="font-[var(--font-functional)] text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
              Infrastructure
            </div>
            <div className="font-[var(--font-reading)] text-[11px] text-[var(--muted-soft)] mt-1">
              Fiber Optic, MikroTik, UTP
            </div>
          </div>

          <div className="border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5 rounded-xs">
            <div className="flex items-center justify-between mb-1">
              <span className="font-[var(--font-heading)] text-2xl sm:text-3xl font-black text-white">2024-2028</span>
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

        {/* Social Links Row */}
        <div className="flex items-center gap-4 mt-8">
          <span className="font-[var(--font-functional)] text-xs text-[var(--muted-soft)] uppercase tracking-widest">
            CONNECT:
          </span>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/mhmdaryaqadi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--surface)] border border-[var(--line)] rounded-xs text-xs font-[var(--font-functional)] text-[var(--muted)] hover:text-white hover:border-[var(--color-rail-mark)] transition-colors"
            >
              <GithubIcon size={13} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/muhammad-arya-alqadi-47939a387/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--surface)] border border-[var(--line)] rounded-xs text-xs font-[var(--font-functional)] text-[var(--muted)] hover:text-white hover:border-[var(--color-rail-mark)] transition-colors"
            >
              <LinkedinIcon size={13} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:mhmdaryaqadi@gmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--surface)] border border-[var(--line)] rounded-xs text-xs font-[var(--font-functional)] text-[var(--muted)] hover:text-white hover:border-[var(--color-rail-mark)] transition-colors"
            >
              <Mail size={13} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
