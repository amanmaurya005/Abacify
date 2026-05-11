"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  CircuitBoard,
  Code2,
  Compass,
  GraduationCap,
  Network,
  Rocket,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

const highlights = ["Build with AI", "Integrate Everything", "Ship Real Projects", "Grow Your Career"];

const uniqueCards = [
  {
    title: "AI-FIRST APPROACH",
    description: "Learn using the power of Claude, Codex & advanced AI workflows.",
    icon: Bot,
  },
  {
    title: "FULL STACK INTEGRATOR",
    description: "Go beyond frontend & backend. Learn to connect, integrate and build complete systems.",
    icon: Network,
  },
  {
    title: "INDUSTRY READY",
    description: "Real-world projects, tools and workflows to make you job and future ready.",
    icon: BriefcaseBusiness,
  },
  {
    title: "INTERNSHIP GUARANTEED",
    description: "Learn by building, ship real projects and grow with industry mentors.",
    icon: GraduationCap,
  },
  {
    title: "PAY AFTER PLACEMENT",
    description: "Zero financial pressure. Pay only when you start earning.",
    icon: Compass,
  },
  {
    title: "CAREER TRANSFORMATION",
    description: "We focus on your growth, placements and long-term success.",
    icon: Rocket,
  },
];

const floatingLabels = [
  { label: "AI-FIRST LEARNING", className: "left-0 top-10" },
  { label: "FULL STACK INTEGRATION", className: "right-0 top-32" },
  { label: "REAL WORLD OUTCOMES", className: "bottom-12 left-8" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink px-5 py-24 lg:px-8">
      <div className="absolute inset-0 bg-mesh-line bg-[length:56px_56px] opacity-[0.04]" />
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-neon-purple/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-neon-cyan">NOT JUST ANOTHER COURSE.</p>
              <h2 className="mt-4 font-heading text-4xl font-semibold text-white md:text-6xl">
                WHY{" "}
                <span className="bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
                  ABACIFY?
                </span>
              </h2>
              <p className="mt-6 max-w-3xl font-heading text-2xl font-medium leading-snug text-slate-100">
                We don&apos;t teach you to code. We teach you to integrate, build and create real-world impact using
                the power of AI.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Abacify is for the next generation of builders who want more than traditional learning. We prepare you
                for the real world where AI, integrations and innovation come together.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    whileHover={{ y: -3 }}
                    className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-4 transition hover:border-neon-cyan/40 hover:bg-white/[0.07] hover:shadow-glow"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-neon-cyan transition group-hover:scale-110" />
                    <span className="font-semibold text-slate-100">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <AboutVisual />
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-neon-cyan">The Abacify Difference</p>
              <h3 className="mt-4 font-heading text-3xl font-semibold text-white md:text-5xl">
                Built for builders who want production-level momentum.
              </h3>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {uniqueCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Reveal key={card.title} delay={(index % 3) * 0.06}>
                    <Card className="group h-full p-6 transition duration-200 hover:-translate-y-2 hover:border-neon-cyan/35 hover:shadow-glow">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-neon-cyan/25 bg-neon-cyan/10 text-neon-cyan transition group-hover:border-neon-purple/50 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h4 className="mt-7 font-heading text-xl font-semibold text-white">{card.title}</h4>
                      <p className="mt-4 leading-7 text-slate-300">{card.description}</p>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="glow-border mt-20 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.08] via-neon-purple/10 to-neon-cyan/10 p-6 md:p-9">
            <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-300">At Abacify, we don&apos;t follow the old path.</p>
                <h3 className="mt-2 font-heading text-3xl font-semibold text-white md:text-5xl">WE BUILD NEW PATHS.</h3>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-neon-cyan">
                  ARE YOU READY TO BUILD THE FUTURE?
                </p>
              </div>
              <motion.div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-neon-cyan/35 bg-neon-cyan/10 text-neon-cyan shadow-glow"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              >
                <ArrowRight className="h-6 w-6" />
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutVisual() {
  return (
    <div className="relative mx-auto h-[460px] max-w-[520px]">
      <motion.div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon-cyan/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-neon-purple/35"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan/10 blur-2xl" />

      <motion.div
        className="glass absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl text-center shadow-glow"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <BrainCircuit className="h-12 w-12 text-neon-cyan" />
        <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-white">AI Core</p>
      </motion.div>

      {[0, 1, 2, 3, 4, 5].map((item) => (
        <motion.span
          key={item}
          className="absolute h-2 w-2 rounded-full bg-neon-cyan shadow-glow"
          style={{
            left: `${18 + item * 12}%`,
            top: `${18 + (item % 3) * 22}%`,
          }}
          animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.4, 0.8] }}
          transition={{ duration: 2.4 + item * 0.25, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {[
        { icon: Code2, className: "left-8 top-36", label: "Build" },
        { icon: Workflow, className: "right-10 top-48", label: "Integrate" },
        { icon: CircuitBoard, className: "bottom-20 left-1/2 -translate-x-1/2", label: "Ship" },
        { icon: Sparkles, className: "left-1/2 top-8 -translate-x-1/2", label: "Create" },
      ].map((node, index) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            className={`glass absolute ${node.className} flex min-w-28 items-center gap-3 rounded-xl px-4 py-3`}
            animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
            transition={{ duration: 4.8 + index, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="h-5 w-5 text-neon-cyan" />
            <span className="text-sm font-semibold text-white">{node.label}</span>
          </motion.div>
        );
      })}

      {floatingLabels.map((item, index) => (
        <motion.div
          key={item.label}
          className={`absolute ${item.className} rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-neon-cyan backdrop-blur-xl`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 + index * 0.08 }}
        >
          {item.label}
        </motion.div>
      ))}
    </div>
  );
}
