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
  why?: string;
  caseStudy?: string[];
  stack: string[];
  highlights?: string[];
  architecture?: string;
  metric?: string;
  link?: string;
  github?: string;
}

export interface Content {
  nav: {
    work: string;
    products: string;
    writing: string;
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
  timeline: { heading: string; items: TimelineEntry[] };
  products: { heading: string; items: Project[] };
  writing: {
    heading: string;
    text: string;
    topicsLabel: string;
    cta: string;
    url: string;
    topics: string[];
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
      products: "Products",
      writing: "Writing",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Onur Macit",
      title: "Backend Developer",
      intro:
        "I build backends that survive real traffic — not demos. Sole backend behind Apparelte (live social platform) and Screenshotbeam (screenshot SaaS I took from Playwright prototype to Go microservice).",
      currentWork:
        "Metrics, skills, and full work history live in my CV. This site is where I show how I think and what I shipped.",
      focusAreas: [
        "Memory-bound → Go",
        "Feed perf under load",
        "Solo backend ownership",
        "Async pipelines",
      ],
      availability: "Open to new opportunities",
      cta: "Get in touch",
      ctaSecondary: "View Screenshotbeam",
      ctaResume: "Resume ↓",
    },
    stats: [
      { value: "200→50MB", label: "Playwright → Go idle memory" },
      { value: "3.2s→480ms", label: "Async upload pipeline" },
      { value: "~2s", label: "Cold-start eliminated per render" },
      { value: "4-tier", label: "API rate limiting" },
    ],
    featured: {
      label: "Featured Project",
      project: {
        name: "Screenshotbeam",
        tagline: "Production SaaS for website screenshots",
        description:
          "Distributed microservice architecture with a FastAPI orchestrator and a dedicated Go rendering engine. Built to handle concurrent screenshot jobs with browser pooling, rate limiting, and Stripe billing.",
        why:
          "Started with Playwright in Python but hit memory limits (~200MB per instance) and cold-start latency (~2s per request). Replaced it with a Go renderer (Fiber + go-rod) and a pre-warmed browser pool — eliminated the Node.js dependency and cut idle memory to ~50MB.",
        caseStudy: [
          "Problem: Playwright renderer was memory-heavy and incurred a cold-start penalty on every new browser session.",
          "Decision: Split into FastAPI orchestrator (auth, billing, jobs) + dedicated Go rendering microservice with round-robin browser pool.",
          "Result: ~75% memory reduction, ~2s saved per request, SSRF protection, 4-tier rate limiting, and Stripe billing integrated.",
        ],
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
          { label: "Visit Site", url: "https://www.screenshotbeam.com/" },
          { label: "View Architecture", url: "https://github.com/onurmacit/screenshot-api" },
          { label: "View Source", url: "https://github.com/onurmacit/screenshot-api" },
        ],
      },
    },
    timeline: {
      heading: "Background",
      items: [
        {
          role: "Backend Developer",
          company: "Vyrin Lab",
          period: "2024 — Present",
        },
        {
          role: "Freelance Developer",
          company: "Self-employed",
          period: "2023 — 2024",
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
            "Sole backend owner for a live social platform. Designed backend architecture, engagement-based feed ranking, async media processing, and API layer serving real users.",
          why:
            "Built the entire backend solo — from API design to production deployment. The hardest problems were feed performance under load and async media processing without blocking the upload flow.",
          caseStudy: [
            "Problem: Image uploads blocked the request cycle (3.2s latency) and feed queries hit the DB on every page load.",
            "Decision: Offloaded media to Celery + AWS async pipeline; layered Redis cache with engagement-based feed invalidation.",
            "Result: 85% upload latency reduction (3.2s → 480ms), 70% fewer redundant DB queries, 18ms average response on hot endpoints.",
          ],
          highlights: [
            "40+ REST endpoints",
            "Engagement feed algorithm",
            "Redis feed caching",
            "Celery media pipeline",
          ],
          metric: "85% upload latency reduction · 70% fewer DB queries",
          architecture: `Mobile / Web Client
  ↓
Django REST API (40+ endpoints)
  ↓
Feed Engine (engagement signals + ranking)
  ↓
Redis (personalized feed cache)
  ↓
Celery Workers (async media)
  ↓
AWS S3 + PostgreSQL`,
          stack: ["Django", "DRF", "PostgreSQL", "AWS", "Redis", "Celery", "JWT"],
          link: "https://apparelte.com/",
        },
      ],
    },
    writing: {
      heading: "Writing",
      text:
        "Technical case studies from my production work live on this portfolio. I also explore backend architecture and performance topics on Medium.",
      topicsLabel: "Topics I explore",
      cta: "Medium Profile",
      url: "https://medium.com/@onurmaciit",
      topics: [
        "Redis Cache Strategies",
        "Celery Retry Patterns",
        "PostgreSQL Query Optimization",
        "Building Screenshotbeam Architecture",
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
      products: "Ürünler",
      writing: "Yazılar",
      contact: "İletişim",
    },
    hero: {
      greeting: "Merhaba, ben",
      name: "Onur Macit",
      title: "Backend Developer",
      intro:
        "Demo değil, gerçek trafiğe dayanan backend'ler inşa ediyorum. Apparelte'nin (canlı sosyal platform) ve Screenshotbeam'in (Playwright prototipinden Go microservice'e) tek backend sahibiyim.",
      currentWork:
        "Metrikler, yetenekler ve tam iş geçmişi CV'mde. Bu site nasıl düşündüğümü ve ne ship ettiğimi anlatıyor.",
      focusAreas: [
        "Bellek limiti → Go",
        "Feed performansı",
        "Tek backend sahipliği",
        "Async pipeline'lar",
      ],
      availability: "Yeni fırsatlara açığım",
      cta: "İletişime geç",
      ctaSecondary: "Screenshotbeam'i gör",
      ctaResume: "CV ↓",
    },
    stats: [
      { value: "200→50MB", label: "Playwright → Go idle bellek" },
      { value: "3.2s→480ms", label: "Async upload pipeline" },
      { value: "~2s", label: "Render cold-start kaldırıldı" },
      { value: "4 kademe", label: "API rate limiting" },
    ],
    featured: {
      label: "Öne Çıkan Proje",
      project: {
        name: "Screenshotbeam",
        tagline: "Website screenshot'ları için production SaaS",
        description:
          "FastAPI orchestrator ve Go rendering engine ile dağıtık microservice mimarisi. Browser pooling, rate limiting ve Stripe billing ile concurrent screenshot işleri.",
        why:
          "Python Playwright ile başladım ama bellek limitine (~200MB/instance) ve cold-start gecikmesine (~2s/istek) takıldım. Go renderer (Fiber + go-rod) ve pre-warmed browser pool ile değiştirdim — Node.js bağımlılığını kaldırdım, idle belleği ~50MB'a düşürdüm.",
        caseStudy: [
          "Problem: Playwright renderer bellek tüketimi yüksekti ve her yeni browser session'da cold-start cezası vardı.",
          "Karar: FastAPI orchestrator (auth, billing, jobs) + round-robin browser pool'lu Go rendering microservice.",
          "Sonuç: ~%75 bellek azaltma, istek başına ~2s tasarruf, SSRF koruması, 4 kademeli rate limiting ve Stripe billing.",
        ],
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
          { label: "Siteyi Gör", url: "https://www.screenshotbeam.com/" },
          { label: "Mimariyi Gör", url: "https://github.com/onurmacit/screenshot-api" },
          { label: "Kaynak Kod", url: "https://github.com/onurmacit/screenshot-api" },
        ],
      },
    },
    timeline: {
      heading: "Arka Plan",
      items: [
        {
          role: "Backend Developer",
          company: "Vyrin Lab",
          period: "2024 — Günümüz",
        },
        {
          role: "Freelance Developer",
          company: "Serbest",
          period: "2023 — 2024",
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
            "Canlı sosyal platformun tek backend sahibi. Backend mimarisi, etkileşim tabanlı feed sıralama, async medya işleme ve gerçek kullanıcılara hizmet veren API katmanı.",
          why:
            "Backend'i tek başıma kurdum — API tasarımından production deploy'a kadar. En zor problemler feed performansı ve upload akışını bloklamadan async medya işleme oldu.",
          caseStudy: [
            "Problem: Resim yüklemeleri request cycle'ı blokluyordu (3.2s gecikme) ve feed sorguları her sayfa yüklemesinde DB'ye gidiyordu.",
            "Karar: Medyayı Celery + AWS async pipeline'a taşıdım; engagement tabanlı feed invalidation ile Redis cache katmanı kurdum.",
            "Sonuç: %85 upload gecikmesi azaltma (3.2s → 480ms), %70 daha az gereksiz DB sorgusu, hot endpoint'lerde 18ms ortalama yanıt.",
          ],
          highlights: [
            "40+ REST endpoint",
            "Engagement feed algoritması",
            "Redis feed cache",
            "Celery medya pipeline",
          ],
          metric: "%85 upload gecikmesi azaltma · %70 daha az DB sorgusu",
          architecture: `Mobile / Web Client
  ↓
Django REST API (40+ endpoint)
  ↓
Feed Engine (engagement signals + ranking)
  ↓
Redis (personalized feed cache)
  ↓
Celery Workers (async media)
  ↓
AWS S3 + PostgreSQL`,
          stack: ["Django", "DRF", "PostgreSQL", "AWS", "Redis", "Celery", "JWT"],
          link: "https://apparelte.com/",
        },
      ],
    },
    writing: {
      heading: "Yazılar",
      text:
        "Production çalışmalarımdan teknik case study'ler bu portfolyoda. Backend mimarisi ve performans konularını Medium'da da paylaşıyorum.",
      topicsLabel: "İncelediğim konular",
      cta: "Medium Profili",
      url: "https://medium.com/@onurmaciit",
      topics: [
        "Redis Cache Stratejileri",
        "Celery Retry Pattern'leri",
        "PostgreSQL Sorgu Optimizasyonu",
        "Screenshotbeam Mimarisi",
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
