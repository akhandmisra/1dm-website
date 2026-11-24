import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { CityLocations, type Faq } from "@/components/city-locations";
import { locations } from "@/lib/site-data";

export const metadata: Metadata = pageMetadata({
  path: "/bhilai",
  title: "Best Specialty Coffee in Bhilai — Nehru Nagar",
  description:
    "Specialty coffee in Bhilai — 1DM on Model Town Road, Nehru Nagar pours espresso, hand-brewed pour-over and cold brew from our own roastery and guest roasters. Hours, address and menu.",
});

const bhilai = locations.find((l) => l.slug === "bhilai");

const faqs: Faq[] = [
  {
    q: "Where is 1DM in Bhilai?",
    a: `${bhilai?.name ?? "1DM Bhilai"} is at ${bhilai?.address ?? "Nehru Nagar, Bhilai"}.`,
  },
  {
    q: "What are 1DM Bhilai's opening hours?",
    a: `1DM Bhilai is open ${bhilai?.hours ?? "six days a week"}.`,
  },
  {
    q: "What coffee does 1DM Bhilai serve?",
    a: "The full 1DM specialty coffee bar: espresso and milk drinks, espresso signatures, hand-brewed pour-over, cold brew, teas and matcha — with beans from our own Kruptos Coffee Roasters and guest Indian roasters.",
  },
  {
    q: "How much does coffee cost at 1DM Bhilai?",
    a: "Espresso and Americano start at ₹200, cafe lattes and cappuccinos are ₹230, and every espresso signature is ₹250.",
  },
];

export default function BhilaiPage() {
  return (
    <CityLocations
      city="Bhilai"
      eyebrow="Specialty coffee in Bhilai"
      title="Specialty coffee in Bhilai, on Model Town Road."
      copy="1DM Bhilai runs the same bar as every other outlet — the same shots, the same seven-second pour, the same bar we set back when a cup cost $1."
      faqs={faqs}
    >
      <h2>The 1DM bar, in Nehru Nagar</h2>
      <p>
        1DM is the specialty coffee brand that brought pour-over culture to Chhattisgarh in 2021, starting in
        Raipur. Our Bhilai cafe on Model Town Road runs exactly the same program: double-shot espresso drinks,
        hand-brewed pour-over on V60, Chemex and AeroPress, and slow cold brew, with fresh roasts from our own
        Kruptos Coffee Roasters and guest Indian roasters on the same bar.
      </p>
      <p>
        The kitchen serves the Daily Pour menu — breakfast platters, sandwiches, bowls and fresh bakes. See the{" "}
        <Link href="/menu/bhilai">full 1DM Bhilai menu</Link>, or find{" "}
        <Link href="/raipur">1DM cafes in Raipur</Link>.
      </p>
    </CityLocations>
  );
}
