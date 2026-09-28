export interface ContactLeadPayload {
  name: string;
  email: string;
  phone?: string;
  businessName?: string;
  product: "pos" | "invoice" | "general";
  message: string;
}

export interface ServiceResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Service for general contact inquiries (/contact page).
 */
export async function submitContactLead(
  payload: ContactLeadPayload
): Promise<ServiceResponse> {
  if (!payload.name.trim() || !payload.email.trim() || !payload.message.trim()) {
    return {
      success: false,
      message: "Please fill out all required fields (Name, Email, Message).",
      error: "MISSING_REQUIRED_FIELDS"
    };
  }

  await new Promise(resolve => setTimeout(resolve, 600));

  return {
    success: true,
    message: `Thank you, ${payload.name}! Your message has been sent to our team.`
  };
}
