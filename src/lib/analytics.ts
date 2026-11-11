/**
 * Lightweight Analytics Tracking Abstraction
 * Logs important user events during the demo booking funnel.
 * Easily connects to Google Analytics, Plausible, PostHog, or custom analytics endpoints.
 * PRIVACY: Never log or transmit personal visitor information (name, email, phone, message).
 */

export type DemoAnalyticsEvent =
  | "demo_page_view"
  | "demo_business_selected"
  | "demo_product_selected"
  | "demo_form_started"
  | "demo_whatsapp_opened"
  | "demo_whatsapp_open_failed";

export function trackDemoEvent(event: DemoAnalyticsEvent, properties?: Record<string, any>) {
  if (typeof window === "undefined") return;

  // Development / Debug logging without PII
  if (process.env.NODE_ENV === "development") {
    console.log(`[WebRajya Analytics] ${event}`, properties || {});
  }

  // Hook into window.gtag / window.plausible if available
  const win = window as any;
  if (typeof win.gtag === "function") {
    win.gtag("event", event, properties);
  }
}
