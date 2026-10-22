"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { FolderGit2 } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");

  // Filter out flagship project as it has its own dedicated spotlight section
  const nonFlagshipProjects = projectsData.filter((p) => !p.isFlagship);

  const categories = [
    { label: "ALL PROJECTS", key: "ALL" },
    { label: "FULLSTACK WEB & POS", key: "WEB" },
    { label: "DESKTOP & SYSTEMS", key: "DESKTOP" },
    { label: "NETWORK & INFRA", key: "NETWORK" },
  ];

  const filteredProjects = nonFlagshipProjects.filter((project) => {
    if (selectedFilter === "ALL") return true;
    if (selectedFilter === "WEB")
      return (
        project.category.includes("WEB") ||
        project.category.includes("POINT OF SALE") ||
        project.category.includes("ACADEMIC")
      );
    if (selectedFilter === "DESKTOP")
      return project.category.includes("DESKTOP") || project.techStack.includes("Python");
    if (selectedFilter === "NETWORK")
      return project.category.includes("NETWORK") || project.category.includes("INFRASTRUCTURE");
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[var(--line)] relative bg-[var(--bg)]">
      <div className="max-w-[var(--frame)] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Section Category Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--surface)] border border-[var(--line)] rounded-[2px] mb-6">
            <span className="w-2 h-2 bg-[var(--accent)] rounded-[1px] shadow-[0_0_8px_rgba(255,105,1,0.6)]" />
            <span className="font-[var(--font-functional)] text-xs font-semibold tracking-[0.14em] text-[var(--muted)] uppercase">
              SOFTWARE &amp; INFRASTRUCTURE SHOWCASE
            </span>
          </div>

          {/* Section Headline */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="font-[var(--font-heading)] text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--fg)] leading-tight">
                ENGINEERED SOLUTIONS &amp; REPOSITORIES.
              </h2>
              <p className="font-[var(--font-reading)] text-base sm:text-lg text-[var(--muted)] max-w-2xl mt-3">
                Kompilasi sistem web skala produksi, perkakas desktop berbasis OS, dan konfigurasi topologi jaringan fisik.
              </p>
            </div>

            {/* Repository Counter with live ping */}
            <div className="flex items-center gap-2.5 px-4 py-2 bg-[var(--surface)] border border-[var(--line)] rounded-xs font-[var(--font-functional)] text-xs text-[var(--muted)]">
              <FolderGit2 size={16} className="text-[var(--accent)]" />
              <span>SHOWING {filteredProjects.length} CURATED PROJECTS</span>
            </div>
          </div>

          {/* Filter Navigation Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[var(--line)]">
            {categories.map((cat) => {
              const isActive = selectedFilter === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedFilter(cat.key)}
                  className={`px-3.5 py-1.5 rounded-xs text-xs font-[var(--font-functional)] font-semibold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[var(--accent)] text-[var(--on-accent)] shadow-[0_0_12px_rgba(255,105,1,0.35)]"
                      : "bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--fg)] border border-[var(--line)] hover:border-[var(--color-rail-mark)]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Projects Grid with Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delayMs={idx * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
