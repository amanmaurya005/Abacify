import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { StickyApply } from "@/components/sticky-apply";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const metadata: Metadata = {
  title: "Abacify | AI-First Fullstack Integration Internship",
  description:
    "AI-first internship platform for full stack integrators learning frontend, backend, APIs, deployment, testing, scalability, and production architecture.",
  keywords: [
    "AI internship",
    "full stack integration",
    "AI-first learning",
    "developer community",
    "production architecture",
  ],
  openGraph: {
    title: "Abacify | AI-First Fullstack Integration",
    description: "Create. Integrate. Understand. Build production systems with AI-first workflows.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} dark`}>
      <body className="min-h-screen bg-midnight text-white antialiased">
        <Navbar />
        {children}
        <Footer />
        <StickyApply />
      </body>
    </html>
  );
}
