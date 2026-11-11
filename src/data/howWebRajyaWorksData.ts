export interface ProductWorkflow {
  id: "pos" | "invoice" | "mygarage";
  title: string;
  tagline: string;
  actionLabel: string;
  route: string;
  ctaText: string;
  capabilities: string[];
  sequentialFlow: string[];
}

export interface FourStepStory {
  number: string;
  title: string;
  description: string;
  iconName: "Layers" | "Sliders" | "Network" | "BarChart3";
}

export const HOW_WEBRJYA_WORKS_HEADER = {
  eyebrow: "HOW WEBRJYA WORKS",
  headline: "Connected Business Workflows.",
  supportingCopy: "Information moves automatically from front-line operations to owner dashboards with zero manual entry.",
  centralNode: {
    title: "WEBRAJYA",
    subtitle: "Connected business software"
  }
};

export const PRODUCT_WORKFLOWS: ProductWorkflow[] = [
  {
    id: "pos",
    title: "WEBRAJYA POS",
    tagline: "For restaurants, cafes & cloud kitchens",
    actionLabel: "OPERATE",
    route: "/pos",
    ctaText: "Explore POS →",
    capabilities: ["Billing", "Orders", "Kitchen", "Inventory", "Payments", "Reports"],
    sequentialFlow: ["ORDER", "KITCHEN", "BILL", "PAYMENT", "INVENTORY", "INSIGHTS"]
  },
  {
    id: "invoice",
    title: "WEBRAJYA INVOICE",
    tagline: "For services, vendors & agencies",
    actionLabel: "BILL & COLLECT",
    route: "/invoice",
    ctaText: "Explore Invoice →",
    capabilities: ["Invoices", "Customers", "Payments", "Receivables", "Reports"],
    sequentialFlow: ["CREATE", "SEND", "TRACK", "COLLECT", "UNDERSTAND"]
  },
  {
    id: "mygarage",
    title: "MYGARAGE SAAS",
    tagline: "For vehicle owners, fleets & enthusiasts",
    actionLabel: "TRACK & MAINTAIN",
    route: "/mygarage",
    ctaText: "Explore MyGarage →",
    capabilities: ["Fleet", "Locker", "Ledger", "Expenses", "Alerts", "Vahan API"],
    sequentialFlow: ["ADD", "STORE", "LOG", "ALERT", "EXPORT"]
  }
];

export const FOUR_STEP_STORY: FourStepStory[] = [
  {
    number: "01",
    title: "Select Platform",
    description: "Choose WebRajya POS for dining, WebRajya Invoice for billing, or MyGarage SaaS for vehicle management.",
    iconName: "Layers"
  },
  {
    number: "02",
    title: "Run Operations",
    description: "Execute orders, manage tables, track expiries, and dispatch KOTs in seconds.",
    iconName: "Sliders"
  },
  {
    number: "03",
    title: "Auto-Sync Data",
    description: "Floor activity and maintenance logs automatically update inventory and customer ledgers.",
    iconName: "Network"
  },
  {
    number: "04",
    title: "Track Insights",
    description: "Monitor live daily sales, fuel expenses, and document statuses in real time.",
    iconName: "BarChart3"
  }
];
