---
title: Errors
description: Understand Gapwise v1 error envelopes, status codes, and request IDs.
---

Every canonical v1 error uses the same envelope:

```json
{
  "error": {
    "code": "invalid_query",
    "message": "Unknown query parameter: example.",
    "details": {}
  },
  "meta": {
    "apiVersion": "v1",
    "requestId": "..."
  }
}
```

`details` is optional. `meta.apiVersion` and `meta.requestId` are present on canonical API errors.

## Common client errors

| HTTP | Example code | Meaning |
| --- | --- | --- |
| `400` | `invalid_query` | Query parameters are duplicated, unknown, malformed, or outside their allowed range. |
| `400` | `invalid_json` | A request body is not valid JSON. |
| `400` | `invalid_request` | The JSON value or fields do not match the accepted request shape. |
| `400` | `invalid_identifier` | A required building or place identifier is missing or invalid. |
| `404` | `building_not_found` | No canonical building matches the identifier. |
| `409` | `ambiguous_building` | The supplied building identifier maps to multiple candidates. Use a canonical code. |
| `405` | `method_not_allowed` | The resource expects a different HTTP method. |
| `413` | `request_too_large` | The request body exceeds the bounded public API body size. |
| `415` | `unsupported_media_type` | A POST body was not sent as `application/json`. |

Routing and gap-planning errors can also carry codes from the deterministic campus engines. Treat `error.code` as the stable programmatic signal and `message` as developer-facing text.

## Server and upstream errors

A canonical internal failure returns an `internal_error`. If an internal campus adapter returns malformed data, the API can return `invalid_upstream_response` with a gateway-style status.

Do not automatically retry deterministic validation errors. A retry is reasonable only for transient platform failures, network failures, or documented throttling.

## Request IDs

The API also returns the request ID in the `x-request-id` header. When reporting an API problem, include the request ID, endpoint, approximate timestamp, and sanitized request shape. Never attach private student/account data; the public API does not need it.
