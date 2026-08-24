---
title: Quickstart
description: Make your first Gapwise API request.
---

Gapwise's canonical public API requires no API key. The production base URL is `https://api.gapwise.ca/v1`.

## Inspect API capabilities

```bash
curl https://api.gapwise.ca/v1
```

The root response reports the API version, campus data versions, supported capabilities, authentication mode, and privacy boundary.

## List UTM buildings

```bash
curl 'https://api.gapwise.ca/v1/buildings?q=instructional&category=academic'
```

Collections return a deterministic page in `data` and pagination metadata in `meta.pagination`. Use `limit` and `offset` to page through results.

## Find campus places

```bash
curl 'https://api.gapwise.ca/v1/places?building=HM&openNow=unknown'
```

Availability is explicitly `open`, `closed`, or `unknown`. Never treat `unknown` as `closed`.

## Calculate a route

```bash
curl -X POST https://api.gapwise.ca/v1/routes \
  -H 'content-type: application/json' \
  -d '{"from":"MN","to":"IB"}'
```

Route results are building-level campus routes. Inspect the returned status, accuracy, verification state, and warnings instead of assuming every requested route is fully verified.

## Plan a gap

```bash
curl -X POST https://api.gapwise.ca/v1/gaps/plan \
  -H 'content-type: application/json' \
  -d '{"from":"MN","to":"IB","term":"Fall","weekday":"Wednesday","startTime":660,"endTime":780}'
```

Gap planning evaluates only the explicit free interval you send. The public API does not retrieve or accept a private student timetable.

## Response envelope

Successful responses use:

```json
{
  "data": {},
  "meta": {
    "apiVersion": "v1",
    "requestId": "..."
  }
}
```

Errors use:

```json
{
  "error": {
    "code": "building_not_found",
    "message": "Campus building not found."
  },
  "meta": {
    "apiVersion": "v1",
    "requestId": "..."
  }
}
```

See [Errors](/api/errors/) for the canonical failure model and [Rate limits](/api/rate-limits/) for retry guidance.

## SDKs

Official JavaScript/TypeScript and Python clients are implemented in the Gapwise repository and target version `0.1.0`. Registry publication is a separate release step; until a package is visible on its public registry, use the HTTPS examples above rather than assuming an install command is available.

- [JavaScript & TypeScript SDK](/sdk/javascript/)
- [Python SDK](/sdk/python/)

For common integration patterns, continue to [Recipes](/guides/recipes/).

The authoritative machine-readable contract is `https://api.gapwise.ca/openapi.json`.
