"use client";

import { useEffect } from "react";
import { type AnalyticsEvent, trackEvent } from "../lib/analytics";

export function AnalyticsEvents() {
  useEffect(() => {
    trackEvent("landing_viewed", {
      page_type: "landing"
    });

    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>("[data-analytics-event]")
        : null;

      if (!target) {
        return;
      }

      const analyticsEvent = target.dataset.analyticsEvent as AnalyticsEvent | undefined;

      if (!analyticsEvent) {
        return;
      }

      const href = target instanceof HTMLAnchorElement ? target.href : undefined;
      const label = target.textContent?.trim() || undefined;

      trackEvent(analyticsEvent, {
        page_type: "landing",
        cta_label: label,
        cta_href: href,
        cta_type: target.dataset.analyticsCtaType
      });
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
