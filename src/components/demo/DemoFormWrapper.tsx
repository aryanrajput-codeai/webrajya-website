"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { DemoForm } from "./DemoForm";

export function DemoFormWrapper() {
  const searchParams = useSearchParams();
  const rawProduct = searchParams.get("product");
  const initialProduct = rawProduct === "invoice" ? "invoice" : rawProduct === "pos" ? "pos" : undefined;

  return <DemoForm initialProduct={initialProduct} />;
}
