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
  };
  about: { heading: string; paragraphs: string[] };
  experience: { heading: string; items: Experience[] };
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
      title: "Backend Engineer",
      intro:
        "I design and build production backend systems that scale — multi-tenant SaaS architectures, async job pipelines, and APIs serving thousands of requests with sub-100ms response times.",
      availability: "Open to new opportunities",
      cta: "Get in touch",
      ctaSecondary: "See my work",
    },
    about: {
      heading: "About",
      paragraphs: [
        "I'm a backend engineer who thinks in systems. I design APIs not just to work, but to scale gracefully under load, fail predictably, and remain maintainable as teams grow. My focus is on distributed architectures, async processing pipelines, and database performance.",
        "I've built multi-tenant SaaS platforms from scratch, designed background job systems processing thousands of tasks daily, and implemented cloud-native media pipelines on AWS. I care deeply about observability, clean separation of concerns, and shipping reliable software.",
      ],
    },
    experience: {
      heading: "Experience",
      items: [
        {
          role: "Backend Engineer",
          company: "Vyrin Lab",
          period: "2024 — Present",
          summary:
            "Sole backend engineer for Apparelte, a fashion social platform. Designed the entire API layer from scratch — 40+ endpoints serving outfit feeds, social interactions, and discovery features. Implemented async media processing pipeline with AWS S3 + Celery that reduced image upload latency by 85% (from 3.2s to 480ms). Built a Redis-cached feed system handling personalized content delivery. Introduced query optimization patterns that cut average DB response from 120ms to 18ms on high-traffic endpoints.",
          stack: ["Django", "DRF", "PostgreSQL", "AWS S3", "Redis", "Celery"],
        },
        {
          role: "Freelance Software Developer",
          company: "Self-employed",
          period: "2023 — 2024",
          summary:
            "Delivered production websites for SMB clients. Built Korkmaz Elektrik's site with Next.js 15 — achieved 98/100 Lighthouse performance score through static generation, image optimization, and edge caching. Reduced client's customer inquiry response time by integrating an automated contact pipeline.",
          stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
        },
      ],
    },
    projects: {
      heading: "Selected Projects",
      viewProject: "View project",
      items: [
        {
          name: "Apparelte",
          description:
            "Fashion social platform backend serving 40+ API endpoints. Designed a feed algorithm that ranks outfits by engagement signals, built full-text search with category filtering, and implemented an async media pipeline (S3 + Celery) reducing upload latency by 85%. Multi-layer caching with Redis cut redundant DB queries by 70%.",
          stack: ["Django", "DRF", "PostgreSQL", "AWS S3", "Redis", "Celery", "JWT"],
          github: "https://github.com/onurmacit",
        },
        {
          name: "Screenshot API",
          description:
            "Production-grade SaaS with microservice architecture. Built a high-performance Go renderer (Fiber + go-rod) replacing Playwright — reduced memory usage from ~200MB to ~50MB idle and eliminated Node.js dependency. Browser pool with round-robin allocation removes cold-start latency (~2s saved per request). Features SSRF protection, network-level ad/tracker blocking, smart element capture with progressive scroll, 4-tier rate limiting, Stripe billing, and S3 storage with CDN.",
          stack: ["Go", "Fiber", "go-rod", "FastAPI", "PostgreSQL", "Redis", "Celery", "Docker", "Stripe"],
          github: "https://github.com/onurmacit/screenshot-api",
          link: "https://screenshot-web-five.vercel.app",
        },
        {
          name: "IMDb Clone",
          description:
            "Full-stack movie database with CI/CD pipeline. JWT auth with role-based access, Redis caching layer, Cloudinary media integration, and containerized deployment. GitHub Actions pipeline runs automated tests and linting on every PR — zero manual QA required for deploys.",
          stack: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "Docker", "GitHub Actions"],
          github: "https://github.com/onurmacit/imdb-clone-backend",
        },
        {
          name: "Korkmaz Elektrik",
          description:
            "Business website with 98/100 Lighthouse score. Static site generation for instant page loads, responsive design, and automated contact form pipeline. Delivered from design to production in under 2 weeks.",
          stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel"],
          github: "https://github.com/onurmacit/korkmazelektrik-website",
        },
        {
          name: "Albayraklar Oto Servis",
          description:
            "Corporate website for an auto repair shop. Built with zero dependencies — pure HTML/CSS/JS. SEO-optimized with JSON-LD structured data and sitemap, accessibility-first with ARIA labels and reduced-motion support. Integrated FormSubmit for lead capture and WhatsApp for instant customer contact.",
          stack: ["HTML5", "CSS3", "JavaScript", "SEO", "JSON-LD"],
          github: "https://github.com/onurmacit/arac-tamir-web",
        },
      ],
    },
    skills: {
      heading: "Skills",
      groups: [
        { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "C#", "SQL"] },
        { label: "Backend & APIs", items: ["Django", "DRF", "FastAPI", "REST API Design", "JWT", "WebSockets"] },
        { label: "Data & Caching", items: ["PostgreSQL", "Redis", "Celery", "Query Optimization", "Alembic"] },
        { label: "Cloud & Infrastructure", items: ["AWS (S3, EC2)", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"] },
        { label: "Monitoring & Quality", items: ["Prometheus", "Structured Logging", "Pytest", "Ruff", "Pre-commit"] },
        { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "TypeScript"] },
      ],
    },
    contact: {
      heading: "Contact",
      text: "I'm looking for backend or full-stack roles where I can build systems that matter. If you're solving interesting infrastructure problems, let's talk.",
      email: "onurmaciit@gmail.com",
      links: [
        { label: "GitHub", url: "https://github.com/onurmacit" },
        { label: "LinkedIn", url: "https://linkedin.com/in/onurmacit" },
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
      title: "Backend Engineer",
      intro:
        "Ölçeklenen production backend sistemleri tasarlıyorum — multi-tenant SaaS mimarileri, asenkron iş pipeline'ları ve sub-100ms yanıt süreleriyle binlerce isteğe hizmet veren API'lar.",
      availability: "Yeni fırsatlara açığım",
      cta: "İletişime geç",
      ctaSecondary: "Çalışmalarımı gör",
    },
    about: {
      heading: "Hakkımda",
      paragraphs: [
        "Sistemler düşünen bir backend mühendisiyim. API'ları sadece çalışsın diye değil, yük altında zarif şekilde ölçeklensin, öngörülebilir şekilde hata versin ve ekip büyüdükçe bakımı kolay kalsın diye tasarlıyorum. Odak noktam dağıtık mimariler, asenkron işleme pipeline'ları ve veritabanı performansı.",
        "Sıfırdan multi-tenant SaaS platformları kurdum, günlük binlerce görevi işleyen arka plan sistemleri tasarladım ve AWS üzerinde cloud-native medya pipeline'ları uyguladım. Gözlemlenebilirlik, temiz separation of concerns ve güvenilir yazılım teslimi benim için öncelikli.",
      ],
    },
    experience: {
      heading: "Deneyim",
      items: [
        {
          role: "Backend Engineer",
          company: "Vyrin Lab",
          period: "2024 — Günümüz",
          summary:
            "Apparelte moda sosyal platformunun tek backend mühendisiyim. API katmanının tamamını sıfırdan tasarladım — outfit feed'leri, sosyal etkileşimler ve keşif özellikleri sunan 40+ endpoint. AWS S3 + Celery ile asenkron medya işleme pipeline'ı kurarak resim yükleme gecikmesini %85 azalttım (3.2s'den 480ms'ye). Redis cache'li feed sistemi ile kişiselleştirilmiş içerik dağıtımı sağladım. Sorgu optimizasyonu ile yoğun trafikli endpoint'lerde ortalama DB yanıt süresini 120ms'den 18ms'ye düşürdüm.",
          stack: ["Django", "DRF", "PostgreSQL", "AWS S3", "Redis", "Celery"],
        },
        {
          role: "Freelance Yazılım Geliştirici",
          company: "Serbest",
          period: "2023 — 2024",
          summary:
            "KOBİ müşterilere production web siteleri teslim ettim. Korkmaz Elektrik sitesini Next.js 15 ile geliştirdim — statik üretim, görsel optimizasyonu ve edge caching ile Lighthouse performans puanı 98/100. Otomatik iletişim pipeline'ı entegre ederek müşteri yanıt süresini kısalttım.",
          stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
        },
      ],
    },
    projects: {
      heading: "Seçili Projeler",
      viewProject: "Projeyi gör",
      items: [
        {
          name: "Apparelte",
          description:
            "40+ API endpoint sunan moda sosyal platform backend'i. Etkileşim sinyallerine göre outfit sıralayan feed algoritması, kategori filtreli full-text arama ve yükleme gecikmesini %85 azaltan asenkron medya pipeline'ı (S3 + Celery) tasarladım. Redis ile çok katmanlı caching gereksiz DB sorgularını %70 azalttı.",
          stack: ["Django", "DRF", "PostgreSQL", "AWS S3", "Redis", "Celery", "JWT"],
          github: "https://github.com/onurmacit",
        },
        {
          name: "Screenshot API",
          description:
            "Microservice mimarili production-grade SaaS. Playwright yerine yüksek performanslı Go renderer (Fiber + go-rod) geliştirdim — bellek kullanımını ~200MB'dan ~50MB'a düşürdüm, Node.js bağımlılığını ortadan kaldırdım. Round-robin browser pool ile cold-start gecikmesini elimine ettim (istek başına ~2s tasarruf). SSRF koruması, ağ seviyesinde reklam/tracker engelleme, progresif scroll ile akıllı element yakalama, 4 kademeli rate limiting, Stripe faturalandırma ve CDN'li S3 depolama.",
          stack: ["Go", "Fiber", "go-rod", "FastAPI", "PostgreSQL", "Redis", "Celery", "Docker", "Stripe"],
          github: "https://github.com/onurmacit/screenshot-api",
          link: "https://screenshot-web-five.vercel.app",
        },
        {
          name: "IMDb Clone",
          description:
            "CI/CD pipeline'lı full-stack film veritabanı. Rol tabanlı JWT auth, Redis caching katmanı, Cloudinary medya entegrasyonu ve containerize deployment. GitHub Actions pipeline her PR'da otomatik test ve lint çalıştırır — deploy'lar için sıfır manuel QA.",
          stack: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "Docker", "GitHub Actions"],
          github: "https://github.com/onurmacit/imdb-clone-backend",
        },
        {
          name: "Korkmaz Elektrik",
          description:
            "Lighthouse puanı 98/100 olan iş web sitesi. Anında sayfa yüklemeleri için statik site üretimi, responsive tasarım ve otomatik iletişim formu pipeline'ı. Tasarımdan production'a 2 haftanın altında teslim.",
          stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel"],
          github: "https://github.com/onurmacit/korkmazelektrik-website",
        },
        {
          name: "Albayraklar Oto Servis",
          description:
            "Oto tamir dükkanı için kurumsal web sitesi. Sıfır bağımlılık — saf HTML/CSS/JS. JSON-LD structured data ve sitemap ile SEO optimize, ARIA etiketleri ve reduced-motion desteği ile erişilebilirlik öncelikli. Müşteri yakalama için FormSubmit ve anlık iletişim için WhatsApp entegrasyonu.",
          stack: ["HTML5", "CSS3", "JavaScript", "SEO", "JSON-LD"],
          github: "https://github.com/onurmacit/arac-tamir-web",
        },
      ],
    },
    skills: {
      heading: "Yetenekler",
      groups: [
        { label: "Diller", items: ["Python", "TypeScript", "JavaScript", "C#", "SQL"] },
        { label: "Backend & API", items: ["Django", "DRF", "FastAPI", "REST API Tasarımı", "JWT", "WebSocket"] },
        { label: "Veri & Cache", items: ["PostgreSQL", "Redis", "Celery", "Sorgu Optimizasyonu", "Alembic"] },
        { label: "Bulut & Altyapı", items: ["AWS (S3, EC2)", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"] },
        { label: "İzleme & Kalite", items: ["Prometheus", "Structured Logging", "Pytest", "Ruff", "Pre-commit"] },
        { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "TypeScript"] },
      ],
    },
    contact: {
      heading: "İletişim",
      text: "Önemli sistemler inşa edebileceğim backend veya full-stack roller arıyorum. İlginç altyapı problemleri çözüyorsanız konuşalım.",
      email: "onurmaciit@gmail.com",
      links: [
        { label: "GitHub", url: "https://github.com/onurmacit" },
        { label: "LinkedIn", url: "https://linkedin.com/in/onurmacit" },
      ],
    },
    footer: "Onur Macit tarafından tasarlandı ve geliştirildi",
  },
};
