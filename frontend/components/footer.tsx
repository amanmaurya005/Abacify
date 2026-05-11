import Link from "next/link";
import { BrainCircuit } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-neon-cyan/25 bg-white/[0.05] text-neon-cyan">
            <BrainCircuit className="h-4 w-4" />
          </span>
          <div>
            <p className="font-heading font-semibold text-white">Abacify</p>
            <p>AI-first learning for real builders.</p>
          </div>
        </div>
        <div className="flex gap-5">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
          <Link href="/apply" className="hover:text-white">
            Apply
          </Link>
        </div>
      </div>
    </footer>
  );
}
