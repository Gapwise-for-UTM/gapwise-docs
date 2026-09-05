---
title: Contributing campus data
description: How to correct or extend canonical UTM campus facts without forking product truth.
---

Campus-data changes belong in [`Gapwise-for-UTM/gapwise-data`](https://github.com/Gapwise-for-UTM/gapwise-data), not in a downstream consumer.

## Good contributions

Useful contributions include:

- corrected building names, aliases, or stable codes;
- source-backed coordinates or footprint improvements;
- verified entrance/accessibility evidence;
- routing graph corrections;
- provenance metadata and source identifiers;
- tests or validators that catch invalid campus facts;
- documentation of uncertainty or known limitations.

## Change workflow

1. Change the canonical data or data-production tooling in `gapwise-data`.
2. Run the repository validator and integrity checks.
3. Let the core-consumer contract verify that current Gapwise can still compile and route against the candidate dataset.
4. Merge Data.
5. Sync/pin the validated snapshot into core through the supported synchronization path.
6. Let normal core CI validate product behavior before production deployment.

Do not make equivalent edits independently in web, mobile, AI, or documentation repositories.

## Evidence expectations

Prefer official/source-linked evidence when available. If a useful value is inferred, mark it as inferred rather than upgrading it to verified simply because it appears plausible on the map.

For questions about how an artifact is represented or distributed, see [Dataset catalog](/data/datasets/) and [Distribution and versioning](/data/distribution/).
