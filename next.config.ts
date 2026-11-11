import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/refund",
        destination: "/refund-policy",
        permanent: true,
      },
      {
        source: "/subscription-policy",
        destination: "/subscription-terms",
        permanent: true,
      },
      {
        source: "/sla",
        destination: "/support-sla",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
