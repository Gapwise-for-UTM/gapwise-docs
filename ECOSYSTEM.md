# Gapwise ecosystem integration

`gapwise-docs` is the canonical public documentation surface for the six-repository Gapwise ecosystem. It describes released behavior and data owned elsewhere; it must not become an independent source of product semantics or campus facts.

All six canonical repositories are owned by the **Gapwise for UTM** GitHub organization (`Gapwise-for-UTM`). Andrew Muratov remains the creator and primary maintainer.

## Owning repositories

| Repository | Authoritative for |
| --- | --- |
| `Gapwise-for-UTM/gapwise` | web/PWA behavior, student state, deterministic timetable/gap/routing algorithms, public API v1, OpenAPI, TypeScript + Python SDK source and release workflow, map/product presentation |
| `Gapwise-for-UTM/gapwise-mobile` | native iOS/Android implementation and mobile distribution behavior |
| `Gapwise-for-UTM/gapwise-ai` | OAuth/MCP delegation, tool schemas, permissions, bounded mutations, AI compatibility evidence |
| `Gapwise-for-UTM/gapwise-data` | **canonical public UTM campus facts and geometry**, entrances, routing graph data, provenance, schemas, evidence, attribution, validation, and reuse |
| `Gapwise-for-UTM/gapwise-status` | operational health and incident communication |

`gapwise` vendors a validated build-time mirror of `gapwise-data/data/utm` at `src/data/utm`. That local path preserves existing imports and deterministic deployment behavior; it is not a second campus-data authority and does not create a runtime dependency on `data.gapwise.ca` or GitHub.

## Current developer-platform state

- GitHub organization: `https://github.com/Gapwise-for-UTM`
- Public API: `https://api.gapwise.ca/v1`
- OpenAPI 3.1: `https://api.gapwise.ca/openapi.json`
- TypeScript SDK: `@gapwise/sdk`
  - npm `0.1.1` is published with provenance
  - JSR `0.1.1` is published with provenance through GitHub Actions OIDC
  - one TypeScript implementation targets Node, Bun, and Deno portability rather than separate runtime SDKs
- Python SDK: `gapwise==0.1.0` is published on PyPI through Trusted Publishing
- Data: `https://data.gapwise.ca`
- AI/MCP: `https://ai.gapwise.ca/api/mcp`
- Status: `https://status.gapwise.ca`

TypeScript and Python are equal first-party SDKs. Documentation should provide comparable conceptual coverage, examples, error/uncertainty guidance, and release-state accuracy for both.

## Documentation rules

1. OpenAPI + core implementation own public HTTP behavior and deterministic calculations.
2. `gapwise-data` owns raw public UTM campus facts, geometry, routing graph data, provenance, and evidence.
3. SDK docs follow released package/source behavior and never invent methods or types.
4. Registry claims are evidence-based: reserved/configured is not the same as published.
5. Runtime claims are evidence-based: Node/Bun/Deno support should reflect CI/release verification, not assumptions about ESM portability.
6. Private AI behavior is documented from `gapwise-ai` and remains separate from the public campus SDKs.
7. Data provenance/uncertainty statements link back to `gapwise-data` and preserve unknown/inferred states.
8. Operations/status guidance links to `gapwise-status`; docs do not duplicate live incident state.
9. Mobile behavior links to `gapwise-mobile` when platform-specific implementation/distribution matters.
10. Documentation must not imply that core routing performs a runtime fetch from the data portal; deployed core contains the tested snapshot.

## Change-impact rule

A docs change that alters a contract or data claim should name the owning repository/evidence. A source change in any owning repository should trigger a docs review when it changes a public API, SDK, data schema, AI tool/permission, mobile integration requirement, or operational surface.

The goal is connected documentation without duplicated authority.
