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

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  summary: string;
  project?: Project;
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
        "I build production backends with Python and Go. Sole backend for Apparelte at Vyrin Lab and Screenshotbeam as a side project.",
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
            story: {
              context:
                "Live social product: scroll-heavy feed, image uploads from mobile, engagement signals driving ranking.",
              constraint:
                "Image processing inside the request cycle blocked responses for ~3.2s. Feed queries hit PostgreSQL on every page load. Staying a Django monolith; solo dev, deploy speed over service boundaries.",
              decision:
                "Moved media to a Celery + AWS async pipeline; API returns immediately with a job reference. Layered Redis for personalized feeds with narrow, engagement-based invalidation, not cache-the-whole-feed. Rejected GraphQL and microservices for this stage.",
              outcome:
                "Upload path: 3.2s → 480ms. ~70% fewer redundant feed queries. Hot endpoints down to ~18ms average DB response.",
              lesson:
                "Race condition in production: a post could surface in the feed before Celery committed the media URL. Publish and worker completion were racing. Fixed with a post status gate (`media_ready` must be committed before feed invalidation), `select_for_update` on publish, and Celery idempotency keys per post so client retries don't enqueue duplicate jobs.",
            },
            stack: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "AWS"],
            link: "https://apparelte.com/",
          },
        },
        {
          role: "Freelance Developer",
          company: "Self-employed",
          period: "2023 - 2024",
          summary:
            "Delivered production web applications for SMB clients end to end, from requirements to deployment on Vercel.",
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
        "Python ve Go ile production backend geliştiriyorum. Vyrin Lab'de Apparelte'nin, yan projem Screenshotbeam'in tek backend sahibiyim.",
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
            story: {
              context:
                "Canlı sosyal ürün: feed scroll ağırlıklı, mobilde görsel upload, engagement sinyalleriyle sıralama.",
              constraint:
                "Görsel işleme request içindeydi ve yanıtı ~3.2s bloke ediyordu. Feed sorguları her sayfa yüklemesinde PostgreSQL'e gidiyordu. Tek developer olduğum için Django monolith'te kaldım; deploy hızı, service boundary çizmekten önce geldi.",
              decision:
                "Medyayı Celery + AWS async pipeline'a taşıdım; API hemen job referansı döndürüyor. Kişiselleştirilmiş feed için Redis katmanı, tüm feed'i değil, dar engagement tabanlı invalidation. Bu aşamada GraphQL ve microservice'i bilinçli olarak seçmedim.",
              outcome:
                "Upload yolu: 3.2s → 480ms. ~%70 daha az gereksiz feed sorgusu. Hot endpoint'lerde ~18ms ortalama DB yanıtı.",
              lesson:
                "Production'da race condition: post, Celery media URL'ini commit etmeden feed'de görünebiliyordu. Publish ile worker completion yarışıyordu. `media_ready` commit edilmeden feed invalidation yok, publish'te `select_for_update`, post başına Celery idempotency key ile client retry'ların duplicate job üretmesini kestim.",
            },
            stack: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "AWS"],
            link: "https://apparelte.com/",
          },
        },
        {
          role: "Freelance Developer",
          company: "Serbest",
          period: "2023 - 2024",
          summary:
            "KOBİ müşterilere uçtan uca production web uygulamaları teslim ettim; gereksinimden Vercel deploy'a kadar.",
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
