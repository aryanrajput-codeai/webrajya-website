"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Utensils, FileText } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";
import { GENERAL_FAQS } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { submitContactLead } from "@/lib/leadService";

export default function ContactPage() {
  const [selectedProduct, setSelectedProduct] = useState<"pos" | "invoice" | "general">("pos");
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

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill out Name, Email, and Message fields.");
      return;
    }

    setLoading(true);

    const res = await submitContactLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      businessName: formData.businessName,
      product: selectedProduct,
      message: formData.message
    });

    setLoading(false);

    if (res.success) {
      setSuccessMessage(res.message);
      setFormData({ name: "", email: "", phone: "", businessName: "", message: "" });
    } else {
      setErrorMessage(res.message);
    }
  };

  return (
    <div className="w-full bg-[#F8F3EB] text-[#020C2B] min-h-screen pt-28 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E58145]/10 border border-[#E58145]/20 text-[#E58145] text-xs font-mono font-bold uppercase">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#020C2B] tracking-tight">
            Contact WebRajya Software Team
          </h1>
          <p className="text-[#020C2B]/80 text-base">
            Have questions about WebRajya POS or WebRajya Invoice? Our technical product specialists are here to assist you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Column using Central SITE_CONFIG */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#020C2B]/10 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#020C2B]">Direct Communication</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E58145]/10 text-[#E58145] border border-[#E58145]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#020C2B]/60 block font-mono">Sales &amp; Inquiry Email</span>
                    <span className="font-medium text-[#020C2B]">{SITE_CONFIG.contact.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E58145]/10 text-[#E58145] border border-[#E58145]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#020C2B]/60 block font-mono">Phone Helpline</span>
                    <span className="font-medium text-[#020C2B]">{SITE_CONFIG.contact.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E58145]/10 text-[#E58145] border border-[#E58145]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#020C2B]/60 block font-mono">Office Headquarters</span>
                    <span className="font-medium text-[#020C2B] leading-relaxed block">{SITE_CONFIG.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#020C2B] border border-[#E58145]/30 space-y-3 shadow-xl text-white">
              <h4 className="font-semibold text-white text-sm">Looking for an Interactive Walkthrough?</h4>
              <p className="text-xs text-[#F8F3EB]/80 leading-relaxed">
                Schedule a 1-on-1 demo walkthrough tailored specifically to your venue or billing setup.
              </p>
              <Button href="/demo" variant="cta" size="sm">
                Book a Demo Instead
              </Button>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#020C2B]/10 shadow-sm">
              {successMessage ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#020C2B]">Message Received</h3>
                  <p className="text-sm text-[#020C2B]/80 max-w-md mx-auto">
                    {successMessage}
                  </p>
                  <Button onClick={() => setSuccessMessage(null)} variant="secondary" size="sm">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Product Toggle */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-[#020C2B]/70 block font-semibold">Select Product</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProduct("pos")}
                        className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          selectedProduct === "pos"
                            ? "bg-[#E58145] border-[#E58145] text-white font-bold"
                            : "bg-[#F8F3EB] border-[#020C2B]/10 text-[#020C2B] hover:bg-[#020C2B]/5"
                        }`}
                      >
                        <Utensils className="w-3.5 h-3.5" /> WebRajya POS
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedProduct("invoice")}
                        className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          selectedProduct === "invoice"
                            ? "bg-[#E58145] border-[#E58145] text-white font-bold"
                            : "bg-[#F8F3EB] border-[#020C2B]/10 text-[#020C2B] hover:bg-[#020C2B]/5"
                        }`}
                      >
                        <FileText className="w-3.5 h-3.5" /> WebRajya Invoice
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedProduct("general")}
                        className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          selectedProduct === "general"
                            ? "bg-[#E58145] border-[#E58145] text-white font-bold"
                            : "bg-[#F8F3EB] border-[#020C2B]/10 text-[#020C2B] hover:bg-[#020C2B]/5"
                        }`}
                      >
                        <Sparkles className="w-3.5 h-3.5" /> General
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#020C2B]/70">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#F8F3EB] border border-[#020C2B]/10 rounded-xl px-3.5 py-2.5 text-[#020C2B] text-sm focus:outline-none focus:border-[#E58145]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#020C2B]/70">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F8F3EB] border border-[#020C2B]/10 rounded-xl px-3.5 py-2.5 text-[#020C2B] text-sm focus:outline-none focus:border-[#E58145]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#020C2B]/70">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#F8F3EB] border border-[#020C2B]/10 rounded-xl px-3.5 py-2.5 text-[#020C2B] text-sm focus:outline-none focus:border-[#E58145]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-[#020C2B]/70">Business / Venue Name</label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-[#F8F3EB] border border-[#020C2B]/10 rounded-xl px-3.5 py-2.5 text-[#020C2B] text-sm focus:outline-none focus:border-[#E58145]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#020C2B]/70">Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can we assist your business?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F8F3EB] border border-[#020C2B]/10 rounded-xl px-3.5 py-2.5 text-[#020C2B] text-sm focus:outline-none focus:border-[#E58145] resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    variant="cta"
                    size="lg"
                    className="w-full"
                    icon={loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  >
                    {loading ? "Sending Inquiry..." : "Send Message to WebRajya"}
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* General FAQs */}
        <div id="faq" className="scroll-mt-32 space-y-8 max-w-4xl mx-auto pt-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase text-[#E58145] tracking-wider font-bold">Help &amp; Answers</span>
            <h2 className="text-3xl font-extrabold text-[#020C2B]">Platform Frequently Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GENERAL_FAQS.map(faq => (
              <div key={faq.question} className="p-6 rounded-2xl bg-white border border-[#020C2B]/10 shadow-sm space-y-2">
                <h3 className="font-bold text-[#020C2B] text-base">{faq.question}</h3>
                <p className="text-xs text-[#020C2B]/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
