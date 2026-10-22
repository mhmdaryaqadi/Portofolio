"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#0123456789ABCDEF";

export function useScrambleText(text: string, durationMs: number = 150) {
  const [scrambledValue, setScrambledValue] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const displayText = scrambledValue ?? text;

  const scramble = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const length = text.length;
    let iteration = 0;
    // Fast snappy iterations
    const totalIterations = Math.max(length * 1.5, 6);
    const stepDuration = Math.max(Math.floor(durationMs / totalIterations), 10);

    intervalRef.current = setInterval(() => {
      setScrambledValue(() => {
        return text
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (idx < iteration / 1.5) {
              return text[idx];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
      });

      iteration += 1;

      if (iteration >= totalIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setScrambledValue(null);
      }
    }, stepDuration);
  }, [text, durationMs]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return { displayText, scramble };
}

export interface ScrambleTextProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
  durationMs?: number;
  trigger?: boolean;
}

export function ScrambleText({
  text,
  className = "",
  triggerOnHover = true,
  durationMs = 150,
  trigger,
}: ScrambleTextProps) {
  const { displayText, scramble } = useScrambleText(text, durationMs);

  useEffect(() => {
    if (trigger) {
      scramble();
    }
  }, [trigger, scramble]);

  return (
    <span
      onMouseEnter={triggerOnHover ? scramble : undefined}
      className={`inline-block font-mono select-none ${className}`}
    >
      {displayText}
    </span>
  );
}
