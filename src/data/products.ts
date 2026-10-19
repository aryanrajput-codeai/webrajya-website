export interface ProductCapability {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: "REAL" | "MOCKUP" | "PLANNED";
}

export interface WebRajyaProduct {
  id: string;
  slug: string;
  name: string;
  brandTitle: string;
  tagline: string;
  shortDescription: string;
  targetAudience: string;
  heroHeadline: string;
  heroSubheadline: string;
  badge: string;
  accentColor: string;
  gradientClass: string;
  borderGlowClass: string;
  badgeBgClass: string;
  badgeTextClass: string;
  route: string;
  capabilities: ProductCapability[];
  highlights: string[];
  faqs: { question: string; answer: string }[];
}

export const PRODUCTS: WebRajyaProduct[] = [
  {
    id: "pos",
    slug: "pos",
    name: "WEBRAJYA POS",
    brandTitle: "WebRajya POS",
    tagline: "Settle bills in 3 seconds. Zero cashier line bottlenecks.",
    shortDescription: "100% keyboard-driven billing terminal, sequential table floor plans, thermal KOT dispatch, and recipe costing.",
    targetAudience: "For high-volume restaurants, cafes, QSRs, cloud kitchens & bars.",
    heroHeadline: "The Zero-Lag POS That Keeps Cashier Lines Moving.",
    heroSubheadline: "Dispatch KOTs, settle orders, and jump to tables in under 3 seconds—engineered for peak meal rush hours.",
    badge: "Restaurant Operating System",
    accentColor: "#E58145",
    gradientClass: "from-[#020C2B] via-[#020C2B] to-[#E58145]",
    borderGlowClass: "hover:border-[#E58145] hover:shadow-[0_8px_30px_rgba(2,12,43,0.12)]",
    badgeBgClass: "bg-[#E58145]/15 border-[#E58145]/30",
    badgeTextClass: "text-[#020C2B]",
    route: "/pos",
    highlights: [
      "Sub-3s Billing",
      "0-Lag Hotkeys",
      "Sequential Tables",
      "Direct KOT Dispatch",
      "Recipe Costing",
      "Local Timezone Analytics"
    ],
    capabilities: [
      {
        id: "billing",
        name: "Sub-3s Touch & Keyboard Billing",
        description: "100% keyboard hotkeys (S, K, B, P) to clear cashier queues without touching the mouse.",
        icon: "CreditCard",
        status: "REAL"
      },
      {
        id: "menu",
        name: "Instant Menu Search",
        description: "Sub-millisecond item search across bestsellers, size variations & custom taxes.",
        icon: "UtensilsCrossed",
        status: "REAL"
      },
      {
        id: "tables",
        name: "0.2s Quick Table Jump",
        description: "Sequential table ordering (Table 1..24) with instant `T` shortcut search modal.",
        icon: "LayoutGrid",
        status: "REAL"
      },
      {
        id: "kot",
        name: "Direct Kitchen KOT Dispatch",
        description: "Route orders to thermal printers or digital Kitchen Display Systems (KDS) in 0.1s.",
        icon: "ChefHat",
        status: "REAL"
      },
      {
        id: "inventory",
        name: "Automated Recipe Stock Deduction",
        description: "Deduct raw ingredient stock per dish served with low-inventory threshold alerts.",
        icon: "Boxes",
        status: "REAL"
      },
      {
        id: "payments",
        name: "Multi-Mode Payment Settlement",
        description: "Instant cash, UPI QR codes, credit cards, and contactless guest self-ordering.",
        icon: "QrCode",
        status: "MOCKUP"
      },
      {
        id: "analytics",
        name: "Zero-Discrepancy Closing Reports",
        description: "Local timezone synchronization (`isDateToday()`) preventing midnight UTC sales drops.",
        icon: "TrendingUp",
        status: "REAL"
      },
      {
        id: "printing",
        name: "ESC/POS Thermal Printing",
        description: "Direct receipt and KOT thermal printing over LAN, USB, or Bluetooth networks.",
        icon: "Printer",
        status: "REAL"
      }
    ],
    faqs: [
      {
        question: "Does WebRajya POS work if internet connectivity drops?",
        answer: "Yes. Floor operations, billing, and KOT printing run seamlessly over your local network and sync cloud analytics when reconnected."
      },
      {
        question: "What hardware is supported?",
        answer: "WebRajya POS works natively on Mac, Windows PCs, Android touch terminals, iPads, and ESC/POS thermal printers."
      },
      {
        question: "Can I manage multiple restaurant outlets?",
        answer: "Yes. Monitor live sales, staff performance, and menu items across multiple locations from one central owner dashboard."
      }
    ]
  },
  {
    id: "invoice",
    slug: "invoice",
    name: "WEBRAJYA INVOICE",
    brandTitle: "WebRajya Invoice",
    tagline: "Billing That Keeps Your Business Moving.",
    shortDescription: "Create bills faster, manage inventory, track customer payments and stay in control of your business—all from one simple platform.",
    targetAudience: "Designed for Indian retailers, stationery shops, wholesalers and growing businesses.",
    heroHeadline: "Billing That Keeps Your Business Moving.",
    heroSubheadline: "Create bills faster, manage your inventory, track customer payments and stay in control of your business—all from one simple platform.",
    badge: "Smart Billing Software",
    accentColor: "#2563EB",
    gradientClass: "from-[#020C2B] via-[#020C2B] to-[#2563EB]",
    borderGlowClass: "hover:border-[#2563EB] hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)]",
    badgeBgClass: "bg-[#2563EB]/15 border-[#2563EB]/30",
    badgeTextClass: "text-[#020C2B]",
    route: "/invoice",
    highlights: [
      "Fast Retail Billing",
      "Smart Inventory",
      "Customer Khata",
      "GST & Non-GST",
      "Local-First Workflows",
      "Barcode & Printing"
    ],
    capabilities: [
      {
        id: "billing",
        name: "Fast Billing & Invoicing",
        description: "Quick product lookup, barcode scanning, keyboard-friendly navigation, and instant bill calculations.",
        icon: "FileText",
        status: "REAL"
      },
      {
        id: "inventory",
        name: "Smart Inventory Management",
        description: "Track product quantities, barcodes, purchase/selling prices, and low-stock alerts in one catalog.",
        icon: "Package",
        status: "REAL"
      },
      {
        id: "customers",
        name: "Customer Management & Khata",
        description: "Maintain customer ledger profiles, sales history, payment records, and outstanding balances.",
        icon: "Users",
        status: "REAL"
      },
      {
        id: "tax",
        name: "GST & Non-GST Billing",
        description: "Configurable tax rules with CGST, SGST, IGST calculations and non-GST compliant invoice formats.",
        icon: "CheckCircle2",
        status: "REAL"
      },
      {
        id: "purchases",
        name: "Purchase & Supplier Management",
        description: "Keep purchasing activity connected with inventory, supplier records, and purchase cost tracking.",
        icon: "Boxes",
        status: "REAL"
      },
      {
        id: "reports",
        name: "Business Reports",
        description: "Daily sales summaries, product performance, stock reports, and customer outstanding ledgers.",
        icon: "TrendingUp",
        status: "REAL"
      }
    ],
    faqs: [
      {
        question: "What is WebRajya Invoice?",
        answer: "WebRajya Invoice is a billing and business-management application designed for Indian retailers, stationery shops, wholesalers and other small businesses. It brings invoicing, products, inventory, customers, payments and business reports into one platform."
      },
      {
        question: "How much does WebRajya Invoice cost?",
        answer: "The introductory annual price is ₹2,499. Applicable taxes, subscription conditions and renewal terms are displayed clearly before purchase."
      },
      {
        question: "Can I use WebRajya Invoice without the internet?",
        answer: "WebRajya Invoice is designed around a local-first architecture. Offline availability depends on the supported feature, initial setup and device configuration."
      }
    ]
  },
  {
    id: "mygarage",
    slug: "mygarage",
    name: "MYGARAGE SAAS",
    brandTitle: "MyGarage SaaS",
    tagline: "All-in-One Digital Locker, Service History & Expense Tracker for Car & Bike Owners",
    shortDescription: "A modern, responsive SaaS web application built for vehicle owners to track documents (RC, Insurance, PUC), service history, fuel/maintenance expenses, and expiry alerts in one sleek dashboard.",
    targetAudience: "For individual car & bike owners, commercial fleet operators & auto enthusiasts.",
    heroHeadline: "Never Miss RC, Insurance or PUC Expiries Ever Again.",
    heroSubheadline: "Manage all your vehicles, maintenance invoices, fuel logs, and traffic challans in one secure digital dashboard.",
    badge: "Automotive SaaS Platform",
    accentColor: "#0EA5E9",
    gradientClass: "from-[#020C2B] via-[#020C2B] to-[#0EA5E9]",
    borderGlowClass: "hover:border-[#0EA5E9] hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)]",
    badgeBgClass: "bg-[#0EA5E9]/15 border-[#0EA5E9]/30",
    badgeTextClass: "text-[#0EA5E9]",
    route: "/mygarage",
    highlights: [
      "Multi-Vehicle Fleet",
      "Document Locker",
      "Service Ledger",
      "Expense Analytics & CSV",
      "Expiry Alerts",
      "Vahan & Challan API",
      "PDF & QR Export"
    ],
    capabilities: [
      {
        id: "fleet",
        name: "Multi-Vehicle Fleet Support",
        description: "Manage Cars, Bikes, Scooters, and Commercial vehicles with search & fuel engine filters.",
        icon: "Car",
        status: "REAL"
      },
      {
        id: "documents",
        name: "Real-Time Document Locker",
        description: "Track RC, Insurance, PUC, Driving Licence & Road Tax with days-remaining counters.",
        icon: "FileCheck",
        status: "REAL"
      },
      {
        id: "service",
        name: "Service Ledger & Odometer",
        description: "Log periodic service invoices, oil changes, tire rotations, and battery maintenance records.",
        icon: "Wrench",
        status: "REAL"
      },
      {
        id: "expenses",
        name: "Expense Analytics & CSV Export",
        description: "Financial breakdown by category with one-click CSV spreadsheet export for accounting.",
        icon: "BarChart3",
        status: "REAL"
      },
      {
        id: "alerts",
        name: "Prioritized Expiry Alerts",
        description: "High/Medium/Low priority notifications with instant completion state persistence.",
        icon: "Bell",
        status: "REAL"
      },
      {
        id: "api",
        name: "Vahan & Challan API Ready",
        description: "Built-in route handlers for querying vehicle specs and traffic challans directly.",
        icon: "ShieldAlert",
        status: "REAL"
      },
      {
        id: "export",
        name: "PDF & QR Code Export",
        description: "Instant client-side PDF service reports and quick-scan vehicle emergency QR cards.",
        icon: "QrCode",
        status: "REAL"
      }
    ],
    faqs: [
      {
        question: "Can I manage both cars and two-wheelers in MyGarage?",
        answer: "Yes, MyGarage supports unlimited cars, motorcycles, scooters, and commercial vehicles under a single account."
      },
      {
        question: "How do document expiry reminders work?",
        answer: "MyGarage automatically tracks days remaining for RC, Insurance, PUC, and Driving Licence, highlighting alerts in High, Medium, and Low urgency categories."
      },
      {
        question: "Is my data stored securely?",
        answer: "Yes. MyGarage uses a decoupled repository pattern allowing local device storage or seamless sync with Supabase cloud databases."
      }
    ]
  }
];

export const FUTURE_PRODUCTS = [
  {
    name: "WebRajya QR Dining",
    description: "Contactless self-ordering & pay-at-table.",
    badge: "Planned v2.0",
    status: "PLANNED"
  },
  {
    name: "WhatsApp Paperless",
    description: "Instant digital receipt links sent via WhatsApp.",
    badge: "Planned v2.0",
    status: "PLANNED"
  }
];
