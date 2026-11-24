import Link from "next/link";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { locations } from "@/lib/site-data";
import { LocationCard } from "./location-card";
import { citySchemas, jsonLdGraph } from "@/lib/schema";

export type Faq = { q: string; a: string };

// City landing page: outlet cards, then optional long-form copy (children)
// and an FAQ block. The FAQ is also emitted as FAQPage JSON-LD so Google
// can show the answers directly — keep the visible text and the schema
// identical (Google requires the FAQ to be visible on the page).
export function CityLocations({
  city,
  eyebrow,
  title,
  copy,
  children,
  faqs,
}: {
  city: string;
  eyebrow: string;
  title: string;
  copy: string;
  children?: React.ReactNode;
  faqs?: Faq[];
}) {
  const cityLocations = locations.filter((l) => l.city === city);
  const faqNode =
    faqs && faqs.length > 0
      ? {
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;
  const schema = jsonLdGraph([...citySchemas(city), ...(faqNode ? [faqNode] : [])]);

  return (
    <section className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} copy={copy} as="h1" />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cityLocations.map((loc, i) => (
            <Reveal key={loc.slug} delay={i * 0.04}>
              <LocationCard loc={loc} />
            </Reveal>
          ))}
        </div>

        {children && (
          <div className="mt-20 max-w-3xl space-y-5 text-base leading-relaxed text-ink-soft/80 [&_a]:font-medium [&_a]:text-ink [&_a]:underline [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:text-ink">
            {children}
          </div>
        )}

        {faqs && faqs.length > 0 && (
          <div className="mt-20 max-w-3xl">
            <h2 className="font-display text-3xl text-ink">Questions people ask</h2>
            <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="font-medium text-ink">{f.q}</dt>
                  <dd className="mt-2 leading-relaxed text-ink-soft/80">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        <p className="mt-14 text-sm text-ink-soft/60">
          Looking for a different city?{" "}
          <Link href="/locations" className="underline-hover font-medium text-ink">
            See every 1DM outlet
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
