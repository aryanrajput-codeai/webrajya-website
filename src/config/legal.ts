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

  // Config values to fill in (currently populated with exact document placeholders)
  EFFECTIVE_DATE: "[EFFECTIVE DATE]",
  OWNER_FULL_NAME: "[OWNER FULL NAME]",
  PRIVACY_CONTACT_NAME: "[PRIVACY CONTACT NAME]",
  PAYMENT_GATEWAY: "[PAYMENT GATEWAY]",
  SUPABASE_REGION: "[INDIA REGION, confirm Mumbai]",
  ENCRYPTION_AT_REST: "[and at rest, confirm]",
  ANALYTICS_TOOL_NOTE: "[ANALYTICS TOOL, EMAIL OR SMS SERVICE, if used]",
  EXPORT_FEE: "[EXPORT FEE]",
  ADDITIONAL_LOCATION_PRICE: "[ADDITIONAL LOCATION PRICE]",
  FAIR_USE_LIMITS: "[FAIR-USE LIMITS, for example users and storage]",

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

