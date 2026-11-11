/**
 * WebRajya Legal Configuration File
 * 
 * Source: WebRajya Invoice: Website Policies, Draft v1
 * 
 * Any value containing square brackets e.g. "[PLACEHOLDER]" is treated as a placeholder.
 * While LEGAL_APPROVED is false, placeholders appear highlighted in yellow across legal pages.
 * The placeholder check script (npm run check:placeholders) prevents LEGAL_APPROVED
 * from being set to true if any unresolved placeholders remain.
 */

export interface LegalConfigType {
  LEGAL_APPROVED: boolean;

  // Configurable placeholders from policy document
  EFFECTIVE_DATE: string;
  OWNER_FULL_NAME: string;
  PRIVACY_CONTACT_NAME: string;
  PAYMENT_GATEWAY: string;
  SUPABASE_REGION: string;
  ENCRYPTION_AT_REST: string;
  ANALYTICS_TOOL_NOTE: string;
  EXPORT_FEE: string;
  ADDITIONAL_LOCATION_PRICE: string;
  FAIR_USE_LIMITS: string;

  // Contact information confirmed in document
  CONTACT_EMAIL: string;
  CONTACT_PHONE: string;
  CONTACT_PHONE_RAW: string;
  CONTACT_ADDRESS: string;
  SUPPORT_HOURS: string;
  SUNDAY_HOURS: string;
}

export const LEGAL_CONFIG: LegalConfigType = {
  // Flag: Set to true ONLY after legal counsel review AND all placeholders are resolved
  LEGAL_APPROVED: false,

  // Confirmed values from WebRajya Invoice: Legal Policies (v2) - 18 November 2026
  EFFECTIVE_DATE: "18 November 2026",
  OWNER_FULL_NAME: "Aryan Rajput",
  PRIVACY_CONTACT_NAME: "Aryan Rajput",
  PAYMENT_GATEWAY: "UPI or bank transfer",
  SUPABASE_REGION: "Mumbai, India region (ap-south-1)",
  ENCRYPTION_AT_REST: "and at rest",
  ANALYTICS_TOOL_NOTE: "Google Analytics, only if you accept analytics cookies",
  EXPORT_FEE: "₹999",
  ADDITIONAL_LOCATION_PRICE: "Contact us for details",
  FAIR_USE_LIMITS: "one account, one shop location and one user",

  // Confirmed contact details from document
  CONTACT_EMAIL: "info@webrajya.com",
  CONTACT_PHONE: "+91 9630013483",
  CONTACT_PHONE_RAW: "919630013483",
  CONTACT_ADDRESS: "52 Surve Nagar, Nagpur, Maharashtra",
  SUPPORT_HOURS: "Monday to Saturday, 9 AM to 8 PM",
  SUNDAY_HOURS: "Sunday emergency support (response target: 4 hours)"
};

/**
 * Checks if a string value is an unresolved placeholder
 */
export function isPlaceholder(val: string): boolean {
  return typeof val === "string" && val.includes("[") && val.includes("]");
}

