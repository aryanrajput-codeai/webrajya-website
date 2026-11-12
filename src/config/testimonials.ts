/**
 * WebRajya Customer Testimonials Configuration
 * 
 * STRICT COMPLIANCE RULE:
 * Only testimonials with BOTH `verified: true` AND `consentToPublish: true`
 * will be rendered publicly on the website.
 * 
 * All current entries default to false until written customer consent
 * is collected and verified on file.
 */

export interface TestimonialItem {
  id: string;
  name: string;
  business: string;
  role: string;
  city: string;
  quote: string;
  product: "WebRajya Invoice" | "WebRajya POS" | "MyGarage" | "General";
  date: string;
  verified: boolean;
  consentToPublish: boolean;
  rating?: number; // 1-5
  photoUrl?: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testi-1",
    name: "Rajesh Patel",
    business: "Om Sai Supermarket & Provision",
    role: "Proprietor",
    city: "Ahmedabad, Gujarat",
    quote:
      "Barcode scanner integration is instantaneous for custom weighed items and thermal receipt printing is smooth during rush hours.",
    product: "WebRajya Invoice",
    date: "14 October 2026",
    verified: false, // [TODO: Owner verify customer purchase & receipt of written consent]
    consentToPublish: false,
    rating: 5
  },
  {
    id: "testi-2",
    name: "Kavita Sundaram",
    business: "Cafe Aromas & Bakery",
    role: "General Manager",
    city: "Bengaluru, Karnataka",
    quote:
      "Table view and hotkey shortcuts simplified cashier training, and kitchen KOT tickets print cleanly without interruption.",
    product: "WebRajya POS",
    date: "28 September 2026",
    verified: false, // [TODO: Owner verify customer purchase & receipt of written consent]
    consentToPublish: false,
    rating: 5
  },
  {
    id: "testi-3",
    name: "Manpreet Singh",
    business: "Singh Logistics & Fleet Services",
    role: "Fleet Manager",
    city: "Ludhiana, Punjab",
    quote:
      "Managing vehicle RC, PUC, and insurance renewals across 14 delivery vehicles used to be chaos. MyGarage keeps our entire fleet's documents and service alerts in one clean dashboard.",
    product: "MyGarage",
    date: "12 September 2026",
    verified: false, // [TODO: Owner verify customer purchase & receipt of written consent]
    consentToPublish: false,
    rating: 5
  },
  {
    id: "testi-4",
    name: "Deepak Sharma",
    business: "Vardhman Stationery & Wholesale",
    role: "Managing Partner",
    city: "Jaipur, Rajasthan",
    quote:
      "Customer credit ledgers and automated WhatsApp payment reminders with UPI QR codes helped collect long-pending dues.",
    product: "WebRajya Invoice",
    date: "24 August 2026",
    verified: false, // [TODO: Owner verify customer purchase & receipt of written consent]
    consentToPublish: false,
    rating: 5
  },
  {
    id: "testi-5",
    name: "Anand Kulkarni",
    business: "Shivaji Fast Food & Cloud Kitchen",
    role: "Founder",
    city: "Pune, Maharashtra",
    quote:
      "Keyboard shortcuts for bill punching and cash settlement keep lunch peak hours moving quickly without mouse bottlenecks.",
    product: "WebRajya POS",
    date: "10 August 2026",
    verified: false, // [TODO: Owner verify customer purchase & receipt of written consent]
    consentToPublish: false,
    rating: 5
  },
  {
    id: "testi-6",
    name: "Sunil Agarwal",
    business: "Agarwal Electricals & Hardware",
    role: "Co-Owner",
    city: "Indore, Madhya Pradesh",
    quote:
      "Daily cash register closing and physical cash reconciliation tallies cash, UPI, and customer credit at end-of-day before counter staff leaves.",
    product: "WebRajya Invoice",
    date: "22 July 2026",
    verified: false, // [TODO: Owner verify customer purchase & receipt of written consent]
    consentToPublish: false,
    rating: 5
  }
];

/**
 * Filtered helper: returns only legally publishable testimonials
 */
export function getApprovedTestimonials(): TestimonialItem[] {
  return TESTIMONIALS.filter((t) => t.verified && t.consentToPublish);
}

