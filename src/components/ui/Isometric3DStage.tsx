"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Box, Maximize2, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface Isometric3DStageProps {
  children: React.ReactNode;
  title?: string;
  badge?: string;
  accentColor?: "pos" | "invoice" | "garage";
  className?: string;
  defaultMode?: "3d" | "flat";
}

export function Isometric3DStage({
  children,
  title = "Interactive Spatial Interface",
  badge = "Live 3D Viewport",
  accentColor = "pos",
  className,
  defaultMode = "3d",
}: Isometric3DStageProps) {
  const shouldReduceMotion = useReducedMotion();
  const [is3DMode, setIs3DMode] = useState(defaultMode === "3d" && !shouldReduceMotion);
  const [isHovered, setIsHovered] = useState(false);

  const accentStyles = {
    pos: {
      border: "hover:border-[#E58145]/40",
      badge: "bg-[#E58145]/15 text-[#E58145] border-[#E58145]/30",
      glow: "from-[#E58145]/10 via-transparent to-transparent",
      shadow: "shadow-3d-pos",
    },
    invoice: {
      border: "hover:border-[#020C2B]/40",
      badge: "bg-[#020C2B]/10 text-[#020C2B] border-[#020C2B]/20",
      glow: "from-[#020C2B]/10 via-transparent to-transparent",
      shadow: "shadow-3d-invoice",
    },
    garage: {
      border: "hover:border-[#0EA5E9]/40",
      badge: "bg-[#0EA5E9]/15 text-[#0EA5E9] border-[#0EA5E9]/30",
      glow: "from-[#0EA5E9]/10 via-transparent to-transparent",
      shadow: "shadow-3d-garage",
    },
  }[accentColor];

  return (
    <div className={cn("relative w-full my-6", className)}>
      
      {/* Viewport Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
        <div className="flex items-center gap-2.5">
          <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold border", accentStyles.badge)}>
            <Sparkles className="w-3.5 h-3.5" />
            {badge}
          </span>
          <span className="text-xs font-semibold text-[#020C2B] hidden sm:inline">
            {title}
          </span>
        </div>

        {/* 3D vs Flat Toggle */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-white/80 backdrop-blur-sm border border-[#020C2B]/10 shadow-xs text-xs font-mono font-semibold">
          <button
            type="button"
            onClick={() => setIs3DMode(true)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all",
              is3DMode
                ? "bg-[#020C2B] text-white shadow-sm"
                : "text-[#525866] hover:text-[#020C2B]"
            )}
          >
            <Box className="w-3.5 h-3.5" />
            <span>3D Spatial Angle</span>
          </button>
          
          <button
            type="button"
            onClick={() => setIs3DMode(false)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all",
              !is3DMode
                ? "bg-[#020C2B] text-white shadow-sm"
                : "text-[#525866] hover:text-[#020C2B]"
            )}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Flat Direct View</span>
          </button>
        </div>
      </div>

      {/* 3D Isometric Viewport Container */}
      <div
        style={{
          perspective: 1600,
          transformStyle: "preserve-3d",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full relative"
      >
        <motion.div
          animate={
            is3DMode && !shouldReduceMotion
              ? {
                  rotateX: isHovered ? 8 : 12,
                  rotateY: isHovered ? -4 : -7,
                  rotateZ: isHovered ? 0.5 : 1.2,
                  scale: isHovered ? 0.99 : 0.97,
                  y: isHovered ? -6 : 0,
                }
              : {
                  rotateX: 0,
                  rotateY: 0,
                  rotateZ: 0,
                  scale: 1,
                  y: 0,
                }
          }
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 24,
            mass: 0.8,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
          className={cn(
            "relative w-full rounded-3xl transition-shadow duration-500 will-change-transform",
            is3DMode ? accentStyles.shadow : "shadow-xl",
            accentStyles.border
          )}
        >
          {/* Ambient Rim Highlight Layer */}
          <div
            className={cn(
              "absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-tr opacity-40 z-20 transition-opacity",
              accentStyles.glow,
              is3DMode ? "block" : "hidden"
            )}
          />

          {/* Children Mockup Body */}
          <div className="relative z-10 w-full rounded-3xl overflow-hidden">
            {children}
          </div>

          {/* 3D Spatial Device Stand / Base Shadow when elevated */}
          {is3DMode && (
            <motion.div
              animate={{
                opacity: isHovered ? 0.85 : 0.65,
                scale: isHovered ? 1.02 : 1,
              }}
              className="absolute -bottom-6 inset-x-8 h-8 rounded-full bg-[#020C2B]/15 blur-xl -z-10 pointer-events-none transform -translate-y-2"
            />
          )}
        </motion.div>
      </div>

    </div>
  );
}
