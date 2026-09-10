import type { Metadata } from "next";
import Image from "next/image";
import { Armchair, Sparkles, Tag, Gift, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/button";
import { clubTiers, brand } from "@/lib/site-data";

export const metadata: Metadata = { title: "1DM Club" };

const NEW_MEMBER_PAYMENT_URL = "https://rzp.io/l/1DollarMoffee";
const RENEWAL_PAYMENT_URL = "https://rzp.io/l/1dmrenew";

const perkIcons = [Armchair, Sparkles, Tag, Gift];

export default function ClubPage() {
  const tier = clubTiers[0];

  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-ink pb-20 pt-20 text-cream md:pb-28 md:pt-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-rust/20 blur-3xl" />
        <Container className="relative grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-rust">1DM Club</p>
            <h1 className="text-balance font-display text-5xl leading-[1.05] md:text-6xl">
              The best seat in the house, at every one of our {brand.outlets} cafes.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
              Membership pays for itself the first time you skip the line, get first pour on a new roast, or
              walk in on your birthday. This is the front door to everything 1DM does next.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl">
              <Image
                src="/images/branding/branded-cups.jpg"
                alt="1DM branded cups, stacked"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 80vw"
                priority
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Perks */}
      <section className="bg-cream py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="What you get" title={tier.pitch} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tier.perks.map((perk, i) => {
              const Icon = perkIcons[i] ?? Sparkles;
              return (
                <Reveal key={perk} delay={i * 0.05}>
                  <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-paper p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-rust/10 text-rust">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <p className="text-sm font-medium leading-snug text-ink">{perk}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Join / Renew */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Membership" title="Join once. Show up like it's yours." align="center" className="mx-auto" />
          <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="relative flex h-full flex-col rounded-3xl border-2 border-rust bg-cream p-8 shadow-soft">
                <span className="absolute -top-3 left-8 rounded-full bg-rust px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-cream">
                  Start here
                </span>
                <p className="font-display text-2xl">New to 1DM Club</p>
                <p className="mt-2 flex-1 text-sm text-ink-soft/70">
                  First time joining — sign up and pay your membership to activate every perk above today.
                </p>
                <Button href={NEW_MEMBER_PAYMENT_URL} size="lg" className="mt-8 w-full">
                  Join 1DM Club <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-cream p-8">
                <p className="font-display text-2xl">Already a member</p>
                <p className="mt-2 flex-1 text-sm text-ink-soft/70">
                  Card&apos;s expiring — renew your membership below to keep every perk active without a gap.
                </p>
                <Button href={RENEWAL_PAYMENT_URL} variant="ghost" size="lg" className="mt-8 w-full">
                  Renew membership <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
          <p className="mt-8 text-center text-sm text-ink-soft/50">
            Look for the QR code at your home outlet to verify your status at the counter.
          </p>
        </Container>
      </section>

      {/* Chakara upsell */}
      <section className="grain bg-kruptos-black py-20 text-kruptos-cream">
        <Container className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-kruptos-gold">Next level</p>
          <h3 className="max-w-lg text-balance font-display text-2xl md:text-3xl">
            Show up every week? Chakara Privilege is the inner circle — by invitation.
          </h3>
          <Button href="/club/chakara-privilege" variant="kruptos" className="mt-2">
            Learn about Chakara Privilege
          </Button>
        </Container>
      </section>
    </>
  );
}
