"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";

const steps = [
  { name: "name", label: "What should we call you?", type: "text" },
  { name: "phone", label: "Mobile number", type: "tel" },
  { name: "email", label: "Email", type: "email" },
  { name: "brewMethod", label: "How do you brew at home?", type: "select", options: ["Espresso machine", "Pour-over", "French press", "AeroPress", "I don't, yet"] },
  { name: "roast", label: "Preferred roast level", type: "select", options: ["Light", "Medium", "Dark", "No preference"] },
  { name: "flavor", label: "What flavours pull you in?", type: "select", options: ["Fruity & bright", "Chocolatey & nutty", "Bold & structured", "Surprise me"] },
  { name: "motivation", label: "Why do you want to join the community?", type: "textarea" },
] as const;

export default function CommunityPage() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const current = steps[step];

  return (
    <section className="grain flex min-h-[70vh] items-center bg-cream py-20">
      <Container className="max-w-xl">
        {done ? (
          <div className="text-center">
            <p className="font-display text-4xl">Let&apos;s get to know you — done!</p>
            <p className="mt-3 text-ink-soft/70">You&apos;re on the list. Watch your inbox for the next tasting invite.</p>
          </div>
        ) : (
          <>
            <SectionHeading eyebrow={`Question ${step + 1} of ${steps.length}`} title="Coffee Community" />
            <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-ink/10">
              <div
                className="h-full rounded-full bg-rust transition-all duration-500"
                style={{ width: `${((step + 1) / steps.length) * 100}%` }}
              />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (step < steps.length - 1) setStep((s) => s + 1);
                else setDone(true);
              }}
              className="mt-10 space-y-6"
            >
              <label className="block text-lg font-medium">{current.label}</label>
              {current.type === "select" ? (
                <select
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 outline-none focus:border-rust/50"
                >
                  <option value="" disabled>
                    Choose one
                  </option>
                  {current.options?.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : current.type === "textarea" ? (
                <textarea
                  rows={4}
                  required
                  className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 outline-none focus:border-rust/50"
                />
              ) : (
                <input
                  type={current.type}
                  required
                  pattern={current.type === "tel" ? "[0-9]{10}" : undefined}
                  className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 outline-none focus:border-rust/50"
                />
              )}
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  disabled={step === 0}
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className="text-sm text-ink-soft/50 disabled:opacity-0"
                >
                  Back
                </button>
                <Button type="submit">{step < steps.length - 1 ? "Next" : "Finish"}</Button>
              </div>
            </form>
          </>
        )}
      </Container>
    </section>
  );
}
