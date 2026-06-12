// ============================================================
//  EDIT THIS FILE — bütün site içeriği burada.
// ============================================================

export type Lang = "en" | "tr";

export interface Experience {
  role: string;
  company: string;
  period: string;
  context?: string;
  highlights: string[];
  stack: string[];
}

export interface Project {
  name: string;
  tagline?: string;
  description: string;
  stack: string[];
  highlights?: string[];
  architecture?: string;
  metric?: string;
  link?: string;
  github?: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface Content {
  nav: {
    work: string;
    experience: string;
    writing: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    intro: string;
    currentWork: string;
    focusAreas: string[];
    availability: string;
    cta: string;
    ctaSecondary: string;
    ctaResume: string;
  };
  stats: { value: string; label: string }[];
  featured: {
    label: string;
    project: Project & {
      links: { label: string; url: string }[];
    };
  };
  experience: { heading: string; items: Experience[] };
  products: { heading: string; items: Project[] };
  projects: { heading: string; items: Project[] };
  writing: {
    heading: string;
    text: string;
    cta: string;
    url: string;
    topics: string[];
  };
  education: { heading: string; items: Education[] };
  skills: { heading: string; groups: { label: string; items: string[] }[] };
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
      experience: "Experience",
      writing: "Writing",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Onur Macit",
      title: "Backend Developer",
      intro:
        "Building scalable APIs, distributed systems, and SaaS products with Python and Go.",
      currentWork: "Currently building Apparelte and Screenshotbeam.",
      focusAreas: [
        "Production Systems",
        "Distributed Systems",
        "Django / Go",
        "SaaS Builder",
      ],
      availability: "Open to new opportunities",
      cta: "Get in touch",
      ctaSecondary: "View Screenshotbeam",
      ctaResume: "Resume ↓",
    },
    stats: [
      { value: "2", label: "Production products" },
      { value: "40+", label: "APIs built" },
      { value: "85%", label: "Upload latency cut" },
      { value: "18ms", label: "DB response (optimized)" },
    ],
    featured: {
      label: "Featured Project",
      project: {
        name: "Screenshotbeam",
        tagline: "Production SaaS for website screenshots",
        description:
          "Distributed microservice architecture with a FastAPI orchestrator and a dedicated Go rendering engine. Built to handle concurrent screenshot jobs with browser pooling, rate limiting, and Stripe billing.",
        highlights: [
          "Go Renderer",
          "Browser Pool",
          "Redis",
          "PostgreSQL",
          "Stripe",
          "Docker",
          "SSRF Protection",
        ],
        metric: "Memory usage reduced by 75% (~200MB → ~50MB idle)",
        architecture: `User
  ↓
FastAPI API (auth, billing, jobs)
  ↓
Redis Queue
  ↓
Go Renderer (Fiber + go-rod)
  ↓
Browser Pool (Chrome instances)
  ↓
S3 + CDN`,
        stack: ["Go", "Fiber", "go-rod", "FastAPI", "PostgreSQL", "Redis", "Docker", "Stripe"],
        link: "https://www.screenshotbeam.com/",
        github: "https://github.com/onurmacit/screenshot-api",
        links: [
          { label: "Live Demo", url: "https://www.screenshotbeam.com/" },
          { label: "View Source", url: "https://github.com/onurmacit/screenshot-api" },
        ],
      },
    },
    experience: {
      heading: "Experience",
      items: [
        {
          role: "Backend Developer",
          company: "Vyrin Lab",
          period: "2024 — Present",
          context: "Early-stage product team · production SaaS",
          highlights: [
            "Sole backend developer for Apparelte, a production fashion social platform",
            "Built 40+ API endpoints handling thousands of daily requests",
            "Designed async media pipeline (AWS + Celery), reducing upload latency by 85%",
            "Designed Redis feed caching, cutting redundant DB queries by 70%",
            "Optimized high-traffic endpoints: 120ms → 18ms average DB response",
          ],
          stack: ["Django", "DRF", "PostgreSQL", "AWS", "Redis", "Celery"],
        },
        {
          role: "Freelance Software Developer",
          company: "Self-employed",
          period: "2023 — 2024",
          highlights: [
            "Delivered production web applications for SMB clients end to end",
          ],
          stack: ["Next.js", "TypeScript", "Vercel"],
        },
      ],
    },
    products: {
      heading: "Production Products",
      items: [
        {
          name: "Apparelte",
          tagline: "Fashion social platform · production",
          description:
            "Sole backend owner for a live social platform. Designed backend architecture, feed caching, async media processing, and API layer serving real users.",
          highlights: [
            "40+ REST endpoints",
            "Redis feed caching",
            "Celery media pipeline",
            "AWS storage",
          ],
          metric: "85% upload latency reduction · 70% fewer DB queries",
          architecture: `Mobile / Web Client
  ↓
Django REST API (40+ endpoints)
  ↓
Redis (feed cache)
  ↓
Celery Workers
  ↓
AWS S3 + PostgreSQL`,
          stack: ["Django", "DRF", "PostgreSQL", "AWS", "Redis", "Celery", "JWT"],
          link: "https://apparelte.com/",
        },
      ],
    },
    projects: {
      heading: "Other Projects",
      items: [
        {
          name: "IMDb Clone",
          description:
            "Movie database API with JWT auth, Redis caching, Cloudinary integration and CI/CD with automated tests on every PR.",
          stack: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "Docker", "GitHub Actions"],
          github: "https://github.com/onurmacit/imdb-clone-backend",
        },
      ],
    },
    writing: {
      heading: "Writing",
      text: "I write about backend architecture, performance optimization, and lessons from building production systems.",
      cta: "Read on Medium",
      url: "https://medium.com/@onurmaciit",
      topics: [
        "Redis Cache Strategies",
        "Celery Retry Patterns",
        "PostgreSQL Query Optimization",
        "Building Screenshotbeam Architecture",
      ],
    },
    education: {
      heading: "Education",
      items: [
        {
          degree: "Computer Programming",
          school: "Karadeniz Technical University",
          period: "2020 — 2024",
        },
      ],
    },
    skills: {
      heading: "Skills",
      groups: [
        { label: "Languages", items: ["Python", "Go", "TypeScript", "JavaScript", "C#", "SQL"] },
        { label: "Backend & APIs", items: ["Django", "DRF", "FastAPI", "Flask", "REST API Design", "JWT"] },
        { label: "Data & Caching", items: ["PostgreSQL", "Redis", "Celery", "Query Optimization", "Alembic"] },
        { label: "Cloud & Infrastructure", items: ["AWS", "Docker", "CI/CD", "GitHub Actions"] },
        { label: "Quality", items: ["Pytest", "Structured Logging"] },
      ],
    },
    contact: {
      heading: "Contact",
      text: "Looking for backend roles where I can own systems end to end. If you're building production SaaS, let's talk.",
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
      experience: "Deneyim",
      writing: "Yazılar",
      skills: "Yetenekler",
      contact: "İletişim",
    },
    hero: {
      greeting: "Merhaba, ben",
      name: "Onur Macit",
      title: "Backend Developer",
      intro:
        "Python ve Go ile ölçeklenebilir API'lar, dağıtık sistemler ve SaaS ürünleri geliştiriyorum.",
      currentWork: "Şu an Apparelte ve Screenshotbeam üzerinde çalışıyorum.",
      focusAreas: [
        "Production Systems",
        "Distributed Systems",
        "Django / Go",
        "SaaS Builder",
      ],
      availability: "Yeni fırsatlara açığım",
      cta: "İletişime geç",
      ctaSecondary: "Screenshotbeam'i gör",
      ctaResume: "CV ↓",
    },
    stats: [
      { value: "2", label: "Production ürün" },
      { value: "40+", label: "API endpoint" },
      { value: "%85", label: "Upload gecikmesi azaltıldı" },
      { value: "18ms", label: "DB yanıt (optimize)" },
    ],
    featured: {
      label: "Öne Çıkan Proje",
      project: {
        name: "Screenshotbeam",
        tagline: "Website screenshot'ları için production SaaS",
        description:
          "FastAPI orchestrator ve Go rendering engine ile dağıtık microservice mimarisi. Browser pooling, rate limiting ve Stripe billing ile concurrent screenshot işleri.",
        highlights: [
          "Go Renderer",
          "Browser Pool",
          "Redis",
          "PostgreSQL",
          "Stripe",
          "Docker",
          "SSRF Protection",
        ],
        metric: "Bellek kullanımı %75 azaltıldı (~200MB → ~50MB idle)",
        architecture: `User
  ↓
FastAPI API (auth, billing, jobs)
  ↓
Redis Queue
  ↓
Go Renderer (Fiber + go-rod)
  ↓
Browser Pool (Chrome instances)
  ↓
S3 + CDN`,
        stack: ["Go", "Fiber", "go-rod", "FastAPI", "PostgreSQL", "Redis", "Docker", "Stripe"],
        link: "https://www.screenshotbeam.com/",
        github: "https://github.com/onurmacit/screenshot-api",
        links: [
          { label: "Canlı Demo", url: "https://www.screenshotbeam.com/" },
          { label: "Kaynak Kod", url: "https://github.com/onurmacit/screenshot-api" },
        ],
      },
    },
    experience: {
      heading: "Deneyim",
      items: [
        {
          role: "Backend Developer",
          company: "Vyrin Lab",
          period: "2024 — Günümüz",
          context: "Erken aşama ürün ekibi · production SaaS",
          highlights: [
            "Apparelte'nin tek backend developer'ı — production moda sosyal platform",
            "Günde binlerce isteği karşılayan 40+ API endpoint geliştirdim",
            "AWS + Celery ile async medya pipeline'ı, upload gecikmesini %85 azalttı",
            "Redis feed caching ile gereksiz DB sorgularını %70 azalttı",
            "Yoğun trafikli endpoint'lerde DB yanıtını 120ms'den 18ms'ye düşürdüm",
          ],
          stack: ["Django", "DRF", "PostgreSQL", "AWS", "Redis", "Celery"],
        },
        {
          role: "Freelance Yazılım Geliştirici",
          company: "Serbest",
          period: "2023 — 2024",
          highlights: [
            "KOBİ müşterilere uçtan uca production web uygulamaları teslim ettim",
          ],
          stack: ["Next.js", "TypeScript", "Vercel"],
        },
      ],
    },
    products: {
      heading: "Production Ürünler",
      items: [
        {
          name: "Apparelte",
          tagline: "Moda sosyal platform · production",
          description:
            "Canlı sosyal platformun tek backend sahibi. Backend mimarisi, feed caching, async medya işleme ve gerçek kullanıcılara hizmet veren API katmanı.",
          highlights: [
            "40+ REST endpoint",
            "Redis feed cache",
            "Celery medya pipeline",
            "AWS depolama",
          ],
          metric: "%85 upload gecikmesi azaltma · %70 daha az DB sorgusu",
          architecture: `Mobile / Web Client
  ↓
Django REST API (40+ endpoint)
  ↓
Redis (feed cache)
  ↓
Celery Workers
  ↓
AWS S3 + PostgreSQL`,
          stack: ["Django", "DRF", "PostgreSQL", "AWS", "Redis", "Celery", "JWT"],
          link: "https://apparelte.com/",
        },
      ],
    },
    projects: {
      heading: "Diğer Projeler",
      items: [
        {
          name: "IMDb Clone",
          description:
            "JWT auth, Redis caching, Cloudinary entegrasyonu ve her PR'da otomatik test çalıştıran CI/CD pipeline'lı film veritabanı API'si.",
          stack: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "Docker", "GitHub Actions"],
          github: "https://github.com/onurmacit/imdb-clone-backend",
        },
      ],
    },
    writing: {
      heading: "Yazılar",
      text: "Backend mimarisi, performans optimizasyonu ve production sistemlerden çıkardığım dersler hakkında yazıyorum.",
      cta: "Medium'da oku",
      url: "https://medium.com/@onurmaciit",
      topics: [
        "Redis Cache Stratejileri",
        "Celery Retry Pattern'leri",
        "PostgreSQL Sorgu Optimizasyonu",
        "Screenshotbeam Mimarisi",
      ],
    },
    education: {
      heading: "Eğitim",
      items: [
        {
          degree: "Bilgisayar Programcılığı",
          school: "Karadeniz Teknik Üniversitesi",
          period: "2020 — 2024",
        },
      ],
    },
    skills: {
      heading: "Yetenekler",
      groups: [
        { label: "Diller", items: ["Python", "Go", "TypeScript", "JavaScript", "C#", "SQL"] },
        { label: "Backend & API", items: ["Django", "DRF", "FastAPI", "Flask", "REST API Tasarımı", "JWT"] },
        { label: "Veri & Cache", items: ["PostgreSQL", "Redis", "Celery", "Sorgu Optimizasyonu", "Alembic"] },
        { label: "Bulut & Altyapı", items: ["AWS", "Docker", "CI/CD", "GitHub Actions"] },
        { label: "Kalite", items: ["Pytest", "Structured Logging"] },
      ],
    },
    contact: {
      heading: "İletişim",
      text: "Sistemleri uçtan uca sahiplenebileceğim backend roller arıyorum. Production SaaS inşa ediyorsanız konuşalım.",
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
