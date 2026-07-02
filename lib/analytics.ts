export type AnalyticsEvent =
  | "landing_viewed"
  | "cta_simulation_clicked"
  | "simulation_started"
  | "buyer_profile_submitted"
  | "simulation_completed"
  | "lead_submitted"
  | "whatsapp_clicked"
  | "handoff_sent_to_broker";

export type AnalyticsProperties = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    posthog?: {
      capture: (event: string, properties?: AnalyticsProperties) => void;
    };
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const defaultProperties = {
  project: "mcmv_indaiatuba",
  surface: "pre_venda_landing"
};

export function trackEvent(event: AnalyticsEvent, properties: AnalyticsProperties = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const payload = {
    ...defaultProperties,
    ...properties
  };

  try {
    if (window.posthog?.capture) {
      window.posthog.capture(event, payload);
      return;
    }

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event, ...payload });
    }
  } catch {
    // Analytics must never break the buyer or broker experience.
  }
}
