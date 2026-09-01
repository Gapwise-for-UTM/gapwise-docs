---
title: Gapwise Status
description: Current operational status and incident-reporting information for Gapwise services.
---

## Current status

**No active incident is currently reported.**

| Service | Status |
| --- | --- |
| Gapwise web app (`gapwise.ca`) | Operational |
| Public API (`api.gapwise.ca`) | Operational |
| Authentication and sync | Operational |
| Gapwise AI (`ai.gapwise.ca`) | Operational |
| Developer documentation (`docs.gapwise.ca`) | Operational |
| Transactional auth email (`auth.gapwise.ca`) | Operational |

These statuses are maintained by the Gapwise operator from current production checks. This page is **not** a continuous synthetic monitor, historical uptime record, or contractual SLA, and an “Operational” entry should not be read as proof that no brief or unobserved interruption occurred.

This page is intentionally hosted with the documentation deployment rather than the main Gapwise application, so it remains a separate place to publish incident information when an app deployment is unhealthy.

## If something looks broken

- Retry once after a short delay for transient upstream or network failures.
- Check this page for an incident note before repeatedly retrying writes or imports.
- Report user-facing problems to [support@gapwise.ca](mailto:support@gapwise.ca).
- Report suspected vulnerabilities privately to [security@gapwise.ca](mailto:security@gapwise.ca).

## Scope

The status page covers Gapwise-owned application surfaces and their direct production dependencies. University of Toronto systems and other upstream services are outside Gapwise's control; when an upstream dependency is degraded, Gapwise will distinguish that from a Gapwise-originated incident when practical.

_Last reviewed: September 1, 2026._
