import type { Metadata } from "next";
import { CommunityForm } from "./community-form";

export const metadata: Metadata = {
  title: "Coffee Community",
  description:
    "Join 1DM's Coffee Community — tell us how you brew at home and get invited to tastings, cuppings, and early access to new roasts.",
};

export default function CommunityPage() {
  return <CommunityForm />;
}
