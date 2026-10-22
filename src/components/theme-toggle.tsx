"use client";

import React, { useSyncExternalStore } from "react";
import { Sun, Moon, Laptop } from "lucide-react";

type ThemeMode = "light" | "dark" | "system";

function applyThemeToDOM(mode: ThemeMode) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (mode === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.setAttribute("data-theme", "system");
    root.style.colorScheme = prefersDark ? "dark" : "light";
  } else {
    root.setAttribute("data-theme", mode);
    root.style.colorScheme = mode;
  }
}

function subscribeTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    mediaQuery.removeEventListener("change", callback);
  };
}

function getThemeSnapshot(): ThemeMode {
  return (localStorage.getItem("theme") as ThemeMode) || "dark";
}

function getServerSnapshot(): ThemeMode {
  return "dark";
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerSnapshot);

  const handleSelect = (mode: ThemeMode) => {
    localStorage.setItem("theme", mode);
    applyThemeToDOM(mode);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div
      role="radiogroup"
      aria-label="Theme mode selector"
      className={`inline-flex items-center p-0.5 bg-[var(--surface)] border border-[var(--line)] rounded-xs ${className}`}
    >
      {/* Light Button */}
      <button
        type="button"
        role="radio"
        aria-checked={theme === "light"}
        aria-label="Light mode"
        title="Light mode"
        onClick={() => handleSelect("light")}
        className={`p-1.5 rounded-xs transition-all duration-150 flex items-center justify-center cursor-pointer ${
          theme === "light"
            ? "bg-[var(--accent)] text-[var(--on-accent)] shadow-[0_0_8px_rgba(255,105,1,0.4)]"
            : "text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--surface-raised)]"
        }`}
      >
        <Sun size={14} />
      </button>

      {/* Dark Button */}
      <button
        type="button"
        role="radio"
        aria-checked={theme === "dark"}
        aria-label="Dark mode"
        title="Dark mode"
        onClick={() => handleSelect("dark")}
        className={`p-1.5 rounded-xs transition-all duration-150 flex items-center justify-center cursor-pointer ${
          theme === "dark"
            ? "bg-[var(--accent)] text-[var(--on-accent)] shadow-[0_0_8px_rgba(255,105,1,0.4)]"
            : "text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--surface-raised)]"
        }`}
      >
        <Moon size={14} />
      </button>

      {/* System Button */}
      <button
        type="button"
        role="radio"
        aria-checked={theme === "system"}
        aria-label="System mode"
        title="Sync with system preference"
        onClick={() => handleSelect("system")}
        className={`p-1.5 rounded-xs transition-all duration-150 flex items-center justify-center cursor-pointer ${
          theme === "system"
            ? "bg-[var(--accent)] text-[var(--on-accent)] shadow-[0_0_8px_rgba(255,105,1,0.4)]"
            : "text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--surface-raised)]"
        }`}
      >
        <Laptop size={14} />
      </button>
    </div>
  );
}
