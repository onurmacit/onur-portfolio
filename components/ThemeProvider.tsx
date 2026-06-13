"use client";

import { useEffect } from "react";
import { applyTheme, getCurrentTheme, msUntilNextThemeChange } from "@/lib/theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const sync = () => applyTheme(getCurrentTheme());

    sync();

    let timeoutId: ReturnType<typeof setTimeout>;
    const schedule = () => {
      timeoutId = setTimeout(() => {
        sync();
        schedule();
      }, msUntilNextThemeChange());
    };

    schedule();

    const onVisibility = () => {
      if (document.visibilityState === "visible") sync();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return children;
}
