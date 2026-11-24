import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { CityLocations, type Faq } from "@/components/city-locations";
import { locations } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  path: "/raipur",
  title: "Best Specialty Coffee in Raipur — 5 Cafes",
  description:
    "Looking for the best coffee in Raipur? 1DM brought specialty coffee to Raipur in 2021 — pour-over, espresso and cold brew at cafes in Samta Colony, Tagore Nagar, Avanti Vihar, Dumartarai and Shankar Nagar.",
});

const open = locations.filter((l) => l.city === "Raipur" && l.menuStatus === "live");
const outletLine = (slug: string) => {
  const l = locations.find((x) => x.slug === slug);
  return l ? `${l.name} (${l.hours})` : "";
};

const faqs: Faq[] = [
  {
    q: "Where can I get specialty coffee in Raipur?",
    a: `1DM has ${open.length} cafes open in Raipur: ${open.map((l) => l.name).join(", ")}. Every one pours the same specialty coffee program — espresso, hand-brewed pour-over and cold brew.`,
  },
  {
    q: "Which 1DM cafe in Raipur opens earliest?",
    a: `For an early coffee, go to ${outletLine("tagore")} or ${outletLine("avanti")}. ${outletLine("samta")} opens later in the morning.`,
  },
  {
    q: "What makes specialty coffee different from regular coffee?",
    a: "Specialty coffee starts with traceable, high-scoring beans, roasted to bring out each origin's own flavour, then brewed by trained baristas to a recipe. At 1DM that means fresh roasts from our own roastery, Kruptos Coffee Roasters, alongside guest roasters on the same bar.",
  },
  {
    q: "How much does coffee cost at 1DM in Raipur?",
    a: "Espresso and Americano start at ₹200, cafe lattes and cappuccinos are ₹230, and every espresso signature is ₹250. The full Daily Pour menu, with food, is on each outlet's menu page.",
  },
  {
    q: "Does 1DM in Raipur serve non-vegetarian food?",
    a: "1DM Tagore Nagar serves the Veg & Non-Veg edition of the menu, with eggs and chicken. Every other 1DM outlet serves the 100% vegetarian edition.",
  },
];

export default function RaipurPage() {
  return (
    <CityLocations
      city="Raipur"
      eyebrow="Specialty coffee in Raipur"
      title="The best specialty coffee in Raipur, five cafes deep."
      copy="Raipur is where 1DM first brought specialty coffee culture to Chhattisgarh, back in 2021. Five outlets are open now, with 1DM Civil Line and Slice By 1DM VIP Road on the way."
      faqs={faqs}
    >
      <h2>Raipur&apos;s specialty coffee, since 2021</h2>
      <p>
        1DM started in 2019 as India&apos;s first multi-roaster coffee truck in Pune — a one-dollar cup as the
        door into specialty coffee. In 2021 the truck parked for good in Raipur, and 1DM became the place that
        brought specialty coffee culture to the city. Our baristas went on to be the first from Chhattisgarh to win
        coffee trophies at state and national level, including 2nd place at the 2023 India AeroPress Championship.
      </p>
      <p>
        Today every Raipur outlet runs the same bar: double-shot espresso drinks, hand-brewed pour-over on V60,
        Chemex and AeroPress, slow cold brew, and a rotating line-up of roasters — our own Kruptos Coffee Roasters
        next to independent Indian roasters. The kitchen runs the Daily Pour menu: breakfast platters,
        sandwiches, panuozzo, bowls and fresh bakes.
      </p>
      <h2>Which 1DM in Raipur should you visit?</h2>
      <p>
        <Link href="/menu/samta">1DM Samta Colony</Link> sits on Main Road near Agrasen Hospital.{" "}
        <Link href="/menu/tagore">1DM Tagore Nagar</Link>, near Navkar Hospital, and{" "}
        <Link href="/menu/avanti">1DM Avanti Vihar</Link> open earliest — good for a first cup before work.{" "}
        <Link href="/menu/dumartarai">1DM Dumartarai</Link>, at LK Corporate Towers on New Dhamtari Road,
        serves the offices around it on weekdays and Saturdays. And{" "}
        <Link href="/menu/slice-shankar-nagar">Slice By 1DM</Link>, our sister cafe, is in Shankar Nagar.
      </p>
    </CityLocations>
  );
}
