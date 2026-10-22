import { Network, Cpu, Globe, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-[var(--line)] relative bg-[var(--bg)]">
      <div className="max-w-[var(--frame)] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Category Badge with hazard crawl */}
          {/* Category Badge with hazard crawl */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--surface)] border border-[var(--line)] rounded-[2px] mb-6">
            <span className="w-2 h-2 bg-[var(--accent)] rounded-[1px] shadow-[0_0_8px_rgba(255,105,1,0.6)]" />
            <span className="font-[var(--font-functional)] text-xs font-semibold tracking-[0.14em] text-[var(--muted)] uppercase">
              PROFIL &amp; LANDASAN TEKNIS
            </span>
          </div>

          {/* Section Headline */}
          <h2 className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--fg)] leading-tight mb-8 max-w-4xl">
            LATAR BELAKANG AKADEMIK &amp; PENDEKATAN TEKNIS.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delayMs={100}>
              <p className="font-[var(--font-reading)] text-base sm:text-lg text-[var(--prose)] leading-relaxed">
                Kompetensi teknis saya diawali dari pendidikan kejuruan di bidang Teknik Komputer dan Jaringan (TKJ). Melalui pembelajaran terstruktur di SMK Teknindo Jaya dan praktik kerja lapangan di <strong>Pusat Teknologi Informasi dan Komunikasi (PTIK) Universitas Pancasila</strong>, saya memperoleh pengalaman langsung dalam instalasi kabel jaringan terstruktur, penyambungan kabel serat optik (<em>fusion splicing</em>), penataan rak server, hingga konfigurasi perangkat jaringan MikroTik RouterOS.
              </p>

              <p className="font-[var(--font-reading)] text-base sm:text-lg text-[var(--muted)] leading-relaxed mt-4">
                Pemahaman terhadap lapisan fisik (<em>physical layer</em>) dan protokol jaringan (<em>TCP/IP, VLAN</em>) membentuk kerangka berpikir sistemik dalam rekayasa perangkat lunak. Ketika merancang aplikasi, fokus tidak semata tertuju pada antarmuka pengguna, melainkan juga pada efisiensi komunikasi data antar-proses (<em>IPC</em>), alokasi memori, konkurensi basis data, dan keandalan skrip otomasi.
              </p>

              <p className="font-[var(--font-reading)] text-base sm:text-lg text-[var(--muted)] leading-relaxed mt-4">
                Saat ini saya menempuh studi sarjana pada program <strong>S1 Teknik Informatika di Universitas Pancasila</strong>. Pendalaman konsep teoritis komputasi, algoritma, dan arsitektur sistem diterapkan secara beriringan melalui perancangan proyek nyata, seperti aplikasi desktop hybrid <strong>GameZone (v3.1.2)</strong> dan sistem informasi berbasis web menggunakan kerangka kerja <strong>Laravel</strong> dan <strong>Next.js</strong>.
              </p>

              {/* Quote / Highlight Strip */}
              <div className="p-4 sm:p-5 border-l-2 border-[var(--accent)] bg-[var(--surface)] rounded-r-xs mt-6 hover:border-[var(--color-rail-mark)] transition-colors">
                <div className="font-[var(--font-functional)] text-xs text-[var(--accent)] uppercase tracking-wider font-semibold mb-1">
                  PRINSIP REKAYASA
                </div>
                <div className="font-[var(--font-reading)] text-sm sm:text-base text-[var(--fg)] font-medium italic">
                  &ldquo;Pemahaman komprehensif dari infrastruktur fisik hingga lapisan aplikasi menghasilkan perangkat lunak yang terstruktur, efisien dalam alokasi sumber daya, dan andal saat dioperasikan.&rdquo;
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
                    Infrastruktur &amp; Jaringan Komputer
                  </h3>
                </div>
                <p className="font-[var(--font-reading)] text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  Pengalaman lapangan dalam terminasi kabel serat optik (fusion splicing &amp; pengujian OPM), penataan rak server, serta konfigurasi perutean MikroTik dan segmentasi VLAN.
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
                    Arsitektur Desktop Hybrid
                  </h3>
                </div>
                <p className="font-[var(--font-reading)] text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  Perancangan aplikasi desktop Windows berbasis Python dan runtime Microsoft Edge WebView2, memanfaatkan komunikasi IPC asinkron dan basis data lokal SQLite WAL.
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
                    Aplikasi Web Fullstack
                  </h3>
                </div>
                <p className="font-[var(--font-reading)] text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  Pengembangan sistem berbasis web menggunakan Laravel dan Next.js dengan implementasi pemisahan logika bisnis (service layer), autentikasi RBAC, dan relasi basis data terstruktur.
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
                    Otomasi Kompilasi &amp; Pengujian
                  </h3>
                </div>
                <p className="font-[var(--font-reading)] text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  Penerapan skrip pengujian mandiri menggunakan Python, kompilasi paket instalasi mandiri via Inno Setup dan PyInstaller, serta manajemen rilis berbasis version metadata.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
