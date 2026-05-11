import Link from "next/link";
import { ArrowRight, CalendarCheck, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SystemVisual } from "@/components/home/system-visual";

const trust = ["Internship Guaranteed From Day 1", "Pay After Placement Model", "PPO & Placement Support"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-radial-grid pt-32">
      <div className="absolute inset-0 bg-mesh-line bg-[length:64px_64px] opacity-[0.05]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-5 pb-24 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <Reveal>
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-4 py-2 text-sm font-semibold text-neon-cyan">
              <Sparkles className="h-4 w-4" />
              From AI to Production.
            </div>
            <h1 className="text-balance font-heading text-5xl font-semibold leading-tight text-white md:text-7xl">
              AI-FIRST FULLSTACK INTEGRATION
            </h1>
            <p className="mt-6 max-w-2xl font-heading text-2xl font-medium leading-snug text-slate-100 md:text-3xl">
              Not Just Traditional Web Development. Become a Full Stack Integrator.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Learn AI workflows, backend systems, APIs, frontend integration, deployment, testing, scalability,
              and production architecture through a real builder ecosystem.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/apply">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  <CalendarCheck className="h-4 w-4" /> Book Free Counseling
                </Link>
              </Button>
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {trust.map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-neon-cyan" />
                  <span className="text-sm font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <SystemVisual />
        </Reveal>
      </div>
    </section>
  );
}
