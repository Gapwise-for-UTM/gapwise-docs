---
title: Accuracy & uncertainty
description: Interpret routing coverage, availability, verification, and unknown campus facts correctly.
---

Gapwise is designed to expose uncertainty instead of hiding it. A structurally valid response is not the same thing as a claim that every underlying campus fact is exact.

## Buildings and routing coverage

Canonical building identity can be known even when detailed routing geometry is incomplete. Building resources therefore expose coverage and provenance separately from identity.

Route results can describe states such as routed, approximate, same-building, or unavailable. Inspect the returned status, accuracy text, verification information, and warnings before presenting a route as verified.

A building-level route must not be presented as exact room-to-room indoor navigation unless the response explicitly supports that level of coverage.

## Accessibility

Accessibility can be `accessible`, `not_accessible`, or `unknown` at the relevant data layer. Missing evidence does not imply accessibility, and it does not imply inaccessibility.

For step-free routing, preserve warnings and coverage information in your UI. Do not remove uncertainty labels merely because a path was returned.

## Place availability

Place availability is one of:

- `open`
- `closed`
- `unknown`

`unknown` is a first-class state. It means Gapwise does not have sufficient current published hours to make an open/closed claim at the evaluation time.

## Provenance and freshness

Public resources can include source, verification, data-version, or generated-at information. Use those fields when a product decision depends on freshness or evidence quality.

The versioned API contract separates software/API versioning from campus-data versioning so a data refresh does not need to masquerade as a breaking API release.

## UI rule of thumb

When a Gapwise response contains an uncertainty signal, propagate it. The safest consumer behavior is to become more specific only when the response becomes more specific.
