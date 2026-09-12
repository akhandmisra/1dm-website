import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://1dm.coffee"),
  title: {
    default: "1DM — Specialty Coffee, For Everyone",
    template: "%s · 1DM",
  },
  description:
    "1DM Cafe and Kruptos Coffee Roasters — specialty coffee across Chhattisgarh, built one honest cup at a time.",
  openGraph: {
    title: "1DM — Specialty Coffee, For Everyone",
    description:
      "1DM Cafe and Kruptos Coffee Roasters — specialty coffee across Chhattisgarh, built one honest cup at a time.",
    siteName: "1DM",
    type: "website",
    images: ["/images/branding/storefront-sign.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
