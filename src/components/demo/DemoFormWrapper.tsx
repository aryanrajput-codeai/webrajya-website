"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { DemoForm } from "./DemoForm";

export function DemoFormWrapper() {
  const searchParams = useSearchParams();
  const rawProduct = searchParams.get("product");
  const rawPlan = searchParams.get("plan");

  const initialProduct = rawProduct === "invoice" ? "invoice" : rawProduct === "pos" ? "pos" : undefined;
  const initialPlan =
    rawPlan === "monthly" || rawPlan === "yearly" || rawPlan === "lifetime" || rawPlan === "not_sure"
      ? rawPlan
      : undefined;

  return <DemoForm initialProduct={initialProduct} initialPlan={initialPlan} />;
}
