---
title: Places
description: Campus places, operating-state semantics, and provenance.
---

Campus places represent useful destinations such as dining, study, library, and recreation spaces.

Use `GET /api/utm-places` to list the current public place snapshot and `GET /api/utm-place?id=...` to resolve one place.

Operating hours and dynamic state are provenance-aware. If Gapwise cannot verify current hours, the API should report an unknown or unavailable state rather than assuming a place is closed.
