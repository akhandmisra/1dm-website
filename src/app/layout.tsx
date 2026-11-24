import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { organizationSchema, withContext } from "@/lib/schema";
import { pageMetadata, siteUrl } from "@/lib/metadata";

const HOME_TITLE = "1DM Specialty Coffee | Cafes in Raipur, Bhilai & Bilaspur";
const HOME_DESCRIPTION =
  "1DM brought specialty coffee to Chhattisgarh — espresso, pour-over and cold brew at cafes across Raipur, Bhilai and Bilaspur, roasted by our own Kruptos Coffee Roasters.";

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
  // Google Search Console ownership for https://www.1dm.coffee/ — keep this
  // tag, or the property loses verification.
  verification: {
    google: "0Tq-C-7nfWQCJnalmeyGlEXicf2ZYE60SbxihLxGt3k",
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
