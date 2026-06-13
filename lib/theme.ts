export type Theme = "day" | "night";
export type ThemePreference = "auto" | Theme;

export const THEME_STORAGE_KEY = "theme-preference";

/** Day mode: 06:00–18:59 local time. Night otherwise. */
export const DAY_START_HOUR = 6;
export const NIGHT_START_HOUR = 19;

export function themeFromHour(hour: number): Theme {
  return hour >= DAY_START_HOUR && hour < NIGHT_START_HOUR ? "day" : "night";
}

export function getAutoTheme(): Theme {
  return themeFromHour(new Date().getHours());
}

export function readStoredPreference(): ThemePreference {
  if (typeof window === "undefined") return "auto";
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "day" || stored === "night") return stored;
  return "auto";
}

export function resolveTheme(preference: ThemePreference): Theme {
  return preference === "auto" ? getAutoTheme() : preference;
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function storePreference(preference: ThemePreference) {
  if (preference === "auto") {
    localStorage.removeItem(THEME_STORAGE_KEY);
  } else {
    localStorage.setItem(THEME_STORAGE_KEY, preference);
  }
}

export function msUntilNextAutoThemeChange(): number {
  const now = new Date();
  const hour = now.getHours();
  const theme = themeFromHour(hour);
  const next = new Date(now);

  if (theme === "day") {
    next.setHours(NIGHT_START_HOUR, 0, 0, 0);
  } else if (hour >= NIGHT_START_HOUR) {
    next.setDate(next.getDate() + 1);
    next.setHours(DAY_START_HOUR, 0, 0, 0);
  } else {
    next.setHours(DAY_START_HOUR, 0, 0, 0);
  }

  return Math.max(next.getTime() - now.getTime(), 1000);
}
