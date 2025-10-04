"use client";

import { useCallback, useEffect, useState } from "react";

import {
  applyTheme,
  getActiveTheme,
  storeTheme,
  type Theme,
} from "@/lib/theme";

const sunIcon = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 5.25V3m0 18v-2.25M18.75 12H21m-18 0h2.25m12.034 6.784 1.59 1.59m-13.248 0 1.59-1.59M17.784 6.784l1.59-1.59m-13.248 0 1.59 1.59M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
    />
  </svg>
);

const moonIcon = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.75a8.25 8.25 0 0 1-10.5-10.5 8.25 8.25 0 1 0 10.5 10.5Z"
    />
  </svg>
);

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const active = getActiveTheme();
    applyTheme(active);
    setTheme(active);
  }, []);

  const handleToggle = useCallback(() => {
    setTheme((current) => {
      const nextTheme = current === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      storeTheme(nextTheme);
      return nextTheme;
    });
  }, []);

  const isDark = theme === "dark";
  const label = isDark ? "ライトモードに切り替え" : "ダークモードに切り替え";

  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-300 bg-white text-slate-800 shadow-sm transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/60 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-100 dark:hover:bg-slate-700"
      aria-label={label}
      title={label}
      aria-pressed={isDark}
      onClick={handleToggle}
    >
      {isDark ? sunIcon : moonIcon}
    </button>
  );
}
