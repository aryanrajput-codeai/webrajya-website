import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fair, Transparent Pricing | WebRajya Software",
  description:
    "Explore transparent plans for WebRajya Invoice and WebRajya POS. Monthly at ₹599, Annual at ₹5,999, and Lifetime at ₹25,999 with 3-day free trial.",
  keywords: [
    "WebRajya Pricing",
    "Billing Software Cost",
    "Retail Billing Plans",
    "POS Software Price India",
    "Nagpur Retail Software"
  ],
  alternates: {
    canonical: "https://webrajya.com/pricing",
  },
  openGraph: {
    title: "Fair, Transparent Pricing | WebRajya Software",
    description: "Simple, honest pricing with all core features included. 3-day free trial on your counter.",
    url: "https://webrajya.com/pricing",
    siteName: "WebRajya",
    locale: "en_IN",
    type: "website"
  }
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
