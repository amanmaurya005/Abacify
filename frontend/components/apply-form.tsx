"use client";

import { FormEvent, useState } from "react";
import type React from "react";
import { ArrowRight } from "lucide-react";
import { FormStatus } from "@/components/form-status";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { apiBaseUrl } from "@/lib/utils";
import { applicationWhatsAppMessage, openWhatsAppMessage } from "@/lib/whatsapp";

type Status = { type: "success" | "error"; message: string } | null;

export function ApplyForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const [skillLevel, setSkillLevel] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      collegeOrCompany: String(formData.get("collegeOrCompany") || ""),
      skillLevel,
      reasonToJoin: String(formData.get("reasonToJoin") || ""),
      github: String(formData.get("github") || ""),
      linkedin: String(formData.get("linkedin") || ""),
      acceptedTerms,
    };

    try {
      const response = await fetch(`${apiBaseUrl}/api/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to submit application.");
      openWhatsAppMessage(applicationWhatsAppMessage(payload));
      form.reset();
      setSkillLevel("");
      setAcceptedTerms(false);
      setStatus({
        type: "success",
        message: "Application saved. WhatsApp opened with the details ready to send.",
      });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Something went wrong." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      {status ? <FormStatus {...status} /> : null}
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" name="fullName" placeholder="Your full name" required />
        <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
        <Field label="Phone Number" name="phone" placeholder="+91 98765 43210" required />
        <Field label="College / Company" name="collegeOrCompany" placeholder="Institution or workplace" required />
      </div>
      <div className="grid gap-2">
        <Label>Current Skill Level</Label>
        <Select value={skillLevel} onValueChange={setSkillLevel} required>
          <SelectTrigger>
            <SelectValue placeholder="Select skill level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="frontend-basics">Frontend Basics</SelectItem>
            <SelectItem value="backend-basics">Backend Basics</SelectItem>
            <SelectItem value="fullstack-basics">Fullstack Basics</SelectItem>
            <SelectItem value="ai-builder">AI Builder</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="reasonToJoin">Why do you want to join?</Label>
        <Textarea id="reasonToJoin" name="reasonToJoin" placeholder="Tell us about your goals and builder mindset." required />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Portfolio / GitHub" name="github" placeholder="https://github.com/username" />
        <Field label="LinkedIn" name="linkedin" placeholder="https://linkedin.com/in/username" />
      </div>
      <label className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200">
        <Checkbox checked={acceptedTerms} onCheckedChange={(checked) => setAcceptedTerms(checked === true)} required />
        <span>I understand this is an AI-first intensive learning + internship program.</span>
      </label>
      <Button type="submit" size="lg" disabled={loading || !acceptedTerms}>
        {loading ? "Submitting..." : "Apply Now"} <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={props.name}>{label}</Label>
      <Input id={props.name} {...props} />
    </div>
  );
}
