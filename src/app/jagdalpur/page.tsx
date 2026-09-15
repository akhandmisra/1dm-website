import type { Metadata } from "next";
import { CityLocations } from "@/components/city-locations";

export const metadata: Metadata = {
  title: "1DM Specialty Coffee | Coming Soon to Jagdalpur",
  description: "1DM is opening a cafe in Jagdalpur soon — exact hours and address to follow.",
};

export default function JagdalpurPage() {
  return (
    <CityLocations
      city="Jagdalpur"
      eyebrow="Jagdalpur"
      title="Opening soon in Jagdalpur."
      copy="1DM's Jagdalpur outlet is on the way — exact hours and address are coming as soon as they're confirmed."
    />
  );
}
