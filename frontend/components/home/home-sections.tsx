import Link from "next/link";
import type React from "react";
import {
  Blocks,
  Bot,
  Brain,
  BriefcaseBusiness,
  Bug,
  Cloud,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  KeyRound,
  Layers3,
  Network,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Users,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const integrationTopics = [
  "frontend communication",
  "backend architecture",
  "API integrations",
  "deployment pipelines",
  "testing workflows",
  "cloud systems",
  "scalability concepts",
  "AI-assisted workflows",
];

const learnCards = [
  { title: "CREATE WITH AI", icon: Bot, copy: "Use Claude, Codex, prompts, context, and review loops to move from idea to working product." },
  { title: "INTEGRATE SYSTEMS", icon: Network, copy: "Connect interfaces, APIs, auth, databases, deployment, and observability as one production flow." },
  { title: "UNDERSTAND DEEPLY", icon: Brain, copy: "Reverse engineer decisions, debug behavior, reason about architecture, and build durable judgment." },
];

const topics = [
  ["Frontend Integration", Code2],
  ["Backend APIs", ServerIcon],
  ["Authentication Systems", KeyRound],
  ["Database Connectivity", Database],
  ["Deployment Pipelines", Rocket],
  ["Git & GitHub Workflow", GitBranch],
  ["Testing & Debugging", Bug],
  ["Security Fundamentals", ShieldCheck],
  ["Load Balancing Basics", Scale],
  ["AI Workflow Engineering", Bot],
  ["Prompt Engineering", Sparkles],
  ["Reverse Engineering Apps", Blocks],
  ["Cloud Deployment", Cloud],
  ["Production Architecture", Layers3],
] as const;

const benefits = [
  "Real Project Experience",
  "Team Collaboration",
  "Portfolio Development",
  "PPO Opportunities",
  "Placement Support",
  "Mentorship",
  "Startup Workflow Exposure",
  "AI Product Building",
];

const audiences = [
  ["College Students", GraduationCap],
  ["Beginners", Sparkles],
  ["Career Switchers", BriefcaseBusiness],
  ["Future AI Developers", Bot],
  ["Startup Enthusiasts", Rocket],
  ["Non-Traditional Learners", Users],
] as const;

function ServerIcon(props: React.ComponentProps<typeof TerminalSquare>) {
  return <TerminalSquare {...props} />;
}

export function HomeSections() {
  return (
    <>
      <section className="bg-midnight px-5 py-24 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Beyond Tutorials. Beyond Traditional Coding."
            title="Not Just Web Development"
            description="Traditional web development teaches isolated coding. Abacify teaches how modern software actually moves through teams, APIs, AI tools, deployment pipelines, and production constraints."
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-4">
          {integrationTopics.map((topic, index) => (
            <Reveal key={topic} delay={index * 0.04}>
              <Card className="h-full p-5 transition hover:-translate-y-1 hover:border-neon-cyan/35 hover:shadow-glow">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-neon-cyan">0{index + 1}</p>
                <p className="mt-5 text-lg font-semibold capitalize text-white">{topic}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Build With AI. Think Beyond." title="Why Traditional Learning Fails" />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <ComparisonCard
              title="Traditional Learning"
              items={["Learn syntax for months", "Tutorial dependency", "No deployment understanding", "Weak portfolio"]}
              muted
            />
            <ComparisonCard
              title="AI-First Learning"
              items={[
                "Build with Claude & Codex",
                "Real integrations",
                "API architecture",
                "DevOps basics",
                "Testing mindset",
                "Security fundamentals",
                "Industry workflows",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-midnight px-5 py-24 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Create. Integrate. Understand." title="How Students Learn" />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-3">
          {learnCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 0.08}>
                <Card className="h-full p-7 transition duration-200 hover:-translate-y-2 hover:border-neon-purple/40 hover:shadow-purpleGlow">
                  <Icon className="h-9 w-9 text-neon-cyan" />
                  <h3 className="mt-7 font-heading text-2xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{card.copy}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-ink px-5 py-24 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Learn Like Future Engineers." title="What You'll Learn" />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map(([topic, Icon], index) => (
            <Reveal key={topic} delay={(index % 4) * 0.04}>
              <Card className="flex h-full items-center gap-4 p-5 transition hover:-translate-y-1 hover:border-neon-cyan/35">
                <Icon className="h-5 w-5 shrink-0 text-neon-cyan" />
                <p className="font-medium text-slate-100">{topic}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-midnight px-5 py-24 lg:px-8">
        <div className="glow-border mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neon-purple/20 via-neon-blue/15 to-neon-cyan/10 p-8 md:p-12">
          <Reveal>
            <SectionHeading
              eyebrow="The Future of Development Starts Here."
              title="LEARN SIDE BY SIDE WITH A GUARANTEED INTERNSHIP"
              description="Work like a modern startup team from day one, with mentorship, accountability, and production-oriented builder rituals."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-lg border border-white/10 bg-white/[0.06] p-4 text-sm font-semibold text-white">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="AI-First Learning for Real Builders."
                title="Learn First. Pay After Placement."
                description="A transparent, outcome-focused model built for serious learners who want career support, not empty certificates."
              />
              <div className="mt-10 grid gap-4">
                {["Learn", "Build", "Internship", "Placement", "Pay After Success"].map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-neon-cyan/30 bg-neon-cyan/10 font-bold text-neon-cyan">
                      {index + 1}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-neon-cyan/40 to-transparent" />
                    <p className="w-40 font-semibold text-white">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="glow-border">
              <CardHeader>
                <CardTitle className="text-3xl">Outcome-Driven Access</CardTitle>
                <p className="text-slate-300">Premium training, internship exposure, and placement support in one serious pathway.</p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Internship from Day 1",
                    "AI-first learning",
                    "Placement assistance",
                    "PPO opportunities",
                    "Guided portfolio building",
                    "Mock interviews",
                    "Mentorship",
                    "Career support included",
                  ].map((item) => (
                    <div key={item} className="rounded-lg border border-white/10 bg-white/[0.045] p-3 text-sm font-medium text-slate-100">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.16em] text-neon-cyan">
                  {["Student-Centric Model", "Outcome-Focused Learning", "Career Support Included", "Future-Ready Skills"].map((badge) => (
                    <span key={badge} className="rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-3 py-2">
                      {badge}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="bg-midnight px-5 py-24 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="From AI to Production." title="Who Is This For" />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(([audience, Icon]) => (
            <Card key={audience} className="flex items-center gap-4 p-6 transition hover:-translate-y-1 hover:border-neon-purple/35 hover:shadow-purpleGlow">
              <Icon className="h-6 w-6 text-neon-cyan" />
              <p className="font-heading text-xl font-semibold text-white">{audience}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-radial-grid px-5 py-28 text-center lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-neon-cyan">Build With AI. Think Beyond.</p>
            <h2 className="font-heading text-4xl font-semibold text-white md:text-6xl">
              STOP LEARNING OLD DEVELOPMENT METHODS. START BUILDING WITH AI-FIRST WORKFLOWS.
            </h2>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/apply">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function ComparisonCard({ title, items, muted = false }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <Reveal>
      <Card className={`h-full p-7 transition hover:-translate-y-1 ${muted ? "opacity-85" : "glow-border"}`}>
        <h3 className="font-heading text-2xl font-semibold text-white">{title}</h3>
        <div className="mt-6 grid gap-3">
          {items.map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </Card>
    </Reveal>
  );
}
