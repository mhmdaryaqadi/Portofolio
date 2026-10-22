import { skillsData } from "@/data/skills";
import { Code2, Layout, Cpu, Network, Wrench } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Skills() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 size={18} className="text-[var(--accent)]" />;
      case "Layout":
        return <Layout size={18} className="text-[var(--accent)]" />;
      case "Cpu":
        return <Cpu size={18} className="text-[var(--accent)]" />;
      case "Network":
        return <Network size={18} className="text-[var(--accent)]" />;
      case "Wrench":
        return <Wrench size={18} className="text-[var(--accent)]" />;
      default:
        return <Code2 size={18} className="text-[var(--accent)]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[var(--line)] relative bg-[var(--bg)]">
      <div className="max-w-[var(--frame)] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--surface)] border border-[var(--line)] rounded-[2px] mb-6">
            <span className="w-2 h-2 bg-[var(--accent)] rounded-[1px] shadow-[0_0_8px_rgba(255,105,1,0.6)]" />
            <span className="font-[var(--font-functional)] text-xs font-semibold tracking-[0.14em] text-[var(--muted)] uppercase">
              MATRIKS KOMPETENSI TEKNIS
            </span>
          </div>

          {/* Section Headline */}
          <h2 className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--fg)] leading-tight mb-4 max-w-4xl">
            KOMPETENSI PERANGKAT LUNAK &amp; JARINGAN.
          </h2>
          <p className="font-[var(--font-reading)] text-base sm:text-lg text-[var(--muted)] max-w-3xl mb-12">
            Klasifikasi penguasaan teknis berdasarkan domain keilmuan — mencakup bahasa pemrograman, kerangka kerja aplikasi web, subsistem desktop native, hingga konfigurasi infrastruktur jaringan fisik.
          </p>
        </Reveal>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => (
            <Reveal key={category.id} delayMs={idx * 80}>
              <div className="border border-[var(--line)] bg-[var(--surface)] p-6 rounded-xs hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between h-full group">
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[var(--line)]">
                    <div className="w-8 h-8 rounded-xs bg-[var(--surface-raised)] border border-[var(--line)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <h3 className="font-[var(--font-heading)] text-sm font-bold uppercase tracking-wider text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-3 py-1 text-xs font-[var(--font-functional)] rounded-xs border transition-all duration-150 ${
                          skill.isHighlight
                            ? "bg-[rgba(255,105,1,0.08)] border-[rgba(255,105,1,0.35)] text-[var(--fg)] font-medium hover:border-[var(--accent)] hover:bg-[rgba(255,105,1,0.18)]"
                            : "bg-[var(--bg)] border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--color-rail-mark)]"
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Subtle Indicator */}
                <div className="pt-4 mt-6 border-t border-[rgba(255,255,255,0.04)] flex items-center justify-between text-[11px] font-[var(--font-functional)] text-[var(--muted-soft)]">
                  <span>{category.skills.length} Keahlian Terdata</span>
                  <span className="text-[var(--accent)] text-[10px] font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                    TERVALIDASI
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
