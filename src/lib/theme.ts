export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "wb-theme";

const isBrowser = typeof window !== "undefined";

export function getStoredTheme(): Theme | null {
  if (!isBrowser) {
    return null;
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : null;
}

export function storeTheme(theme: Theme) {
  if (!isBrowser) {
    return;
  }

  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  root.dataset.theme = theme;
}

export function getDefaultTheme(): Theme {
  return "dark";
}

export function getActiveTheme(): Theme {
  return getStoredTheme() ?? getDefaultTheme();
}
