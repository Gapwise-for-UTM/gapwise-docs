---
title: Rate limits
description: Design responsibly for Gapwise's public serverless API without assuming a fake fixed quota.
---

Gapwise does not currently publish a fixed per-minute or per-day request quota for the public v1 API.

The API runs on managed serverless infrastructure and is protected by platform-level abuse and availability controls. Those controls can change independently of the API contract, so documentation does not invent an exact global number that the service cannot guarantee.

## What clients should expect

- Normal interactive and development usage should keep requests bounded and cache reusable public data.
- A request can receive `429 Too Many Requests` when platform protection or future service controls require it.
- Transient `5xx` responses are also possible during infrastructure or upstream failures.
- Do not build correctness around an assumed hidden quota.

## Recommended retry policy

For `429` or transient `5xx` responses, retry only idempotent requests automatically. Use exponential backoff with jitter and a low retry ceiling. For POST route or gap calculations, only retry when your application can safely repeat the same deterministic request.

A reasonable client pattern is:

1. wait roughly 0.5–1 second after the first transient failure;
2. increase the delay exponentially;
3. add random jitter so many clients do not retry at the same instant;
4. stop after a small number of attempts and surface the failure.

Never retry `400`, `404`, `405`, `409`, `413`, or `415` errors without changing the request.

## Cache what is cacheable

Building identity and provenance change slowly and may be cached by the service. Place availability is more time-sensitive. Route and gap calculations should be cached by your application only when the inputs and data-version assumptions make reuse correct.

## Bulk use

If you need sustained high-volume access, prefer the versioned public campus snapshot for data that does not require a calculation, and avoid repeatedly polling unchanged resources. The public API is designed as a developer surface, not as an unrestricted scraping endpoint.
