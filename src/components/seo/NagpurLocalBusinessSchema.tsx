import React from "react";
import { COMPANY_CONFIG } from "@/config/company";

export function NagpurLocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://webrajya.com/#localbusiness",
        name: "WebRajya - Nagpur Head Office",
        url: "https://webrajya.com",
        telephone: COMPANY_CONFIG.phone,
        email: COMPANY_CONFIG.email,
        priceRange: "₹₹",
        image: "https://webrajya.com/icon.svg",
        description:
          "WebRajya software head office and local on-site onboarding center in Nagpur, Maharashtra. On-site retail software setup and support for Nagpur shop owners.",
        address: {
          "@type": "PostalAddress",
          streetAddress: COMPANY_CONFIG.headOfficeAddress,
          addressLocality: "Nagpur",
          addressRegion: "Maharashtra",
          postalCode: "440022",
          addressCountry: "IN"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "21.1458",
          longitude: "79.0882"
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "20:00"
          }
        ],
        areaServed: [
          {
            "@type": "Country",
            name: "India"
          },
          {
            "@type": "City",
            name: "Nagpur"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://webrajya.com/invoice#software",
        name: "WebRajya Invoice",
        operatingSystem: "Windows, macOS, Linux, Web",
        applicationCategory: "BusinessApplication",
        offers: [
          {
            "@type": "Offer",
            name: "Monthly Subscription",
            price: "599",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            name: "Annual Subscription",
            price: "5999",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            name: "Early Lifetime License",
            price: "19999",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
