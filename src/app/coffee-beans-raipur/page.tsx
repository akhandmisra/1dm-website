import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { menuRoasterPartners } from "@/lib/site-data";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = pageMetadata({
  path: "/coffee-beans-raipur",
  title: "Buy Specialty Coffee Beans in Raipur & Chhattisgarh — Indian & International Roasters",
  description:
    "Where to buy specialty coffee beans in Raipur and Chhattisgarh: fresh beans from our own Kruptos Coffee Roasters, plus the Indian and international roasters 1DM has partnered with — Blue Tokai, Bloom, Naivo, Rossette Coffee Lab, Kapi Kottai, Black & White, DAK, Hydrangea and more.",
});

const KRUPTOS_SHOP = "https://kruptoscoffee.com/shop?category=coffee";
const KRUPTOS_BEANS = "https://kruptoscoffee.com/coffee-beans-raipur";

const faqs = [
  {
    q: "Where can I buy specialty coffee beans in Raipur?",
    a: "Fresh-roasted specialty coffee beans from Kruptos Coffee Roasters, 1DM's own roastery in Chhattisgarh, can be ordered online at kruptoscoffee.com and are delivered across Raipur, Bhilai, Bilaspur and the rest of India. At 1DM's cafes you can also taste coffees from the Indian and international roasters we partner with.",
  },
  {
    q: "Which coffee roasters does 1DM work with?",
    a: `Alongside our own Kruptos Coffee Roasters, 1DM has partnered with Indian specialty roasters including ${menuRoasterPartners.indian
      .map((r) => r.name)
      .join(", ")}, and international roasters ${menuRoasterPartners.abroad.map((r) => r.name).join(", ")}.`,
  },
  {
    q: "Can I buy whole beans or ground coffee?",
    a: "Yes. Kruptos coffees are sold as whole beans or ground. If you don't have a grinder, choose ground and mention your brewer when you order.",
  },
  {
    q: "Do you supply coffee beans to cafes and offices in Chhattisgarh?",
    a: "Yes. Kruptos supplies wholesale specialty coffee beans to cafes, restaurants, hotels and offices across Chhattisgarh, with recipes and barista training.",
  },
];

export default function CoffeeBeansRaipurPage() {
  const all = [...menuRoasterPartners.indian, ...menuRoasterPartners.abroad];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const roastersSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Coffee roasters partnered with 1DM",
    numberOfItems: all.length + 1,
    itemListElement: [{ name: "Kruptos Coffee Roasters" }, ...all].map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Brand", name: r.name },
    })),
  };

  return (
    <section className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(roastersSchema) }} />
      <Container>
        <SectionHeading
          eyebrow="Coffee beans · Raipur · Chhattisgarh"
          title="Buy specialty coffee beans in Raipur — from India's best roasters and the world's."
          copy="1DM is a multi-roaster cafe: alongside our own roastery, Kruptos, we pour coffee from independent roasters across India and abroad. Here's who we've partnered with, and where to buy fresh beans in Chhattisgarh."
          as="h1"
        />

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={KRUPTOS_SHOP}
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-rust"
          >
            Buy Kruptos coffee beans →
          </a>
          <Link
            href="/locations"
            className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink hover:border-rust/50 hover:text-rust"
          >
            Taste them at a 1DM cafe
          </Link>
        </div>

        <div className="mt-16 rounded-3xl border border-ink/10 bg-paper p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rust">Our own roastery</p>
          <h2 className="mt-2 font-display text-3xl text-ink">Kruptos Coffee Roasters — roasted in Chhattisgarh</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft/80">
            Chhattisgarh&apos;s first specialty roastery, set up by 1DM. Small-batch roasts with the origin and roast date on
            every bag, including coffee grown in Bastar — whole bean or ground, delivered across Raipur, Bhilai, Bilaspur
            and India.{" "}
            <a href={KRUPTOS_BEANS} className="underline-hover font-medium text-ink">
              See Kruptos coffees
            </a>
            .
          </p>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-3xl text-ink">Indian roasters we have partnered with</h2>
          <p className="mt-2 text-sm text-ink-soft/70">Specialty roasters from across India that have been on the 1DM bar.</p>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {menuRoasterPartners.indian.map((r) => (
              <li key={r.name} className="flex flex-col items-center rounded-2xl border border-ink/10 bg-paper p-5 text-center">
                <div className="relative h-16 w-full">
                  <Image src={r.logo} alt={`${r.name} logo`} fill className="object-contain" sizes="200px" />
                </div>
                <h3 className="mt-3 font-display text-base text-ink">{r.name}</h3>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-3xl text-ink">International roasters on our guest list</h2>
          <p className="mt-2 text-sm text-ink-soft/70">Coffees from abroad we&apos;ve brought to Chhattisgarh.</p>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {menuRoasterPartners.abroad.map((r) => (
              <li key={r.name} className="flex flex-col items-center rounded-2xl border border-ink/10 bg-paper p-5 text-center">
                <div className="relative h-16 w-full">
                  <Image src={r.logo} alt={`${r.name} logo`} fill className="object-contain" sizes="200px" />
                </div>
                <h3 className="mt-3 font-display text-base text-ink">{r.name}</h3>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 max-w-3xl space-y-4 text-base leading-relaxed text-ink-soft/85">
          <h2 className="font-display text-2xl text-rust">How to choose coffee beans</h2>
          <p>
            Look for a roast date, not just a best-before date — specialty coffee tastes best within a month of roasting.
            Buy whole beans if you have a grinder, and tell the roaster your brewer if you don&apos;t. Lighter roasts suit
            pour-over and taste fruitier; medium roasts are easier for espresso and milk drinks. If you&apos;re not sure
            where to start, taste a few at a 1DM cafe — the guest coffee on the bar rotates — and ask the barista.
          </p>
          <p>
            New to specialty coffee? Read{" "}
            <Link href="/journal/what-is-specialty-coffee" className="underline-hover font-medium text-ink">
              what specialty coffee actually means
            </Link>
            . Buying for a cafe or office? See{" "}
            <a href="https://kruptoscoffee.com/wholesale" className="underline-hover font-medium text-ink">
              wholesale coffee beans
            </a>
            .
          </p>
        </div>

        <div className="mt-16 max-w-3xl">
          <h2 className="font-display text-2xl text-rust">Coffee beans in Raipur — common questions</h2>
          <div className="mt-6 space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-display text-lg text-ink">{f.q}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink-soft/80">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
