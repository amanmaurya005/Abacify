"use client";

import { motion } from "framer-motion";
import { Bot, Braces, Cloud, Database, GitBranch, Server, ShieldCheck, Terminal } from "lucide-react";

const nodes = [
  { label: "Frontend", icon: Braces, className: "left-4 top-10" },
  { label: "AI Workflow", icon: Bot, className: "right-6 top-16" },
  { label: "APIs", icon: GitBranch, className: "left-12 top-40" },
  { label: "Backend", icon: Server, className: "right-12 top-44" },
  { label: "Database", icon: Database, className: "left-8 bottom-16" },
  { label: "Cloud", icon: Cloud, className: "right-8 bottom-12" },
];

export function SystemVisual() {
  return (
    <div className="glow-border relative mx-auto h-[520px] w-full max-w-[560px] overflow-hidden rounded-2xl border border-white/10 bg-ink/60 p-5 shadow-2xl">
      <div className="absolute inset-0 bg-mesh-line bg-[length:36px_36px] opacity-25" />
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon-cyan/25 bg-neon-cyan/5 blur-sm" />

      <motion.div
        className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-neon-cyan/40 bg-white/[0.08] text-neon-cyan shadow-glow"
        animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Bot className="h-10 w-10" />
      </motion.div>

      <div className="absolute left-[23%] right-[23%] top-[49%] h-px origin-left animate-pulseLine bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
      <div className="absolute bottom-[25%] left-[28%] right-[20%] h-px origin-left animate-pulseLine bg-gradient-to-r from-transparent via-neon-purple to-transparent [animation-delay:650ms]" />
      <div className="absolute left-[48%] top-[19%] h-[58%] w-px origin-top animate-pulseLine bg-gradient-to-b from-transparent via-neon-blue to-transparent [animation-delay:1100ms]" />

      {nodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            className={`glass absolute ${node.className} flex min-w-32 items-center gap-3 rounded-xl px-4 py-3`}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.12 }}
            whileHover={{ y: -4 }}
          >
            <Icon className="h-5 w-5 text-neon-cyan" />
            <span className="text-sm font-semibold text-white">{node.label}</span>
          </motion.div>
        );
      })}

      <motion.div
        className="glass absolute bottom-5 left-5 right-5 rounded-xl p-4"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-3 flex items-center gap-2 text-xs text-slate-400">
          <Terminal className="h-4 w-4 text-neon-cyan" />
          production-pipeline
        </div>
        <div className="space-y-2 font-mono text-xs text-slate-300">
          <p><span className="text-neon-cyan">$</span> ai.plan architecture --scalable</p>
          <p><span className="text-neon-purple">deploy</span> api + ui + tests + observability</p>
          <p className="flex items-center gap-2 text-emerald-300"><ShieldCheck className="h-3.5 w-3.5" /> system ready for review</p>
        </div>
      </motion.div>
    </div>
  );
}
