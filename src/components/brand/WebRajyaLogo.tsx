"use client";

import React from "react";
import Image from "next/image";

interface WebRajyaLogoProps {
  size?: number; // size in pixels for icon width/height
  showText?: boolean;
  className?: string;
  lightText?: boolean;
}

export function WebRajyaLogo({
  size = 40,
  showText = true,
  className = "",
  lightText = false,
}: WebRajyaLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* WR Emblem Icon */}
      <div
        className="relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
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
              lightText ? "text-white" : "text-[#020C2B]"
            } group-hover:text-[#F36F21] transition-colors`}
            style={{ fontSize: `${Math.max(16, size * 0.45)}px` }}
          >
            WEBRAJYA
          </span>
          <span
            className={`tracking-widest uppercase font-medium mt-0.5 ${
              lightText ? "text-[#F8F3EB]/70" : "text-[#525866]"
            }`}
            style={{ fontSize: `${Math.max(9, size * 0.22)}px` }}
          >
            Business Tech
          </span>
        </div>
      )}
    </div>
  );
}
