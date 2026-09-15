import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Percent, Armchair, CreditCard, Wrench, GraduationCap, Users, Check, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/button";
import { clubTiers, eliteNetwork } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "1DM Elite Club",
  description:
    "1DM Elite Club — 10% off every outlet, priority seating, zero-deposit equipment rental, and 15 hours of brewing classes a year. ₹5,999 to join.",
};

const NEW_MEMBER_PAYMENT_URL = "https://rzp.io/l/1DollarMoffee";
const RENEWAL_PAYMENT_URL = "https://rzp.io/l/1dmrenew";

const perkIcons = [Percent, Armchair, CreditCard, Wrench, GraduationCap, Users];

export default function ClubPage() {
  const tier = clubTiers[0];

  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-ink pb-20 pt-20 text-cream md:pb-28 md:pt-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-rust/20 blur-3xl" />
        <Container className="relative grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-rust">1DM Elite Club</p>
            <h1 className="text-balance font-display text-5xl leading-[1.05] md:text-6xl">
              Reserved for you. Forbidden to everyone else.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70">
              {clubTiers[0].pitch} {clubTiers[0].price}, {clubTiers[0].renewalPrice} to renew. This is the front
              door to everything 1DM does next.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl bg-cream">
              <Image
                src="/images/branding/1dm-logo.png"
                alt="1DM Specialty Coffee"
                fill
                className="object-contain p-14"
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
          <SectionHeading eyebrow="What you get" title="Six reasons to join." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tier.perks.map((perk, i) => {
              const Icon = perkIcons[i] ?? Percent;
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

      {/* Equipment registry */}
      <section className="bg-ink py-24 text-cream md:py-32">
        <Container>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-rust">1DM Elite × Equipment</p>
          <h2 className="max-w-2xl text-balance font-display text-4xl leading-[1.05] md:text-5xl">
            Stop buying. Start accessing.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/70">
            Raipur&apos;s first high-end coffee equipment registry. Trial for 3 days, rent for months, or buy for
            life.
          </p>

          <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-cream/10 p-8">
              <p className="font-display text-xl">Normal Customer</p>
              <ul className="mt-6 space-y-3 text-sm text-cream/50">
                <li className="flex items-center gap-2">
                  <X className="h-4 w-4 shrink-0" /> Full upfront price
                </li>
                <li className="flex items-center gap-2">
                  <X className="h-4 w-4 shrink-0" /> Instant depreciation
                </li>
                <li className="flex items-center gap-2">
                  <X className="h-4 w-4 shrink-0" /> No trial period
                </li>
              </ul>
            </div>
            <div className="relative rounded-3xl border-2 border-rust bg-cream/5 p-8">
              <span className="absolute -top-3 left-8 rounded-full bg-rust px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-cream">
                1DM Elite Member
              </span>
              <p className="font-display text-xl">1DM Elite Member</p>
              <ul className="mt-6 space-y-3 text-sm text-cream/80">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-rust" /> 3-day free trial
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-rust" /> Rent from ₹120/mo
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-rust" /> 10% purchase equity
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-6 grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-cream/10 p-6">
              <p className="font-display text-lg">The Equity Rule</p>
              <p className="mt-2 text-sm text-cream/60">
                We believe renting shouldn&apos;t be a loss. 10% of every rental payment you make is stored as
                credit toward purchasing that specific machine.
              </p>
            </div>
            <div className="rounded-2xl border border-cream/10 p-6">
              <p className="font-display text-lg">3-Day Trial Policy</p>
              <p className="mt-2 text-sm text-cream/60">
                Self-pickup and drop-off from any 1DM cafe. Valid for Elite Members only — ₹0 rental fee for 72
                hours.
              </p>
            </div>
          </div>

          <div className="relative mx-auto mt-6 flex max-w-3xl flex-col items-start gap-5 rounded-3xl border-2 border-rust bg-cream p-8 text-ink sm:flex-row sm:items-center sm:justify-between">
            <span className="absolute -top-3 left-8 rounded-full bg-rust px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-cream">
              Most popular
            </span>
            <div>
              <p className="font-display text-xl">Master Home Lab Bundle</p>
              <p className="mt-1 text-sm text-ink-soft/70">Manual grinder / electric grinder + kettle + scale + V60.</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-display text-2xl text-rust">
                ₹1,200<span className="text-sm text-ink-soft/60"> /mo</span>
              </p>
              <Button href="https://kruptoscoffee.com" variant="secondary" size="md">
                Explore the registry <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Elite network */}
      <section className="bg-cream py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="The lifestyle ecosystem"
            title="The Elite network."
            copy="Membership opens doors beyond the counter."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {eliteNetwork.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-paper p-6">
                  <p className="font-display text-lg">{p.name}</p>
                  <p className="mt-2 flex-1 text-sm text-ink-soft/70">{p.offer}</p>
                  <Link
                    href={p.href}
                    className="underline-hover mt-4 text-xs font-semibold uppercase tracking-wide text-rust"
                  >
                    {p.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
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
                <p className="font-display text-2xl">New to 1DM Elite Club</p>
                <p className="mt-2 flex-1 text-sm text-ink-soft/70">
                  First time joining — sign up and pay your membership to activate every perk above today.
                </p>
                <p className="mt-4 font-display text-3xl text-rust">₹5,999</p>
                <Button href={NEW_MEMBER_PAYMENT_URL} size="lg" className="mt-6 w-full">
                  Join 1DM Elite Club <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-cream p-8">
                <p className="font-display text-2xl">Already a member</p>
                <p className="mt-2 flex-1 text-sm text-ink-soft/70">
                  Card&apos;s expiring — renew your membership below to keep every perk active without a gap.
                </p>
                <p className="mt-4 font-display text-3xl text-ink">₹2,999</p>
                <Button href={RENEWAL_PAYMENT_URL} variant="ghost" size="lg" className="mt-6 w-full">
                  Renew membership <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
          <p className="mt-8 text-center text-sm text-ink-soft/50">
            Strictly 5 new members a month. Look for the QR code at your home outlet to verify your status at the
            counter.
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
