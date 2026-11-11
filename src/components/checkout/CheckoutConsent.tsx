"use client";

import React, { useState } from "react";
import Link from "next/link";

interface CheckoutConsentProps {
  isMonthlyAutopay?: boolean;
  onConsentChange?: (valid: boolean, data: { termsAccepted: boolean; autopayConsent: boolean }) => void;
  className?: string;
}

/**
 * Standard Checkout & Sign-Up Consent Component
 * 
 * Enforces legal compliance when PAYMENTS_ENABLED is true:
 * 1. Required unticked checkbox for Terms, Refund Policy, and Subscription Terms.
 * 2. Separate unticked checkbox for Monthly Autopay recurring payments.
 */
export function CheckoutConsent({
  isMonthlyAutopay = false,
  onConsentChange,
  className = ""
}: CheckoutConsentProps) {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [autopayConsent, setAutopayConsent] = useState(false);

  const handleTermsChange = (checked: boolean) => {
    setTermsAccepted(checked);
    const valid = checked && (!isMonthlyAutopay || autopayConsent);
    onConsentChange?.(valid, { termsAccepted: checked, autopayConsent });
  };

  const handleAutopayChange = (checked: boolean) => {
    setAutopayConsent(checked);
    const valid = termsAccepted && checked;
    onConsentChange?.(valid, { termsAccepted, autopayConsent: checked });
  };

  return (
    <div className={`space-y-3 p-4 rounded-xl border border-slate-200 bg-slate-50/70 text-xs ${className}`}>
      {/* 1. Terms, Refund & Subscription Agreement (Always Required) */}
      <div className="flex items-start gap-2.5">
        <input
          id="checkout-terms-consent"
          type="checkbox"
          checked={termsAccepted}
          onChange={(e) => handleTermsChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
          required
        />
        <label htmlFor="checkout-terms-consent" className="text-slate-700 leading-relaxed cursor-pointer select-none">
          I have read and agree to the{" "}
          <Link href="/terms" target="_blank" className="text-emerald-700 font-semibold underline hover:text-emerald-800">
            Terms and Conditions
          </Link>
          ,{" "}
          <Link href="/refund-policy" target="_blank" className="text-emerald-700 font-semibold underline hover:text-emerald-800">
            Cancellation and Refund Policy
          </Link>
          , and{" "}
          <Link href="/subscription-terms" target="_blank" className="text-emerald-700 font-semibold underline hover:text-emerald-800">
            Subscription and Auto-Renewal Terms
          </Link>
          . <span className="text-rose-600 font-bold">*</span>
        </label>
      </div>

      {/* 2. Monthly Autopay Specific Consent (Only when Monthly plan is chosen) */}
      {isMonthlyAutopay && (
        <div className="flex items-start gap-2.5 pt-2 border-t border-slate-200/80">
          <input
            id="checkout-autopay-consent"
            type="checkbox"
            checked={autopayConsent}
            onChange={(e) => handleAutopayChange(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
            required
          />
          <label htmlFor="checkout-autopay-consent" className="text-slate-700 leading-relaxed cursor-pointer select-none">
            <strong>Auto-renewal consent:</strong> I authorise recurring monthly payments for this subscription until I cancel. I understand I can cancel at any time via WhatsApp or email before the next renewal date, and reminders will be sent 7 days and 2 days before charge. <span className="text-rose-600 font-bold">*</span>
          </label>
        </div>
      )}
    </div>
  );
}

