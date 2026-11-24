import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, siteUrl } from "@/lib/metadata";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = pageMetadata({
  path: "/franchise",
  title: "Cafe Franchise in Chhattisgarh — Open a 1DM Specialty Coffee Cafe",
  description:
    "Open a 1DM specialty coffee cafe franchise in Raipur, Bhilai, Bilaspur or anywhere in Chhattisgarh. Franchise-owned, company-operated: we run the bar, menu, training and coffee supply. Cafe consulting also available.",
});

const offers = [
  {
    title: "1DM franchise (FOCO)",
    copy: "Franchise-owned, company-operated. You invest in the outlet; 1DM runs it day to day — hiring and training baristas, the menu, coffee supply from Kruptos, inventory and operations — the same way we run our own cafes.",
  },
  {
    title: "Cafe consulting",
    copy: "Already running a cafe, or opening your own brand? We help with menu and recipe development, coffee program and equipment choice, barista training, and setting up operations and inventory.",
  },
  {
    title: "Coffee supply",
    copy: "Specialty beans for your cafe, restaurant or hotel from our own roastery, Kruptos Coffee Roasters, with recipes and training so the coffee tastes right on your bar.",
  },
];

const faqs = [
  {
    q: "Does 1DM offer cafe franchises?",
    a: "Yes. 1DM grows on a franchise-owned, company-operated (FOCO) model: the franchise partner invests in the outlet and 1DM operates it — staff, training, menu, coffee and day-to-day running.",
  },
  {
    q: "Where can I open a 1DM franchise?",
    a: "1DM already runs cafes in Raipur, Bhilai and Bilaspur, with Jagdalpur coming soon. We're open to new outlets across Chhattisgarh and nearby cities — tell us your location and we'll assess it with you.",
  },
  {
    q: "What does a 1DM franchise cost?",
    a: "It depends on the city, the size of the space and the format. Share your location and space details through the form and we'll walk you through the investment and the numbers on a call.",
  },
  {
    q: "Can 1DM help with my own cafe brand?",
    a: "Yes — our cafe consulting covers menu and recipe development, coffee program and equipment, barista training and operations setup, and we can supply specialty beans from Kruptos Coffee Roasters.",
  },
];

export default function FranchisePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "1DM cafe franchise and cafe consulting",
    serviceType: "Cafe franchise and coffee business consulting",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: { "@type": "State", name: "Chhattisgarh" },
    url: `${siteUrl}/franchise`,
  };

  return (
    <section className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Container>
        <SectionHeading
          eyebrow="Franchise · Consulting · Coffee supply"
          title="Open a specialty coffee cafe with 1DM."
          copy="Chhattisgarh's specialty coffee chain, with its own roastery. Partner with us on a 1DM outlet, or bring us in to build the coffee program for your own cafe."
          as="h1"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <div className="space-y-5">
              {offers.map((o) => (
                <div key={o.title} className="rounded-2xl border border-ink/10 bg-paper p-6">
                  <h2 className="font-display text-xl text-ink">{o.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft/75">{o.copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 space-y-4 text-base leading-relaxed text-ink-soft/85">
              <h2 className="font-display text-2xl text-rust">Why partner with 1DM</h2>
              <p>
                1DM started in 2019 as a coffee truck in Pune and brought specialty coffee culture to Raipur in 2021.
                Today we run cafes across{" "}
                <Link href="/raipur" className="underline-hover font-medium text-ink">Raipur</Link>,{" "}
                <Link href="/bhilai" className="underline-hover font-medium text-ink">Bhilai</Link> and{" "}
                <Link href="/bilaspur" className="underline-hover font-medium text-ink">Bilaspur</Link>, with our own
                roastery,{" "}
                <Link href="/kruptos" className="underline-hover font-medium text-ink">Kruptos Coffee Roasters</Link>,
                and a barista team with state and national coffee trophies.
              </p>
              <p>
                That means a franchise partner gets a proven menu, a coffee supply chain, trained people and the
                systems we run our own outlets on — not just a logo.
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-ink">Talk to us about a cafe</h2>
            <LeadForm
              reason="Franchise / partnership"
              orgLabel="Current business (if any)"
              detailLabel="Interested in"
              detailPlaceholder="1DM franchise, cafe consulting or coffee supply — and your location"
              messagePlaceholder="Space size, area, timeline, anything we should know"
              submitLabel="Request a call"
              whatsappText="Hi 1DM, I'm interested in a cafe franchise / consulting. Location: "
            />
          </div>
        </div>

        <div className="mt-20 max-w-3xl">
          <h2 className="font-display text-2xl text-rust">Franchise — common questions</h2>
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
