import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
    "Backend developer building scalable APIs, distributed systems, and SaaS products with Python and Go. Screenshotbeam & Apparelte.",
  metadataBase: new URL("https://onurmacit.dev"),
  openGraph: {
    title: "Onur Macit — Backend Developer",
    description:
      "Backend developer focused on Django, Go and distributed systems. Production SaaS with real users.",
    url: "https://onurmacit.dev",
    siteName: "Onur Macit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onur Macit — Backend Developer",
    description:
      "Backend developer focused on Django, Go and production SaaS.",
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
        <Analytics />
      </body>
    </html>
  );
}
