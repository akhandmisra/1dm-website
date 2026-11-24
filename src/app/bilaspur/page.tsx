import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { CityLocations, type Faq } from "@/components/city-locations";
import { locations } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  path: "/bilaspur",
  title: "Best Specialty Coffee in Bilaspur — Narmada Nagar",
  description:
    "Specialty coffee in Bilaspur — 1DM on Smart Road, Narmada Nagar pours espresso, hand-brewed pour-over and cold brew, with beans from 1DM's own Kruptos Coffee Roasters. Hours, address and menu.",
});

const bilaspur = locations.find((l) => l.slug === "bilaspur");

const faqs: Faq[] = [
  {
    q: "Where is 1DM in Bilaspur?",
    a: `${bilaspur?.name ?? "1DM Bilaspur"} is at ${bilaspur?.address ?? "Narmada Nagar, Bilaspur"}.`,
  },
  {
    q: "What are 1DM Bilaspur's opening hours?",
    a: `1DM Bilaspur is open ${bilaspur?.hours ?? "six days a week"}.`,
  },
  {
    q: "What coffee does 1DM Bilaspur serve?",
    a: "The full 1DM specialty coffee bar: espresso and milk drinks, espresso signatures, hand-brewed pour-over, cold brew, teas and matcha — with beans from our own Kruptos Coffee Roasters and guest Indian roasters.",
  },
  {
    q: "How much does coffee cost at 1DM Bilaspur?",
    a: "Espresso and Americano start at ₹200, cafe lattes and cappuccinos are ₹230, and every espresso signature is ₹250.",
  },
];

export default function BilaspurPage() {
  return (
    <CityLocations
      city="Bilaspur"
      eyebrow="Specialty coffee in Bilaspur"
      title="Specialty coffee in Bilaspur, and our roastery."
      copy="1DM Bilaspur is also where Kruptos Coffee Roasters — 1DM's own specialty roastery — launched in 2026: seed to cup, all under one roof."
      faqs={faqs}
    >
      <h2>The 1DM bar, on Smart Road</h2>
      <p>
        1DM is the specialty coffee brand that brought pour-over culture to Chhattisgarh in 2021, starting in
        Raipur. Our Bilaspur cafe in Narmada Nagar runs the same program as every 1DM: double-shot espresso
        drinks, hand-brewed pour-over on V60, Chemex and AeroPress, and slow cold brew — with coffee from{" "}
        <Link href="/kruptos">Kruptos Coffee Roasters</Link>, our own roastery, and guest Indian roasters.
      </p>
      <p>
        The kitchen serves the Daily Pour menu — breakfast platters, sandwiches, bowls and fresh bakes. See the{" "}
        <Link href="/menu/bilaspur">full 1DM Bilaspur menu</Link>, or browse{" "}
        <Link href="/locations">every 1DM outlet</Link>.
      </p>
    </CityLocations>
  );
}
