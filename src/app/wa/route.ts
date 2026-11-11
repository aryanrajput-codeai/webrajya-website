import { NextRequest, NextResponse } from "next/server";
import { LAUNCH_CONFIG } from "@/config/launch";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const src = searchParams.get("src") || "direct";

  const message = encodeURIComponent(
    `Hi WebRajya, I scanned your ${src} in Nagpur and want to enquire about WebRajya Invoice.`
  );

  const destination = `https://wa.me/${LAUNCH_CONFIG.WHATSAPP}?text=${message}`;

  return NextResponse.redirect(destination, { status: 307 });
}
