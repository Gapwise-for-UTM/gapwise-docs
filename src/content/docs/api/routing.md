---
title: Routing
description: Deterministic UTM building-to-building routing and uncertainty semantics.
---

Gapwise v1 exposes deterministic building-level campus routing. It uses the project's bundled campus graph and source-backed routing facts; it does not ask an LLM to invent paths.

## Calculate a route

```http
POST https://api.gapwise.ca/v1/routes
Content-Type: application/json
```

Minimal request:

```json
{
  "from": "MN",
  "to": "IB"
}
```

Optional route preferences can select a supported mode and tune walking/transition assumptions:

```json
{
  "from": "MN",
  "to": "IB",
  "preferences": {
    "mode": "prefer-indoor",
    "walkingSpeedMps": 1.2,
    "transitionBufferMinutes": 2
  }
}
```

Supported modes are `fastest`, `prefer-indoor`, and `step-free`.

## Interpret the result conservatively

A successful HTTP response means the API processed the request; it does not guarantee that every requested route can be represented with verified accessibility or indoor coverage. Always inspect the route result's status, accuracy, route-verification state, warnings, and related provenance fields.

For step-free routing, an unavailable result is safer than an invented accessible route. Applications must not convert unavailable, mixed, or inferred routing evidence into a verified accessibility claim.

Gapwise currently describes building-to-building campus routing, not exact room-to-room navigation.

## Validation

Only documented request fields are accepted. Unknown nested route-preference fields return a structured validation error. JSON bodies are capped at 16 KiB.

Building identifiers are resolved through the same canonical Gapwise building identity system used by the building resources. Invalid, ambiguous, or unknown identifiers return structured v1 errors rather than silently falling back to another destination.

## Errors and retries

Do not retry validation failures. For transient service or platform failures, use bounded retries; if HTTP `429` includes `Retry-After`, honor it. Every canonical error includes `meta.requestId`, mirrored in `X-Request-Id`.
