---
title: Distribution and versioning
description: How raw Gapwise campus data is published without becoming a runtime dependency.
---

Gapwise separates **canonical ownership**, **public distribution**, and **runtime consumption**.

## Raw first-party distribution

The current canonical channel is published under:

```text
https://data.gapwise.ca/datasets/utm/latest/
```

A production build generates:

```text
https://data.gapwise.ca/datasets/utm/latest/manifest.json
```

The manifest lists each distributed artifact with its byte size, SHA-256 digest, and first-party URL. This makes raw consumers independent of GitHub's raw-content URLs and provides an integrity boundary for mirrors and caches.

Example:

```js
const campus = await fetch(
  'https://data.gapwise.ca/datasets/utm/latest/buildings.geojson'
).then((response) => response.json());
```

## Why Gapwise itself does not live-fetch it

The student web app, routing engine, and public API must keep functioning if the Data portal is unavailable. Core therefore pins and validates a snapshot during development/build rather than fetching `data.gapwise.ca` for every student request.

This gives us both:

- one official source of campus facts; and
- no new production single point of failure.

## `latest` versus immutable releases

`latest` is the human-friendly current channel. Consumers that require strict reproducibility should pin a checksum or an immutable dataset release once one is published. Do not assume that `latest` will remain byte-identical forever.

The public API uses its own versioned compatibility contract. A data artifact changing does not automatically imply an API breaking change.

## API versus raw data

Prefer the API/SDK when you want Gapwise semantics such as building resolution, route calculation, warnings, confidence, or gap feasibility. Prefer raw distribution when you are doing research, visualization, provenance inspection, validation, or building your own derivation pipeline.
