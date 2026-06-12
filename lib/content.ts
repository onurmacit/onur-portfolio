// ============================================================
//  EDIT THIS FILE — bütün site içeriği burada.
//  Kendi bilgilerinle güncelle: isim, deneyim, projeler vs.
// ============================================================

export type Lang = "en" | "tr";

export interface Experience {
  role: string;
  company: string;
  period: string;
  summary: string;
  stack: string[];
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  link?: string;
  github?: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface Content {
  nav: { about: string; experience: string; projects: string; skills: string; contact: string };
  hero: {
    greeting: string;
    name: string;
    title: string;
    intro: string;
    availability: string;
    cta: string;
    ctaSecondary: string;
    ctaResume: string;
  };
  about: { heading: string; paragraphs: string[] };
  experience: { heading: string; items: Experience[] };
  education: { heading: string; items: Education[] };
  projects: { heading: string; viewProject: string; items: Project[] };
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
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Onur Macit",
      title: "Backend Developer",
      intro:
        "Backend developer focused on Django, Go, distributed systems, async processing, caching strategies, and scalable API design. Building production SaaS products serving real users.",
      availability: "Open to new opportunities",
      cta: "Get in touch",
      ctaSecondary: "See my work",
      ctaResume: "Resume ↓",
    },
    about: {
      heading: "About",
      paragraphs: [
        "I'm a backend developer who owns system design end to end. I design backend architecture, async processing pipelines, caching strategies, and APIs built to perform under real production load.",
        "I've been the sole backend developer on a live SaaS product, processing thousands of daily requests and background tasks. My focus is performance optimization, reliability, and shipping software that scales with the product.",
      ],
    },
    experience: {
      heading: "Experience",
      items: [
        {
          role: "Backend Developer",
          company: "Vyrin Lab",
          period: "2024 — Present",
          summary:
            "Sole backend developer for Apparelte, a production fashion social platform with real users. Early-stage product team. Designed and maintained backend architecture for 40+ API endpoints handling thousands of daily requests. Designed event-driven background task workflows with Celery workers processing thousands of media tasks daily. Built async media pipeline (AWS + Celery) reducing upload latency by 85% (3.2s → 480ms). Designed Redis caching strategy cutting redundant DB queries by 70%. Optimized high-traffic endpoints, reducing average DB response from 120ms to 18ms.",
          stack: ["Django", "DRF", "PostgreSQL", "AWS", "Redis", "Celery"],
        },
        {
          role: "Freelance Software Developer",
          company: "Self-employed",
          period: "2023 — 2024",
          summary:
            "Delivered production web applications for SMB clients, from requirements to deployment on Vercel.",
          stack: ["Next.js", "TypeScript", "Vercel"],
        },
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
    projects: {
      heading: "Selected Projects",
      viewProject: "View project",
      items: [
        {
          name: "Screenshotbeam",
          description:
            "Production-grade screenshot SaaS with distributed microservice architecture: FastAPI orchestrator for auth, billing and job management + dedicated Go rendering service. Built concurrent rendering in Go (Fiber + go-rod), replacing Playwright and reducing idle memory from ~200MB to ~50MB. Browser-pool architecture eliminates renderer cold starts (~2s saved per request). Features 4-tier rate limiting, Stripe billing, SSRF protection, and S3 storage with CDN.",
          stack: ["Go", "Fiber", "go-rod", "FastAPI", "PostgreSQL", "Redis", "Docker", "Stripe"],
          github: "https://github.com/onurmacit/screenshot-api",
          link: "https://www.screenshotbeam.com/",
        },
        {
          name: "IMDb Clone",
          description:
            "Movie database API with JWT auth, Redis caching, Cloudinary integration and CI/CD pipeline with automated tests on every PR.",
          stack: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "Docker", "GitHub Actions"],
          github: "https://github.com/onurmacit/imdb-clone-backend",
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
      text: "I'm looking for backend or full-stack roles where I can build systems that matter. If you're solving interesting infrastructure problems, let's talk.",
      email: "onurmaciit@gmail.com",
      links: [
        { label: "GitHub", url: "https://github.com/onurmacit" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/onur-macit-b42a19223/" },
        { label: "Medium", url: "https://medium.com/@onurmaciit" },
        { label: "X", url: "https://x.com/onurmaciit" },
        { label: "Instagram", url: "https://www.instagram.com/onuurmacit/" },
      ],
    },
    footer: "Designed & built by Onur Macit",
  },

  tr: {
    nav: {
      about: "Hakkımda",
      experience: "Deneyim",
      projects: "Projeler",
      skills: "Yetenekler",
      contact: "İletişim",
    },
    hero: {
      greeting: "Merhaba, ben",
      name: "Onur Macit",
      title: "Backend Developer",
      intro:
        "Django, Go, dağıtık sistemler, async processing, caching stratejileri ve ölçeklenebilir API tasarımına odaklanan backend developer. Gerçek kullanıcıları olan production SaaS ürünleri geliştiriyorum.",
      availability: "Yeni fırsatlara açığım",
      cta: "İletişime geç",
      ctaSecondary: "Çalışmalarımı gör",
      ctaResume: "CV ↓",
    },
    about: {
      heading: "Hakkımda",
      paragraphs: [
        "Sistem tasarımını uçtan uca sahiplenen bir backend developer'ım. Backend mimarisi, async processing pipeline'ları, caching stratejileri ve gerçek production yükü altında performans gösteren API'lar tasarlıyorum.",
        "Canlı bir SaaS ürününün tek backend developer'ı olarak günde binlerce istek ve arka plan görevi işleyen sistemler kurdum. Odak noktam performans optimizasyonu, güvenilirlik ve ürünle birlikte ölçeklenen yazılım.",
      ],
    },
    experience: {
      heading: "Deneyim",
      items: [
        {
          role: "Backend Developer",
          company: "Vyrin Lab",
          period: "2024 — Günümüz",
          summary:
            "Apparelte'nin tek backend developer'ıyım; gerçek kullanıcıları olan production moda sosyal platformu. Erken aşama ürün ekibi. Günde binlerce isteği karşılayan 40+ API endpoint için backend mimarisini tasarladım ve sürdürdüm. Celery worker'larla günde binlerce medya görevi işleyen event-driven workflow'lar kurdum. AWS + Celery ile async medya pipeline'ı kurarak yükleme gecikmesini %85 azalttım (3.2s → 480ms). Redis caching stratejisi ile gereksiz DB sorgularını %70 azalttım. Yoğun trafikli endpoint'lerde ortalama DB yanıt süresini 120ms'den 18ms'ye düşürdüm.",
          stack: ["Django", "DRF", "PostgreSQL", "AWS", "Redis", "Celery"],
        },
        {
          role: "Freelance Yazılım Geliştirici",
          company: "Serbest",
          period: "2023 — 2024",
          summary:
            "KOBİ müşterilere gereksinimlerden Vercel deploy'una kadar production web uygulamaları teslim ettim.",
          stack: ["Next.js", "TypeScript", "Vercel"],
        },
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
    projects: {
      heading: "Seçili Projeler",
      viewProject: "Projeyi gör",
      items: [
        {
          name: "Screenshotbeam",
          description:
            "Dağıtık microservice mimarili production screenshot SaaS: auth, billing ve job management için FastAPI orchestrator + Go rendering servisi. Go (Fiber + go-rod) ile concurrent rendering, Playwright yerine geçirildi, idle bellek ~200MB'dan ~50MB'a düştü. Browser-pool mimarisi cold start'ı elimine ediyor (istek başına ~2s tasarruf). 4 kademeli rate limiting, Stripe billing, SSRF koruması ve CDN'li S3 depolama.",
          stack: ["Go", "Fiber", "go-rod", "FastAPI", "PostgreSQL", "Redis", "Docker", "Stripe"],
          github: "https://github.com/onurmacit/screenshot-api",
          link: "https://www.screenshotbeam.com/",
        },
        {
          name: "IMDb Clone",
          description:
            "JWT auth, Redis caching, Cloudinary entegrasyonu ve her PR'da otomatik test çalıştıran CI/CD pipeline'lı film veritabanı API'si.",
          stack: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "Docker", "GitHub Actions"],
          github: "https://github.com/onurmacit/imdb-clone-backend",
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
      text: "Önemli sistemler inşa edebileceğim backend veya full-stack roller arıyorum. İlginç altyapı problemleri çözüyorsanız konuşalım.",
      email: "onurmaciit@gmail.com",
      links: [
        { label: "GitHub", url: "https://github.com/onurmacit" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/onur-macit-b42a19223/" },
        { label: "Medium", url: "https://medium.com/@onurmaciit" },
        { label: "X", url: "https://x.com/onurmaciit" },
        { label: "Instagram", url: "https://www.instagram.com/onuurmacit/" },
      ],
    },
    footer: "Onur Macit tarafından tasarlandı ve geliştirildi",
  },
};
