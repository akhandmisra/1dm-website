import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/button";
import { coffeeProducts, roasterPartners, communityPartners } from "@/lib/site-data";

export const metadata: Metadata = { title: "Kruptos Coffee Roasters" };

export default function KruptosPage() {
  return (
    <>
      <section className="grain bg-kruptos-black pb-24 pt-20 text-kruptos-cream md:pb-32 md:pt-28">
        <Container>
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-kruptos-gold">
              Raipur&apos;s first specialty roastery
            </p>
            <h1 className="max-w-3xl text-balance font-display text-5xl leading-[1.05] md:text-6xl">
              Kruptos Coffee Roasters
            </h1>
            <p className="mt-6 max-w-xl text-kruptos-cream/70">
              Kruptos exists to give the 1DM bar program a roastery it can call its own — small batches, full
              traceability, and a cupping table that argues over every lot before it ships.
            </p>
            <Button href="https://kruptoscoffee.com" variant="kruptos" size="lg" className="mt-8">
              Shop the current roast
            </Button>
          </Reveal>
        </Container>
      </section>

      <section className="bg-kruptos-charcoal py-24 text-kruptos-cream md:py-32">
        <Container>
          <SectionHeading eyebrow="On the roaster now" title="Current lineup" tone="dark" />
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3">
            {coffeeProducts.map((p) => (
              <div key={p.handle} className="rounded-2xl border border-kruptos-cream/10 bg-kruptos-black p-6">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-kruptos-gold">{p.badge}</p>
                <p className="mt-3 font-display text-2xl">{p.name}</p>
                <p className="mt-1 text-xs text-kruptos-cream/50">{p.origin}</p>
                <p className="mt-4 text-sm text-kruptos-cream/70">{p.notes}</p>
                <p className="mt-5 font-display text-lg text-kruptos-gold">₹{p.price} / {p.unit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="From green bean to your cup, tracked the whole way."
            copy="Every lot that comes through Kruptos is logged from intake to roast to dispatch — the same system that stocks the 1DM bar also fills these bags."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            <Reveal className="sm:col-span-2 sm:row-span-2">
              <div className="relative h-full min-h-[20rem] overflow-hidden rounded-3xl">
                <Image
                  src="/images/kruptos/coffee-cherries.jpg"
                  alt="Ripe coffee cherries on the branch, sourced for Kruptos roasts"
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 66vw, 100vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src="/images/coffee/cupping-flavor-wheel.jpg"
                  alt="Cupping table with the SCA Coffee Taster's Flavor Wheel"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src="/images/coffee/pour-over-red.jpg"
                  alt="Pour-over brewing with a Hario V60"
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Roasters we carry */}
      <section className="grain bg-kruptos-black py-24 text-kruptos-cream md:py-32">
        <Container>
          <SectionHeading
            eyebrow="Beyond our own roast"
            title="Specialty roasters we've carried."
            copy="Before Kruptos had its own roastery, the 1DM bar ran on a rotating cast of India's best independent roasters — and a few from further afield. Some still make guest appearances."
            tone="dark"
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {roasterPartners.map((r) => (
              <span
                key={r.name}
                className="inline-flex items-center gap-2 rounded-full border border-kruptos-cream/15 px-4 py-2 text-sm text-kruptos-cream/80"
              >
                {r.name}
                {r.global && (
                  <span className="rounded-full bg-kruptos-gold/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-kruptos-gold">
                    Global
                  </span>
                )}
              </span>
            ))}
          </div>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-kruptos-cream/40">
            Tools &amp; community
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {communityPartners.map((p) => (
              <span
                key={p.name}
                className="inline-flex items-center rounded-full border border-kruptos-cream/10 px-4 py-2 text-sm text-kruptos-cream/60"
              >
                {p.name}
              </span>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
