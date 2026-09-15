import type { Metadata } from "next";
import { CityLocations } from "@/components/city-locations";

export const metadata: Metadata = {
  title: "1DM Specialty Coffee | Cafe in Bhilai",
  description:
    "1DM Bhilai — the same specialty coffee bar as every other 1DM outlet, open six days a week (closed Mondays).",
};

export default function BhilaiPage() {
  return (
    <CityLocations
      city="Bhilai"
      eyebrow="Bhilai"
      title="One cafe, the same standard."
      copy="1DM Bhilai runs the same bar as every other outlet — the same shots, the same seven-second pour, the same bar we set back when a cup cost $1."
    />
  );
}
