---
title: Buildings
description: Canonical UTM building identity, discovery, pagination, and provenance.
---

The v1 building resources expose stable Gapwise identities for recognized UTM buildings. Identity/search coverage does not imply that every entrance, indoor path, floor, or accessibility detail has been surveyed.

## List and search

```http
GET https://api.gapwise.ca/v1/buildings
```

Supported query parameters:

| Parameter | Meaning |
| --- | --- |
| `q` | Case-insensitive substring search across canonical code, name, and aliases |
| `category` | `academic`, `residence`, or `facility` |
| `limit` | Page size, 1–100; defaults to 50 |
| `offset` | Zero-based collection offset |

Example:

```bash
curl 'https://api.gapwise.ca/v1/buildings?q=instructional&category=academic&limit=20&offset=0'
```

Search normalizes Unicode before matching. Filters combine deterministically, and unknown or repeated query parameters return `invalid_query` rather than being silently ignored.

## Resolve one building

```http
GET https://api.gapwise.ca/v1/buildings/:building
```

The identifier may be a canonical Gapwise code, exact canonical name, or recognized alias. Ambiguous identifiers return HTTP `409` with error code `ambiguous_building` and candidate codes in `error.details`.

```bash
curl https://api.gapwise.ca/v1/buildings/MN
```

## Response shape

A collection response uses the normal v1 envelope:

```json
{
  "data": [
    {
      "code": "MN",
      "name": "Maanjiwe nendamowinan",
      "category": "academic"
    }
  ],
  "meta": {
    "apiVersion": "v1",
    "dataVersion": "...",
    "requestId": "...",
    "pagination": {
      "limit": 50,
      "offset": 0,
      "count": 1,
      "total": 1,
      "nextOffset": null
    }
  }
}
```

Treat the example as illustrative; consume fields defined by the OpenAPI contract rather than hard-coding this reduced sample.

## Provenance and accessibility

Building facts carry conservative provenance/verification information where relevant. A field that is `unknown`, inferred, or unavailable is intentionally different from a verified fact. Do not upgrade uncertain accessibility data to verified in downstream applications.

Building metadata can be cached according to the response's `Cache-Control` header. `X-Request-Id` matches `meta.requestId`.
