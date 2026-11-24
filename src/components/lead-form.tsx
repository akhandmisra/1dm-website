"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { contactInfo } from "@/lib/site-data";

// Shared enquiry form for the B2B landing pages (coffee catering, franchise).
// Posts to the same /api/contact route as the Contact page, so every lead
// lands in the same inbox — the extra fields are folded into the message.

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 outline-none focus:border-rust/50";

type SubmitState = "idle" | "submitting" | "sent" | "error";

export function LeadForm({
  reason,
  orgLabel = "Company / organisation",
  detailLabel,
  detailPlaceholder,
  messagePlaceholder,
  submitLabel = "Send enquiry",
  whatsappText,
}: {
  reason: string;
  orgLabel?: string;
  detailLabel: string;
  detailPlaceholder?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
  whatsappText: string;
}) {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [form, setForm] = useState({ name: "", phone: "", email: "", org: "", city: "", detail: "", message: "" });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    const message = [
      `${orgLabel}: ${form.org || "—"}`,
      `City: ${form.city || "—"}`,
      `${detailLabel}: ${form.detail || "—"}`,
      "",
      form.message || "(no extra message)",
    ].join("\n");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, phone: form.phone, email: form.email, reason, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const waHref = `https://wa.me/919179241042?text=${encodeURIComponent(whatsappText)}`;

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-ink/10 bg-paper p-6">
        <p className="font-display text-2xl text-ink">Enquiry received.</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft/75">
          Thanks — our team has your details and will call you back within one working day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-ink/10 bg-paper p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="lead-name" label="Full name" required value={form.name} onChange={(v) => update("name", v)} />
        <Field id="lead-phone" label="Phone / WhatsApp" type="tel" required value={form.phone} onChange={(v) => update("phone", v)} />
      </div>
      <Field id="lead-email" label="Email" type="email" required value={form.email} onChange={(v) => update("email", v)} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="lead-org" label={orgLabel} value={form.org} onChange={(v) => update("org", v)} />
        <Field id="lead-city" label="City" value={form.city} onChange={(v) => update("city", v)} />
      </div>
      <Field
        id="lead-detail"
        label={detailLabel}
        placeholder={detailPlaceholder}
        value={form.detail}
        onChange={(v) => update("detail", v)}
      />
      <div>
        <label htmlFor="lead-message" className="mb-1.5 block text-sm font-medium text-ink">
          Anything else (optional)
        </label>
        <textarea
          id="lead-message"
          rows={4}
          placeholder={messagePlaceholder}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl border border-rust/30 bg-rust/5 p-4 text-sm leading-relaxed text-ink">
          Couldn&apos;t send the form — please WhatsApp or call us on {contactInfo.phone} instead.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : submitLabel}
        </Button>
        <a href={waHref} target="_blank" rel="noreferrer" className="underline-hover text-sm font-medium text-ink-soft/80">
          Or WhatsApp us on {contactInfo.phone} →
        </a>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {!required && <span className="font-normal text-ink-soft/50"> (optional)</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
    </div>
  );
}
