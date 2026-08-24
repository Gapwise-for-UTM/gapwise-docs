---
title: Data & provenance
description: How Gapwise represents source, freshness, verification, and uncertainty.
---

Gapwise treats provenance as product data. Public campus facts are not simply values: their source, freshness, verification status, and uncertainty determine how safely downstream applications can use them.

## Verification states

Depending on the resource, facts can carry states such as:

- `verified` — supported by the cited source at the recorded verification time.
- `stale` — known source-backed information whose freshness window has expired.
- `inferred` — derived conservatively from other supported facts rather than directly observed.
- `user-reported` — reported by a user or community source and not equivalent to an official verified fact.
- `unavailable` — Gapwise cannot currently obtain the fact from an appropriate source.
- `unknown` — the available data cannot support a positive or negative conclusion.

Never collapse those states into one generic truthy/falsy value.

## Absence is not a negative fact

A missing external source is not equivalent to a negative fact:

- unavailable hours do not mean a place is closed;
- unavailable accessibility evidence does not mean a route is accessible or inaccessible;
- a missing live operational feed does not prove normal operations;
- an unsurveyed entrance does not prove no entrance exists.

This distinction is especially important in automation and accessibility-sensitive interfaces.

## Version metadata

Canonical responses include `meta.dataVersion` for the relevant campus dataset. Some resources also include `meta.generatedAt` for the underlying snapshot. Use those fields to diagnose stale caches and to make reproducible decisions about source-backed data.

API version, campus data version, and SDK package versions are independent. Updating one does not imply that the others changed.

## Time-dependent facts

Place availability is evaluated only when published hours and their provenance support it. Because current availability changes with time, place responses use `Cache-Control: no-store` and expose `open`, `closed`, or `unknown` explicitly.

## Attribution

Where Gapwise incorporates third-party datasets, their attribution and licensing obligations remain applicable. For example, OpenStreetMap-derived data retains the relevant OpenStreetMap attribution and ODbL obligations. Gapwise source code is separately licensed under MIT unless a file or bundled dataset states otherwise.
