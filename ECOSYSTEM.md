# Gapwise ecosystem integration

`gapwise-docs` is the canonical public documentation surface for the six-repository Gapwise ecosystem. It describes released behavior owned elsewhere; it must not become an independent source of product semantics.

## Owning repositories

| Repository | Authoritative for |
| --- | --- |
| `andrewmuratov/gapwise` | web/PWA behavior, deterministic timetable/gap/routing semantics, public API v1, OpenAPI, TypeScript + Python SDK source and release workflow |
| `andrewmuratov/gapwise-mobile` | native iOS/Android implementation and mobile distribution behavior |
| `andrewmuratov/gapwise-ai` | OAuth/MCP delegation, tool schemas, permissions, bounded mutations, AI compatibility evidence |
| `andrewmuratov/gapwise-data` | campus-data provenance, schemas, evidence, transformations, attribution, reuse |
| `andrewmuratov/gapwise-status` | operational health and incident communication |

## Current developer-platform state

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

1. OpenAPI + core implementation own public HTTP behavior.
2. SDK docs follow released package/source behavior and never invent methods or types.
3. Registry claims are evidence-based: reserved/configured is not the same as published.
4. Runtime claims are evidence-based: Node/Bun/Deno support should reflect CI/release verification, not assumptions about ESM portability.
5. Private AI behavior is documented from `gapwise-ai` and remains separate from the public campus SDKs.
6. Data provenance/uncertainty statements link back to `gapwise-data` and preserve unknown/inferred states.
7. Operations/status guidance links to `gapwise-status`; docs do not duplicate live incident state.
8. Mobile behavior links to `gapwise-mobile` when platform-specific implementation/distribution matters.

## Change-impact rule

A docs change that alters a contract claim should name the owning repository/evidence. A source change in any owning repository should trigger a docs review when it changes a public API, SDK, data schema, AI tool/permission, mobile integration requirement, or operational surface.

The goal is connected documentation without duplicated authority.
