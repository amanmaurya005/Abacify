import { Mail, MessageCircle, Send, Users, Workflow } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

const contacts = [
  ["WhatsApp", MessageCircle, "Fast counseling and program questions"],
  ["Email", Mail, "Admissions, support, and partnership queries"],
  ["LinkedIn", Workflow, "Professional updates and hiring network"],
  ["Instagram", Send, "Community stories and builder highlights"],
  ["Discord", Users, "Developer community and cohort discussion"],
] as const;

export default function ContactPage() {
  return (
    <main className="bg-radial-grid px-5 pb-24 pt-32 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-neon-cyan">Contact</p>
            <h1 className="mt-4 font-heading text-4xl font-semibold text-white md:text-6xl">Talk to the Abacify team</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">We usually respond within 24 hours.</p>
            <div className="mt-10 grid gap-4">
              {contacts.map(([label, Icon, copy]) => (
                <Card key={label} className="flex items-start gap-4 p-5 transition hover:-translate-y-1 hover:border-neon-cyan/35">
                  <Icon className="mt-1 h-5 w-5 text-neon-cyan" />
                  <div>
                    <p className="font-heading text-lg font-semibold text-white">{label}</p>
                    <p className="mt-1 text-sm text-slate-400">{copy}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Card className="glow-border p-6 md:p-8">
            <ContactForm />
          </Card>
        </Reveal>
      </div>
    </main>
  );
}
