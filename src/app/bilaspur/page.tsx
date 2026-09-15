import type { Metadata } from "next";
import { CityLocations } from "@/components/city-locations";

export const metadata: Metadata = {
  title: "1DM Specialty Coffee | Cafe & Kruptos Roastery in Bilaspur",
  description:
    "1DM Bilaspur — 1DM's tenth outlet, and also home to Kruptos Coffee Roasters, 1DM's own seed-to-cup specialty roastery, which launched in 2026.",
};

export default function BilaspurPage() {
  return (
    <CityLocations
      city="Bilaspur"
      eyebrow="Bilaspur"
      title="Cafe, and the roastery."
      copy="1DM Bilaspur is also where Kruptos Coffee Roasters — 1DM's own specialty roastery — launched in 2026: seed to cup, all under one roof."
    />
  );
}
