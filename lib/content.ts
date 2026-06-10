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
      title: "Software Engineer",
      intro:
        "I build reliable, thoughtfully crafted software — from clean backend architectures to interfaces people actually enjoy using.",
      availability: "Open to new opportunities",
      cta: "Get in touch",
      ctaSecondary: "See my work",
    },
    about: {
      heading: "About",
      paragraphs: [
        "I'm a software engineer who cares about the details — readable code, sensible architecture, and products that solve real problems. I enjoy working across the stack and learning whatever the problem demands.",
        "When I'm not coding, I'm usually exploring new tools, contributing to side projects, or reading about software design.",
      ],
    },
    experience: {
      heading: "Experience",
      items: [
        {
          role: "Software Engineer",
          company: "Acme Corp",
          period: "2024 — Present",
          summary:
            "Building and maintaining customer-facing web applications. Led the migration of a legacy monolith to a modular service architecture, cutting deploy times by 60%.",
          stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
        },
        {
          role: "Backend Developer",
          company: "Startup XYZ",
          period: "2022 — 2024",
          summary:
            "Designed REST APIs serving 100k+ daily requests. Introduced automated testing and CI pipelines that reduced production incidents significantly.",
          stack: ["Python", "Django", "Docker", "AWS"],
        },
        {
          role: "Software Engineering Intern",
          company: "Tech Company",
          period: "2021 — 2022",
          summary:
            "Contributed to internal tooling and dashboards. Shipped features end-to-end under mentorship of senior engineers.",
          stack: ["JavaScript", "Vue.js", "MySQL"],
        },
      ],
    },
    projects: {
      heading: "Selected Projects",
      viewProject: "View project",
      items: [
        {
          name: "Project One",
          description:
            "A full-stack web application that helps teams track and visualize their workflows in real time.",
          stack: ["Next.js", "TypeScript", "PostgreSQL"],
          github: "https://github.com/onurmacit",
        },
        {
          name: "Project Two",
          description:
            "An open-source CLI tool that automates repetitive development tasks with a simple, composable API.",
          stack: ["Go", "Cobra"],
          github: "https://github.com/onurmacit",
        },
        {
          name: "Project Three",
          description:
            "A mobile-first app exploring offline-first data sync and local-first architecture patterns.",
          stack: ["React Native", "SQLite"],
          github: "https://github.com/onurmacit",
        },
      ],
    },
    skills: {
      heading: "Skills",
      groups: [
        { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"] },
        { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
        { label: "Backend", items: ["Node.js", "Django", "REST APIs", "PostgreSQL", "Redis"] },
        { label: "Tools", items: ["Git", "Docker", "AWS", "CI/CD", "Linux"] },
      ],
    },
    contact: {
      heading: "Contact",
      text: "I'm currently open to new roles and interesting projects. If you'd like to work together or just say hi, my inbox is always open.",
      email: "onur@example.com",
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
      title: "Yazılım Mühendisi",
      intro:
        "Güvenilir ve özenle tasarlanmış yazılımlar geliştiriyorum — temiz backend mimarilerinden, kullanması keyifli arayüzlere kadar.",
      availability: "Yeni fırsatlara açığım",
      cta: "İletişime geç",
      ctaSecondary: "Çalışmalarımı gör",
    },
    about: {
      heading: "Hakkımda",
      paragraphs: [
        "Detaylara önem veren bir yazılım mühendisiyim — okunabilir kod, mantıklı mimari ve gerçek problemleri çözen ürünler benim için öncelikli. Full-stack çalışmayı ve problemin gerektirdiği her şeyi öğrenmeyi seviyorum.",
        "Kod yazmadığım zamanlarda genellikle yeni araçlar keşfediyor, yan projelere katkıda bulunuyor veya yazılım tasarımı üzerine okuyorum.",
      ],
    },
    experience: {
      heading: "Deneyim",
      items: [
        {
          role: "Yazılım Mühendisi",
          company: "Acme Corp",
          period: "2024 — Günümüz",
          summary:
            "Müşteriye dönük web uygulamaları geliştiriyorum. Legacy monolitin modüler servis mimarisine taşınmasına liderlik ederek deploy sürelerini %60 kısalttım.",
          stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
        },
        {
          role: "Backend Geliştirici",
          company: "Startup XYZ",
          period: "2022 — 2024",
          summary:
            "Günlük 100k+ isteğe hizmet veren REST API'lar tasarladım. Otomatik test ve CI süreçleri kurarak production hatalarını ciddi oranda azalttım.",
          stack: ["Python", "Django", "Docker", "AWS"],
        },
        {
          role: "Yazılım Mühendisliği Stajyeri",
          company: "Teknoloji Şirketi",
          period: "2021 — 2022",
          summary:
            "Şirket içi araçlar ve panellere katkıda bulundum. Kıdemli mühendislerin mentorluğunda uçtan uca özellikler geliştirdim.",
          stack: ["JavaScript", "Vue.js", "MySQL"],
        },
      ],
    },
    projects: {
      heading: "Seçili Projeler",
      viewProject: "Projeyi gör",
      items: [
        {
          name: "Proje Bir",
          description:
            "Ekiplerin iş akışlarını gerçek zamanlı takip edip görselleştirmesine yardımcı olan full-stack bir web uygulaması.",
          stack: ["Next.js", "TypeScript", "PostgreSQL"],
          github: "https://github.com/onurmacit",
        },
        {
          name: "Proje İki",
          description:
            "Tekrarlayan geliştirme görevlerini basit ve esnek bir API ile otomatikleştiren açık kaynak bir CLI aracı.",
          stack: ["Go", "Cobra"],
          github: "https://github.com/onurmacit",
        },
        {
          name: "Proje Üç",
          description:
            "Offline-first veri senkronizasyonu ve local-first mimari desenlerini keşfeden mobil öncelikli bir uygulama.",
          stack: ["React Native", "SQLite"],
          github: "https://github.com/onurmacit",
        },
      ],
    },
    skills: {
      heading: "Yetenekler",
      groups: [
        { label: "Diller", items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"] },
        { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
        { label: "Backend", items: ["Node.js", "Django", "REST API", "PostgreSQL", "Redis"] },
        { label: "Araçlar", items: ["Git", "Docker", "AWS", "CI/CD", "Linux"] },
      ],
    },
    contact: {
      heading: "İletişim",
      text: "Şu anda yeni roller ve ilginç projelere açığım. Birlikte çalışmak ya da sadece merhaba demek istersen, e-postam her zaman açık.",
      email: "onur@example.com",
      links: [
        { label: "GitHub", url: "https://github.com/onurmacit" },
        { label: "LinkedIn", url: "https://linkedin.com/in/onurmacit" },
      ],
    },
    footer: "Onur Macit tarafından tasarlandı ve geliştirildi",
  },
};
