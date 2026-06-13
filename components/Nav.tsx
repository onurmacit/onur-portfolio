"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function Nav() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#work", label: t.nav.work },
    { href: "#writing", label: t.nav.writing },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <a href="#top" className="font-serif text-lg font-medium tracking-tight">
          OM<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-7 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <LangToggle lang={lang} setLang={setLang} />
        </div>

        <div className="flex items-center gap-4 sm:hidden">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-px w-5 bg-foreground transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-foreground transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-b border-line bg-background px-6 pb-6 sm:hidden">
          <div className="flex flex-col gap-4 pt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function LangToggle({
  lang,
  setLang,
}: {
  lang: "en" | "tr";
  setLang: (l: "en" | "tr") => void;
}) {
  return (
    <button
      onClick={() => setLang(lang === "en" ? "tr" : "en")}
      className="rounded-full border border-line px-3 py-1 text-xs font-medium tracking-wide text-muted transition-colors hover:border-accent hover:text-accent"
      aria-label="Switch language"
    >
      {lang === "en" ? "TR" : "EN"}
    </button>
  );
}
