import { ApplyForm } from "@/components/apply-form";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

export default function ApplyPage() {
  return (
    <main className="bg-radial-grid px-5 pb-24 pt-32 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-neon-cyan">Apply Now</p>
            <h1 className="mt-4 font-heading text-4xl font-semibold text-white md:text-6xl">
              Apply For AI-First Internship Program
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Build real-world systems using AI-first workflows while learning side-by-side with internship exposure.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="glow-border mt-12 p-6 md:p-8">
            <ApplyForm />
          </Card>
        </Reveal>
      </div>
    </main>
  );
}
