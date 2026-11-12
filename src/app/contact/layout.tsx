import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact WebRajya — Head Office & Support Desk",
  description:
    "Get in touch with the WebRajya team. Online onboarding via video call across India, phone/WhatsApp support, and Nagpur in-shop visits.",
  alternates: {
    canonical: "https://webrajya.com/contact",
  },
  openGraph: {
    title: "Contact WebRajya — Support Desk & Head Office",
    description: "Reach our onboarding team by phone, WhatsApp, or schedule a personal counter demo.",
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
