import { buildDemoWhatsAppUrl, DemoLeadMessageData } from "@/config/whatsapp";

export type BusinessTypeOption =
  | "Restaurant / Café"
  | "Retail / Local Business"
  | "Agency / Service Business"
  | "Distributor / B2B Business"
  | "Freelancer / Professional"
  | "Other";

export type ProductInterestOption = "pos" | "invoice" | "not_sure";

export interface DemoLead {
  fullName: string;
  businessName: string;
  businessType: BusinessTypeOption | string;
  productInterest: ProductInterestOption;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

export interface DemoSubmissionResult {
  success: boolean;
  whatsappUrl: string;
  openedSuccessfully: boolean;
  lead: DemoLead;
}

/**
 * Validates lead fields on client side before preparing WhatsApp submission.
 */
export function validateDemoStep(
  step: 1 | 2 | 3 | 4,
  lead: Partial<DemoLead>
): Record<string, string> {
  const errors: Record<string, string> = {};

  if (step === 1) {
    if (!lead.businessType) {
      errors.businessType = "Please select a business type.";
    }
    if (!lead.businessName || !lead.businessName.trim()) {
      errors.businessName = "Please enter your business name.";
    }
  }

  if (step === 2) {
    if (!lead.productInterest) {
      errors.productInterest = "Please select a product interest.";
    }
  }

  if (step === 3) {
    if (!lead.fullName || !lead.fullName.trim()) {
      errors.fullName = "Please enter your full name.";
    }
    if (!lead.businessName || !lead.businessName.trim()) {
      errors.businessName = "Please enter your business name.";
    }

    const cleanPhone = (lead.phone || "").replace(/\s+/g, "");
    if (!cleanPhone || cleanPhone.length < 7) {
      errors.phone = "Please enter a valid phone number (at least 7 digits).";
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!lead.email || !emailRegex.test(lead.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
  }

  if (step === 4) {
    if (!lead.preferredDate) {
      errors.preferredDate = "Please select a preferred demo date.";
    } else {
      const selected = new Date(lead.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errors.preferredDate = "Preferred date cannot be in the past.";
      }
    }

    if (!lead.preferredTime) {
      errors.preferredTime = "Please select a preferred demo time.";
    }
  }

  return errors;
}

/**
 * Prepares WhatsApp pre-filled message and triggers window.open.
 * Does NOT store lead in any database or backend service.
 */
export function processWhatsAppDemoSubmission(lead: DemoLead): DemoSubmissionResult {
  const whatsappUrl = buildDemoWhatsAppUrl(lead);

  let openedSuccessfully = false;

  if (typeof window !== "undefined") {
    try {
      const newWin = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (newWin && !newWin.closed) {
        openedSuccessfully = true;
      }
    } catch {
      openedSuccessfully = false;
    }
  }

  return {
    success: true,
    whatsappUrl,
    openedSuccessfully,
    lead
  };
}
