"use client";

import React from "react";
import Image from "next/image";

interface WebRajyaLogoProps {
  size?: number; // size in pixels for icon width/height
  showText?: boolean;
  className?: string;
  lightText?: boolean;
  whiteContainer?: boolean; // wraps emblem + text in a crisp white pill bar
}

export function WebRajyaLogo({
  size = 40,
  showText = true,
  className = "",
  lightText = false,
  whiteContainer = false,
}: WebRajyaLogoProps) {
  const content = (
    <div className="flex items-center gap-3">
      {/* WR Emblem Icon in crisp white box for 100% visibility */}
      <div
        className="relative flex items-center justify-center shrink-0 bg-white p-1 rounded-xl border border-[#020C2B]/10 shadow-xs transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <Image
          src="/webrajya-logo.svg"
          alt="WebRajya Logo Emblem"
          width={size}
          height={size}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-sans font-black tracking-tight leading-none ${
              whiteContainer || !lightText ? "text-[#020C2B]" : "text-white"
            } group-hover:text-[#E58145] transition-colors`}
            style={{ fontSize: `${Math.max(16, size * 0.45)}px` }}
          >
            WEBRAJYA
          </span>
          <span
            className={`tracking-widest uppercase font-medium mt-0.5 ${
              whiteContainer || !lightText ? "text-[#525866]" : "text-[#F8F3EB]/70"
            }`}
            style={{ fontSize: `${Math.max(9, size * 0.22)}px` }}
          >
            Business Tech
          </span>
        </div>
      )}
    </div>
  );

  if (whiteContainer) {
    return (
      <div className={`inline-flex items-center bg-white px-3.5 py-2 rounded-2xl border border-[#020C2B]/10 shadow-md ${className}`}>
        {content}
      </div>
    );
  }

  return <div className={className}>{content}</div>;
}
