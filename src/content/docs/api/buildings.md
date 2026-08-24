---
title: Buildings
description: Canonical UTM building identity and aliases.
---

Gapwise maintains canonical UTM building identities used consistently by routing and campus-state features.

Use `GET /api/utm-buildings` to list buildings and `GET /api/utm-building?q=MN` to resolve a building by a recognized code or alias.

Building data may include aliases, routing coverage, entrance counts, accessibility metadata, and source provenance. Treat explicit unknown or unverified fields as meaningful states rather than missing decoration.
