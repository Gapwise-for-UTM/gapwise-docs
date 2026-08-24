---
title: API overview
description: The public Gapwise campus intelligence API v1.
---

Gapwise exposes public UTM campus primitives over HTTPS. The canonical production base URL is `https://api.gapwise.ca/v1`. The API is intentionally unauthenticated and preserves provenance, verification state, and uncertainty instead of fabricating missing facts.

## Canonical v1 endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/v1` | API capabilities, versions, and privacy boundary |
| `GET` | `/v1/buildings` | Search and list canonical UTM buildings |
| `GET` | `/v1/buildings/:building` | Resolve one building by code, exact name, or recognized alias |
| `GET` | `/v1/places` | Search and list campus places |
| `GET` | `/v1/places/:placeId` | Resolve one canonical place |
| `POST` | `/v1/routes` | Calculate a deterministic building-level route |
| `POST` | `/v1/gaps/plan` | Assess a route-aware explicit free interval |

All canonical endpoints live under `https://api.gapwise.ca`.

## Envelopes

Successful v1 responses use `{ data, meta }`. Collection responses add `meta.pagination`; `nextOffset` is `null` on the final page.

Errors use a stable machine-readable code and developer-readable message:

```json
{
  "error": {
    "code": "invalid_query",
    "message": "Unknown query parameter: example."
  },
  "meta": {
    "apiVersion": "v1",
    "requestId": "..."
  }
}
```

`X-Request-Id` matches `meta.requestId` for support and diagnostics.

## Strict inputs

Unknown or repeated query parameters are rejected rather than silently ignored. JSON request bodies are limited to 16 KiB. Method errors include `Allow`. Browser clients may use the API directly through CORS.

## Pagination

Collection endpoints use zero-based `offset` and `limit`. `limit` defaults to 50 and is capped at 100. Source ordering is deterministic for the same data version and filters.

## Abuse protection and retries

Gapwise relies on Vercel platform-level traffic and firewall protection rather than advertising an invented globally exact application quota. Clients should handle HTTP `429`; honor `Retry-After` when supplied, otherwise use bounded exponential backoff with jitter. Do not retry validation errors.

## OpenAPI

The authoritative OpenAPI 3.1 contract is published at `https://api.gapwise.ca/openapi.json` and names `https://api.gapwise.ca/v1` as the canonical server.

## Legacy compatibility

Existing `https://gapwise.ca/api/utm-*` endpoints remain compatibility aliases with their original flat response shapes. New integrations should use v1. Legacy compatibility does not change the canonical v1 envelope or versioning rules.
