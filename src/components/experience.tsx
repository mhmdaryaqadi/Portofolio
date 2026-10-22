import { experienceData } from "@/data/experience";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[var(--line)] relative bg-[var(--bg)]">
      <div className="max-w-[var(--frame)] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--surface)] border border-[var(--line)] rounded-[2px] mb-6">
            <span className="w-2 h-2 bg-[var(--accent)] rounded-[1px] shadow-[0_0_8px_rgba(255,105,1,0.6)]" />
            <span className="font-[var(--font-functional)] text-xs font-semibold tracking-[0.14em] text-[var(--muted)] uppercase">
              RIWAYAT PENDIDIKAN &amp; PENGALAMAN KERJA
            </span>
          </div>

          {/* Section Headline */}
          <h2 className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--fg)] leading-tight mb-4 max-w-4xl">
            PENDIDIKAN AKADEMIK &amp; PENGALAMAN LAPANGAN.
          </h2>
          <p className="font-[var(--font-reading)] text-base sm:text-lg text-[var(--muted)] max-w-3xl mb-12">
            Rekam jejak studi formal di bidang keilmuan informatika serta pengalaman praktik kerja langsung dalam instalasi dan pemeliharaan infrastruktur jaringan.
          </p>
        </Reveal>

        {/* Timeline List with Staggered Reveals */}
        <div className="space-y-6">
          {experienceData.map((item, idx) => {
            const isWork = item.type === "work";
            return (
              <Reveal key={item.id} delayMs={idx * 120}>
                <div className="border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8 rounded-xs hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  {/* Subtle Top Accent Wire on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-4 border-b border-[var(--line)]">
                    <div className="flex items-start sm:items-center gap-3">
                      <div className="w-9 h-9 rounded-xs bg-[var(--surface-raised)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] flex-shrink-0 mt-0.5 sm:mt-0 group-hover:border-[var(--accent)] transition-colors">
                        {isWork ? <Briefcase size={18} /> : <GraduationCap size={18} />}
                      </div>
                      <div>
                        <h3 className="font-[var(--font-heading)] text-lg sm:text-xl font-bold text-[var(--fg)] uppercase tracking-tight group-hover:text-[var(--accent)] transition-colors">
                          {item.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-[var(--font-functional)] text-[var(--muted)] mt-0.5">
                          <span className="font-semibold text-[var(--accent)]">{item.institution}</span>
                          <span>•</span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin size={12} />
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--bg)] border border-[var(--line)] rounded-xs text-xs font-[var(--font-functional)] text-[var(--muted)] self-start md:self-center">
                      <Calendar size={12} className="text-[var(--accent)]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-[var(--font-reading)] text-[var(--prose)] leading-relaxed">
                        <span className="text-[var(--accent)] text-xs font-mono font-bold mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 bg-[var(--bg)] border border-[var(--line)] rounded-xs text-[11px] font-[var(--font-functional)] text-[var(--muted)] group-hover:border-[var(--color-rail-mark)] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
