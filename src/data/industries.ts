export interface IndustryShopConfig {
  slug: string;
  name: string;
  shopTypeLabel: string;
  heroHeadline: string;
  heroSubheadline: string;
  seoTitle: string;
  seoDescription: string;
  verifiedFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
  commonChallenges: {
    problem: string;
    solution: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  screenshotPlaceholderText: string;
}

export const INDUSTRIES_DATA: Record<string, IndustryShopConfig> = {
  "mobile-shops": {
    slug: "mobile-shops",
    name: "Mobile & Accessories Shops",
    shopTypeLabel: "Mobile Shop",
    seoTitle: "Billing Software for Mobile Shops in Nagpur | WebRajya Invoice",
    seoDescription:
      "Fast billing and inventory software for mobile and smartphone accessory shops in Nagpur. IMEI and serial tracking, accessory barcodes, and customer khata.",
    heroHeadline: "Smart Billing & IMEI Tracking for Mobile Shops in Nagpur",
    heroSubheadline:
      "Scan barcodes, record handset serial numbers and warranty details, manage phone accessories, and track customer balances with ease.",
    screenshotPlaceholderText:
      "[LIVE SCREENSHOT PLACEHOLDER: Mobile Shop Billing Interface with IMEI / Serial Number Entry and Accessory Barcode Scanner]",
    verifiedFeatures: [
      {
        title: "IMEI & Serial Number Tracking",
        description:
          "Capture device serial numbers and IMEI digits on invoices for transparent warranty records and easy return lookups.",
        icon: "Smartphone"
      },
      {
        title: "Fast Accessory Barcode Billing",
        description:
          "Scan covers, screen guards, chargers, and cables in milliseconds without typing or cashier line delays.",
        icon: "Barcode"
      },
      {
        title: "Customer Khata & Udhaar Ledger",
        description:
          "Record partial payments, advance bookings for new handset launches, and track outstanding customer balances.",
        icon: "BookOpen"
      },
      {
        title: "Offline Counter Resilience",
        description:
          "Keep generating customer bills and printing thermal receipts even during Nagpur network interruptions.",
        icon: "WifiOff"
      }
    ],
    commonChallenges: [
      {
        problem: "Writing IMEI numbers by hand on paper receipts causes customer queues and mistakes.",
        solution: "Type or scan the serial/IMEI directly into WebRajya Invoice for auto-printed clear receipts."
      },
      {
        problem: "Losing track of hundreds of small accessory models (tempered glasses, cords, adapters).",
        solution: "Central barcode catalog with live inventory counters and low-stock alerts before items run out."
      }
    ],
    faqs: [
      {
        question: "Can I print IMEI numbers on thermal receipts?",
        answer:
          "Yes. WebRajya Invoice prints product descriptions along with custom serial or IMEI lines on standard 3-inch (80mm) and 2-inch (58mm) thermal paper as well as A4 bills."
      },
      {
        question: "Will you help us set up our mobile shop in Nagpur?",
        answer:
          "Yes! Our local Nagpur onboarding team provides free personal in-shop setup, product catalog entry, and staff training."
      }
    ]
  },
  electronics: {
    slug: "electronics",
    name: "Consumer Electronics & Appliances",
    shopTypeLabel: "Electronics Store",
    seoTitle: "Billing Software for Electronics Shops in Nagpur | WebRajya Invoice",
    seoDescription:
      "Reliable billing and stock management software for electronics and appliance stores in Nagpur. Serial number tracking, GST invoices, and vendor khata.",
    heroHeadline: "Complete Retail Billing for Electronics Retailers in Nagpur",
    heroSubheadline:
      "Manage serial numbers, generate compliant tax invoices, track supplier purchases, and handle customer payment records.",
    screenshotPlaceholderText:
      "[LIVE SCREENSHOT PLACEHOLDER: Electronics Store Invoice Screen with Serial Tracking and GST Split]",
    verifiedFeatures: [
      {
        title: "Serial Number & Warranty Logging",
        description:
          "Track high-value televisions, soundbars, kitchen appliances, and gadgets by unique serial numbers on invoices.",
        icon: "Tv"
      },
      {
        title: "GST Tax Rules & HSN Lookup",
        description:
          "Pre-configured tax slabs with clear CGST, SGST, and IGST breakdowns for electronics compliance.",
        icon: "FileCheck"
      },
      {
        title: "Supplier & Purchase Tracking",
        description:
          "Record distributor purchases, track incoming stock costs, and maintain clean vendor payment histories.",
        icon: "Boxes"
      },
      {
        title: "Customer Khata & Down Payments",
        description:
          "Log advance bookings, split payment modes (cash + UPI), and track balance payments systematically.",
        icon: "CreditCard"
      }
    ],
    commonChallenges: [
      {
        problem: "Managing warranty claims when customers return without their original paper bill.",
        solution: "Instantly look up past invoices by customer mobile number or appliance serial code."
      },
      {
        problem: "Complex multi-rate GST calculations on appliances and electronic accessories.",
        solution: "Automatic tax calculation per item so staff never calculates GST rates manually."
      }
    ],
    faqs: [
      {
        question: "Can I print A4 size GST invoices for commercial buyers?",
        answer:
          "Yes. WebRajya Invoice supports standard A4 invoice layouts with buyer GSTIN, HSN codes, and itemized tax breakdowns."
      },
      {
        question: "Do you offer in-person demonstrations in Nagpur?",
        answer:
          "Yes. We schedule in-shop demos across Nagpur (Sitabuldi, Dharampeth, Itwari, Sadar, Wardhaman Nagar, and all localities)."
      }
    ]
  },
  "clothing-garments": {
    slug: "clothing-garments",
    name: "Clothing & Garment Retailers",
    shopTypeLabel: "Clothing Store",
    seoTitle: "Billing Software for Clothing Shops in Nagpur | WebRajya Invoice",
    seoDescription:
      "Fast billing and inventory software for clothing, apparel, and garment stores in Nagpur. Size, colour, and design variants with barcode scanning.",
    heroHeadline: "Effortless Garment Billing & Size-Variant Stock in Nagpur",
    heroSubheadline:
      "Scan garment tags, manage size and color variations, handle seasonal stock, and serve festival rush crowds in seconds.",
    screenshotPlaceholderText:
      "[LIVE SCREENSHOT PLACEHOLDER: Garment Retail Screen with Size/Color Matrix & Rapid Barcode Tag Scanner]",
    verifiedFeatures: [
      {
        title: "Size & Colour Variant Matrix",
        description:
          "Organize apparel under parent styles with exact size (S, M, L, XL, XXL) and colour inventory counts.",
        icon: "Shirt"
      },
      {
        title: "Barcode Tag Scanning & Printing",
        description:
          "Scan pre-printed vendor tags or generate custom barcode labels for quick counter checkout.",
        icon: "Barcode"
      },
      {
        title: "Rapid Counter Checkout",
        description:
          "Settle customer bills in seconds with keyboard shortcuts and multi-mode payments (Cash, UPI QR, Card).",
        icon: "Zap"
      },
      {
        title: "Daily Sales & Margins",
        description:
          "Monitor high-selling garment categories, daily cash drawer totals, and profit margins.",
        icon: "TrendingUp"
      }
    ],
    commonChallenges: [
      {
        problem: "Festival rush queues when staff cannot quickly locate price tags or match product codes.",
        solution: "Instant barcode beep scans the correct variant and price in less than half a second."
      },
      {
        problem: "Knowing which sizes and styles are sold out without doing manual evening floor counts.",
        solution: "Live stock count deducts upon checkout; automatic warning triggers when popular sizes hit low levels."
      }
    ],
    faqs: [
      {
        question: "Does the software support barcode sticker printers?",
        answer:
          "Yes. WebRajya Invoice works with standard barcode label and thermal printer hardware."
      },
      {
        question: "Is there a free trial for garment shops in Nagpur?",
        answer:
          "Yes! We provide a 3-day free trial after an in-shop demonstration so your staff can test billing with your own clothes."
      }
    ]
  },
  footwear: {
    slug: "footwear",
    name: "Footwear & Shoe Stores",
    shopTypeLabel: "Footwear Store",
    seoTitle: "Billing Software for Footwear Shops in Nagpur | WebRajya Invoice",
    seoDescription:
      "Simple billing and shoe size inventory software for footwear stores in Nagpur. Track UK/India shoe sizes, brands, and counter sales.",
    heroHeadline: "Fast Billing & Shoe Size Inventory for Footwear Shops in Nagpur",
    heroSubheadline:
      "Track shoe sizes (UK 6 to 11), organize brands and styles, print thermal receipts, and keep customers happy without checkout delay.",
    screenshotPlaceholderText:
      "[LIVE SCREENSHOT PLACEHOLDER: Footwear Counter Checkout with Size Breakdown and Brand Filters]",
    verifiedFeatures: [
      {
        title: "Shoe Size Number Tracking",
        description:
          "Track exact shoe and sandal sizes per design code so staff immediately knows what is in the stockroom.",
        icon: "Footprints"
      },
      {
        title: "Brand & Category Organization",
        description:
          "Filter by Formal, Casual, Sports, Ethnic, and Kids ranges with custom pricing tiers.",
        icon: "Layers"
      },
      {
        title: "Barcode Scanner Checkout",
        description:
          "Beep shoe box barcodes for instant price calculation and itemized receipts.",
        icon: "Barcode"
      },
      {
        title: "Customer Ledger & Exchange History",
        description:
          "Look up customer purchase records instantly when shoppers bring shoes back for size replacement.",
        icon: "Users"
      }
    ],
    commonChallenges: [
      {
        problem: "Staff repeatedly walking to the back store to check if a specific shoe size is in stock.",
        solution: "View exact size counts on the billing counter screen before walking away."
      },
      {
        problem: "Exchanges and size replacements creating ledger confusion.",
        solution: "Quick invoice search by mobile number retrieves the original purchase instantly."
      }
    ],
    faqs: [
      {
        question: "Can I use a handheld barcode scanner with WebRajya Invoice?",
        answer:
          "Yes. Any standard USB or wireless handheld barcode scanner works seamlessly out of the box."
      },
      {
        question: "Can we install it on our existing computer?",
        answer:
          "Yes. WebRajya Invoice runs smoothly on standard Windows or Mac laptops and desktop PCs."
      }
    ]
  },
  "stationery-books": {
    slug: "stationery-books",
    name: "Stationery & Book Stores",
    shopTypeLabel: "Stationery Store",
    seoTitle: "Billing Software for Stationery & Book Shops in Nagpur | WebRajya Invoice",
    seoDescription:
      "High-speed retail and wholesale billing software for stationery, school books, and paper supply shops in Nagpur. Quick item lookup and Khata.",
    heroHeadline: "High-Speed Billing & Inventory for Stationery Stores in Nagpur",
    heroSubheadline:
      "Manage thousands of small items, notebooks, pens, and school books. Fast keyboard billing, barcode scanning, and school account Khata.",
    screenshotPlaceholderText:
      "[LIVE SCREENSHOT PLACEHOLDER: Stationery Billing Interface with Rapid Item Search and Multi-Unit Quantities]",
    verifiedFeatures: [
      {
        title: "Rapid Product Lookup by Keyword or Barcode",
        description:
          "Search thousands of pens, binders, notebooks, and supplies in milliseconds by brand or name.",
        icon: "BookOpen"
      },
      {
        title: "Bulk & Wholesale Billing",
        description:
          "Support single-piece retail pricing alongside wholesale carton / dozen pricing for schools and offices.",
        icon: "PackageCheck"
      },
      {
        title: "School & Institutional Khata",
        description:
          "Maintain monthly credit ledgers for local schools, coaching classes, and regular corporate buyers.",
        icon: "FileSpreadsheet"
      },
      {
        title: "GST Invoice & Non-GST Thermal Receipts",
        description:
          "Generate quick 3-inch thermal receipts for walk-in students and formal A4 GST bills for corporate orders.",
        icon: "Receipt"
      }
    ],
    commonChallenges: [
      {
        problem: "Managing huge catalogs with thousands of low-cost stationery items.",
        solution: "Fast keyword search and barcode lookup allows finding any item in less than 2 keystrokes."
      },
      {
        problem: "Coaching institutes and local businesses delaying payment on monthly notebook orders.",
        solution: "Clean customer Khata tracks running credit balances and prints itemized statement summaries."
      }
    ],
    faqs: [
      {
        question: "How long does it take to enter 2,000 stationery products?",
        answer:
          "You can bulk-import your entire product list from Excel or CSV in a few minutes, with hands-on help from our Nagpur team."
      },
      {
        question: "Can my staff learn this quickly?",
        answer:
          "Yes! The interface is built specifically for Indian retailers. Most shop assistants learn the complete counter workflow in 10 minutes."
      }
    ]
  },
  furniture: {
    slug: "furniture",
    name: "Furniture & Home Decor Showrooms",
    shopTypeLabel: "Furniture Showroom",
    seoTitle: "Billing Software for Furniture Shops in Nagpur | WebRajya Invoice",
    seoDescription:
      "Professional invoicing and order advance tracking for furniture showrooms and interior shops in Nagpur. Manage custom orders, GST, and customer Khata.",
    heroHeadline: "Complete Invoicing & Advance Khata for Furniture Stores in Nagpur",
    heroSubheadline:
      "Manage showroom collections, print formal GST quotes and delivery invoices, track custom customer advance payments, and reconcile balances.",
    screenshotPlaceholderText:
      "[LIVE SCREENSHOT PLACEHOLDER: Furniture Invoicing with Advance Downpayment and Balance Due Tracking]",
    verifiedFeatures: [
      {
        title: "Advance Payment & Balance Tracking",
        description:
          "Record initial booking advances, log stage payments, and print balance due clearly on delivery notes.",
        icon: "Wallet"
      },
      {
        title: "Formal GST Invoices & Estimates",
        description:
          "Provide clean, branded quotations and formal tax invoices with item dimensions and wood/fabric specs.",
        icon: "FileText"
      },
      {
        title: "Supplier & Material Costing",
        description:
          "Track vendor bills, hardware fittings, fabric procurement, and transport expenses connected to orders.",
        icon: "Truck"
      },
      {
        title: "Customer Contact & Delivery Address Log",
        description:
          "Record delivery addresses, contact numbers, and scheduled dispatch dates for smooth logistics.",
        icon: "MapPin"
      }
    ],
    commonChallenges: [
      {
        problem: "Tracking partial advance payments and reminder dates for custom sofa or wardrobe deliveries.",
        solution: "Customer Khata automatically shows amount paid, pending balance, and order notes."
      },
      {
        problem: "Discrepancies between showroom sales estimates and final delivery billing.",
        solution: "Convert estimates into finalized GST invoices with a single click."
      }
    ],
    faqs: [
      {
        question: "Can we record custom specifications like wood type and fabric colour?",
        answer:
          "Yes. Item notes and description fields allow you to record exact dimensions, wood polish, and fabric codes directly on the invoice."
      },
      {
        question: "Can we print A4 bills with our showroom logo?",
        answer:
          "Yes. WebRajya Invoice produces elegant, professional A4 tax invoices with your business name, logo, GSTIN, and terms."
      }
    ]
  }
};

