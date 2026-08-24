---
title: Gap planning
description: Route-aware deterministic assessment of an explicitly supplied free interval.
---

Gapwise gap planning assesses whether a free interval is practically usable after accounting for travel, transition time, and explicit planning preferences. The public API never retrieves a student's private timetable.

## Plan an explicit gap

```http
POST https://api.gapwise.ca/v1/gaps/plan
Content-Type: application/json
```

Example:

```json
{
  "from": "MN",
  "to": "IB",
  "term": "Fall",
  "weekday": "Wednesday",
  "startTime": 660,
  "endTime": 780
}
```

`startTime` and `endTime` are explicit minute-of-day boundaries for the interval being assessed. Your application is responsible for deciding which interval to send.

## Preferences

The request may include `routePreferences` and `gapPreferences`. Route preferences use the same deterministic routing controls as `POST /v1/routes`. Gap preferences can express setup/pack-up time, meal-window assumptions, willingness to leave campus, home-commute assumptions, and risk tolerance where supported by the contract.

Only documented top-level and nested fields are accepted. Unknown fields fail validation instead of being ignored.

## Interpretation

Gap planning is deterministic for the same inputs and data version. Preserve the result's route coverage, confidence/assessment information, warnings, and uncertainty fields in your own application.

A recommendation is constrained by the public campus facts Gapwise can support. Unknown or unavailable routing/accessibility evidence remains unknown or unavailable; the planner does not fabricate certainty to produce a more convenient answer.

## Privacy boundary

The v1 endpoint accepts only the explicit interval and boundary buildings you provide. It does not accept an uploaded timetable, read a Gapwise session, query private calendar data, inspect friends, or access precise live location.

## Failure handling

Validation errors are not retryable. For transient failures or HTTP `429`, use bounded retries and honor `Retry-After` when supplied. Canonical errors contain a stable error code and request ID.
