"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("webrajya_cookie_consent");
      if (!consent) {
        setIsVisible(true);
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("webrajya_cookie_consent", "accepted");
    } catch {
      // Ignore
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("webrajya_cookie_consent", "declined");
    } catch {
      // Ignore
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Privacy and Cookie Consent"
      className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md bg-white border border-slate-200 rounded-2xl p-4 shadow-xl z-50 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
        <div className="space-y-2 flex-1">
          <p className="text-xs text-slate-700 leading-relaxed">
            We use minimal cookies and local storage to track demo enquiries, remember language
            preferences, and improve your browsing experience. We never sell your personal data.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <Button size="xs" variant="primary" onClick={handleAccept}>
              Accept All
            </Button>
            <Button size="xs" variant="outline" onClick={handleDecline}>
              Essential Only
            </Button>
            <Link
              href="/privacy"
              className="text-[11px] text-[#2563EB] hover:underline ml-1 font-medium"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <button
          onClick={handleDecline}
          aria-label="Close cookie banner"
          className="text-slate-400 hover:text-slate-600 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

