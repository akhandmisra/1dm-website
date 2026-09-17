import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = pageMetadata({
  path: "/contact",
  title: "Contact",
  description:
    "Reach 1DM by phone, email, or Instagram, send us a message directly, or find an outlet in Raipur, Bhilai, Bilaspur, or Jagdalpur.",
});

export default function ContactPage() {
  return <ContactForm />;
}
