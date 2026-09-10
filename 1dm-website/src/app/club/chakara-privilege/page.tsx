import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";
import { clubTiers } from "@/lib/site-data";

export const metadata: Metadata = { title: "Chakara Privilege" };

export default function ChakaraPage() {
  const tier = clubTiers[1];

  return (
    <section className="grain bg-kruptos-black pb-24 pt-20 text-kruptos-cream md:pb-32 md:pt-28">
      <Container className="max-w-2xl">
        <SectionHeading eyebrow={tier.price} title={tier.name} copy={tier.pitch} tone="dark" />
        <ul className="mt-8 space-y-3">
          {tier.perks.map((perk) => (
            <li key={perk} className="flex gap-3 text-kruptos-cream/80">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-kruptos-gold" /> {perk}
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-2xl border border-kruptos-cream/10 bg-kruptos-charcoal p-8">
          <p className="font-display text-xl">By invitation only</p>
          <p className="mt-2 text-sm text-kruptos-cream/60">
            Chakara Privilege is extended to 1DM Club members after a review of visit history. If you think you
            qualify, ask your home outlet to nominate you.
          </p>
          <Button href="/club" variant="kruptos" className="mt-6">
            Join 1DM Club first
          </Button>
        </div>
      </Container>
    </section>
  );
}
