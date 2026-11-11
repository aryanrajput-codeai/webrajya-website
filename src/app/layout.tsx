import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_Devanagari, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { MobileBottomDock } from "@/components/navbar/MobileBottomDock";
import { JsonLd } from "@/components/seo/JsonLd";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
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
  title: "WEBRAJYA — Technology That Runs Your Business",
  description: "WebRajya is a parent technology platform building high-performance connected business software: WebRajya POS for restaurants and WebRajya Invoice for financial billing.",
  keywords: ["WebRajya", "Restaurant POS", "Business Invoicing", "POS Billing Software", "Cloud Kitchen POS", "Invoice Generator", "GST Billing", "Offline Thermal Billing Software India"],
  authors: [{ name: "WebRajya Platform" }],
  openGraph: {
    title: "WEBRAJYA — Business Technology Platform",
    description: "Choose the WebRajya platform built for the way you work: WebRajya POS or WebRajya Invoice.",
    url: "https://webrajya.com",
    siteName: "WebRajya",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBRAJYA — Technology That Runs Your Business",
    description: "WebRajya POS and WebRajya Invoice — simple, fast, connected business software.",
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
      </head>
      <body className="bg-[#F8F3EB] text-[#020C2B] min-h-screen flex flex-col font-sans antialiased selection:bg-[#E58145] selection:text-white pb-16 md:pb-0">
        <TooltipProvider delay={150}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <MobileBottomDock />
        </TooltipProvider>
      </body>
    </html>
  );
}
