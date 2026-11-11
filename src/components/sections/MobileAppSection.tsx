"use client";

import React, { useState } from "react";
import { Smartphone, Bell, CheckCircle2, QrCode, ArrowRight } from "lucide-react";
import { LAUNCH_CONFIG } from "@/config/launch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { trackEvent } from "@/lib/analytics";

export function MobileAppSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.replace(/\D/g, "").length < 10) {
      alert("Please enter a valid 10-digit WhatsApp number.");
      return;
    }

    setLoading(true);
    trackEvent("app_waitlist_submit", {
      name,
      phone: phone.replace(/\D/g, ""),
      source: "app_waitlist"
    });

    try {
      await fetch(LAUNCH_CONFIG.CRM_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone: phone.replace(/\D/g, ""),
          source: "app_waitlist",
          timestamp: new Date().toISOString()
        })
      });
    } catch {
      // Graceful fallback for offline or local preview
    }

    setLoading(false);
    setSubmitted(true);
  };

  const isLive = LAUNCH_CONFIG.APP_LIVE;

  return (
    <section className="py-20 bg-white border-y border-[#020C2B]/10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Col: Explainer & Action */}
        <div className="space-y-6">
          <Badge variant="invoice">
            {isLive ? "Now Available on Mobile" : "Mobile App Coming Soon"}
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#020C2B] tracking-tight">
            {isLive
              ? "Manage Your Shop from Anywhere with WebRajya Mobile"
              : "WebRajya Mobile App is Coming to Android & iOS"}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {isLive
              ? "Download WebRajya Invoice on your smartphone to check live shop billing, review daily closing cash, and monitor Khata balances on the move."
              : "We are currently finalizing our companion mobile application for Android and iOS. View live sales reports, customer Khata, and stock alerts straight from your phone."}
          </p>

          {isLive ? (
            /* APP STORE & PLAY STORE BUTTONS (ACTIVE WHEN APP_LIVE = true) */
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                {LAUNCH_CONFIG.APP_PLAY_URL && (
                  <Button
                    href={LAUNCH_CONFIG.APP_PLAY_URL}
                    variant="primary"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("plan_click", { action: "play_store_download" })}
                  >
                    Google Play Store
                  </Button>
                )}
                {LAUNCH_CONFIG.APP_IOS_URL && (
                  <Button
                    href={LAUNCH_CONFIG.APP_IOS_URL}
                    variant="outline"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("plan_click", { action: "app_store_download" })}
                  >
                    Apple App Store
                  </Button>
                )}
              </div>
              <p className="text-xs text-slate-500 font-mono">
                Scan QR code on your phone or search WebRajya Invoice on your app store.
              </p>
            </div>
          ) : (
            /* NOTIFY-ME WAITLIST FORM (ACTIVE WHEN APP_LIVE = false) */
            <div className="pt-2">
              {submitted ? (
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-1.5 animate-in fade-in">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>You&apos;re on the early access priority list!</span>
                  </div>
                  <p className="text-xs text-emerald-700">
                    We will send a direct WhatsApp alert with the download link the moment the mobile
                    app launches.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="space-y-3 max-w-md">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-slate-50 flex-1"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] bg-slate-50 flex-1 font-mono"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={loading}
                    className="w-full sm:w-auto"
                    icon={<Bell className="w-4 h-4" />}
                  >
                    {loading ? "Joining..." : "Get Notified on WhatsApp"}
                  </Button>
                  <p className="text-[11px] text-slate-500">
                    Source tag: source=app_waitlist • No spam, strictly launch notification.
                  </p>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Right Col: Graphic Preview */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm p-6 sm:p-8 rounded-3xl bg-[#F8F3EB] border border-slate-200 shadow-md text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-white text-[#2563EB] flex items-center justify-center shadow-xs mx-auto border border-slate-200">
              <Smartphone className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#020C2B]">
                {isLive ? "Quick Scan QR Code" : "Companion Mobile Interface"}
              </h3>
              <p className="text-xs text-slate-600">
                {isLive
                  ? "Scan with your Android or iPhone camera to open direct app link."
                  : "Daily sales summaries, low stock notifications, and customer balance reminders."}
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-center">
              {isLive ? (
                <div className="w-32 h-32 bg-slate-100 flex items-center justify-center rounded-xl text-slate-400">
                  <QrCode className="w-20 h-20 text-[#020C2B]" />
                </div>
              ) : (
                <div className="py-6 space-y-2 text-slate-500">
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold block text-[#E58145]">
                    Beta Testing Phase
                  </span>
                  <p className="text-xs max-w-xs mx-auto">
                    Optimized for 4G/5G networks across Maharashtra with zero lag.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
