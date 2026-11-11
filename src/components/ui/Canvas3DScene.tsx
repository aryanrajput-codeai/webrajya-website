"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

interface Node3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  vx: number;
  vy: number;
  vz: number;
  color: string;
  radius: number;
}

export function Canvas3DScene({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    // Track dimensions
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Device Pixel Ratio for crisp retina screens
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Mouse coordinates in normalized [-1, 1] range
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    // Brand color palette
    const colors = [
      "rgba(229, 129, 69, 0.75)",  // POS Orange
      "rgba(2, 12, 43, 0.65)",     // WebRajya Navy
      "rgba(14, 165, 233, 0.75)",  // MyGarage Sky Blue
      "rgba(229, 129, 69, 0.45)",  // Subtle Orange
      "rgba(2, 12, 43, 0.4)",      // Subtle Navy
    ];

    // Generate 3D sphere / constellation points
    const nodeCount = width < 768 ? 26 : 48;
    const nodes: Node3D[] = [];
    const spreadX = width * 0.45;
    const spreadY = height * 0.4;
    const spreadZ = 350;

    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const rad = 140 + Math.random() * 220;

      const x = rad * Math.sin(phi) * Math.cos(theta);
      const y = (rad * Math.sin(phi) * Math.sin(theta)) * 0.65;
      const z = rad * Math.cos(phi);

      nodes.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.3,
        color: colors[i % colors.length],
        radius: 2 + Math.random() * 2.8,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = x * 0.7;
      targetRotX = -y * 0.6;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);

    // Pause rendering when canvas is outside viewport for 0% CPU consumption
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        lastTime = performance.now();
        loop();
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    });
    observer.observe(canvas);

    let lastTime = performance.now();
    const fov = 420;

    const loop = () => {
      if (!isVisible) return;

      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // Smooth camera interpolation towards target mouse angle
      const ease = shouldReduceMotion ? 0.02 : 0.05;
      currentRotX += (targetRotX - currentRotX) * ease;
      currentRotY += (targetRotY - currentRotY) * ease;

      // Constant ambient auto-rotation
      const autoRot = shouldReduceMotion ? 0 : now * 0.0003;
      const rotY = currentRotY + autoRot;
      const rotX = currentRotX;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const centerX = width / 2;
      const centerY = height / 2;

      // Project 3D points to 2D screen coordinates
      const projectedNodes: { px: number; py: number; pz: number; scale: number; color: string; radius: number }[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Animate floating jitter
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        // Soft rebound inside boundary box
        if (Math.abs(node.x - node.baseX) > 40) node.vx *= -1;
        if (Math.abs(node.y - node.baseY) > 30) node.vy *= -1;
        if (Math.abs(node.z - node.baseZ) > 40) node.vz *= -1;

        // Apply 3D Euler rotations (Y then X)
        const x1 = node.x * cosY + node.z * sinY;
        const z1 = -node.x * sinY + node.z * cosY;

        const y2 = node.y * cosX - z1 * sinX;
        const z2 = node.y * sinX + z1 * cosX;

        // Perspective divide
        const distance = z2 + fov;
        if (distance > 10) {
          const scale = fov / distance;
          const px = centerX + x1 * scale;
          const py = centerY + y2 * scale;

          projectedNodes.push({
            px,
            py,
            pz: z2,
            scale,
            color: node.color,
            radius: node.radius * scale,
          });
        }
      }

      // Sort back-to-front for proper depth occlusion
      projectedNodes.sort((a, b) => b.pz - a.pz);

      // Draw 3D connection lines between nearby nodes
      ctx.lineWidth = 0.85;
      for (let i = 0; i < projectedNodes.length; i++) {
        const n1 = projectedNodes[i];
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n2 = projectedNodes[j];
          const dx = n1.px - n2.px;
          const dy = n1.py - n2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 95 * Math.min(n1.scale, n2.scale);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.28 * Math.min(n1.scale, 1.2);
            ctx.strokeStyle = `rgba(2, 12, 43, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(n1.px, n1.py);
            ctx.lineTo(n2.px, n2.py);
            ctx.stroke();
          }
        }
      }

      // Draw projected 3D glowing nodes
      for (let i = 0; i < projectedNodes.length; i++) {
        const n = projectedNodes[i];
        ctx.fillStyle = n.color;
        ctx.beginPath();
        ctx.arc(n.px, n.py, Math.max(1, n.radius), 0, Math.PI * 2);
        ctx.fill();

        // Subtle ambient specular glow halo
        if (n.radius > 2.2) {
          ctx.fillStyle = n.color.replace(/[\d.]+\)$/g, "0.15)");
          ctx.beginPath();
          ctx.arc(n.px, n.py, n.radius * 2.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className || "absolute inset-0 pointer-events-none w-full h-full -z-10"}
    />
  );
}
