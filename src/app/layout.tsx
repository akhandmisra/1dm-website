import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { organizationSchema, withContext } from "@/lib/schema";
import { pageMetadata, siteUrl } from "@/lib/metadata";

const HOME_TITLE = "1DM — Specialty Coffee, For Everyone";
const HOME_DESCRIPTION =
  "1DM Cafe and Kruptos Coffee Roasters — specialty coffee across Chhattisgarh, built one honest cup at a time.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata({ path: "/", title: HOME_TITLE, description: HOME_DESCRIPTION }),
  // The homepage title itself stays a plain string (set above via pageMetadata),
  // but every other page's shorter title should still get the " · 1DM" suffix —
  // that behavior comes from `title.template` below, which Next.js applies on
  // top of whatever plain-string `title` each page's own metadata provides.
  title: {
    default: HOME_TITLE,
    template: "%s · 1DM",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(withContext(organizationSchema())) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
