"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  applyTheme,
  msUntilNextAutoThemeChange,
  readStoredPreference,
  resolveTheme,
  storePreference,
  type Theme,
  type ThemePreference,
} from "@/lib/theme";

interface ThemeContextValue {
  preference: ThemePreference;
  theme: Theme;
  setPreference: (preference: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>("auto");
  const [theme, setTheme] = useState<Theme>("day");

  const syncTheme = useCallback((nextPreference: ThemePreference) => {
    const resolved = resolveTheme(nextPreference);
    applyTheme(resolved);
    setTheme(resolved);
  }, []);

  const setPreference = useCallback(
    (nextPreference: ThemePreference) => {
      storePreference(nextPreference);
      setPreferenceState(nextPreference);
      syncTheme(nextPreference);
    },
    [syncTheme],
  );

  useEffect(() => {
    const stored = readStoredPreference();
    setPreferenceState(stored);
    syncTheme(stored);
  }, [syncTheme]);

  useEffect(() => {
    if (preference !== "auto") return;

    let timeoutId: ReturnType<typeof setTimeout>;
    const schedule = () => {
      timeoutId = setTimeout(() => {
        syncTheme("auto");
        schedule();
      }, msUntilNextAutoThemeChange());
    };

    schedule();

    const onVisibility = () => {
      if (document.visibilityState === "visible") syncTheme("auto");
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [preference, syncTheme]);

  return (
    <ThemeContext.Provider value={{ preference, theme, setPreference }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
