"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import QRCode from "qrcode";
import {
  X,
  QrCode,
  Download,
  Copy,
  Check,
  Printer,
  Sparkles,
  Smartphone,
  Star,
  ExternalLink,
} from "lucide-react";
import { WebRajyaLogo } from "@/components/brand/WebRajyaLogo";

interface ReviewQrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReviewQrModal({ isOpen, onClose }: ReviewQrModalProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [reviewUrl, setReviewUrl] = useState<string>("https://webrajya.com/review");
  const [copied, setCopied] = useState<boolean>(false);
  const standeeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Use current window origin + /review?action=write for full portability across localhost, local network IP, and prod domain
      const target = `${window.location.origin}/#reviews?action=write`;
      setReviewUrl(target);

      QRCode.toDataURL(target, {
        width: 480,
        margin: 2,
        errorCorrectionLevel: "H",
        color: {
          dark: "#020C2B",
          light: "#FFFFFF",
        },
      })
        .then((url) => setQrDataUrl(url))
        .catch((err) => console.error("Failed to generate QR code", err));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(reviewUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        className="bg-white rounded-3xl shadow-2xl border border-[#020C2B]/10 w-full max-w-lg overflow-hidden relative p-6 sm:p-8 text-[#020C2B]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F8F3EB] hover:bg-[#020C2B]/10 flex items-center justify-center transition-colors text-[#525866] z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1.5 pb-5 border-b border-[#020C2B]/10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E58145]/15 border border-[#E58145]/30 text-[#E58145] text-xs font-mono font-semibold">
            <QrCode className="w-3.5 h-3.5" /> Customer Review QR
          </div>
          <h3 className="text-2xl font-black tracking-tight text-[#020C2B]">
            Scan to Leave a Review
          </h3>
          <p className="text-xs sm:text-sm text-[#525866]">
            Show this on your screen or print it for your billing counter.
          </p>
        </div>

        {/* Printable Standee Card */}
        <div className="py-6 flex justify-center">
          <div
            ref={standeeRef}
            className="w-full max-w-xs bg-gradient-to-b from-[#020C2B] via-[#04123b] to-[#020C2B] p-5 sm:p-6 rounded-3xl shadow-xl text-center text-white border border-white/15 relative overflow-hidden"
          >
            {/* Top Amber Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-20 bg-[#E58145]/25 rounded-full blur-2xl pointer-events-none" />

            {/* Logo */}
            <div className="flex items-center justify-center mb-3">
              <WebRajyaLogo size={32} showText={true} whiteContainer={true} />
            </div>

            {/* Title & 5 Stars */}
            <h4 className="text-base font-extrabold tracking-tight text-white mb-1">
              Rate Your Experience
            </h4>

            <div className="flex items-center justify-center gap-1 text-amber-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            {/* Scannable QR Container */}
            <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-inner mx-auto inline-block border-2 border-white/20">
              {qrDataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={qrDataUrl}
                  alt="Scan to review WebRajya"
                  className="w-48 h-48 sm:w-52 sm:h-52 object-contain rounded-lg"
                />
              ) : (
                <div className="w-48 h-48 sm:w-52 sm:h-52 flex items-center justify-center text-gray-400 text-xs">
                  Generating QR...
                </div>
              )}
            </div>

            {/* Scan Prompt Instruction */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-xs font-semibold text-white/90">
              <Smartphone className="w-4 h-4 text-[#E58145] shrink-0" />
              <span>Point any phone camera to scan</span>
            </div>

            <p className="text-[10px] text-white/60 font-mono mt-1">
              Takes 30 seconds • Directly opens review form
            </p>
          </div>
        </div>

        {/* Link Bar */}
        <div className="bg-[#F8F3EB] rounded-2xl p-3 border border-[#020C2B]/10 flex items-center justify-between gap-2 mb-5">
          <div className="truncate text-xs font-mono text-[#525866] select-all pl-1">
            {reviewUrl}
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white border border-[#020C2B]/15 hover:border-[#020C2B] text-xs font-bold text-[#020C2B] shrink-0 transition-all cursor-pointer shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#525866]" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>

        {/* Action Buttons: Download & Print */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          {qrDataUrl ? (
            <a
              href={qrDataUrl}
              download="webrajya-review-qr.png"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#020C2B] hover:bg-[#E58145] text-white text-xs sm:text-sm font-bold shadow-md transition-all text-center"
            >
              <Download className="w-4 h-4 text-[#E58145]" />
              <span>Download QR</span>
            </a>
          ) : (
            <div />
          )}

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#020C2B]/20 bg-white hover:bg-[#020C2B]/5 text-[#020C2B] text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer"
          >
            <Printer className="w-4 h-4 text-[#525866]" />
            <span>Print Standee</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
