import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, siteUrl } from "@/lib/metadata";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = pageMetadata({
  path: "/coffee-catering",
  title: "Coffee Catering in Raipur, Bhilai & Bilaspur — Live Coffee Bar for Events & Offices",
  description:
    "Book 1DM's live specialty coffee bar for corporate events, office coffee, weddings and conferences in Raipur, Bhilai and Bilaspur. Trained baristas, espresso, pour-over and cold brew from our own roastery, Kruptos.",
});

const services = [
  {
    title: "Corporate events & conferences",
    copy: "A full espresso bar with trained 1DM baristas on site — lattes, cappuccinos, cold brew and signatures, served to order for your guests.",
  },
  {
    title: "Office coffee",
    copy: "Regular coffee days, team mornings or a standing office coffee setup, with fresh Kruptos beans and a barista program that fits your team size.",
  },
  {
    title: "Weddings & private parties",
    copy: "A specialty coffee counter for mehendi, sangeet, receptions and house parties — the coffee bar guests actually queue for.",
  },
  {
    title: "Launches, exhibitions & pop-ups",
    copy: "Brand launches, stalls and exhibitions — a branded 1DM bar that brings people to your space and keeps them there.",
  },
];

const faqs = [
  {
    q: "Do you cater coffee for corporate events in Raipur?",
    a: "Yes. 1DM sets up a live specialty coffee bar with trained baristas for corporate events, conferences and office coffee days across Raipur, and in Bhilai and Bilaspur as well.",
  },
  {
    q: "What drinks can you serve at an event?",
    a: "Espresso drinks (lattes, cappuccinos, Americanos), 1DM signatures, cold brew and hand-brewed pour-over, made with beans from our own roastery, Kruptos Coffee Roasters. Tell us your guest count and we'll suggest a menu.",
  },
  {
    q: "How do I get a quote for coffee catering?",
    a: "Fill in the form on this page or WhatsApp us on +91 9179241042 with the date, venue, city and number of guests. We'll call you back within one working day with a quote.",
  },
  {
    q: "How far in advance should I book?",
    a: "A week ahead is ideal for most events; for weddings and large conferences, book as early as you can so we can hold baristas and equipment for your date.",
  },
];

export default function CoffeeCateringPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Specialty coffee catering",
    serviceType: "Coffee catering and live coffee bar",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: ["Raipur", "Bhilai", "Bilaspur", "Chhattisgarh"].map((name) => ({ "@type": "Place", name })),
    url: `${siteUrl}/coffee-catering`,
  };

  return (
    <section className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Container>
        <SectionHeading
          eyebrow="Coffee catering · Raipur · Bhilai · Bilaspur"
          title="A live specialty coffee bar for your event or office."
          copy="1DM brings the same bar we run in our cafes — trained baristas, an espresso machine and fresh beans from our own roastery — to your venue."
          as="h1"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {services.map((s) => (
                <div key={s.title} className="rounded-2xl border border-ink/10 bg-paper p-6">
                  <h2 className="font-display text-xl text-ink">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft/75">{s.copy}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-4 text-base leading-relaxed text-ink-soft/85">
              <h2 className="font-display text-2xl text-rust">Why book 1DM</h2>
              <p>
                1DM has run specialty coffee bars in Chhattisgarh since 2021, with cafes across Raipur, Bhilai and
                Bilaspur. Our baristas include the first from Chhattisgarh to win coffee trophies at state and
                national level — including 2nd place at the 2023 India AeroPress Championship.
              </p>
              <p>
                Every cup is made with beans from{" "}
                <Link href="/kruptos" className="underline-hover font-medium text-ink">
                  Kruptos Coffee Roasters
                </Link>
                , our own roastery, so the coffee at your event tastes exactly like the coffee in our cafes.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-ink">Get a catering quote</h2>
            <LeadForm
              reason="Coffee catering enquiry"
              detailLabel="Event date, venue & guest count"
              detailPlaceholder="e.g. 14 Dec, Hotel Babylon, ~150 guests"
              messagePlaceholder="Type of event, timings, any drinks you have in mind"
              submitLabel="Get a quote"
              whatsappText="Hi 1DM, I'd like a quote for coffee catering. Date: , Venue: , Guests: "
            />
          </div>
        </div>

        <div className="mt-20 max-w-3xl">
          <h2 className="font-display text-2xl text-rust">Coffee catering — common questions</h2>
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
