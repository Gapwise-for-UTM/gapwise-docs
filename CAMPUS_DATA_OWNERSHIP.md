# Campus data ownership

Canonical public campus facts and geometry across all 11 supported Canadian universities (13 campus models) live in `GapwiseHQ/data`. University datasets live under their canonical identifiers (e.g. `universities/carleton`, `universities/queens`, etc.); UTM's reviewed entrance/routing dataset lives under `data/utm`, and UTSG and UTSC identities and geometry live in their respective campus directories.

`gapwise` consumes a validated build-time snapshot and remains authoritative for deterministic routing/gap-planning behavior, the public API/OpenAPI contract, SDK semantics, and product presentation. `docs` documents released contracts; it must not become an independent source of campus facts or product behavior.

## Documentation rules

- Link raw campus data, provenance, confidence/evidence, geometry, entrances, and routing graph sources to `data`.
- Document routing behavior, API response semantics, OpenAPI, and SDK behavior from released `gapwise` contracts.
- Do not copy a campus dataset into this repository merely to make documentation convenient.
- Do not imply that `data.gapwise.ca` must be reachable for the product/API to route; core uses a vendored build-time snapshot.
- Preserve the distinction between canonical **facts** (`data`) and deterministic **calculations/contracts** (`gapwise`).

The machine-readable ecosystem contract in `gapwise.ecosystem.json` records the same ownership boundary and canonical GitHub organization.
