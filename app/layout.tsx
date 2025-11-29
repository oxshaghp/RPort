import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BlobCursor from "@/components/BlobCursor";

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
  openGraph: {
    title:
      "Creative Visual Designer & AI Branding Expert | Professional Portfolio",
    description:
      "A modern, motion-rich portfolio website showcasing professional visual identity design, AI-powered advertising, creative editing, and data analysis services.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Creative Visual Designer & AI Branding Expert | Professional Portfolio",
    description:
      "A modern, motion-rich portfolio website showcasing professional visual identity design, AI-powered advertising, creative editing, and data analysis services.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BlobCursor
          blobType="circle"
          fillColor="#5227FF"
          trailCount={3}
          sizes={[60, 125, 75]}
          innerSizes={[20, 35, 25]}
          innerColor="rgba(255,255,255,0.8)"
          opacities={[0.6, 0.6, 0.6]}
          shadowColor="rgba(0,0,0,0.75)"
          shadowBlur={5}
          shadowOffsetX={10}
          shadowOffsetY={10}
          filterStdDeviation={30}
          useFilter={true}
          fastDuration={0.1}
          slowDuration={0.5}
          zIndex={1}
        />
        {children}
      </body>
    </html>
  );
}
