import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, siteUrl } from "@/lib/metadata";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = pageMetadata({
  path: "/barista-training",
  title: "Barista Training in Raipur & Chhattisgarh — Espresso, Latte Art & Brewing Classes",
  description:
    "Barista training in Raipur, Bhilai and Bilaspur from 1DM, Chhattisgarh's first specialty coffee cafe — espresso, milk steaming, latte art, pour-over and cafe workflow, for cafe teams and coffee lovers. Trained by award-winning baristas.",
});

const tracks = [
  {
    title: "For cafe & restaurant teams",
    copy: "On-site or at a 1DM bar: dialling in espresso, grind and dose, milk steaming and latte art, pour-over and cold brew, cleaning and machine care, speed and workflow on a busy bar. Built around your machine and your menu.",
  },
  {
    title: "For hotels & offices",
    copy: "Training for staff who run a coffee machine alongside other work — consistent espresso drinks, milk, hygiene and daily cleaning, so the machine you bought actually makes good coffee.",
  },
  {
    title: "Brewing classes for coffee lovers",
    copy: "Learn to brew great coffee at home — grinders, pour-over, AeroPress, French press and espresso basics. 1DM Elite Club members get 15 hours of brewing classes a year; ask us about upcoming workshops.",
  },
];

const topics = [
  "Coffee basics: origins, processing and roast levels",
  "Grind size, dose, yield and brew ratios",
  "Dialling in espresso and tasting for sour, bitter and balanced",
  "Milk steaming, texture and latte art",
  "Pour-over (V60), AeroPress, French press and cold brew",
  "Machine and grinder cleaning and daily maintenance",
  "Bar workflow, speed and consistency during rushes",
  "Hygiene, waste and cost control on the bar",
];

const faqs = [
  {
    q: "Where can I get barista training in Raipur?",
    a: "1DM, Chhattisgarh's first specialty coffee cafe, offers barista training in Raipur for cafe, restaurant, hotel and office teams, and brewing classes for coffee lovers. Training can be at your venue or at a 1DM bar in Raipur, Bhilai or Bilaspur.",
  },
  {
    q: "Who runs the training?",
    a: "1DM's own baristas and coffee team — the same people who train every barista in our cafes. Our team includes the first baristas from Chhattisgarh to place at state and national level, including 2nd place at the 2023 India AeroPress Championship.",
  },
  {
    q: "Do you train staff on our own espresso machine?",
    a: "Yes. For cafes, hotels and offices we usually train on your machine and grinder, so your team learns the exact setup they'll use every day.",
  },
  {
    q: "Can I learn as an individual?",
    a: "Yes — through brewing classes and workshops. 1DM Elite Club members get 15 hours of brewing classes a year. Use the form to ask about the next session.",
  },
  {
    q: "Do you also help set up the cafe?",
    a: "Yes. Training is part of our cafe consulting, along with menu and recipes, equipment, coffee supply from our roastery Kruptos, and operations.",
  },
];

export default function BaristaTrainingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Barista training and brewing classes",
    serviceType: "Barista training, latte art and coffee brewing classes",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: ["Raipur", "Bhilai", "Bilaspur", "Chhattisgarh"].map((name) => ({ "@type": "Place", name })),
    url: `${siteUrl}/barista-training`,
  };

  return (
    <section className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Container>
        <SectionHeading
          eyebrow="Barista training · Raipur · Bhilai · Bilaspur"
          title="Barista training in Raipur, from the team that brought specialty coffee to Chhattisgarh."
          copy="Espresso, milk and latte art, pour-over and bar workflow — for cafe, restaurant, hotel and office teams, and brewing classes for anyone who loves coffee."
          as="h1"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {tracks.map((t) => (
            <div key={t.title} className="rounded-2xl border border-ink/10 bg-paper p-6">
              <h2 className="font-display text-xl text-ink">{t.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft/75">{t.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-ink-soft/85">
            <div>
              <h2 className="font-display text-2xl text-rust">What we cover</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                {topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl text-rust">Why train with 1DM</h2>
              <p className="mt-3">
                We&apos;ve trained every barista across our cafes in Raipur, Bhilai and Bilaspur, and our team includes the
                first baristas from Chhattisgarh to place at state and national level — including 2nd place at the 2023
                India AeroPress Championship. Training uses fresh coffee from our own roastery,{" "}
                <a href="https://kruptoscoffee.com/custom-coffee-roasting" className="underline-hover font-medium text-ink">
                  Kruptos
                </a>
                .
              </p>
              <p className="mt-3">
                Opening a cafe? Training is part of our{" "}
                <Link href="/cafe-consulting" className="underline-hover font-medium text-ink">
                  cafe consulting
                </Link>
                , alongside equipment and{" "}
                <a href="https://kruptoscoffee.com/espresso-machines-chhattisgarh" className="underline-hover font-medium text-ink">
                  espresso machines
                </a>
                .
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-ink">Ask about training</h2>
            <LeadForm
              reason="Barista training enquiry"
              orgLabel="Cafe / company (if any)"
              detailLabel="Who's training & where"
              detailPlaceholder="e.g. 4 baristas, our cafe in Bhilai / just me, home brewing"
              messagePlaceholder="Your machine, what you want to learn, preferred dates"
              submitLabel="Send enquiry"
              whatsappText="Hi 1DM, I'd like to ask about barista training. Team size: , City: "
            />
          </div>
        </div>

        <div className="mt-20 max-w-3xl">
          <h2 className="font-display text-2xl text-rust">Barista training — common questions</h2>
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
