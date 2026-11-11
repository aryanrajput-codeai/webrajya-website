/**
 * Lightweight Analytics Tracking Abstraction
 * 
 * Tracks conversion actions, captures UTM parameters from incoming campaigns,
 * flyers, QR codes, and WhatsApp referrals.
 * PRIVACY: Never log or transmit sensitive credentials.
 */

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  src?: string; // e.g. pamphlet, card, poster, qr
  referrer?: string;
}

export type AnalyticsEventName =
  | "demo_form_submit"
  | "whatsapp_click"
  | "call_click"
  | "pricing_view"
  | "plan_click"
  | "app_waitlist_submit"
  | "demo_page_view"
  | "demo_business_selected"
  | "demo_product_selected"
  | "demo_form_started"
  | "demo_whatsapp_opened"
  | "demo_whatsapp_open_failed"
  | "launch_offer_popup_shown"
  | "launch_offer_popup_dismissed"
  | "launch_offer_popup_claimed";

/**
 * Extracts campaign tracking parameters from the current URL search parameters.
 */
export function getUtmParams(): UtmParams {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get("utm_source") || undefined,
      utm_medium: urlParams.get("utm_medium") || undefined,
      utm_campaign: urlParams.get("utm_campaign") || undefined,
      utm_term: urlParams.get("utm_term") || undefined,
      utm_content: urlParams.get("utm_content") || undefined,
      src: urlParams.get("src") || undefined,
      referrer: document.referrer || undefined
    };
  } catch {
    return {};
  }
}

/**
 * Dispatches an analytics event to Google Analytics (GA4) or console in dev mode.
 */
export function trackEvent(eventName: AnalyticsEventName, eventData: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const utmData = getUtmParams();
  const payload = {
    ...utmData,
    ...eventData,
    timestamp: new Date().toISOString()
  };

  // Dispatch to GA4 gtag if loaded
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const win = window as any;
  if (typeof win.gtag === "function") {
    win.gtag("event", eventName, payload);
  }

  // Developer logging
  if (process.env.NODE_ENV !== "production") {
    console.log(`[WebRajya Analytics] ${eventName}:`, payload);
  }
}

// Backward-compatible alias for existing demo wizard
export function trackDemoEvent(event: AnalyticsEventName, properties?: Record<string, unknown>) {
  trackEvent(event, properties);
}
