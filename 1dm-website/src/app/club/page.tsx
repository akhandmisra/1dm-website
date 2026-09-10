import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { clubTiers } from "@/lib/site-data";
import { ClubForm } from "./club-form";

export const metadata: Metadata = { title: "1DM Club" };

export default function ClubPage() {
  const tier = clubTiers[0];

  return (
    <section className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      <Container className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeading
            eyebrow={tier.price}
            title={tier.name}
            copy={tier.pitch}
          />
          <ul className="mt-8 space-y-3">
            {tier.perks.map((perk) => (
              <li key={perk} className="flex gap-3 text-ink-soft/80">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" /> {perk}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-ink-soft/50">
            Already a member? Look for the QR code at your home outlet to verify your status at the counter.
          </p>
        </div>
        <Reveal>
          <ClubForm />
        </Reveal>
      </Container>
    </section>
  );
}
