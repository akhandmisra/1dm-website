import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { ProductCard } from "@/components/product-card";
import { brand, coffeeProducts, locations, clubTiers } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-cream pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-rust/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 top-1/2 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
        <Container className="relative">
          <Reveal>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-rust">
              Since {brand.founded} · {brand.outlets} outlets · {brand.cities} cities
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-4xl text-balance font-display text-5xl leading-[1.02] text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Specialty coffee, priced like it belongs to everyone.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft/80">
              What began as a ₹1 cup off a coffee truck in Pune is now ten cafes and a roastery of our own —
              built on the idea that great coffee shouldn&apos;t be a luxury.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/menu" size="lg">
                View the menu
              </Button>
              <Button href="https://kruptoscoffee.com" variant="ghost" size="lg">
                Shop roasted coffee <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <Marquee items={locations.map((l) => `${l.name}, ${l.city}`)} />

      {/* Gallery */}
      <section className="bg-cream pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:grid-rows-2">
            <Reveal className="col-span-2 row-span-2">
              <div className="relative h-full min-h-[16rem] overflow-hidden rounded-3xl sm:min-h-[24rem]">
                <Image
                  src="/images/interior/cafe-rattan.jpg"
                  alt="Inside a 1DM cafe — warm lighting and cane seating"
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                  priority
                />
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src="/images/food/bagel-sandwich.jpg"
                  alt="Bagel mushroom sandwich, plated at 1DM"
                  fill
                  className="object-cover object-[60%_78%]"
                  sizes="25vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src="/images/branding/storefront-sign.jpg"
                  alt="1DollarMoffe storefront signage"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src="/images/food/bruschetta.jpg"
                  alt="Bruschetta from the 1DM kitchen"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src="/images/interior/cafe-doorway.jpg"
                  alt="A quiet corner inside a 1DM cafe"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* The idea */}
      <section className="bg-cream py-24 md:py-32">
        <Container className="grid gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="The idea"
              title="One rupee bought the door. Everything after that is on the coffee."
              copy="Our signature ₹1 cuppa isn't a gimmick — it's the whole philosophy. Get people through the door with something honest, then let the cold brews, single origins, and Kruptos roasts do the convincing."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: "Cafes live", value: "10" },
                { label: "Cities", value: "4" },
                { label: "Founded", value: "2019" },
                { label: "Roastery", value: "Kruptos" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-ink/10 bg-paper p-6">
                  <p className="font-display text-4xl text-rust">{stat.value}</p>
                  <p className="mt-1 text-sm text-ink-soft/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Kruptos spotlight */}
      <section className="grain bg-kruptos-black py-24 text-kruptos-cream md:py-32">
        <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-kruptos-gold">
              Roaster of the week
            </p>
            <h2 className="font-display text-balance text-4xl leading-[1.05] md:text-5xl">
              Kruptos Coffee Roasters
            </h2>
            <p className="mt-4 max-w-md text-kruptos-cream/70">
              Raipur&apos;s first dedicated specialty roastery, born inside the 1DM ecosystem. Small batches,
              traceable origins, and a lot of cupping sessions before anything reaches a shelf.
            </p>
            <Button href="/kruptos" variant="kruptos" className="mt-8">
              Meet the roastery <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4">
              {coffeeProducts.map((p) => (
                <div
                  key={p.handle}
                  className="flex items-center justify-between rounded-2xl border border-kruptos-cream/10 bg-kruptos-charcoal px-6 py-5"
                >
                  <div>
                    <p className="font-display text-lg">{p.name}</p>
                    <p className="text-xs text-kruptos-cream/50">{p.origin}</p>
                  </div>
                  <p className="text-sm text-kruptos-gold">₹{p.price} / {p.unit}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Featured products */}
      <section className="bg-cream py-24 md:py-32">
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="From the roastery" title="This week's single origins" />
            <Link
              href="https://kruptoscoffee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-hover text-sm font-medium text-ink"
            >
              View all coffee
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {coffeeProducts.map((p, i) => (
              <Reveal key={p.handle} delay={i * 0.05}>
                <ProductCard
                  handle={p.handle}
                  title={p.name}
                  subtitle={`${p.roaster} · ${p.origin}`}
                  price={p.price}
                  badge={p.badge}
                  href="https://kruptoscoffee.com"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Locations */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionHeading eyebrow="Find us" title="Ten cafes, four cities, one standard." align="left" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.slice(0, 6).map((loc, i) => (
              <Reveal key={loc.slug} delay={i * 0.04}>
                <Link
                  href="/locations"
                  className="group flex items-start justify-between rounded-2xl border border-ink/10 bg-cream p-6 transition-colors hover:border-rust/40"
                >
                  <div>
                    <p className="font-display text-xl">{loc.name}</p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-soft/60">
                      <MapPin className="h-3.5 w-3.5" /> {loc.city}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-ink-soft/30 transition-colors group-hover:text-rust" />
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/locations" variant="ghost">
              See all locations
            </Button>
          </div>
        </Container>
      </section>

      {/* Club CTA */}
      <section className="bg-ink py-24 text-cream md:py-32">
        <Container className="grid gap-10 md:grid-cols-2 md:gap-16">
          {clubTiers.map((tier) => (
            <div key={tier.name} className="rounded-3xl border border-cream/10 p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rust">{tier.price}</p>
              <h3 className="mt-3 font-display text-3xl">{tier.name}</h3>
              <p className="mt-3 text-cream/70">{tier.pitch}</p>
              <ul className="mt-6 space-y-2 text-sm text-cream/60">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex gap-2">
                    <span className="text-rust">—</span> {perk}
                  </li>
                ))}
              </ul>
              <Button
                href={tier.name === "1DM Club" ? "/club" : "/club/chakara-privilege"}
                variant="secondary"
                className="mt-8 bg-cream text-ink hover:bg-cream/90"
              >
                Learn more
              </Button>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
