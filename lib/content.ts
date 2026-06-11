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
      title: "Backend Developer",
      intro:
        "I build scalable backend systems and REST APIs — from authentication flows and cloud infrastructure to performant database architectures.",
      availability: "Open to new opportunities",
      cta: "Get in touch",
      ctaSecondary: "See my work",
    },
    about: {
      heading: "About",
      paragraphs: [
        "I'm a backend-focused developer who started with algorithm development and Java, then moved into C# and eventually found my home in Python and Django. I've shipped freelance projects spanning web development, game development, and desktop applications.",
        "Currently I'm building production backend systems — designing scalable APIs, implementing cloud-based media processing, and optimizing database performance. I care about clean architecture, reliable systems, and writing code that other developers enjoy working with.",
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
            "Leading backend development for Apparelte, a fashion social platform. Built a scalable REST API with JWT authentication, developed core features including outfit feeds, search, and category management. Implemented AWS-backed media processing and Celery background tasks for a smoother user experience.",
          stack: ["Django", "DRF", "PostgreSQL", "AWS", "Redis", "Celery"],
        },
        {
          role: "Freelance Software Developer",
          company: "Self-employed",
          period: "2023 — 2024",
          summary:
            "Delivered client projects end-to-end. Built the Korkmaz Elektrik website using Next.js 15 with responsive design, static site generation, dynamic content management, and contact form integration.",
          stack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
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
            "A fashion social platform where users discover outfits, share styles, and explore trends. I lead the backend — REST API, authentication, feed algorithms, media processing, and search infrastructure.",
          stack: ["Django", "DRF", "PostgreSQL", "AWS", "Redis", "Celery"],
          github: "https://github.com/onurmacit",
        },
        {
          name: "Screenshot API",
          description:
            "A SaaS tool that captures high-quality screenshots of any webpage via a simple API. Built the backend service and the Next.js landing page.",
          stack: ["TypeScript", "Next.js", "Node.js"],
          github: "https://github.com/onurmacit/screenshot-api",
          link: "https://github.com/onurmacit/screenshot-web",
        },
        {
          name: "Korkmaz Elektrik",
          description:
            "A professional business website for an electrical services company. Responsive design, static site generation for performance, and dynamic content management.",
          stack: ["Next.js", "TypeScript", "Tailwind CSS"],
          github: "https://github.com/onurmacit/korkmazelektrik-website",
        },
        {
          name: "IMDb Clone API",
          description:
            "A RESTful backend clone of IMDb built with Django. Features include movie/actor CRUD, user reviews, ratings, and token-based authentication.",
          stack: ["Python", "Django", "DRF", "SQLite"],
          github: "https://github.com/onurmacit/imdb-clone-backend",
        },
      ],
    },
    skills: {
      heading: "Skills",
      groups: [
        { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "C#", "SQL"] },
        { label: "Backend", items: ["Django", "DRF", "REST APIs", "JWT", "Celery", "Firebase"] },
        { label: "Databases & Caching", items: ["PostgreSQL", "Redis", "Query Optimization"] },
        { label: "Cloud & DevOps", items: ["AWS", "Docker", "Git", "CI/CD", "Linux"] },
        { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "HTML/CSS"] },
      ],
    },
    contact: {
      heading: "Contact",
      text: "I'm currently open to backend and full-stack roles. If you have an interesting project or opportunity, I'd love to hear about it.",
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
      title: "Backend Developer",
      intro:
        "Ölçeklenebilir backend sistemleri ve REST API'lar geliştiriyorum — kimlik doğrulama akışlarından bulut altyapısına, performanslı veritabanı mimarilerine kadar.",
      availability: "Yeni fırsatlara açığım",
      cta: "İletişime geç",
      ctaSecondary: "Çalışmalarımı gör",
    },
    about: {
      heading: "Hakkımda",
      paragraphs: [
        "Algoritma geliştirme ve Java ile programlamaya başladım, ardından C#'a geçtim ve sonunda Python ve Django'da kendimi buldum. Web geliştirme, oyun geliştirme ve masaüstü uygulama geliştirme alanlarında freelance projeler teslim ettim.",
        "Şu anda production backend sistemleri geliştiriyorum — ölçeklenebilir API tasarımı, bulut tabanlı medya işleme ve veritabanı performans optimizasyonu üzerine çalışıyorum. Temiz mimari, güvenilir sistemler ve diğer geliştiricilerin çalışmaktan keyif alacağı kod yazmak benim için öncelikli.",
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
            "Apparelte adlı moda sosyal platformunun backend geliştirmesine liderlik ediyorum. JWT kimlik doğrulamalı ölçeklenebilir REST API geliştirdim. Outfit feed'leri, arama ve kategori yönetimi gibi temel özellikleri tasarladım. AWS destekli medya işleme ve Celery arka plan görevleri uyguladım.",
          stack: ["Django", "DRF", "PostgreSQL", "AWS", "Redis", "Celery"],
        },
        {
          role: "Freelance Yazılım Geliştirici",
          company: "Serbest",
          period: "2023 — 2024",
          summary:
            "Müşteri projelerini uçtan uca teslim ettim. Korkmaz Elektrik web sitesini Next.js 15 ile responsive tasarım, statik site üretimi, dinamik içerik yönetimi ve iletişim formu entegrasyonu ile geliştirdim.",
          stack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
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
            "Kullanıcıların kıyafet keşfettiği, stil paylaştığı ve trendleri takip ettiği bir moda sosyal platformu. Backend'e liderlik ediyorum — REST API, kimlik doğrulama, feed algoritmaları, medya işleme ve arama altyapısı.",
          stack: ["Django", "DRF", "PostgreSQL", "AWS", "Redis", "Celery"],
          github: "https://github.com/onurmacit",
        },
        {
          name: "Screenshot API",
          description:
            "Basit bir API ile herhangi bir web sayfasının yüksek kaliteli ekran görüntüsünü yakalayan bir SaaS aracı. Backend servisi ve Next.js landing page'ini geliştirdim.",
          stack: ["TypeScript", "Next.js", "Node.js"],
          github: "https://github.com/onurmacit/screenshot-api",
          link: "https://github.com/onurmacit/screenshot-web",
        },
        {
          name: "Korkmaz Elektrik",
          description:
            "Bir elektrik hizmetleri şirketi için profesyonel iş web sitesi. Responsive tasarım, performans için statik site üretimi ve dinamik içerik yönetimi.",
          stack: ["Next.js", "TypeScript", "Tailwind CSS"],
          github: "https://github.com/onurmacit/korkmazelektrik-website",
        },
        {
          name: "IMDb Clone API",
          description:
            "Django ile geliştirilmiş IMDb RESTful backend klonu. Film/oyuncu CRUD, kullanıcı yorumları, puanlama ve token tabanlı kimlik doğrulama özellikleri içerir.",
          stack: ["Python", "Django", "DRF", "SQLite"],
          github: "https://github.com/onurmacit/imdb-clone-backend",
        },
      ],
    },
    skills: {
      heading: "Yetenekler",
      groups: [
        { label: "Diller", items: ["Python", "TypeScript", "JavaScript", "C#", "SQL"] },
        { label: "Backend", items: ["Django", "DRF", "REST API", "JWT", "Celery", "Firebase"] },
        { label: "Veritabanı & Cache", items: ["PostgreSQL", "Redis", "Sorgu Optimizasyonu"] },
        { label: "Bulut & DevOps", items: ["AWS", "Docker", "Git", "CI/CD", "Linux"] },
        { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "HTML/CSS"] },
      ],
    },
    contact: {
      heading: "İletişim",
      text: "Şu anda backend ve full-stack rollere açığım. İlginç bir projeniz veya fırsatınız varsa duymak isterim.",
      email: "onurmaciit@gmail.com",
      links: [
        { label: "GitHub", url: "https://github.com/onurmacit" },
        { label: "LinkedIn", url: "https://linkedin.com/in/onurmacit" },
      ],
    },
    footer: "Onur Macit tarafından tasarlandı ve geliştirildi",
  },
};
