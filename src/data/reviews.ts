export interface ReviewItem {
  id: string;
  name: string;
  business: string;
  role: string;
  city: string;
  rating: number;
  title: string;
  comment: string;
  product: "WebRajya Invoice" | "WebRajya POS" | "MyGarage" | "General";
  tags: string[];
  date: string;
  verified: boolean;
  helpfulCount: number;
  avatarColor: string;
}

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Rajesh Patel",
    business: "Om Sai Supermarket & Provision",
    role: "Proprietor",
    city: "Ahmedabad, Gujarat",
    rating: 5,
    title: "Scanning 100 items takes under 2 minutes. Counter queue is gone!",
    comment:
      "We switched from heavy desktop software to WebRajya Invoice last year. The barcode scanner integration is instantaneous—even for custom weighed items. During festive rush, the zero-lag thermal billing kept our queues moving without a single freeze.",
    product: "WebRajya Invoice",
    tags: ["Fast Barcode", "Zero Lag", "Thermal Print"],
    date: "3 days ago",
    verified: true,
    helpfulCount: 28,
    avatarColor: "from-blue-600 to-indigo-700",
  },
  {
    id: "rev-2",
    name: "Kavita Sundaram",
    business: "Cafe Aromas & Bakery",
    role: "General Manager",
    city: "Bengaluru, Karnataka",
    rating: 5,
    title: "Kitchen KOT printer fires in half a second, zero order mix-ups",
    comment:
      "Running a 40-table cafe on weekend evenings used to be chaos with handwritten slips. WebRajya POS table view and hotkey shortcuts cut our cashier training down to 10 minutes. Even when our internet drops, orders print to the kitchen without interruption.",
    product: "WebRajya POS",
    tags: ["Table Management", "Kitchen KOT", "Offline Mode"],
    date: "1 week ago",
    verified: true,
    helpfulCount: 19,
    avatarColor: "from-amber-600 to-orange-700",
  },
  {
    id: "rev-3",
    name: "Manpreet Singh",
    business: "Singh AutoCare & Royal Garage",
    role: "Owner",
    city: "Ludhiana, Punjab",
    rating: 5,
    title: "Digital job cards and spare part inventory saved us lakhs",
    comment:
      "Earlier we lost track of mechanic labor and spare parts taken from stock. With MyGarage, creating an estimate, tracking vehicle delivery status, and sending customer WhatsApp updates is completely automated. Outstanding software!",
    product: "MyGarage",
    tags: ["Digital Job Cards", "Spare Inventory", "WhatsApp Alerts"],
    date: "2 weeks ago",
    verified: true,
    helpfulCount: 14,
    avatarColor: "from-emerald-600 to-teal-700",
  },
  {
    id: "rev-4",
    name: "Deepak Sharma",
    business: "Vardhman Stationery & Wholesale",
    role: "Managing Partner",
    city: "Jaipur, Rajasthan",
    rating: 5,
    title: "Customer khata credit reminders recovered ₹1.8L pending payments",
    comment:
      "Managing credit ledgers in red bahi-khata books was leaking money every month. WebRajya's automated WhatsApp payment reminders with UPI QR codes helped us collect long-pending dues effortlessly. The barcode label generator alone saved us thousands.",
    product: "WebRajya Invoice",
    tags: ["Customer Khata", "WhatsApp Reminders", "Barcode Generator"],
    date: "3 weeks ago",
    verified: true,
    helpfulCount: 32,
    avatarColor: "from-purple-600 to-pink-700",
  },
  {
    id: "rev-5",
    name: "Anand Kulkarni",
    business: "Shivaji Fast Food & Cloud Kitchen",
    role: "Founder",
    city: "Pune, Maharashtra",
    rating: 5,
    title: "Blazing fast billing shortcuts. Cashiers don't touch the mouse.",
    comment:
      "The keyboard shortcuts for bill punch, add-on toppings, and cash tender are incredible. During our lunch peak hour we punch 140+ orders an hour. WebRajya POS has paid for itself multiple times over.",
    product: "WebRajya POS",
    tags: ["Hotkey Billing", "Peak Shift Speed", "Thermal 80mm"],
    date: "1 month ago",
    verified: true,
    helpfulCount: 22,
    avatarColor: "from-rose-600 to-red-700",
  },
  {
    id: "rev-6",
    name: "Sunil Agarwal",
    business: "Agarwal Electricals & Hardware",
    role: "Co-Owner",
    city: "Indore, Madhya Pradesh",
    rating: 5,
    title: "Daily cash drawer closing takes 3 minutes instead of 45 minutes",
    comment:
      "The daily cash management and physical cash reconciliation feature gives me 100% peace of mind. Every single rupee from cash, UPI, and credit is tallied at end-of-day before my counter staff leaves.",
    product: "WebRajya Invoice",
    tags: ["Cash Reconciliation", "GST Reports", "Daily Audit"],
    date: "1 month ago",
    verified: true,
    helpfulCount: 17,
    avatarColor: "from-cyan-600 to-blue-700",
  },
];
