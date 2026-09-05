---
title: Ecosystem architecture
description: How the six Gapwise repositories, public SDKs, data, mobile, AI, docs, and status surfaces fit together.
---

Gapwise is one product ecosystem across six first-party repositories. Repository boundaries separate deployment, trust, and ownership; they do not create parallel sources of truth.

## Repository ownership

| Repository | Owns |
| --- | --- |
| `andrewmuratov/gapwise` | web/PWA behavior, canonical student-state semantics, deterministic timetable/gap/routing logic, public API v1, OpenAPI, and both official SDK implementations |
| `andrewmuratov/gapwise-mobile` | native iOS/Android UX, device integration, secure mobile persistence, and mobile distribution |
| `andrewmuratov/gapwise-ai` | OAuth/MCP delegation, permission checks, minimized delegated snapshots, and bounded AI actions |
| `andrewmuratov/gapwise-data` | campus-data provenance, evidence, schemas, attribution, transformations, and reuse guidance |
| `andrewmuratov/gapwise-docs` | canonical public documentation of released first-party contracts |
| `andrewmuratov/gapwise-status` | independently deployed service health and incident communication |

## Source-of-truth flow

```text
campus evidence / canonical data
            |
            v
        gapwise core
 deterministic product semantics
       /      |       \
      /       |        \
 student    public     mobile
   web       API       client
              |
        +-----+-----+
        |           |
        v           v
 TypeScript SDK   Python SDK
   npm + JSR        PyPI

private student state
        |
        | explicit minimized delegation
        v
  gapwise-ai OAuth/MCP

released contracts ---> gapwise-docs
provenance/evidence --> gapwise-data
public service health -> gapwise-status
```

## SDK distribution model

Gapwise maintains **two SDK implementations**, not one SDK per runtime:

- TypeScript: `@gapwise/sdk`
  - npm `0.1.1` is published with provenance;
  - JSR `0.1.1` is published with provenance through the core repository's GitHub Actions OIDC publisher;
  - Node, Bun, and Deno are runtime/portability targets for this same implementation.
- Python: `gapwise==0.1.0`
  - published on PyPI through Trusted Publishing;
  - synchronous and asynchronous clients expose the same public v1 resources.

TypeScript and Python are equal first-party SDKs. Language-appropriate naming is expected, but capabilities, bounded enum values, uncertainty semantics, errors, and examples should stay aligned with OpenAPI v1.

## Cross-repository rules

1. OpenAPI and the core implementation own public HTTP behavior.
2. Mobile consumes canonical semantics instead of reimplementing timetable/routing truth.
3. AI receives explicit delegated context and does not become an authoritative timetable engine.
4. Data explains where campus facts came from and preserves fact/inference/uncertainty distinctions.
5. Docs describe released behavior and link to owning repositories rather than inventing contracts.
6. Status reports operational evidence and does not infer package/product truth from uptime.
7. Registry, runtime, app-store, and AI-client compatibility claims require external evidence.
8. A meaningful contract change should be reviewed for downstream effects in every affected repository.

## Canonical public surfaces

- App: `https://gapwise.ca`
- API: `https://api.gapwise.ca/v1`
- OpenAPI: `https://api.gapwise.ca/openapi.json`
- Docs: `https://docs.gapwise.ca`
- Data: `https://data.gapwise.ca`
- AI/MCP: `https://ai.gapwise.ca/api/mcp`
- Status: `https://status.gapwise.ca`

The public API and SDKs expose campus intelligence only. Private student context remains behind separate authentication/delegation boundaries.

## Change-impact checklist

Before calling an ecosystem change complete, check whether it affects:

- OpenAPI/public API behavior;
- TypeScript SDK code/types/examples and npm/JSR distribution;
- Python SDK code/types/examples and PyPI distribution;
- native mobile semantics or adapters;
- data schemas/provenance/uncertainty;
- AI delegated schemas/permissions/tools;
- public documentation;
- status probes, canonical endpoints, or incident terminology;
- privacy, security, accessibility, attribution, or source-of-truth statements.

Connected does not mean duplicated: every surface should know how it relates to the others while preserving clear ownership.
