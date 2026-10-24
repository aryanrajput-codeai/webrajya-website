"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion, Variants, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// --- ANIMATION CONFIGURATION ---
const defaultSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  mass: 0.8,
};

// --- FADE IN PRIMITIVE ---
export interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  viewportOnce?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 24,
  className,
  viewportOnce = true,
  ...props
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion || direction === "none") return { x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const initial = {
    opacity: 0,
    ...getInitialPosition(),
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: viewportOnce, margin: "-40px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0.2 }
          : { ...defaultSpring, delay, duration }
      }
      className={className}
      {...(props as HTMLMotionProps<"div">)}
    >
      {children}
    </motion.div>
  );
}

// --- STAGGER CONTAINER & ITEM ---
export interface StaggerContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  viewportOnce?: boolean;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.05,
  className,
  viewportOnce = true,
  ...props
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, margin: "-50px" }}
      variants={containerVariants}
      className={className}
      {...(props as HTMLMotionProps<"div">)}
    >
      {children}
    </motion.div>
  );
}

export interface StaggerItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  distance?: number;
  className?: string;
}

export function StaggerItem({
  children,
  distance = 20,
  className,
  ...props
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.2 }
        : defaultSpring,
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={className}
      {...(props as HTMLMotionProps<"div">)}
    >
      {children}
    </motion.div>
  );
}

// --- BENTO BOX CARD WITH TACTILE SPRING LIFT ---
export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function BentoCard({
  children,
  className,
  glow = false,
  ...props
}: BentoCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -4,
              scale: 1.01,
              transition: { duration: 0.25, ease: "easeOut" },
            }
      }
      whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
      className={cn(
        "relative rounded-3xl transition-shadow duration-300",
        glow && "hover:shadow-[0_20px_40px_-15px_rgba(229,129,69,0.2)]",
        className
      )}
      {...(props as HTMLMotionProps<"div">)}
    >
      {children}
    </motion.div>
  );
}

// --- MAGNETIC BUTTON / PILL WRAPPER ---
export interface MagneticProps {
  children: React.ReactNode;
  className?: string;
}

export function MagneticHover({ children, className }: MagneticProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}

// --- BREATHING AMBIENT GLOW BACKDROP ---
export function AmbientGlowMesh({
  className,
  color = "primary",
}: {
  className?: string;
  color?: "primary" | "pos" | "invoice";
}) {
  const shouldReduceMotion = useReducedMotion();

  const colorMap = {
    primary: "rgba(229, 129, 69, 0.12)",
    pos: "rgba(229, 129, 69, 0.15)",
    invoice: "rgba(2, 12, 43, 0.12)",
  };

  return (
    <div
      className={cn(
        "absolute pointer-events-none -z-10 overflow-hidden",
        className
      )}
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.15, 1],
                opacity: [0.6, 0.9, 0.6],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colorMap[color]} 0%, transparent 70%)`,
        }}
        className="w-[600px] h-[600px] blur-3xl rounded-full"
      />
    </div>
  );
}
