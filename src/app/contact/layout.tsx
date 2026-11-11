import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact WebRajya — Local Nagpur Office & Help Desk",
  description:
    "Get in touch with the WebRajya team in Nagpur. In-shop onboarding, phone support, and technical help for retail shop owners.",
  alternates: {
    canonical: "https://webrajya.com/contact",
  },
  openGraph: {
    title: "Contact WebRajya — Nagpur Office",
    description: "Reach our local Nagpur team by phone, WhatsApp, or schedule an in-shop visit.",
    url: "https://webrajya.com/contact",
    siteName: "WebRajya",
    locale: "en_IN",
    type: "website"
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
