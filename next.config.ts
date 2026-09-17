import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Applies to every route. X-Frame-Options blocks the site from being
        // embedded in another site's <iframe> (clickjacking defense);
        // X-Content-Type-Options stops browsers from guessing/overriding a
        // response's declared content type (MIME-sniffing defense). Both
        // were flagged as missing by a site audit — there's no reason not
        // to send them site-wide.
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};

export default nextConfig;
