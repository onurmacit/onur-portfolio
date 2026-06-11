"use client";

import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 pt-16">
      <Reveal>
        <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-line bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {t.hero.availability}
        </span>
      </Reveal>

      <Reveal delay={100}>
        <p className="mb-3 text-lg text-muted">{t.hero.greeting}</p>
        <h1 className="font-serif text-5xl font-medium leading-[1.1] tracking-tight sm:text-7xl">
          {t.hero.name}
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-4 font-serif text-2xl text-muted sm:text-3xl">{t.hero.title}</p>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {t.hero.intro}
        </p>
      </Reveal>

      <Reveal delay={300}>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            {t.hero.cta}
          </a>
          <a
            href="#projects"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {t.hero.ctaSecondary}
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {t.hero.ctaResume}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <SectionHeading number="01" title={t.about.heading} />
      </Reveal>
      <div className="space-y-5">
        {t.about.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 100}>
            <p className="max-w-2xl leading-relaxed text-muted">{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  const { t } = useLanguage();
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <SectionHeading number="02" title={t.experience.heading} />
      </Reveal>
      <ol className="relative space-y-12 border-l border-line pl-8">
        {t.experience.items.map((job, i) => (
          <li key={i} className="relative">
            <span
              className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent"
              aria-hidden
            />
            <Reveal delay={i * 100}>
              <p className="text-xs font-medium uppercase tracking-widest text-subtle">
                {job.period}
              </p>
              <h3 className="mt-2 font-serif text-xl font-medium">
                {job.role} <span className="text-muted">· {job.company}</span>
              </h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{job.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Education() {
  const { t } = useLanguage();
  return (
    <section id="education" className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <SectionHeading number="03" title={t.education.heading} />
      </Reveal>
      {t.education.items.map((item, i) => (
        <Reveal key={i} delay={i * 100}>
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl font-medium">{item.degree}</h3>
              <p className="mt-1 text-muted">{item.school}</p>
            </div>
            <p className="shrink-0 text-xs font-medium uppercase tracking-widest text-subtle">
              {item.period}
            </p>
          </div>
        </Reveal>
      ))}
    </section>
  );
}

export function Projects() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <SectionHeading number="04" title={t.projects.heading} />
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {t.projects.items.map((project, i) => {
          const href = project.link ?? project.github;
          return (
            <Reveal key={project.name} delay={i * 100} className={i === 0 ? "sm:col-span-2" : ""}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-line bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_40px_-12px_rgba(154,52,18,0.15)]"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-serif text-xl font-medium group-hover:text-accent">
                    {project.name}
                  </h3>
                  <ArrowIcon />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <SectionHeading number="05" title={t.skills.heading} />
      </Reveal>
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {t.skills.groups.map((group, i) => (
          <Reveal key={group.label} delay={i * 80}>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-subtle">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <SectionHeading number="06" title={t.contact.heading} />
      </Reveal>
      <Reveal delay={100}>
        <p className="max-w-xl leading-relaxed text-muted">{t.contact.text}</p>
        <a
          href={`mailto:${t.contact.email}`}
          className="mt-8 inline-block font-serif text-2xl font-medium text-foreground underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent sm:text-3xl"
        >
          {t.contact.email}
        </a>
        <div className="mt-10 flex gap-6">
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
      </Reveal>
    </section>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-8">
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

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-white/70 px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="mt-1 shrink-0 text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
      aria-hidden
    >
      <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
