# Tracking Plan v1 - MCMV Indaiatuba

Status: DRAFT
Type: analytics documentation only

## Objective

Define the first analytics contract before implementing PostHog events.

This document does not implement code, does not create dashboards, and does not change runtime behavior.

## Main funnel

1. landing_viewed
2. cta_simulation_clicked
3. simulation_started
4. buyer_profile_submitted
5. simulation_completed
6. lead_submitted
7. whatsapp_clicked
8. handoff_sent_to_broker

## MVP events

- landing_viewed
- cta_simulation_clicked
- simulation_started
- buyer_profile_submitted
- simulation_completed
- lead_submitted
- whatsapp_clicked
- handoff_sent_to_broker

## Future events

- property_search_submitted
- filter_applied
- zero_results_shown
- property_results_viewed
- property_card_clicked
- property_detail_viewed
- broker_feedback_received
- agent_question_asked
- form_abandoned
- field_error_shown

## Buyer properties

- city
- neighborhood_interest
- income_range
- down_payment_range
- fgts_intent
- urgency
- mcmv_eligibility_estimated
- lead_temperature
- lead_score

## Guardrails

- Do not treat analytics as credit approval.
- WhatsApp enters after qualification in the main funnel.
- Prefer grouped ranges over raw sensitive data when possible.

## Next task

MCMV-ANALYTICS-003 - implement tracking helper and MVP events.
