import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Onur Macit — Backend Developer",
  description:
    "Backend developer building production systems that scale — multi-tenant SaaS, async pipelines, and high-performance APIs with Go and Python.",
  metadataBase: new URL("https://onurmacit.dev"),
  openGraph: {
    title: "Onur Macit — Backend Developer",
    description:
      "Backend developer building production systems that scale — multi-tenant SaaS, async pipelines, and high-performance APIs.",
    url: "https://onurmacit.dev",
    siteName: "Onur Macit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onur Macit — Backend Developer",
    description:
      "Backend developer building production systems that scale.",
    creator: "@onurmaciit",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} antialiased`}>
      <body className="min-h-screen">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
