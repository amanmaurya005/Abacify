import type { Metadata } from "next";
import { AboutSection } from "@/components/home/about-section";

export const metadata: Metadata = {
  title: "About Abacify | AI-First Builder Ecosystem",
  description:
    "Discover why Abacify is built for AI-first builders, full stack integrators, real-world outcomes, and career transformation.",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutSection />
    </main>
  );
}
