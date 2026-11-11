import React from "react";
import { LAUNCH_CONFIG } from "@/config/launch";

export function NagpurLocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://webrajya.com/#localbusiness",
        name: "WebRajya Invoice - Nagpur",
        url: "https://webrajya.com",
        telephone: LAUNCH_CONFIG.PHONE,
        email: LAUNCH_CONFIG.EMAIL,
        priceRange: "₹₹",
        image: "https://webrajya.com/icon.svg",
        description:
          "Billing, inventory, and Khata business management software for retail shops in Nagpur, Maharashtra. Free 3-day in-shop trial and personal setup assistance.",
        address: {
          "@type": "PostalAddress",
          streetAddress: LAUNCH_CONFIG.NAGPUR_ADDRESS,
          addressLocality: LAUNCH_CONFIG.TARGET_CITY,
          addressRegion: LAUNCH_CONFIG.TARGET_STATE,
          postalCode: "440010",
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
            "@type": "City",
            name: "Nagpur"
          },
          {
            "@type": "State",
            name: "Maharashtra"
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

