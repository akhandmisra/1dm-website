"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";
import { contactInfo } from "@/lib/site-data";

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 outline-none focus:border-rust/50";

const reasons = ["General inquiry", "Franchise / partnership", "Feedback", "Press / media", "Other"];

type SubmitState = "idle" | "submitting" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    reason: reasons[0],
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      <Container>
        <SectionHeading eyebrow="Get in touch" title="Say hello." copy="Franchise questions, feedback, press — or just to say hi." />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <div className="space-y-4">
            <a
              href={contactInfo.phoneHref}
              className="flex items-center gap-3 rounded-xl border border-ink/10 bg-paper p-5 hover:border-rust/40"
            >
              <Phone className="h-5 w-5 shrink-0 text-rust" /> {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 rounded-xl border border-ink/10 bg-paper p-5 hover:border-rust/40"
            >
              <Mail className="h-5 w-5 shrink-0 text-rust" /> {contactInfo.email}
            </a>
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-ink/10 bg-paper p-5 hover:border-rust/40"
            >
              <InstagramIcon className="h-5 w-5 shrink-0 text-rust" /> {contactInfo.instagramHandle}
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-ink/10 bg-paper p-5">
              <MapPin className="h-5 w-5 shrink-0 text-rust" /> Raipur · Bhilai · Bilaspur · Jagdalpur
            </div>
          </div>

          <div>
            {status === "sent" ? (
              <div className="rounded-xl border border-ink/10 bg-paper p-6">
                <p className="font-display text-2xl text-ink">Message sent.</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft/75">
                  Thanks for reaching out — your message has been emailed to our team. We&apos;ll get back to
                  you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="underline-hover mt-4 text-sm font-medium text-ink-soft/70"
                >
                  ← Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">
                      Full name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-ink">
                      Phone (optional)
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-reason" className="mb-1.5 block text-sm font-medium text-ink">
                    What&apos;s this about
                  </label>
                  <select
                    id="contact-reason"
                    value={form.reason}
                    onChange={(e) => update("reason", e.target.value)}
                    className={inputClass}
                  >
                    {reasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className={inputClass}
                  />
                </div>

                {status === "error" && (
                  <p className="rounded-xl border border-rust/30 bg-rust/5 p-4 text-sm leading-relaxed text-ink">
                    Couldn&apos;t send your message — please email us directly at{" "}
                    <a href={`mailto:${contactInfo.email}`} className="underline-hover font-medium">
                      {contactInfo.email}
                    </a>{" "}
                    instead.
                  </p>
                )}

                <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
                  {status === "submitting" ? "Sending…" : "Send message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
