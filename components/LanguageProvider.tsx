"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { content, type Content, type Lang } from "@/lib/content";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "tr" || saved === "en") {
      setLangState(saved);
    } else if (navigator.language.startsWith("tr")) {
      setLangState("tr");
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem("lang", next);
    document.documentElement.lang = next;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
