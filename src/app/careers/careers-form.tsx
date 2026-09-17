"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";
import { careerRoles, preferredCities } from "@/lib/careers";

const CAREERS_EMAIL = "career@1dollarmoffee.com";

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 outline-none focus:border-rust/50";

type SubmitState = "idle" | "submitting" | "sent" | "error";

export function CareersForm() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    role: careerRoles[0].title,
    city: preferredCities[0],
    experience: "",
    resumeLink: "",
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/careers", {
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
        <SectionHeading
          eyebrow="Careers"
          title="We're hiring."
          copy="Four roles open across every 1DM outlet right now — Head Barista, Chef, Manager, and HR. Tell us about yourself below."
          as="h1"
        />

        <div className="mt-12 space-y-6">
          {careerRoles.map((role) => (
            <div key={role.id} className="rounded-2xl border border-ink/10 bg-paper p-6 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="font-display text-2xl text-ink">{role.title}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-rust">
                  {role.employmentType}
                </p>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft/75">{role.blurb}</p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-soft/50">
                    What you&apos;ll do
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {role.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft/80">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rust" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-soft/50">
                    What we&apos;re looking for
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {role.lookingFor.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft/80">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rust" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-xl">
          {status === "sent" ? (
            <div className="rounded-xl border border-ink/10 bg-paper p-6">
              <p className="font-display text-2xl text-ink">Application sent.</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft/75">
                Your application has been emailed to our team at{" "}
                <a href={`mailto:${CAREERS_EMAIL}`} className="underline-hover text-ink">
                  {CAREERS_EMAIL}
                </a>
                . We&apos;ll reach out if it&apos;s a fit.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="underline-hover mt-4 text-sm font-medium text-ink-soft/70"
              >
                ← Back to the form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="careers-name" className="mb-1.5 block text-sm font-medium text-ink">
                    Full name
                  </label>
                  <input
                    id="careers-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="careers-phone" className="mb-1.5 block text-sm font-medium text-ink">
                    Mobile number
                  </label>
                  <input
                    id="careers-phone"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="careers-email" className="mb-1.5 block text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="careers-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="careers-role" className="mb-1.5 block text-sm font-medium text-ink">
                    Role you&apos;re applying for
                  </label>
                  <select
                    id="careers-role"
                    required
                    value={form.role}
                    onChange={(e) => update("role", e.target.value)}
                    className={inputClass}
                  >
                    {careerRoles.map((role) => (
                      <option key={role.id} value={role.title}>
                        {role.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="careers-city" className="mb-1.5 block text-sm font-medium text-ink">
                    Preferred city
                  </label>
                  <select
                    id="careers-city"
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    className={inputClass}
                  >
                    {preferredCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="careers-experience" className="mb-1.5 block text-sm font-medium text-ink">
                  Years of experience
                </label>
                <input
                  id="careers-experience"
                  type="text"
                  placeholder="e.g. 2 years"
                  value={form.experience}
                  onChange={(e) => update("experience", e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="careers-resume" className="mb-1.5 block text-sm font-medium text-ink">
                  Resume link
                </label>
                <input
                  id="careers-resume"
                  type="url"
                  required
                  placeholder="Google Drive, LinkedIn, or any link we can open"
                  value={form.resumeLink}
                  onChange={(e) => update("resumeLink", e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="careers-message" className="mb-1.5 block text-sm font-medium text-ink">
                  Anything else you want us to know
                </label>
                <textarea
                  id="careers-message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={inputClass}
                />
              </div>

              {status === "error" && (
                <p className="rounded-xl border border-rust/30 bg-rust/5 p-4 text-sm leading-relaxed text-ink">
                  Couldn&apos;t send your application — please email it directly to{" "}
                  <a href={`mailto:${CAREERS_EMAIL}`} className="underline-hover font-medium">
                    {CAREERS_EMAIL}
                  </a>{" "}
                  instead.
                </p>
              )}

              <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
                {status === "submitting" ? "Sending…" : "Send application"}
              </Button>

              <p className="text-xs text-ink-soft/50">
                This sends your application straight to {CAREERS_EMAIL}. Prefer to skip the form? Email us at
                that address directly with the same details.
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
