"use client";

import { useState } from "react";
import { Button } from "@/components/button";

export function ClubForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-ink/10 bg-paper p-8 text-center">
        <p className="font-display text-2xl">Awesome — you&apos;re in the queue.</p>
        <p className="mt-2 text-sm text-ink-soft/70">We&apos;ll text you once your card is ready for pickup.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4 rounded-2xl border border-ink/10 bg-paper p-8"
    >
      <p className="font-display text-xl">Join 1DM Club</p>
      <Field label="Full name" name="name" type="text" required />
      <Field label="Mobile number" name="phone" type="tel" pattern="[0-9]{10}" required />
      <Field label="Email" name="email" type="email" required />
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink-soft/80">Why do you want to join?</label>
        <textarea
          name="motivation"
          rows={3}
          className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm outline-none focus:border-rust/50"
        />
      </div>
      <Button type="submit" className="w-full">
        Submit application
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  ...props
}: { label: string; name: string; type: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-soft/80">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm outline-none focus:border-rust/50"
        {...props}
      />
    </div>
  );
}
