"use client";

import React, { useState } from "react";
import { Project } from "@/types/portfolio";
import { ExternalLink, Terminal, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-xs border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-200 hover:border-[var(--accent)] hover:-translate-y-1 group shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 105, 1, 0.12), transparent 75%)`
            : "none",
        }}
      />

      <div className="relative z-10">
        {/* Category & Status Bar */}
        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[var(--line)]">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-[var(--accent)]" />
            <span className="font-[var(--font-functional)] text-[11px] font-semibold tracking-wider text-[var(--muted)] uppercase">
              {project.category}
            </span>
          </div>
          <span className="font-[var(--font-functional)] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-[2px] bg-[var(--bg)] border border-[var(--line)] text-[var(--ink)]">
            {project.status}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="font-[var(--font-heading)] text-lg sm:text-xl font-bold uppercase tracking-tight text-[var(--fg)] mb-3 group-hover:text-[var(--accent)] transition-colors flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight
            size={18}
            className="text-[var(--muted-soft)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </h3>

        {/* Description */}
        <p className="font-[var(--font-reading)] text-xs sm:text-sm text-[var(--prose)] leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6 space-y-1.5">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs font-[var(--font-reading)] text-[var(--muted)]">
                <span className="text-[var(--accent)] text-xs font-mono font-bold mt-0.5">▸</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10 pt-4 border-t border-[rgba(255,255,255,0.04)]">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 bg-[var(--bg)] border border-[var(--line)] rounded-xs text-[11px] font-[var(--font-functional)] text-[var(--muted)] group-hover:border-[var(--color-rail-mark)] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link */}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-[var(--font-functional)] font-semibold text-[var(--accent)] hover:text-[var(--fg)] transition-colors"
          >
            <GithubIcon size={13} />
            <span>LIHAT KODE SUMBER REPOSITORI</span>
            <ExternalLink size={11} />
          </a>
        )}
      </div>
    </div>
  );
}
