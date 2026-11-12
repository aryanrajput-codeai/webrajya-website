import React from "react";
import { PRICING_CONFIG } from "@/config/pricing";
import { COMPANY_CONFIG } from "@/config/company";
import { getApprovedTestimonials, TestimonialItem } from "@/config/testimonials";

export function JsonLd() {
  const verifiedReviews = getApprovedTestimonials();
  const totalReviews = verifiedReviews.length;
  const averageRating =
    totalReviews > 0
      ? (
          verifiedReviews.reduce((sum: number, r: TestimonialItem) => sum + (r.rating || 5), 0) /
          totalReviews
        ).toFixed(1)
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
      "name": COMPANY_CONFIG.brandName,
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
    "description": "Fast restaurant and retail POS billing software with thermal printing and multi-mode payment handling.",
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_CONFIG.brandName,
      "url": "https://webrajya.com"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_CONFIG.brandName,
    "legalName": COMPANY_CONFIG.legalName,
    "url": "https://webrajya.com",
    "logo": "https://webrajya.com/webrajya-logo.svg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_CONFIG.headOfficeAddress,
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://twitter.com/webrajya",
      "https://linkedin.com/company/webrajya"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": COMPANY_CONFIG.phone,
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does WebRajya work without internet connection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, WebRajya is 100% offline-resilient. Invoices and thermal receipts print continuously even during internet outages, synchronizing when connectivity is available."
        }
      },
      {
        "@type": "Question",
        "name": "Does WebRajya support thermal receipt printers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, WebRajya supports standard 58mm (2-inch) and 80mm (3-inch) thermal printers via USB, Bluetooth, LAN, and Wi-Fi."
        }
      },
      {
        "@type": "Question",
        "name": "What are the pricing options for WebRajya Invoice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebRajya Invoice offers three transparent plans: Monthly at ₹599/month, Yearly at ₹5,999/year (saves ₹1,189 vs paying monthly), and a Lifetime license at ₹25,999 (with early pilot slots at ₹19,999)."
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
