---
title: API overview
description: The public Gapwise campus intelligence API.
---

Gapwise exposes public UTM campus primitives over HTTPS. Responses are designed to preserve provenance, verification state, and uncertainty instead of fabricating missing facts.

## Production preview endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `https://gapwise.ca/api/utm-buildings` | List canonical UTM buildings |
| `GET` | `https://gapwise.ca/api/utm-building?q=MN` | Resolve one building |
| `GET` | `https://gapwise.ca/api/utm-places` | List known campus places |
| `GET` | `https://gapwise.ca/api/utm-place?id=utm-library` | Resolve one place |
| `POST` | `https://gapwise.ca/api/utm-route` | Calculate a deterministic route |
| `POST` | `https://gapwise.ca/api/utm-gap-plan` | Assess a route-aware schedule gap |

The stable versioned API will live at `api.gapwise.ca/v1` after the v1 contract is finalized.

## OpenAPI

The current machine-readable contract is published at `https://gapwise.ca/openapi.json`.
