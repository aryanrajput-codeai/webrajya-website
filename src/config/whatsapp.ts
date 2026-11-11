import { LAUNCH_CONFIG } from "./launch";

/**
 * WebRajya WhatsApp Configuration & URL Builder
 * 
 * Target WhatsApp Destination Number (International format without +, spaces, or hyphens)
 * Defaults to LAUNCH_CONFIG.WHATSAPP (919630013483) or NEXT_PUBLIC_WEBRAJYA_WHATSAPP_NUMBER
 */
export const WEBRAJYA_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WEBRAJYA_WHATSAPP_NUMBER || LAUNCH_CONFIG.WHATSAPP;

export interface DemoLeadMessageData {
  fullName: string;
  businessName: string;
  businessType: string;
  productInterest: string;
  planInterest?: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

/**
 * Builds standard wa.me URL with properly URL-encoded pre-filled message.
 */
export function buildDemoWhatsAppUrl(data: DemoLeadMessageData): string {
  const cleanNumber = WEBRAJYA_WHATSAPP_NUMBER.replace(/[^0-9]/g, "");

  const productLabel =
    data.productInterest === "pos"
      ? "WebRajya POS"
      : data.productInterest === "invoice"
      ? "WebRajya Invoice"
      : data.productInterest === "not_sure"
      ? "Not sure yet"
      : data.productInterest;

  const planLabel =
    data.planInterest === "monthly"
      ? "Monthly (₹599/mo)"
      : data.planInterest === "yearly"
      ? "Yearly (₹5,999/yr - Best Value)"
      : data.planInterest === "lifetime"
      ? "Lifetime (₹25,999 one-time)"
      : data.planInterest === "not_sure"
      ? "Not sure yet"
      : data.planInterest || "Not specified";

  const rawMessage = `Hello WebRajya,

I would like to request a demo.

*Demo Request*

Name: ${data.fullName.trim()}
Business: ${data.businessName.trim()}
Business Type: ${data.businessType}
Product: ${productLabel}
Plan Interest: ${planLabel}

Phone: ${data.phone.trim()}
Email: ${data.email.trim()}

Preferred Demo Date: ${data.preferredDate}
Preferred Demo Time: ${data.preferredTime}

Message:
${data.message && data.message.trim() ? data.message.trim() : "None"}

Thank you.`;

  const encodedText = encodeURIComponent(rawMessage);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
