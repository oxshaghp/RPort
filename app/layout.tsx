import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/Lensprovider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// Metadata for SEO and social sharing
export const metadata: Metadata = {
  title:
    "Creative Visual Designer & AI Branding Expert | Professional Portfolio",
  description:
    "A modern, motion-rich portfolio website showcasing professional visual identity design, AI-powered advertising, creative editing, and data analysis services. High-end animations, immersive UI, bilingual (AR/EN), and crafted to represent a bold, innovative designer",
  keywords: [
    "visual designer",
    "branding designer",
    "AI ads designer",
    "portfolio",
    "motion design",
    "data analysis",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
