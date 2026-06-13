// ============================================================
//  EDIT THIS FILE - bütün site içeriği burada.
// ============================================================

export type Lang = "en" | "tr";

export interface ProjectStory {
  context: string;
  constraint: string;
  decision: string;
  outcome: string;
  lesson?: string;
}

export interface Project {
  name: string;
  tagline?: string;
  story: ProjectStory;
  stack: string[];
  link?: string;
  github?: string;
  links?: { label: string; url: string }[];
}

export interface ExperienceProject {
  name: string;
  tagline?: string;
  intro: string;
  highlights: string[];
  stack: string[];
  link?: string;
}

export type SummaryPart =
  | { type: "text"; value: string }
  | { type: "link"; label: string; url: string };

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  summary?: string;
  summaryParts?: SummaryPart[];
  project?: ExperienceProject;
}

export interface Content {
  nav: {
    experience: string;
    projects: string;
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
  experience: { heading: string; items: ExperienceEntry[] };
  projects: { heading: string; items: Project[] };
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
      experience: "Experience",
      projects: "Projects",
      writing: "Writing",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Onur Macit",
      title: "Backend Developer",
      intro:
        "I turn product requirements into reliable backends: APIs, data flows, and infra that holds up under real traffic.",
      note: "Full metrics and work history are in my CV. This site covers what I shipped and how I approached it.",
      cta: "Get in touch",
      ctaResume: "Resume ↓",
    },
    experience: {
      heading: "Experience",
      items: [
        {
          role: "Backend Developer",
          company: "Vyrin Lab",
          period: "2024 - Present",
          summary:
            "Sole backend developer on an early-stage product team. Own APIs, caching, and async pipelines for a live production product.",
          project: {
            name: "Apparelte",
            tagline: "Fashion social platform",
            intro:
              "Async media pipeline and Redis-layered feeds on a live Django monolith.",
            highlights: [
              "Upload latency: 3.2s → 480ms; ~70% fewer redundant feed queries",
              "Kept monolith over microservices; rejected GraphQL at this stage",
              "Fixed a publish/worker race with status gates and idempotent Celery jobs",
            ],
            stack: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "AWS"],
            link: "https://apparelte.com/",
          },
        },
        {
          role: "Freelance Developer",
          company: "Self-employed",
          period: "2023 - 2024",
          summaryParts: [
            {
              type: "text",
              value:
                "Built production web apps end to end for SMB clients, including ",
            },
            {
              type: "link",
              label: "korkmazelektrik",
              url: "https://korkmazelektrik.com",
            },
            { type: "text", value: " and " },
            {
              type: "link",
              label: "albayraklarotoservis",
              url: "https://albayraklarotoservis.com",
            },
            {
              type: "text",
              value:
                ", from requirements through deployment on their own hosting.",
            },
          ],
        },
      ],
    },
    projects: {
      heading: "Projects",
      items: [
        {
          name: "Screenshotbeam",
          tagline: "Screenshot SaaS",
          story: {
            context:
              "Side-project SaaS: users submit URLs, system returns rendered screenshots. Needed concurrency, abuse protection, and billing from day one.",
            constraint:
              "Playwright in Python worked for a POC but cost ~200MB idle per instance and ~2s cold start on every new browser session. API could not wait on Chrome inside the request thread.",
            decision:
              "Split into FastAPI orchestrator (auth, billing, SSRF checks, 4-tier rate limiting) and a dedicated Go renderer (Fiber + go-rod) with a pre-warmed browser pool behind Redis. Rejected a Node Puppeteer pool; wanted to drop the Node dependency and control memory directly.",
            outcome:
              "Idle memory ~200MB → ~50MB per renderer. ~2s saved per render via warm browsers. SSRF protection, Stripe billing, S3 + CDN delivery integrated.",
            lesson:
              "Render service is paused today due to infra cost, but the split paid off: landing, auth, and billing stayed up without touching the renderer. Restart is a scaling problem, not a rewrite.",
          },
          stack: ["Go", "FastAPI", "PostgreSQL", "Redis", "Docker", "Stripe"],
          link: "https://www.screenshotbeam.com/",
          github: "https://github.com/onurmacit/screenshot-api",
          links: [{ label: "Source", url: "https://github.com/onurmacit/screenshot-api" }],
        },
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
      experience: "Deneyim",
      projects: "Projeler",
      writing: "Yazılar",
      contact: "İletişim",
    },
    hero: {
      greeting: "Merhaba, ben",
      name: "Onur Macit",
      title: "Backend Developer",
      intro:
        "Ürün ihtiyaçlarını güvenilir backend'lere çeviriyorum: API'ler, veri akışları ve gerçek trafikte ayakta kalan sistemler.",
      note: "Metrikler ve tam iş geçmişi CV'mde. Bu site ne ship ettiğimi ve nasıl yaklaştığımı anlatıyor.",
      cta: "İletişime geç",
      ctaResume: "CV ↓",
    },
    experience: {
      heading: "Deneyim",
      items: [
        {
          role: "Backend Developer",
          company: "Vyrin Lab",
          period: "2024 - Günümüz",
          summary:
            "Erken aşama ürün ekibinde tek backend developer. Canlı ürün için API, cache ve async pipeline'ları yönetiyorum.",
          project: {
            name: "Apparelte",
            tagline: "Moda sosyal platform",
            intro:
              "Canlı Django monolith üzerinde async media pipeline ve Redis katmanlı feed'ler.",
            highlights: [
              "Upload gecikmesi: 3.2s → 480ms; ~%70 daha az gereksiz feed sorgusu",
              "Microservice yerine monolith; bu aşamada GraphQL bilinçli olarak seçilmedi",
              "Publish/worker race'ini status gate ve idempotent Celery job'larıyla çözdüm",
            ],
            stack: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "AWS"],
            link: "https://apparelte.com/",
          },
        },
        {
          role: "Freelance Developer",
          company: "Serbest",
          period: "2023 - 2024",
          summaryParts: [
            {
              type: "link",
              label: "korkmazelektrik",
              url: "https://korkmazelektrik.com",
            },
            { type: "text", value: " ve " },
            {
              type: "link",
              label: "albayraklarotoservis",
              url: "https://albayraklarotoservis.com",
            },
            {
              type: "text",
              value:
                " dahil KOBİ müşterilere uçtan uca production web uygulamaları teslim ettim; gereksinimden kendi hosting'lerine deploy'a kadar.",
            },
          ],
        },
      ],
    },
    projects: {
      heading: "Projeler",
      items: [
        {
          name: "Screenshotbeam",
          tagline: "Screenshot SaaS",
          story: {
            context:
              "Yan proje SaaS: kullanıcı URL gönderiyor, sistem screenshot döndürüyor. Concurrency, abuse koruması ve billing baştan gerekliydi.",
            constraint:
              "Python Playwright POC için yeterliydi ama instance başına ~200MB idle ve her yeni browser session'da ~2s cold start vardı. API, request thread'i içinde Chrome bekleyemezdi.",
            decision:
              "FastAPI orchestrator (auth, billing, SSRF, 4 kademeli rate limiting) + Go renderer (Fiber + go-rod) ve Redis arkasında pre-warmed browser pool. Node Puppeteer pool'u reddettim; Node bağımlılığını ve belleği doğrudan kontrol etmek istedim.",
            outcome:
              "Idle bellek ~200MB → ~50MB per renderer. Warm browser ile render başına ~2s kazanç. SSRF koruması, Stripe billing, S3 + CDN entegrasyonu.",
            lesson:
              "Render servisi bugün infra maliyeti nedeniyle pause, ama ayrım işe yaradı: landing, auth ve billing renderer'a dokunmadan ayakta. Restart bir scaling meselesi, rewrite değil.",
          },
          stack: ["Go", "FastAPI", "PostgreSQL", "Redis", "Docker", "Stripe"],
          link: "https://www.screenshotbeam.com/",
          github: "https://github.com/onurmacit/screenshot-api",
          links: [{ label: "Kaynak Kod", url: "https://github.com/onurmacit/screenshot-api" }],
        },
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
