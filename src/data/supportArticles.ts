export interface SupportCategory {
  slug: string;
  name: string;
  description: string;
  iconName: string;
}

export interface SupportArticle {
  id: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  description: string;
  lastUpdated: string;
  readTime: string;
  keywords: string[];
  isPopular?: boolean;
  overview: string;
  beforeYouBegin: string[];
  steps: {
    title: string;
    detail: string;
  }[];
  troubleshooting: string[];
}

export const SUPPORT_CATEGORIES: SupportCategory[] = [
  {
    slug: "billing-invoices",
    name: "Billing & Invoices",
    description: "Creating invoices, setting tax rates, customizing templates, and client rate cards.",
    iconName: "FileText"
  },
  {
    slug: "pos",
    name: "WebRajya POS",
    description: "Register operation, table layouts, floor plans, KOT routing, and menu management.",
    iconName: "Utensils"
  },
  {
    slug: "payments",
    name: "Payments",
    description: "UPI QR codes, card terminal integration, status tracking, and cash reconciliation.",
    iconName: "CreditCard"
  },
  {
    slug: "reports-insights",
    name: "Reports & Insights",
    description: "Daily sales summaries, product rankings, aging receivables, and food costing analysis.",
    iconName: "BarChart3"
  },
  {
    slug: "account-settings",
    name: "Account & Settings",
    description: "User permissions, multi-outlet management, company profiles, and data privacy.",
    iconName: "Settings"
  },
  {
    slug: "hardware-printing",
    name: "Hardware & Printing",
    description: "Thermal printer setup (ESC/POS), LAN/Wi-Fi/USB connections, and cash drawer triggers.",
    iconName: "Printer"
  }
];

