import React from "react";
import { PRICING_CONFIG } from "@/config/pricing";
import { INITIAL_REVIEWS } from "@/data/reviews";

export function JsonLd() {
  // Aggregate rating calculated strictly from real review dataset
  const totalReviews = INITIAL_REVIEWS.length;
  const averageRating =
    totalReviews > 0
      ? (INITIAL_REVIEWS.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
      : null;

  const invoicePlans = PRICING_CONFIG.invoice.plans || [];
  const posPlans = PRICING_CONFIG.pos.plans || [];

  function createOffersForProduct(plans: typeof invoicePlans, productUrl: string) {
    return plans.map((plan) => ({
      "@type": "Offer",
      "name": `${plan.name} Plan`,
      "price": plan.price.toString(),
      "priceCurrency": "INR",
      "url": productUrl,
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": plan.price.toString(),
        "priceCurrency": "INR",
        "unitText": plan.id === "monthly" ? "MONTH" : plan.id === "yearly" ? "YEAR" : "ONE_TIME",
        "valueAddedTaxIncluded": false
      },
      "category": plan.id === "lifetime" ? "Perpetual License" : "Subscription",
      "description": plan.tagline
    }));
  }

  // Schema for WebRajya Invoice
  const invoiceSoftwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "WebRajya Invoice",
    "url": "https://webrajya.com/invoice",
    "operatingSystem": "Web, Windows, macOS, Android, iOS",
    "applicationCategory": "BusinessApplication",
    ...(averageRating && totalReviews > 0
      ? {
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": averageRating,
            "reviewCount": totalReviews.toString()
          }
        }
      : {}),
    "offers": createOffersForProduct(invoicePlans, "https://webrajya.com/invoice"),
    "description": "Smart retail billing, inventory management, customer khata ledger, and GST/non-GST invoicing software.",
    "publisher": {
      "@type": "Organization",
      "name": "WebRajya",
      "url": "https://webrajya.com"
    }
  };

  // Schema for WebRajya POS
  const posSoftwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "WebRajya POS",
    "url": "https://webrajya.com/pos",
    "operatingSystem": "Web, Windows, macOS, Android, iOS",
    "applicationCategory": "BusinessApplication",
    ...(averageRating && totalReviews > 0
      ? {
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": averageRating,
            "reviewCount": totalReviews.toString()
          }
        }
      : {}),
    "offers": createOffersForProduct(posPlans, "https://webrajya.com/pos"),
    "description": "Zero-lag restaurant POS billing software with sub-3-second billing, kitchen KOT routing, and visual table management.",
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
        "name": "What are the pricing options for WebRajya Invoice and POS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both WebRajya Invoice and WebRajya POS offer three transparent plans: Monthly at ₹599/month, Yearly at ₹5,999/year (saves ₹1,189 vs paying monthly), and a Lifetime license at ₹25,999 one-time payment."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(invoiceSoftwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(posSoftwareSchema) }}
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
