---
title: Gapwise Data
description: Canonical UTM campus data, schemas, provenance, distribution, and reuse.
---

Gapwise Data is the canonical public source for the UTM campus facts and geometry used across the Gapwise ecosystem.

- **Portal:** `https://data.gapwise.ca`
- **Canonical repository:** `andrewmuratov/gapwise-data`
- **Raw distribution:** `https://data.gapwise.ca/datasets/utm/latest/`
- **Distribution manifest:** `https://data.gapwise.ca/datasets/utm/latest/manifest.json`
- **Stable application API:** `https://api.gapwise.ca/v1`

## Source of truth

`gapwise-data` owns public campus facts: building identity, coordinates and footprints, entrances, routing graph inputs, available indoor data, provenance, evidence, uncertainty, and generated data audits.

The main `gapwise` repository owns deterministic behavior: route calculation, timetable semantics, gap planning, API orchestration, SDK contracts, and product presentation.

> **Gapwise Data knows what UTM is. Gapwise knows what to do with that knowledge.**

## Does the app fetch Data at runtime?

No. Gapwise web and API builds contain a tested snapshot of the canonical dataset. That means an outage of `data.gapwise.ca` or GitHub does not make a student's campus routing fail.

The relationship is:

```text
gapwise-data canonical tree
        ↓ validate / pin
Gapwise build snapshot
        ↓
web app + API + deterministic engine
```

External developers can use the first-party Data distribution directly when raw artifacts are appropriate.

## Choose the right surface

| Need | Use |
| --- | --- |
| Stable building/routing/gap semantics | Public API or official SDK |
| Raw GeoJSON / graph / audit artifacts | Gapwise Data distribution |
| Provenance and uncertainty explanation | These docs + Data portal |
| Contribute a campus fact or correction | `gapwise-data` repository |
| Permissioned private student context | Gapwise AI / MCP |

Start with [Dataset catalog](/data/datasets/) or [Distribution and versioning](/data/distribution/).
