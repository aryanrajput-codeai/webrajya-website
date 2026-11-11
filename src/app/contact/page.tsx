"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageCircle, Clock, Sparkles } from "lucide-react";
import { LAUNCH_CONFIG } from "@/config/launch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NagpurLocationMap } from "@/components/ui/NagpurLocationMap";
import { trackEvent } from "@/lib/analytics";

export default function ContactPage() {
  const [selectedProduct, setSelectedProduct] = useState<"invoice" | "pos">("invoice");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage("Please enter your name and contact phone number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          shopName: formData.businessName,
          phone: formData.phone,
          shopType: selectedProduct === "invoice" ? "WebRajya Invoice Enquiry" : "WebRajya POS Enquiry",
          source: "contact_page",
          areaInNagpur: "Nagpur"
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setSuccessMessage("Thank you! Your message has been sent to our Nagpur team. We will call you back shortly.");
      setFormData({ name: "", email: "", phone: "", businessName: "", message: "" });
    } catch {
      setErrorMessage("Unable to send message right now. Please message us directly on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/${LAUNCH_CONFIG.WHATSAPP}?text=${encodeURIComponent(
    "Hi WebRajya, I want to speak with your Nagpur team about WebRajya Invoice."
  )}`;

  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-32 pb-24 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-bold">
            Nagpur Onboarding &amp; Support Hub
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Contact the Nagpur Team
          </h1>
          <p className="text-slate-700 text-base sm:text-lg">
            Have questions about WebRajya Invoice or want an in-shop demonstration in Nagpur?
            Our local software specialists are ready to assist you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#020C2B]">Direct Contact</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#E58145] border border-orange-100 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">Phone Desk</span>
                    <a
                      href={`tel:${LAUNCH_CONFIG.PHONE}`}
                      onClick={() => trackEvent("call_click", { location: "contact_page" })}
                      className="font-bold text-[#020C2B] hover:text-[#E58145] transition-colors font-mono"
                    >
                      {LAUNCH_CONFIG.PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">WhatsApp Support</span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("whatsapp_click", { location: "contact_page" })}
                      className="font-bold text-emerald-700 hover:underline"
                    >
                      +{LAUNCH_CONFIG.WHATSAPP} &rarr;
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">Official Email</span>
                    <a href={`mailto:${LAUNCH_CONFIG.EMAIL}`} className="font-medium text-[#020C2B] hover:underline">
                      {LAUNCH_CONFIG.EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">Support Hours</span>
                    <span className="font-medium text-[#020C2B] text-xs">
                      {LAUNCH_CONFIG.OPERATING_HOURS.weekdays}
                    </span>
                    <p className="text-[11px] text-slate-500">
                      {LAUNCH_CONFIG.OPERATING_HOURS.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map for Nagpur */}
            <NagpurLocationMap />
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-[#020C2B]">Send Us a Message</h3>
              <p className="text-xs text-slate-600">
                Let us know what shop you run and what you need help with.
              </p>
            </div>

            {successMessage && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{successMessage}</span>
              </div>
            )}

            {errorMessage && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="contactName" className="text-xs font-bold text-slate-800">
                    Your Name *
                  </Label>
                  <Input
                    id="contactName"
                    required
                    placeholder="e.g. Amit Verma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="contactPhone" className="text-xs font-bold text-slate-800">
                    Phone / WhatsApp Number *
                  </Label>
                  <Input
                    id="contactPhone"
                    type="tel"
                    required
                    placeholder="10-digit mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="contactEmail" className="text-xs font-bold text-slate-800">
                    Email Address
                  </Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="name@business.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="businessName" className="text-xs font-bold text-slate-800">
                    Shop / Store Name
                  </Label>
                  <Input
                    id="businessName"
                    placeholder="e.g. Verma General Store"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="contactMessage" className="text-xs font-bold text-slate-800">
                  How can we help your shop?
                </Label>
                <textarea
                  id="contactMessage"
                  rows={4}
                  placeholder="Tell us about your billing setup, current software, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              <Button
                type="submit"
                variant="cta"
                size="lg"
                disabled={loading}
                className="w-full font-bold shadow-md"
              >
                {loading ? "Sending..." : "Send Message to Nagpur Team"}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
