---
title: Places
description: Campus places, discovery, availability semantics, and provenance.
---

Campus places are stable public destinations such as dining, study, library, service, recreation, amenity, and facility locations. Place responses are designed to preserve uncertainty rather than guess current operating state.

## List and search

```http
GET https://api.gapwise.ca/v1/places
```

Supported filters include:

| Parameter | Meaning |
| --- | --- |
| `q` | Search place names and amenities |
| `kind` | Place kind such as `library`, `study`, or `dining` |
| `building` | Canonical/recognized building filter |
| `openNow` | `open`, `closed`, or `unknown` |
| `limit` | Page size, 1–100; defaults to 50 |
| `offset` | Zero-based collection offset |

Example:

```bash
curl 'https://api.gapwise.ca/v1/places?building=HM&kind=library&openNow=unknown'
```

Filters combine with AND semantics. The collection order and pagination are deterministic for the same data version and filter set.

## Resolve one place

```http
GET https://api.gapwise.ca/v1/places/:placeId
```

Place IDs are canonical lowercase identifiers. Example:

```bash
curl https://api.gapwise.ca/v1/places/utm-library
```

An invalid identifier returns `invalid_identifier`; a valid but unknown ID returns `place_not_found`.

## Availability is three-state

`availability.state` is one of:

- `open` — current published hours and provenance support an open evaluation.
- `closed` — current published hours and provenance support a closed evaluation.
- `unknown` — Gapwise cannot support either claim from the current source-backed data.

**Unknown is not closed.** Preserve this distinction in user interfaces, filters, analytics, and automation.

Availability is evaluated against `America/Toronto` where source data permits. Place responses include time-dependent state and use `Cache-Control: no-store`, so applications should not persist a current `open`/`closed` evaluation as if it were timeless.

## Provenance

A place can expose source and verification information for its underlying facts. Provenance statuses may include verified, stale, inferred, user-reported, unavailable, or unknown. Those statuses are contract information, not decoration.

Use `meta.dataVersion` to identify the campus state snapshot and `meta.generatedAt` where present. `X-Request-Id` matches `meta.requestId`.
