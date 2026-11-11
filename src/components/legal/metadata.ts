import { Metadata } from "next";
import { LEGAL_CONFIG } from "@/config/legal";

export function getLegalMetadata(title: string, description: string): Metadata {
  return {
    title: `${title} | WebRajya`,
    description,
    robots: {
      index: LEGAL_CONFIG.LEGAL_APPROVED,
      follow: LEGAL_CONFIG.LEGAL_APPROVED,
      nocache: !LEGAL_CONFIG.LEGAL_APPROVED
    }
  };
}

