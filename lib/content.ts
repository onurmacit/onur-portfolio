// ============================================================
//  EDIT THIS FILE — bütün site içeriği burada.
// ============================================================

export type Lang = "en" | "tr";

export interface TimelineEntry {
  role: string;
  company: string;
  period: string;
}

export interface Project {
  name: string;
  tagline?: string;
  description: string;
  caseStudy?: string[];
  stack: string[];
  metric?: string;
  link?: string;
  github?: string;
  links?: { label: string; url: string }[];
}

export interface Content {
  nav: {
    work: string;
    writing: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    intro: string;
    note: string;
    cta: string;
    ctaResume: string;
  };
  work: { heading: string };
  featured: { project: Project };
  timeline: { heading: string; items: TimelineEntry[] };
  products: { items: Project[] };
  writing: {
    heading: string;
    text: string;
    cta: string;
    url: string;
  };
  contact: {
    heading: string;
    text: string;
    email: string;
    links: { label: string; url: string }[];
  };
  footer: string;
}

export const content: Record<Lang, Content> = {
  en: {
    nav: {
      work: "Work",
      writing: "Writing",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Onur Macit",
      title: "Backend Developer",
      intro:
        "I build production backends with Python and Go. Sole backend for Apparelte and Screenshotbeam.",
      note: "Full metrics and work history are in my CV. This site covers what I shipped and how I approached it.",
      cta: "Get in touch",
      ctaResume: "Resume ↓",
    },
    work: { heading: "Work" },
    products: {
      items: [
        {
          name: "Apparelte",
          tagline: "Fashion social platform",
          description:
            "Live social platform. I own the backend: APIs, feed caching, and async media processing.",
          caseStudy: [
            "Uploads blocked requests at 3.2s — moved media to Celery + AWS.",
            "Feed hit the DB every load — added Redis with engagement-based invalidation.",
            "Result: 3.2s → 480ms uploads, 70% fewer DB queries, 18ms on hot endpoints.",
          ],
          metric: "85% upload latency reduction",
          stack: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "AWS"],
          link: "https://apparelte.com/",
        },
      ],
    },
    featured: {
      project: {
        name: "Screenshotbeam",
        tagline: "Screenshot SaaS",
        description:
          "FastAPI orchestrator + Go rendering engine. Browser pool, rate limiting, Stripe billing.",
        caseStudy: [
          "Playwright used ~200MB/instance with ~2s cold starts per render.",
          "Replaced with Go (Fiber + go-rod) and a pre-warmed browser pool.",
          "Result: ~50MB idle memory, ~2s saved per request, SSRF protection, 4-tier rate limiting.",
        ],
        metric: "75% memory reduction (200MB → 50MB idle)",
        stack: ["Go", "FastAPI", "PostgreSQL", "Redis", "Docker", "Stripe"],
        link: "https://www.screenshotbeam.com/",
        github: "https://github.com/onurmacit/screenshot-api",
        links: [{ label: "Source", url: "https://github.com/onurmacit/screenshot-api" }],
      },
    },
    timeline: {
      heading: "Background",
      items: [
        { role: "Backend Developer", company: "Vyrin Lab", period: "2024 — Present" },
        { role: "Freelance Developer", company: "Self-employed", period: "2023 — 2024" },
      ],
    },
    writing: {
      heading: "Writing",
      text: "I write about backend architecture and production lessons on Medium.",
      cta: "Medium",
      url: "https://medium.com/@onurmaciit",
    },
    contact: {
      heading: "Contact",
      text: "Open to backend roles where I can own systems end to end.",
      email: "onurmaciit@gmail.com",
      links: [
        { label: "GitHub", url: "https://github.com/onurmacit" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/onur-macit-b42a19223/" },
        { label: "Medium", url: "https://medium.com/@onurmaciit" },
        { label: "X", url: "https://x.com/onurmaciit" },
      ],
    },
    footer: "Designed & built by Onur Macit",
  },

  tr: {
    nav: {
      work: "İşler",
      writing: "Yazılar",
      contact: "İletişim",
    },
    hero: {
      greeting: "Merhaba, ben",
      name: "Onur Macit",
      title: "Backend Developer",
      intro:
        "Python ve Go ile production backend geliştiriyorum. Apparelte ve Screenshotbeam'in tek backend sahibiyim.",
      note: "Metrikler ve tam iş geçmişi CV'mde. Bu site ne ship ettiğimi ve nasıl yaklaştığımı anlatıyor.",
      cta: "İletişime geç",
      ctaResume: "CV ↓",
    },
    work: { heading: "İşler" },
    products: {
      items: [
        {
          name: "Apparelte",
          tagline: "Moda sosyal platform",
          description:
            "Canlı sosyal platform. Backend bende: API'lar, feed cache ve async medya işleme.",
          caseStudy: [
            "Upload'lar 3.2s'de request'i blokluyordu — medyayı Celery + AWS'e taşıdım.",
            "Feed her yüklemede DB'ye gidiyordu — engagement tabanlı Redis cache ekledim.",
            "Sonuç: 3.2s → 480ms upload, %70 daha az DB sorgusu, hot endpoint'lerde 18ms.",
          ],
          metric: "%85 upload gecikmesi azaltma",
          stack: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "AWS"],
          link: "https://apparelte.com/",
        },
      ],
    },
    featured: {
      project: {
        name: "Screenshotbeam",
        tagline: "Screenshot SaaS",
        description:
          "FastAPI orchestrator + Go rendering engine. Browser pool, rate limiting, Stripe billing.",
        caseStudy: [
          "Playwright ~200MB/instance ve render başına ~2s cold start alıyordu.",
          "Go (Fiber + go-rod) ve pre-warmed browser pool ile değiştirdim.",
          "Sonuç: ~50MB idle bellek, istek başına ~2s tasarruf, SSRF koruması, 4 kademeli rate limiting.",
        ],
        metric: "%75 bellek azaltma (200MB → 50MB idle)",
        stack: ["Go", "FastAPI", "PostgreSQL", "Redis", "Docker", "Stripe"],
        link: "https://www.screenshotbeam.com/",
        github: "https://github.com/onurmacit/screenshot-api",
        links: [{ label: "Kaynak Kod", url: "https://github.com/onurmacit/screenshot-api" }],
      },
    },
    timeline: {
      heading: "Arka Plan",
      items: [
        { role: "Backend Developer", company: "Vyrin Lab", period: "2024 — Günümüz" },
        { role: "Freelance Developer", company: "Serbest", period: "2023 — 2024" },
      ],
    },
    writing: {
      heading: "Yazılar",
      text: "Backend mimarisi ve production derslerini Medium'da paylaşıyorum.",
      cta: "Medium",
      url: "https://medium.com/@onurmaciit",
    },
    contact: {
      heading: "İletişim",
      text: "Sistemleri uçtan uca sahiplenebileceğim backend roller arıyorum.",
      email: "onurmaciit@gmail.com",
      links: [
        { label: "GitHub", url: "https://github.com/onurmacit" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/onur-macit-b42a19223/" },
        { label: "Medium", url: "https://medium.com/@onurmaciit" },
        { label: "X", url: "https://x.com/onurmaciit" },
      ],
    },
    footer: "Onur Macit tarafından tasarlandı ve geliştirildi",
  },
};
