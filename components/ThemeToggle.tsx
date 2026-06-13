"use client";

import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";
import type { Theme } from "@/lib/theme";

export function ThemeToggle() {
  const { preference, theme, setPreference } = useTheme();
  const { lang } = useLanguage();

  const labels =
    lang === "tr"
      ? { day: "Gündüz modu", night: "Gece modu", auto: "Otomatik mod" }
      : { day: "Day mode", night: "Night mode", auto: "Auto mode" };

  const select = (next: Theme) => {
    if (preference === next) {
      setPreference("auto");
      return;
    }
    setPreference(next);
  };

  return (
    <div
      className={`flex rounded-full border p-0.5 transition-colors ${
        preference === "auto" ? "border-line" : "border-accent/40"
      }`}
      role="group"
      aria-label={preference === "auto" ? labels.auto : labels[theme]}
    >
      <ThemeButton
        active={theme === "day"}
        manual={preference === "day"}
        label={labels.day}
        onClick={() => select("day")}
      >
        <SunIcon />
      </ThemeButton>
      <ThemeButton
        active={theme === "night"}
        manual={preference === "night"}
        label={labels.night}
        onClick={() => select("night")}
      >
        <MoonIcon />
      </ThemeButton>
    </div>
  );
}

function ThemeButton({
  active,
  manual,
  label,
  onClick,
  children,
}: {
  active: boolean;
  manual: boolean;
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`rounded-full p-1.5 transition-colors ${
        active
          ? manual
            ? "bg-foreground text-background"
            : "text-accent"
          : "text-muted hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-3.5 w-3.5"
      aria-hidden
    >
      <circle cx="10" cy="10" r="3.25" />
      <path strokeLinecap="round" d="M10 2.25v2M10 15.75v2M2.25 10h2M15.75 10h2M4.4 4.4l1.45 1.45M14.15 14.15l1.45 1.45M4.4 15.6l1.45-1.45M14.15 5.85l1.45-1.45" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-3.5 w-3.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.8 12.9a5.75 5.75 0 0 1-7.7-7.7 5.25 5.25 0 1 0 7.7 7.7Z"
      />
    </svg>
  );
}
