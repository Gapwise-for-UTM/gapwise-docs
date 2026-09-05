---
title: Provenance and uncertainty
description: How Gapwise distinguishes source facts, reviewed derivations, inferred geometry, and unknown data.
---

Campus software becomes unsafe when it turns missing evidence into confident coordinates. Gapwise Data preserves where information came from and what kind of claim it represents.

## Evidence classes

A useful mental model is:

1. **Source-linked fact** — directly tied to an upstream or observed source.
2. **Reviewed derivation** — transformed from known sources using a documented process.
3. **Inference** — useful but not directly verified; must remain visibly lower-confidence.
4. **Unknown / unavailable** — evidence is insufficient, so the system does not invent an answer.

Routing and accessibility consumers must preserve these distinctions.

## Routing confidence

Gapwise route responses can distinguish verified, mixed, inferred/approximate, and unavailable states. UI or integrations should not strip those states merely to produce a cleaner-looking result.

Step-free routing is intentionally conservative: when verified accessible evidence is unavailable, Gapwise should fail closed rather than claim a route is accessible.

## Source identifiers and attribution

Where upstream source identifiers exist, Gapwise keeps them attached to the relevant record or geometry. OpenStreetMap-derived records remain subject to OpenStreetMap attribution and ODbL obligations; publishing them in a Gapwise repository does not convert upstream data to MIT-licensed original work.

## Corrections

If you find a campus fact that is stale or wrong, contribute the correction to `gapwise-data` with the strongest evidence available. Product code should not silently patch a canonical campus fact inside `gapwise`, mobile, or AI.
