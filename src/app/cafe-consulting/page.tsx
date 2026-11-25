import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, siteUrl } from "@/lib/metadata";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = pageMetadata({
  path: "/cafe-consulting",
  title: "Cafe Consulting in Raipur & Chhattisgarh — Open or Grow a Specialty Coffee Cafe",
  description:
    "Cafe consulting from 1DM, Chhattisgarh's first specialty coffee cafe chain: concept, menu and recipes, coffee program, espresso machine and equipment choice, barista training, costing and operations — for new cafes, restaurants and hotels in Raipur, Bhilai, Bilaspur and beyond.",
});

const services = [
  {
    title: "Concept & location",
    copy: "Format, size, seating and footfall — what kind of cafe will work at your location and who it's for.",
  },
  {
    title: "Menu, recipes & costing",
    copy: "A coffee and food menu built for your customers, with recipes and per-cup costing so your prices actually make money.",
  },
  {
    title: "Coffee program",
    copy: "Your espresso and filter coffees, roasted fresh by our own Kruptos Coffee Roasters — or a custom house blend and roast profile just for you.",
  },
  {
    title: "Equipment",
    copy: "Which espresso machine, grinders and brewers to buy for your volume and budget — or rent first — supplied, installed and dialled in.",
  },
  {
    title: "Barista training",
    copy: "Your team trained on your machine: espresso, milk and latte art, pour-over, cleaning and bar workflow.",
  },
  {
    title: "Operations & growth",
    copy: "Opening checklists, inventory and stock control, hiring, daily SOPs, and local marketing — the systems we use to run our own cafes.",
  },
];

const steps = [
  { t: "Call", d: "Tell us about your plan, location and budget." },
  { t: "Plan", d: "We put together the concept, menu, equipment list and budget." },
  { t: "Set up", d: "Equipment installed, coffee dialled in, team trained." },
  { t: "Open & grow", d: "We stay on call through opening and help you fix what the first months reveal." },
];

const faqs = [
  {
    q: "Who offers cafe consulting in Raipur?",
    a: "1DM, the team behind Chhattisgarh's first specialty coffee cafe and its own roastery Kruptos, offers cafe consulting in Raipur, Bhilai, Bilaspur and across Chhattisgarh — from concept and menu to equipment, coffee supply, barista training and operations.",
  },
  {
    q: "How much does it cost to open a cafe in Chhattisgarh?",
    a: "It depends on the size, location, fit-out and equipment. Coffee equipment alone ranges from a few lakh rupees for a small setup to much more for a large cafe. Share your plan and we'll give you a realistic budget.",
  },
  {
    q: "Which espresso machine should my cafe buy?",
    a: "Base it on how many drinks you'll sell a day and your menu. Most new specialty cafes do well with a two-group commercial machine and two grinders. We'll recommend a setup, and you can rent before you buy.",
  },
  {
    q: "Can you supply coffee beans after we open?",
    a: "Yes. Our roastery, Kruptos, roasts to order for cafes, with a custom roast profile or house blend if you want one.",
  },
  {
    q: "Do you offer franchises too?",
    a: "Yes — if you'd rather open a 1DM cafe than your own brand, see our franchise model.",
  },
];

export default function CafeConsultingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cafe consulting",
    serviceType: "Cafe and coffee business consulting",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: ["Raipur", "Bhilai", "Bilaspur", "Chhattisgarh"].map((name) => ({ "@type": "Place", name })),
    url: `${siteUrl}/cafe-consulting`,
  };

  return (
    <section className="grain bg-cream pb-24 pt-20 md:pb-32 md:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Container>
        <SectionHeading
          eyebrow="Cafe consulting · Chhattisgarh"
          title="Open or grow a specialty cafe — with the team that runs Chhattisgarh's first one."
          copy="Concept, menu, coffee, equipment, barista training and operations. Everything we've learned running 1DM's cafes and our own roastery, applied to your cafe, restaurant or hotel."
          as="h1"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-ink/10 bg-paper p-6">
              <h2 className="font-display text-xl text-ink">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft/75">{s.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl text-rust">How it works</h2>
          <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="rounded-2xl border border-ink/10 p-6">
                <p className="text-xs font-semibold text-rust">0{i + 1}</p>
                <h3 className="mt-2 font-display text-lg text-ink">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft/75">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="space-y-4 text-base leading-relaxed text-ink-soft/85">
            <h2 className="font-display text-2xl text-rust">Useful before you start</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/journal/how-to-open-a-cafe-in-chhattisgarh" className="underline-hover font-medium text-ink">
                  How to open a cafe in Chhattisgarh
                </Link>
              </li>
              <li>
                <Link href="/journal/coffee-equipment-checklist-new-cafe-india" className="underline-hover font-medium text-ink">
                  Coffee equipment checklist for a new cafe
                </Link>
              </li>
              <li>
                <a href="https://kruptoscoffee.com/espresso-machines-chhattisgarh" className="underline-hover font-medium text-ink">
                  Espresso & commercial coffee machines — buy or rent
                </a>
              </li>
              <li>
                <a href="https://kruptoscoffee.com/custom-coffee-roasting" className="underline-hover font-medium text-ink">
                  Custom roasting & house blends from Kruptos
                </a>
              </li>
              <li>
                <Link href="/barista-training" className="underline-hover font-medium text-ink">
                  Barista training
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="underline-hover font-medium text-ink">
                  Open a 1DM franchise instead
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl text-ink">Talk to us about your cafe</h2>
            <LeadForm
              reason="Cafe consulting enquiry"
              orgLabel="Cafe / business name (if any)"
              detailLabel="City, location & stage"
              detailPlaceholder="e.g. Bilaspur, 800 sq ft, opening in 3 months"
              messagePlaceholder="What you need help with — menu, equipment, coffee, training, all of it"
              submitLabel="Get in touch"
              whatsappText="Hi 1DM, I'd like help with my cafe. City: , Stage: "
            />
          </div>
        </div>

        <div className="mt-20 max-w-3xl">
          <h2 className="font-display text-2xl text-rust">Cafe consulting — common questions</h2>
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
