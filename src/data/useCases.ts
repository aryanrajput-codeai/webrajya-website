export interface UseCase {
  id: "restaurant" | "retail" | "agency" | "distributor" | "freelancer";
  label: string;
  product: "pos" | "invoice";
  productName: string;
  badge: string;
  headline: string;
  description: string;
  workflowTitle: string;
  workflow: string[];
  features: {
    title: string;
    desc: string;
  }[];
  ctaText: string;
  ctaRoute: string;
}

export const USE_CASES: UseCase[] = [
  {
    id: "restaurant",
    label: "Restaurant / Café",
    product: "pos",
    productName: "WebRajya POS",
    badge: "Food & Hospitality Operating System",
    headline: "Seamless table management, kitchen order tickets & rapid counter checkout",
    description: "Built for busy dining rooms, cafes, QSR counters, and cloud kitchens where order speed, kitchen communication, and raw inventory accuracy directly impact profitability.",
    workflowTitle: "Restaurant Operational Workflow",
    workflow: ["ORDER", "KITCHEN", "SERVE", "BILL", "PAYMENT", "REPORT"],
    features: [
      { title: "Floor & Table Maps", desc: "Track occupied, bill-printed, and vacant tables with one-tap order transfers." },
      { title: "Kitchen Order Tickets (KOT)", desc: "Automatic thermal printing & KDS screen routing to designated kitchen stations." },
      { title: "Recipe Stock Deductions", desc: "Deduct raw ingredients (cheese, flour, meats) automatically upon billing." },
      { title: "Payments & Contactless QR", desc: "Accept UPI QR, cards, and cash or offer guest table self-ordering." }
    ],
    ctaText: "Explore WebRajya POS →",
    ctaRoute: "/pos"
  },
  {
    id: "retail",
    label: "Retail / Local Business",
    product: "pos",
    productName: "WebRajya POS",
    badge: "Counter Sales & Inventory Control",
    headline: "Fast barcode checkout, item stock counts & daily register reports",
    description: "Engineered for retail counters, bakeries, and local stores requiring quick item lookups, receipt printing, and daily closing balances without counter congestion.",
    workflowTitle: "Retail Counter Checkout Workflow",
    workflow: ["SCAN", "DISCOUNT", "BILL", "PAYMENT", "RECEIPT", "REPORT"],
    features: [
      { title: "Barcode & Quick Search", desc: "Instant dish or product lookup by shortcode, name, or barcode scanner." },
      { title: "Multi-Payment Checkout", desc: "Split checkouts across UPI QR, debit/credit cards, cash, and digital slips." },
      { title: "Thermal Receipt Printing", desc: "Fast ESC/POS thermal printing over USB, LAN, Wi-Fi, or Bluetooth." },
      { title: "Daily Sales Summary", desc: "Register shift closing totals, tax breakdowns, and payment mode splits." }
    ],
    ctaText: "Explore WebRajya POS →",
    ctaRoute: "/pos"
  },
  {
    id: "agency",
    label: "Agency / Service Business",
    product: "invoice",
    productName: "WebRajya Invoice",
    badge: "Service & Retainer Billing",
    headline: "Itemized client invoices, milestone tracking & aging receivables",
    description: "Designed for digital agencies, consulting firms, IT service providers, and creative studios that manage recurring retainers, project milestones, and client payment tracking.",
    workflowTitle: "Service Billing & Collection Workflow",
    workflow: ["WORK", "BILL", "COLLECT", "TRACK", "UNDERSTAND"],
    features: [
      { title: "Custom Rate Cards", desc: "Pre-set hourly consulting rates, project deliverables, and tax rules." },
      { title: "Client Directory & Ledgers", desc: "Centralized customer contact profiles, tax IDs, and billing histories." },
      { title: "Aging Receivables", desc: "Monitor unpaid client balances by 15-day, 30-day, and overdue tiers." },
      { title: "Vector PDF & WhatsApp Share", desc: "Export crisp PDF invoices or share direct payment links via WhatsApp." }
    ],
    ctaText: "Explore WebRajya Invoice →",
    ctaRoute: "/invoice"
  },
  {
    id: "distributor",
    label: "Distributor / B2B Business",
    product: "invoice",
    productName: "WebRajya Invoice",
    badge: "Bulk Supply & Customer Accounts",
    headline: "High-volume tax billing, catalog rate sheets & customer ledgers",
    description: "Ideal for wholesale suppliers, commercial distributors, and B2B vendors shipping bulk orders to client networks with customized payment terms.",
    workflowTitle: "B2B Order & Payment Collection Workflow",
    workflow: ["WORK", "BILL", "COLLECT", "TRACK", "UNDERSTAND"],
    features: [
      { title: "Product Catalog Management", desc: "Maintain bulk item price lists, SKU descriptions, and default GST rates." },
      { title: "Customer Ledger Tracking", desc: "Track lifetime customer billing, partial deposits, and outstanding balances." },
      { title: "Payment Status Filters", desc: "Filter invoices by Draft, Sent, Partially Billed, and Fully Settled." },
      { title: "Financial Summary Reports", desc: "Export monthly sales ledgers and tax reports for accounting records." }
    ],
    ctaText: "Explore WebRajya Invoice →",
    ctaRoute: "/invoice"
  },
  {
    id: "freelancer",
    label: "Freelancer / Professional",
    product: "invoice",
    productName: "WebRajya Invoice",
    badge: "Independent Business Billing",
    headline: "Clean digital invoice creation, logo branding & direct payment links",
    description: "Perfect for independent contractors, designers, developers, and consultants who need professional, brand-aligned invoices generated in seconds.",
    workflowTitle: "Independent Professional Workflow",
    workflow: ["WORK", "BILL", "COLLECT", "TRACK", "UNDERSTAND"],
    features: [
      { title: "Brand Profile Setup", desc: "Upload your logo, business address, and custom payment terms." },
      { title: "Fast Line-Item Setup", desc: "Add services, quantities, discounts, and regional taxes without spreadsheets." },
      { title: "Embedded Payment Details", desc: "Include bank transfer instructions and UPI QR codes on digital invoices." },
      { title: "Payment Status Reminders", desc: "Identify overdue bills and resend formatted billing links instantly." }
    ],
    ctaText: "Explore WebRajya Invoice →",
    ctaRoute: "/invoice"
  }
];
