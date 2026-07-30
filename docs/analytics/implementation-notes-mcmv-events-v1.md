# Implementation Notes - MCMV Events v1

Status: PR validation notes
Task: MCMV-ANALYTICS-003

## Implemented

- Safe analytics helper without new package dependencies.
- Client-side landing event component.
- `landing_viewed` event on landing page load.
- `cta_simulation_clicked` on the primary CTA currently available on the landing page.

## Not implemented in this PR

- simulation_started
- buyer_profile_submitted
- simulation_completed
- lead_submitted
- whatsapp_clicked
- handoff_sent_to_broker

These events depend on surfaces or flows that are not present in the current landing page implementation.

## Guardrails

- Analytics must not break the buyer or broker experience.
- No secrets were added.
- No PostHog package was installed.
- If `window.posthog` is not available, the helper silently no-ops or pushes to `dataLayer` when present.
- No dashboard was created.
- No runtime/deploy change was made manually.
