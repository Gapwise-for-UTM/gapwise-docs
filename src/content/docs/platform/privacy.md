---
title: Privacy
description: Privacy boundaries for the Gapwise public developer platform.
---

The public Gapwise v1 API is intentionally separated from private student and account state. It is designed to be useful without authentication and without reading a Gapwise user's session.

## What v1 exposes

The public API exposes source-backed campus intelligence: canonical buildings, public campus places, deterministic building-level routing, and route-aware assessment of a free interval explicitly supplied by the caller.

## What v1 does not expose

Public developer resources do not expose or query:

- student timetables, course schedules tied to an account, or uploaded timetable files;
- student records or institutional credentials;
- Gapwise accounts, authentication tokens, private preferences, or encrypted sync state;
- friend graphs, private overlap data, or social state;
- crowd-reporter identity or internal moderation state;
- precise live location or location history;
- service-role keys, Supabase internals, or other privileged infrastructure state;
- private AI-delegation context.

The gap-planning endpoint accepts an explicit interval and boundary buildings. It does not retrieve a timetable to find that interval for you.

## Timetable import

The student application may parse an ACORN `.ics` timetable locally for end-user features. That file is outside the public v1 developer API and is not required to call any canonical public endpoint.

## Browser access

Because v1 is unauthenticated public campus data, CORS permits direct browser use. This does not expand the API's data boundary: browser clients receive the same public contract as server clients.

## Future surfaces

If Gapwise later offers authenticated developer resources, they must be documented as a separate trust boundary with explicit authorization, data-minimization, abuse, and revocation semantics. Do not assume the unauthenticated v1 contract grants access to any private feature.