export const SUPPORT_ARTICLES: SupportArticle[] = [
  {
    id: "art-1",
    slug: "getting-started-pos",
    categorySlug: "pos",
    categoryName: "WebRajya POS",
    title: "Getting started with WebRajya POS",
    description: "Learn how to log in, select register counters, load menu categories, and process your first restaurant order.",
    lastUpdated: "Sept 27, 2026",
    readTime: "4 min read",
    keywords: ["pos", "getting started", "register", "terminal", "order", "login", "menu"],
    isPopular: true,
    overview: "This guide walks venue owners and staff through the initial setup of WebRajya POS on tablets or desktop registers.",
    beforeYouBegin: [
      "Ensure your device is connected to your venue Wi-Fi network.",
      "Verify you have your WebRajya account credentials ready.",
      "Confirm your thermal printer is plugged in and turned on."
    ],
    steps: [
      {
        title: "1. Launch WebRajya POS & Select Register",
        detail: "Open the WebRajya POS web interface or app. Choose your register location (e.g. Register #01 - Main Floor)."
      },
      {
        title: "2. Select Dining Table or Takeaway Mode",
        detail: "Tap any table on the interactive floor map to open an active dining tab, or select 'Takeaway' for quick counter orders."
      },
      {
        title: "3. Punch Dishes into Current Order",
        detail: "Tap menu items from the left category panel. Use modifier buttons to attach special kitchen preparation notes."
      },
      {
        title: "4. Dispatch KOT & Print Bill",
        detail: "Tap 'Dispatch KOT' to route order tickets directly to kitchen printers. When guests are ready, tap 'Generate Bill'."
      }
    ],
    troubleshooting: [
      "Table map not rendering? Refresh the browser tab or verify local network connectivity.",
      "Menu items missing? Check if the item was toggled 'Out of Stock' in master menu settings."
    ]
  },
  {
    id: "art-2",
    slug: "creating-first-invoice",
    categorySlug: "billing-invoices",
    categoryName: "Billing & Invoices",
    title: "Creating your first invoice",
    description: "Step-by-step guide to choosing client profiles, adding line items, setting GST tax rates, and exporting PDF invoices.",
    lastUpdated: "Sept 27, 2026",
    readTime: "3 min read",
    keywords: ["invoice", "create invoice", "billing", "pdf", "gst", "tax", "client"],
    isPopular: true,
    overview: "WebRajya Invoice allows service providers and businesses to generate polished, tax-compliant PDF invoices in seconds.",
    beforeYouBegin: [
      "Verify your company address and GSTIN are added under Business Profile.",
      "Ensure you have customer contact details ready."
    ],
    steps: [
      {
        title: "1. Open Invoice Creation Studio",
        detail: "Navigate to WebRajya Invoice and click 'Create New Invoice'."
      },
      {
        title: "2. Select Customer from Directory",
        detail: "Select an existing client profile or enter new customer details to auto-save to your directory."
      },
      {
        title: "3. Add Line Items & Set Rates",
        detail: "Pick items from your Products & Services catalog or type custom item descriptions and unit rates."
      },
      {
        title: "4. Apply Taxes & Payment Terms",
        detail: "Confirm applicable GST tax rules (e.g. 18%) and choose payment terms (Due on Receipt, Net 15, Net 30)."
      },
      {
        title: "5. Export PDF or Share WhatsApp Link",
        detail: "Click 'Export PDF' for a clean vector document or copy the direct payment link for instant messaging."
      }
    ],
    troubleshooting: [
      "Tax calculation incorrect? Ensure your product catalog has default tax rates configured.",
      "Logo not showing on PDF? Re-upload high-resolution PNG/SVG logo in Business Profile Settings."
    ]
  },
  {
    id: "art-3",
    slug: "setting-up-thermal-printing",
    categorySlug: "hardware-printing",
    categoryName: "Hardware & Printing",
    title: "Setting up thermal printing",
    description: "How to connect ESC/POS thermal printers via USB, Ethernet (LAN), Wi-Fi, or Bluetooth for instant KOT dispatch.",
    lastUpdated: "Sept 27, 2026",
    readTime: "5 min read",
    keywords: ["thermal printer", "kot", "esc/pos", "epson", "printing", "lan", "usb", "receipt"],
    isPopular: true,
    overview: "Configure thermal KOT printers to automatically route kitchen preparation tickets to specific kitchen sections.",
    beforeYouBegin: [
      "Confirm your thermal printer supports standard ESC/POS command protocols.",
      "If using LAN/Wi-Fi printing, ensure printer and POS register share the same local subnet IP."
    ],
    steps: [
      {
        title: "1. Plug in Thermal Printer Hardware",
        detail: "Connect power and link printer via USB cable or LAN Ethernet cord to your local network router."
      },
      {
        title: "2. Access WebRajya POS Printer Settings",
        detail: "Go to POS Settings > Hardware & Printers > Add New Printer."
      },
      {
        title: "3. Configure Network IP or Port",
        detail: "Select printer model or ESC/POS preset. Enter IP address (for LAN/Wi-Fi) or port designation (for USB)."
      },
      {
        title: "4. Assign Kitchen Stations & Test Print",
        detail: "Assign kitchen categories (e.g. Tandoor, Mains, Bar) to this printer and click 'Send Test KOT'."
      }
    ],
    troubleshooting: [
      "Printer printing gibberish text? Verify Baud Rate (for serial/USB) or set driver mode to ESC/POS Standard.",
      "KOT not printing? Check paper roll orientation and ensure cutter latch is securely closed."
    ]
  },
  {
    id: "art-4",
    slug: "managing-customers",
    categorySlug: "account-settings",
    categoryName: "Account & Settings",
    title: "Managing customers & client directories",
    description: "Maintain customer contact profiles, tax numbers, payment history ledgers, and aging balance trackers.",
    lastUpdated: "Sept 27, 2026",
    readTime: "3 min read",
    keywords: ["customers", "client directory", "ledgers", "accounts", "contacts", "receivables"],
    isPopular: true,
    overview: "Learn how to organize client records, track lifetime billing revenue, and manage customer credit limits.",
    beforeYouBegin: [
      "Ensure you have customer GSTIN and billing addresses available."
    ],
    steps: [
      {
        title: "1. Access Customer Directory",
        detail: "Go to WebRajya Invoice > Customer Directory."
      },
      {
        title: "2. Add or Edit Customer Profile",
        detail: "Click 'Add Customer'. Enter legal business name, billing address, contact email, phone, and GSTIN."
      },
      {
        title: "3. Review Client Billing History",
        detail: "Click on any customer name to view issued invoices, payments collected, and current outstanding balances."
      }
    ],
    troubleshooting: [
      "Duplicate customer entry? Merge client profiles from Customer Directory > Actions > Merge."
    ]
  },
  {
    id: "art-5",
    slug: "understanding-payment-status",
    categorySlug: "payments",
    categoryName: "Payments",
    title: "Understanding payment status & tracking",
    description: "Overview of invoice states from Draft, Sent, Partially Paid, to Settled with UPI QR settlement.",
    lastUpdated: "Sept 27, 2026",
    readTime: "3 min read",
    keywords: ["payment status", "draft", "sent", "paid", "partially paid", "upi", "qr", "settlement"],
    isPopular: true,
    overview: "Understand how WebRajya tracks the lifecycle of every customer payment from initial billing to final deposit.",
    beforeYouBegin: [
      "Familiarize yourself with status indicator colors: Sky Blue (Sent), Amber (Pending/Partial), Green (Settled)."
    ],
    steps: [
      {
        title: "1. Draft State",
        detail: "Invoices being compiled or awaiting final management approval remain in Draft state."
      },
      {
        title: "2. Sent & Active State",
        detail: "Invoices dispatched via email, WhatsApp, or link enter Sent state with automated payment terms active."
      },
      {
        title: "3. Partially Billed & Settled State",
        detail: "Partial client deposits log remaining balances while settled payments generate matched receipts."
      }
    ],
    troubleshooting: [
      "Payment received offline? Manually record cash or direct bank transfer under Invoice Actions > Record Payment."
    ]
  },
  {
    id: "art-6",
    slug: "analyzing-dashboard-reports",
    categorySlug: "reports-insights",
    categoryName: "Reports & Insights",
    title: "Analyzing owner dashboard reports",
    description: "How to interpret daily sales summaries, top-grossing items, payment mode splits, and food cost metrics.",
    lastUpdated: "Sept 27, 2026",
    readTime: "4 min read",
    keywords: ["reports", "dashboard", "analytics", "sales", "revenue", "food cost", "owner pulse"],
    isPopular: false,
    overview: "Learn how to use WebRajya Owner Dashboard metrics to optimize menu items, control food costs, and monitor cash flow.",
    beforeYouBegin: [
      "Select desired timeframe filter (Today, Week, Month) on the top dashboard bar."
    ],
    steps: [
      {
        title: "1. Monitor Total Revenue & Ticket Sizes",
        detail: "Review high-level gross revenue and average check amounts per table or transaction."
      },
      {
        title: "2. Evaluate Top-Grossing Items",
        detail: "Identify best-selling dishes or services by sales volume and profitability margins."
      },
      {
        title: "3. Check Food Cost Percentages",
        detail: "Track raw ingredient consumption against target food cost percentages (e.g. 25-28%)."
      }
    ],
    troubleshooting: [
      "Food cost percentage missing? Ensure recipe ingredient portions are linked to menu items."
    ]
  },
  {
    id: "art-7",
    slug: "configuring-gst-tax-settings",
    categorySlug: "billing-invoices",
    categoryName: "Billing & Invoices",
    title: "Configuring GST & tax settings",
    description: "Set up default CGST, SGST, IGST tax tiers, tax exempt rules, and automated invoice tax summaries.",
    lastUpdated: "Sept 27, 2026",
    readTime: "4 min read",
    keywords: ["gst", "tax", "cgst", "sgst", "igst", "tax settings", "compliance"],
    isPopular: false,
    overview: "Configure regional tax parameters so every invoice automatically computes accurate tax line items.",
    beforeYouBegin: [
      "Have your business GSTIN and tax classification details ready."
    ],
    steps: [
      {
        title: "1. Access Tax Settings",
        detail: "Navigate to Settings > Tax & Compliance Setup."
      },
      {
        title: "2. Define Default Tax Tiers",
        detail: "Configure standard tax percentages (e.g. 5% GST for restaurant food, 18% GST for services)."
      },
      {
        title: "3. Set In-State vs Out-State Rules",
        detail: "Specify tax splitting parameters (CGST + SGST vs IGST) based on customer billing location."
      }
    ],
    troubleshooting: [
      "Tax not applying to line item? Check if the specific product catalog item is marked 'Tax Exempt'."
    ]
  },
  {
    id: "art-8",
    slug: "offline-mode-local-sync",
    categorySlug: "pos",
    categoryName: "WebRajya POS",
    title: "Offline mode & local database sync",
    description: "How WebRajya POS maintains floor billing and thermal KOT printing when internet connectivity drops.",
    lastUpdated: "Sept 27, 2026",
    readTime: "4 min read",
    keywords: ["offline", "sync", "wifi", "internet outage", "local backup", "resilience"],
    isPopular: false,
    overview: "Understand how WebRajya POS protects venue billing during ISP internet interruptions using local network caching.",
    beforeYouBegin: [
      "Keep local venue Wi-Fi router powered on during operating hours."
    ],
    steps: [
      {
        title: "1. Automatic ISP Outage Detection",
        detail: "When cloud connectivity drops, WebRajya POS switches seamlessly to offline local mode."
      },
      {
        title: "2. Uninterrupted Local Billing & KOT",
        detail: "Orders continue punching to registers and thermal KOT prints transmit over local Wi-Fi normally."
      },
      {
        title: "3. Cloud Auto-Sync on Connection Restore",
        detail: "Once ISP connectivity recovers, local database transactions automatically sync back to cloud servers."
      }
    ],
    troubleshooting: [
      "KOT not printing during internet outage? Verify local Wi-Fi router is on and LAN connections are intact."
    ]
  }
];

export function getArticlesByCategory(categorySlug: string): SupportArticle[] {
  return SUPPORT_ARTICLES.filter(a => a.categorySlug === categorySlug);
}

export function getArticleBySlug(categorySlug: string, articleSlug: string): SupportArticle | undefined {
  return SUPPORT_ARTICLES.find(a => a.categorySlug === categorySlug && a.slug === articleSlug);
}

export function searchSupportArticles(query: string): SupportArticle[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [];

  return SUPPORT_ARTICLES.filter(article => {
    const matchTitle = article.title.toLowerCase().includes(trimmed);
    const matchDesc = article.description.toLowerCase().includes(trimmed);
    const matchCat = article.categoryName.toLowerCase().includes(trimmed);
    const matchKeywords = article.keywords.some(k => k.toLowerCase().includes(trimmed));

    return matchTitle || matchDesc || matchCat || matchKeywords;
  });
}
