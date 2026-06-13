"use client";

import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { Project } from "@/lib/content";

const SECTION = "mx-auto max-w-3xl px-6 py-16";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className={`${SECTION} flex flex-col justify-center pt-24 pb-10`}>
      <Reveal>
        <p className="mb-3 text-sm text-muted">{t.hero.greeting}</p>
        <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
          {t.hero.name}
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-3 font-serif text-xl text-muted sm:text-2xl">{t.hero.title}</p>
      </Reveal>

      <Reveal delay={80}>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{t.hero.intro}</p>
        <p className="mt-4 text-sm text-subtle">{t.hero.note}</p>
      </Reveal>

      <Reveal delay={160}>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            {t.hero.cta}
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {t.hero.ctaResume}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function Work() {
  const { t } = useLanguage();
  const projects: (Project & { links?: { label: string; url: string }[] })[] = [
    ...t.products.items,
    t.featured.project,
  ];

  return (
    <section id="work" className={SECTION}>
      <Reveal>
        <SectionHeading title={t.work.heading} />
      </Reveal>
      <div className="space-y-10">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 80}>
            <ProjectBlock project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Writing() {
  const { t } = useLanguage();
  return (
    <section id="writing" className={SECTION}>
      <Reveal>
        <SectionHeading title={t.writing.heading} />
      </Reveal>
      <Reveal delay={80}>
        <p className="max-w-xl leading-relaxed text-muted">{t.writing.text}</p>
        <a
          href={t.writing.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          {t.writing.cta} ↗
        </a>
      </Reveal>
    </section>
  );
}

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className={SECTION}>
      <Reveal>
        <SectionHeading title={t.contact.heading} />
      </Reveal>
      <Reveal delay={80}>
        <p className="max-w-xl leading-relaxed text-muted">{t.contact.text}</p>
        <a
          href={`mailto:${t.contact.email}`}
          className="mt-6 inline-block font-serif text-xl font-medium text-foreground underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent sm:text-2xl"
        >
          {t.contact.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-5">
          {t.contact.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {link.label} ↗
            </a>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-subtle">
            {t.timeline.heading}
          </p>
          <div className="space-y-2">
            {t.timeline.items.map((entry) => (
              <div
                key={entry.company}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm"
              >
                <p className="text-muted">
                  <span className="font-medium text-foreground">{entry.role}</span>
                  {" · "}
                  {entry.company}
                </p>
                <p className="text-xs uppercase tracking-widest text-subtle">{entry.period}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <p className="text-xs text-subtle">
          © {new Date().getFullYear()} — {t.footer}
        </p>
        <a href="#top" className="text-xs text-subtle transition-colors hover:text-accent">
          ↑
        </a>
      </div>
    </footer>
  );
}

function ProjectBlock({
  project,
}: {
  project: Project & { links?: { label: string; url: string }[] };
}) {
  const { lang } = useLanguage();
  const href = project.link ?? project.github;
  const extraLinks = project.links?.filter((link) => link.url !== href) ?? [];
  const visitLabel = lang === "tr" ? "Site ↗" : "Visit ↗";
  const sourceLabel = lang === "tr" ? "Kaynak ↗" : "Source ↗";

  return (
    <article className="border-b border-line pb-10 last:border-b-0 last:pb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-serif text-2xl font-medium">{project.name}</h3>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent transition-opacity hover:opacity-80"
          >
            {project.link ? visitLabel : sourceLabel}
          </a>
        )}
      </div>
      {project.tagline && <p className="mt-1 text-sm text-muted">{project.tagline}</p>}
      <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

      {project.caseStudy && project.caseStudy.length > 0 && (
        <ul className="mt-5 space-y-2">
          {project.caseStudy.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.metric && (
        <p className="mt-5 text-sm font-medium text-accent">{project.metric}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      {extraLinks.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4">
          {extraLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-subtle transition-colors hover:text-accent"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-white/70 px-2.5 py-0.5 text-xs text-muted">
      {children}
    </span>
  );
}
