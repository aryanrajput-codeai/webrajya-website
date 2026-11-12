/**
 * WebRajya Nationwide Company Configuration
 * Single source of truth for company details, head office location, service areas,
 * and contact channels.
 */

export interface CompanyConfig {
  /**
   * Registered entity name.
   * [TODO: Owner to confirm final registered legal entity name, e.g., WebRajya Technologies LLP / Pvt Ltd]
   */
  legalName: string;
  brandName: string;
  tagline: string;
  subheadline: string;
  
  // Head Office & Service Scope
  headOfficeAddress: string;
  headOfficeCity: string;
  headOfficeState: string;
  headOfficeCountry: string;
  serviceArea: string; // "India"
  inPersonCities: string[]; // ["Nagpur"] - only city with on-site in-shop setup
  
  // Contact Channels
  phone: string;
  phoneRaw: string;
  email: string;
  whatsappNumber: string;
  operatingHours: {
    weekdays: string;
    sunday: string;
  };
  
  // Tax, Legal & Trial Notes (Shared single sources)
  gstNote: string;
  gstin: string; // [TODO: Owner to provide GSTIN once registration certificate is issued]
  trialDays: number; // [TODO: Owner recommendation: Consider testing 7-day trial vs current 3-day]
  
  // Social & Maps
  googleMapsUrl: string;
  social: {
    instagram: string; // [TODO: Owner Instagram profile URL]
    youtube: string;   // [TODO: Owner YouTube channel URL]
  };
}

export const COMPANY_CONFIG: CompanyConfig = {
  legalName: "WebRajya Technologies", // [TODO: Owner confirm registered legal name]
  brandName: "WebRajya",
  tagline: "India's affordable billing and stock management software.",
  subheadline:
    "Fast, easy-to-use billing, inventory control, and customer khata for retail shops and businesses across India.",

  headOfficeAddress: "52 Surve Nagar, Nagpur, Maharashtra - 440022",
  headOfficeCity: "Nagpur",
  headOfficeState: "Maharashtra",
  headOfficeCountry: "India",
  serviceArea: "India",
  inPersonCities: ["Nagpur"],

  phone: "+91 96300 13483",
  phoneRaw: "+919630013483",
  email: "info@webrajya.com",
  whatsappNumber: "919630013483",
  operatingHours: {
    weekdays: "Monday – Saturday: 9:00 AM – 8:00 PM IST",
    sunday: "Sunday: Emergency support via Phone & WhatsApp (response target: 4 hours)"
  },

  gstNote: "Dikhaye gaye daam final hain. Filhaal alag se koi GST charge nahi hai (Prices shown are final).",
  gstin: "", // [TODO: Owner to add GSTIN when available]
  trialDays: 3, // [TODO: Owner to confirm if 3-day or 7-day trial]

  googleMapsUrl: "https://maps.google.com/?q=52+Surve+Nagar+Nagpur+Maharashtra",
  social: {
    instagram: "", // [TODO: Owner add Instagram URL]
    youtube: ""    // [TODO: Owner add YouTube URL]
  }
};

