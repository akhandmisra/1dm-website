import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/button";
import { clubTiers } from "@/lib/site-data";

export const metadata: Metadata = { title: "1DM Club" };

const NEW_MEMBER_PAYMENT_URL = "https://rzp.io/l/1DollarMoffee";
const RENEWAL_PAYMENT_URL = "https://rzp.io/l/1dmrenew";

export default function ClubPage() {
  const tier = clubTiers[0];

  return (
    <section className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      <Container className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeading eyebrow={tier.price} title={tier.name} copy={tier.pitch} />
          <ul className="mt-8 space-y-3">
            {tier.perks.map((perk) => (
              <li key={perk} className="flex gap-3 text-ink-soft/80">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" /> {perk}
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-ink/10 bg-paper p-6">
              <p className="font-display text-xl">New here?</p>
              <p className="mt-2 flex-1 text-sm text-ink-soft/70">
                First time joining 1DM Club — sign up and pay your membership below.
              </p>
              <Button href={NEW_MEMBER_PAYMENT_URL} className="mt-6 w-full">
                Join 1DM Club
              </Button>
            </div>

            <div className="flex flex-col rounded-2xl border border-ink/10 bg-paper p-6">
              <p className="font-display text-xl">Renewing?</p>
              <p className="mt-2 flex-1 text-sm text-ink-soft/70">
                Already a member and your card&apos;s expiring — renew your membership below.
              </p>
              <Button href={RENEWAL_PAYMENT_URL} variant="secondary" className="mt-6 w-full">
                Renew membership
              </Button>
            </div>
          </div>
          <p className="mt-6 text-sm text-ink-soft/50">
            Look for the QR code at your home outlet to verify your status at the counter.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
