import { Network, Cpu, Globe, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-[var(--line)] relative bg-[var(--bg)]">
      <div className="max-w-[var(--frame)] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Category Badge with hazard crawl */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--surface)] border border-[var(--line)] rounded-[2px] mb-6">
            <span className="w-2 h-2 bg-[var(--accent)] rounded-[1px] shadow-[0_0_8px_rgba(255,105,1,0.6)]" />
            <span className="font-[var(--font-functional)] text-xs font-semibold tracking-[0.14em] text-[var(--muted)] uppercase">
              ABOUT &amp; ENGINEERING PHILOSOPHY
            </span>
          </div>

          {/* Section Headline */}
          <h2 className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--fg)] leading-tight mb-8 max-w-4xl">
            BRIDGING HARDWARE INFRASTRUCTURE WITH MODERN SOFTWARE.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delayMs={100}>
              <p className="font-[var(--font-reading)] text-base sm:text-lg text-[var(--prose)] leading-relaxed">
                Saya memulai perjalanan rekayasa dari layer paling mendasar: fisik kabel UTP, terminasi fiber optic, switch manageable, dan konfigurasi routing MikroTik di bangku SMK TKJ serta pengalaman praktik kerja nyata di <strong>PTIK Universitas Pancasila</strong>.
              </p>

              <p className="font-[var(--font-reading)] text-base sm:text-lg text-[var(--muted)] leading-relaxed mt-4">
                Memahami bagaimana paket data bergerak melintasi layer fisik dan jaringan memberi saya perspektif unik dalam rekayasa software. Ketika membangun aplikasi, saya tidak hanya memikirkan antarmuka pengguna, tetapi juga latensi IPC, efisiensi memori, konkurensi database, dan otomasi pipeline rilis.
              </p>

              <p className="font-[var(--font-reading)] text-base sm:text-lg text-[var(--muted)] leading-relaxed mt-4">
                Saat ini saya menempuh studi <strong>S1 Teknik Informatika di Universitas Pancasila</strong> untuk memperdalam teori komputasi, algoritma, dan sistem terdistribusi, seraya terus memproduksi solusi perangkat lunak mandiri seperti platform desktop hybrid <strong>GameZone (v3.1.2)</strong> dan ekosistem web berbasis <strong>Laravel &amp; Next.js</strong>.
              </p>

              {/* Quote / Highlight Strip */}
              <div className="p-4 sm:p-5 border-l-2 border-[var(--accent)] bg-[var(--surface)] rounded-r-xs mt-6 hover:border-[var(--color-rail-mark)] transition-colors">
                <div className="font-[var(--font-functional)] text-xs text-[var(--accent)] uppercase tracking-wider font-semibold mb-1">
                  ENGINEERING MINDSET
                </div>
                <div className="font-[var(--font-reading)] text-sm sm:text-base text-[var(--fg)] font-medium italic">
                  &ldquo;Memahami sistem dari kabel fisik hingga kode tingkat tinggi menghasilkan aplikasi yang tidak hanya cantik di layar, tapi tangguh dan efisien di mesin.&rdquo;
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Architecture Pillars Column */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal delayMs={150}>
              <div className="border border-[var(--line)] bg-[var(--surface)] p-5 rounded-xs transition-all duration-200 hover:border-[var(--accent)] hover:-translate-y-0.5 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xs bg-[var(--surface-raised)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] group-hover:shadow-[0_0_8px_rgba(255,105,1,0.3)] transition-all">
                    <Network size={16} />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-sm font-bold uppercase text-[var(--fg)] tracking-wider">
                    Network &amp; Physical Layer
                  </h3>
                </div>
                <p className="font-[var(--font-reading)] text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  Pemahaman perangkat keras, terminasi fiber optic (fusion splicing), penataan server rack, serta konfigurasi MikroTik RouterOS &amp; topologi VLAN.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="border border-[var(--line)] bg-[var(--surface)] p-5 rounded-xs transition-all duration-200 hover:border-[var(--accent)] hover:-translate-y-0.5 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xs bg-[var(--surface-raised)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] group-hover:shadow-[0_0_8px_rgba(255,105,1,0.3)] transition-all">
                    <Cpu size={16} />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-sm font-bold uppercase text-[var(--fg)] tracking-wider">
                    Hybrid Desktop Architecture
                  </h3>
                </div>
                <p className="font-[var(--font-reading)] text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  Spesialisasi arsitektur desktop hybrid Python WebView2 dengan bi-directional IPC zero-overhead, SQLite WAL engine, dan automated hotfix packaging.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={250}>
              <div className="border border-[var(--line)] bg-[var(--surface)] p-5 rounded-xs transition-all duration-200 hover:border-[var(--accent)] hover:-translate-y-0.5 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xs bg-[var(--surface-raised)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] group-hover:shadow-[0_0_8px_rgba(255,105,1,0.3)] transition-all">
                    <Globe size={16} />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-sm font-bold uppercase text-[var(--fg)] tracking-wider">
                    Fullstack Web Applications
                  </h3>
                </div>
                <p className="font-[var(--font-reading)] text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  Pembangunan sistem web skala produksi menggunakan Laravel, Next.js App Router, Tailwind CSS, dan database relational dengan prinsip Clean Architecture.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={300}>
              <div className="border border-[var(--line)] bg-[var(--surface)] p-5 rounded-xs transition-all duration-200 hover:border-[var(--accent)] hover:-translate-y-0.5 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-xs bg-[var(--surface-raised)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] group-hover:shadow-[0_0_8px_rgba(255,105,1,0.3)] transition-all">
                    <CheckCircle2 size={16} />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-sm font-bold uppercase text-[var(--fg)] tracking-wider">
                    Production QA &amp; Automated Toolchain
                  </h3>
                </div>
                <p className="font-[var(--font-reading)] text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  Pengujian otomatis end-to-end, scripting compiler Inno Setup / PyInstaller, dan pengorganisasian rilis mandiri yang teruji stabil.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
