"use client";

import React from "react";

interface BorderBeamProps {
  className?: string;
  duration?: number;
  beamColor?: string;
}

export function BorderBeam({
  className = "",
  duration = 4,
  beamColor = "#ff6901",
}: BorderBeamProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -inset-[1px] rounded-[inherit] overflow-hidden ${className}`}
    >
      <div
        className="absolute -inset-[200%] animate-[spin_linear_infinite]"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 320deg, ${beamColor} 350deg, transparent 360deg)`,
          animationDuration: `${duration}s`,
        }}
      />
      {/* Inner Mask to preserve background content */}
      <div className="absolute inset-[1px] rounded-[inherit] bg-[var(--surface)]" />
    </div>
  );
}
