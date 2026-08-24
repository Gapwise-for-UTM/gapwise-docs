---
title: Changelog
description: Developer-platform changes that affect Gapwise API and SDK consumers.
---

## 2026-08-24 — v1 developer platform

Gapwise established the canonical public developer surface at `https://api.gapwise.ca/v1`.

### Added

- API discovery at `GET /v1`.
- Canonical building collection and detail resources.
- Campus place collection and detail resources with explicit `open`, `closed`, and `unknown` availability.
- Deterministic route calculation at `POST /v1/routes`.
- Deterministic explicit-interval gap planning at `POST /v1/gaps/plan`.
- Consistent `{ data, meta }` success envelopes.
- Structured nested error envelopes with API version and request ID.
- Deterministic `limit`/`offset` pagination for collections.
- Authoritative OpenAPI 3.1 contract.
- Release-ready JavaScript/TypeScript and Python SDK source at version `0.1.0`.
- CI coverage for SDK build, typing, tests, package contents, and consumer installs.

### Compatibility

Legacy `/api/utm-*` routes remain compatibility aliases and retain their legacy response shapes. New integrations should use v1.

### Operations

The first production deployment exposed a Node ESM import-resolution failure in the v1 serverless dependency graph. A follow-up production hotfix changed the affected runtime import to an explicit `.js` specifier and was validated through the full release CI before deployment.

### Rate limiting

The public API does not advertise a fabricated fixed global quota. Platform protection can still produce `429` responses, and clients should use bounded backoff for transient failures.

## SDK registry status

SDK registry publication is tracked separately from the API deployment. Documentation only treats `@gapwise/sdk` or `gapwise` as installable after the corresponding package is visible on npm or PyPI.
