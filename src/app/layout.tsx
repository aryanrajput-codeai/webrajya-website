import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_Devanagari, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { MobileBottomDock } from "@/components/navbar/MobileBottomDock";
import { JsonLd } from "@/components/seo/JsonLd";
import { NagpurLocalBusinessSchema } from "@/components/seo/NagpurLocalBusinessSchema";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { LaunchOfferModal } from "@/components/ui/LaunchOfferModal";
import { LanguageProvider } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WebRajya Invoice — Retail Billing & Inventory Software in Nagpur",
  description: "Affordable, easy-to-use billing and inventory software with personal customer support for retail shops in Nagpur. 3-day free trial after live demo.",
  keywords: [
    "Billing Software Nagpur",
    "Retail Billing Software Nagpur",
    "GST Billing Software Maharashtra",
    "Shop Inventory Management Nagpur",
    "Mobile Shop Billing Software Nagpur",
    "Cloth Shop Billing Nagpur",
    "WebRajya Invoice",
    "Offline Thermal Billing India"
  ],
  authors: [{ name: "WebRajya Platform" }],
  openGraph: {
    title: "WebRajya Invoice — Retail Billing & Inventory Software in Nagpur",
    description: "Affordable, complete billing and inventory software for small and medium retail businesses in Nagpur with in-person setup help.",
    url: "https://webrajya.com",
    siteName: "WebRajya",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebRajya Invoice — Retail Billing & Inventory Software in Nagpur",
    description: "Start your 3-day free trial with personal setup support in Nagpur, Maharashtra.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "scroll-smooth",
        plusJakartaSans.variable,
        notoSansDevanagari.variable,
        jetbrainsMono.variable
      )}
    >
      <head>
        <JsonLd />
        <NagpurLocalBusinessSchema />
      </head>
      <body className="bg-[#F8F3EB] text-[#020C2B] min-h-screen flex flex-col font-sans antialiased selection:bg-[#E58145] selection:text-white pb-16 md:pb-0">
        <LanguageProvider>
          <TooltipProvider delay={150}>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FloatingWhatsApp />
            <MobileBottomDock />
            <CookieConsent />
            <LaunchOfferModal />
          </TooltipProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
