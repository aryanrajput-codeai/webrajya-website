"use client";

import React, { useRef, useCallback, memo } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useScroll,
  useVelocity,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

// --- 1. SPATIAL STAGE CONTAINER ---
interface Motion3DStageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  perspective?: number;
  className?: string;
}

export const Motion3DStage = memo(function Motion3DStage({
  children,
  perspective = 1200,
  className,
  ...props
}: Motion3DStageProps) {
  return (
    <div
      style={{
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
      }}
      className={cn("relative w-full", className)}
      {...props}
    >
      {children}
    </div>
  );
});

// --- 2. GYROSCOPIC TILT 3D CARD ---
export interface Tilt3DCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxTilt?: number;
  scale?: number;
  glare?: boolean;
  glareMaxOpacity?: number;
  className?: string;
}

export const Tilt3DCard = memo(function Tilt3DCard({
  children,
  maxTilt = 10,
  scale = 1.02,
  glare = true,
  glareMaxOpacity = 0.35,
  className,
  ...props
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const isHovered = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 25, mass: 0.6 };

  // Euler Rotations with responsive spring damping
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-maxTilt, maxTilt]), springConfig);
  const cardScale = useSpring(useTransform(isHovered, [0, 1], [1, scale]), springConfig);

  // Dynamic Specular Glare Reflection coordinates
  const glareX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), springConfig);
  const glareOpacity = useSpring(useTransform(isHovered, [0, 1], [0, glareMaxOpacity]), springConfig);

  const glareBackground = useMotionTemplate`radial-gradient(circle 420px at ${glareX}% ${glareY}%, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 75%)`;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || shouldReduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  }, [shouldReduceMotion, mouseX, mouseY]);

  const handleMouseEnter = useCallback(() => {
    if (!shouldReduceMotion) isHovered.set(1);
  }, [shouldReduceMotion, isHovered]);

  const handleMouseLeave = useCallback(() => {
    isHovered.set(0);
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [isHovered, mouseX, mouseY]);

  if (shouldReduceMotion) {
    return <div className={cn("relative", className)} {...props}>{children}</div>;
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className={cn("relative", className)}
      {...props}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale: cardScale,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative will-change-transform rounded-[inherit]"
      >
        {children}

        {glare && (
          <motion.div
            style={{
              opacity: glareOpacity,
              background: glareBackground,
              transform: "translateZ(85px)",
            }}
            className="absolute inset-0 pointer-events-none rounded-[inherit] z-50 mix-blend-overlay"
          />
        )}
      </motion.div>
    </div>
  );
});

// --- 3. Z-AXIS SPATIAL LAYER (ELEVATION) ---
interface FloatZProps {
  children: React.ReactNode;
  z?: number;
  hoverZDelta?: number;
  className?: string;
}

export const FloatZ = memo(function FloatZ({
  children,
  z = 30,
  hoverZDelta = 12,
  className,
}: FloatZProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={false}
      style={{
        transform: `translateZ(${z}px)`,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        transform: `translateZ(${z + hoverZDelta}px)`,
      }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
});

// --- 4. SCROLL VELOCITY-LINKED 3D PARALLAX ---
interface Scroll3DParallaxProps {
  children: React.ReactNode;
  maxPitch?: number;
  className?: string;
}

export function Scroll3DParallax({
  children,
  maxPitch = 6,
  className,
}: Scroll3DParallaxProps) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const rawPitch = useTransform(scrollVelocity, [-2000, 2000], [-maxPitch, maxPitch]);
  const pitchSpring = useSpring(rawPitch, { stiffness: 220, damping: 30 });

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      style={{
        rotateX: pitchSpring,
        transformStyle: "preserve-3d",
      }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

// --- 5. TACTILE 3D SPRING BUTTON ---
import type { HTMLMotionProps } from "framer-motion";

export interface Tactile3DButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  children: React.ReactNode;
  depth?: number;
  className?: string;
}

export function Tactile3DButton({
  children,
  depth = 3,
  className,
  ...props
}: Tactile3DButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ y: depth, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 450, damping: 18 }}
      style={{
        boxShadow: `0 ${depth}px 0 rgba(2, 12, 43, 0.22)`,
      }}
      className={cn(
        "relative rounded-xl font-semibold transition-colors active:shadow-none",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

