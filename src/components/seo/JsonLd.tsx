import React from "react";

export function JsonLd() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "WebRajya POS & Billing Software",
    "operatingSystem": "Web, Windows, macOS, Android, iOS",
    "applicationCategory": "BusinessApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "description": "Zero-lag restaurant POS billing software with offline KOT printing, table management, inventory costing, and GST invoicing.",
    "publisher": {
      "@type": "Organization",
      "name": "WebRajya",
      "url": "https://webrajya.com"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WebRajya",
    "url": "https://webrajya.com",
    "logo": "https://webrajya.com/webrajya-logo.svg",
    "sameAs": [
      "https://twitter.com/webrajya",
      "https://linkedin.com/company/webrajya"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9313264426",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does WebRajya POS work without internet connection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, WebRajya POS is 100% offline-resilient. Bills and KOT tickets continue printing even during internet outages, and automatically synchronize with the cloud once connection is restored."
        }
      },
      {
        "@type": "Question",
        "name": "Does WebRajya support thermal receipt printers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, WebRajya supports all standard 58mm and 80mm ESC/POS thermal printers via USB, Bluetooth, LAN Wi-Fi, and serial ports."
        }
      },
      {
        "@type": "Question",
        "name": "Is WebRajya GST compliant for invoicing in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, WebRajya generates 100% GST-compliant invoices with HSN/SAC codes, CGST/SGST/IGST breakdown, and instant WhatsApp PDF sharing."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
