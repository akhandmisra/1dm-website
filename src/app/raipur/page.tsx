import type { Metadata } from "next";
import { CityLocations } from "@/components/city-locations";

export const metadata: Metadata = {
  title: "1DM Specialty Coffee | Best Cafe in Raipur",
  description:
    "1DM's home city — five open cafes (Samta, Dumartarai, Avanti Vihar, Tagore Nagar, Slice By 1DM Shankar Nagar) with two more on the way, running the same specialty coffee standard 1DM first brought to Raipur in 2021.",
};

export default function RaipurPage() {
  return (
    <CityLocations
      city="Raipur"
      eyebrow="Raipur"
      title="Seven cafes, one city."
      copy="Raipur is where 1DM first brought specialty coffee culture to Chhattisgarh, back in 2021. Five outlets are open now, with two more — 1DM Civil Line and Slice By 1DM VIP Road — on the way."
    />
  );
}
