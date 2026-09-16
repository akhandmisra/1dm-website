import type { Metadata } from "next";
import { CareersForm } from "./careers-form";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "1DM is hiring a Head Barista, Chef, Manager, and HR across our outlets in Raipur, Bhilai, Bilaspur, and Jagdalpur. Apply directly on this page.",
};

export default function CareersPage() {
  return <CareersForm />;
}
