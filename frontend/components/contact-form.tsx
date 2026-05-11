"use client";

import { FormEvent, useState } from "react";
import type React from "react";
import { Send } from "lucide-react";
import { FormStatus } from "@/components/form-status";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactWhatsAppMessage, openWhatsAppMessage } from "@/lib/whatsapp";

type Status = { type: "success" | "error"; message: string } | null;

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const [currentStatus, setCurrentStatus] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      currentStatus,
      message: String(formData.get("message") || ""),
    };

    try {
      if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error("NEXT_PUBLIC_API_URL is not configured.");
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "")}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to send message.");
      openWhatsAppMessage(contactWhatsAppMessage(payload));
      form.reset();
      setCurrentStatus("");
      setStatus({
        type: "success",
        message: "Message saved. WhatsApp opened with the details ready to send.",
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
      <Field label="Name" name="name" placeholder="Your name" required />
      <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
      <Field label="Phone" name="phone" placeholder="+91 98765 43210" required />
      <div className="grid gap-2">
        <Label>Current Status</Label>
        <Select value={currentStatus} onValueChange={setCurrentStatus} required>
          <SelectTrigger>
            <SelectValue placeholder="Select your current status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="college-student">College Student</SelectItem>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="career-switcher">Career Switcher</SelectItem>
            <SelectItem value="working-professional">Working Professional</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Tell us what you want to build." required />
      </div>
      <Button type="submit" size="lg" disabled={loading}>
        {loading ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
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
