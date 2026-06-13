export type Theme = "day" | "night";

/** Day mode: 06:00–18:59 local time. Night otherwise. */
export const DAY_START_HOUR = 6;
export const NIGHT_START_HOUR = 19;

export function themeFromHour(hour: number): Theme {
  return hour >= DAY_START_HOUR && hour < NIGHT_START_HOUR ? "day" : "night";
}

export function getCurrentTheme(): Theme {
  return themeFromHour(new Date().getHours());
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function msUntilNextThemeChange(): number {
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
