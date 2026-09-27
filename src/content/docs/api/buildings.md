---
title: Buildings
description: Canonical building identity, discovery, pagination, and provenance across supported universities.
---

The v1 building resources expose stable Gapwise identities for recognized campus buildings across 11 supported universities. Identity/search coverage does not imply that every entrance, indoor path, floor, or accessibility detail has been surveyed.

## List and search

```http
GET https://api.gapwise.ca/v1/buildings
```

Supported query parameters:

| Parameter | Meaning |
| --- | --- |
| `university` | Target university identifier (e.g. `carleton`, `uoft`, `tmu`, `mcmaster`, etc.; defaults to `uoft`) |
| `campus` | Target campus identifier (e.g. `carleton`, `utm`, `st-george`, `scarborough`; defaults to `utm`) |
| `q` | Case-insensitive substring search across canonical code, name, and aliases |
| `category` | `academic`, `residence`, or `facility` |
| `limit` | Page size, 1–100; defaults to 50 |
| `offset` | Zero-based collection offset |

Example for Carleton University:

```bash
curl 'https://api.gapwise.ca/v1/buildings?university=carleton&limit=20'
```

Example for U of T Mississauga (default):

```bash
curl 'https://api.gapwise.ca/v1/buildings?q=instructional&category=academic&limit=20&offset=0'
```

Search normalizes Unicode before matching. Filters combine deterministically, and unknown or repeated query parameters return `invalid_query` rather than being silently ignored.

## Resolve one building

```http
GET https://api.gapwise.ca/v1/buildings/:building
```

The identifier may be a canonical Gapwise code, exact canonical name, or recognized alias. Ambiguous identifiers return HTTP `409` with error code `ambiguous_building` and candidate codes in `error.details`. Supply `university` (and optionally `campus`) as a query parameter if querying a non-default institution.

Carleton University example:

```bash
curl 'https://api.gapwise.ca/v1/buildings/ML?university=carleton'
```

UTM example:

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
