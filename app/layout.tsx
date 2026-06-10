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
  title: "Onur Macit — Software Engineer",
  description:
    "Portfolio of Onur Macit, a software engineer building reliable, thoughtfully crafted software.",
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
