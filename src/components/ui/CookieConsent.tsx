"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Loads GA4 scripts only after the visitor has provided explicit consent.
 */
function loadGoogleAnalytics(measurementId: string) {
  if (typeof window === "undefined" || !measurementId) return;

  // Prevent multiple script insertions
  if (document.getElementById("ga4-script")) return;

  const script = document.createElement("script");
  script.id = "ga4-script";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const win = window as any;
  win.dataLayer = win.dataLayer || [];
  function gtag(...args: unknown[]) {
    win.dataLayer.push(args);
  }
  win.gtag = gtag;

  gtag("js", new Date());
  gtag("config", measurementId, {
    anonymize_ip: true,
    cookie_flags: "SameSite=None;Secure"
  });
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("webrajya_cookie_consent");
      if (!consent) {
        setIsVisible(true);
      } else if (consent === "accepted" && GA_MEASUREMENT_ID) {
        loadGoogleAnalytics(GA_MEASUREMENT_ID);
      }
    } catch {
      // Ignore localStorage access restrictions
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("webrajya_cookie_consent", "accepted");
      if (GA_MEASUREMENT_ID) {
        loadGoogleAnalytics(GA_MEASUREMENT_ID);
      }
    } catch {
      // Ignore
    }
    setIsVisible(false);
  };

  const handleReject = () => {
    try {
      localStorage.setItem("webrajya_cookie_consent", "rejected");
      // Remove GA script if present
      const script = document.getElementById("ga4-script");
      if (script) script.remove();
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
        <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div className="space-y-2 flex-1">
          <p className="text-xs text-slate-700 leading-relaxed">
            Website ko theek chalane aur sudharne ke liye hum zaroori cookies use karte hain. Analytics tabhi chalu hoti hai jab aap manzoor karein.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <Button size="xs" variant="primary" onClick={handleAccept} className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
              Theek Hai
            </Button>
            <Button size="xs" variant="outline" onClick={handleReject} className="border-slate-300 text-slate-700 hover:bg-slate-100 font-medium">
              Nahi
            </Button>
            <Link
              href="/privacy-policy"
              className="text-[11px] text-emerald-700 hover:underline ml-1 font-semibold"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <button
          onClick={handleReject}
          aria-label="Reject and close cookie banner"
          className="text-slate-400 hover:text-slate-600 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
