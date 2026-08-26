<div align="center">

<img src="public/logo-mark-white.svg" width="116" alt="Gapwise deer mark" />

# Gapwise Developer Documentation

### Build on the deterministic campus layer behind Gapwise.

**Official documentation for the Gapwise public UTM campus-intelligence API, OpenAPI contract, and JavaScript/TypeScript and Python SDKs.**

[![Live Docs](https://img.shields.io/badge/Live_Docs-docs.gapwise.ca-111111?style=for-the-badge&logo=vercel&logoColor=white)](https://docs.gapwise.ca)
[![OpenAPI 3.1](https://img.shields.io/badge/OpenAPI-3.1-6BA539?style=for-the-badge&logo=openapiinitiative&logoColor=white)](https://api.gapwise.ca/openapi.json)
[![Gapwise](https://img.shields.io/badge/Gapwise-gapwise.ca-111111?style=for-the-badge)](https://gapwise.ca/developers)

<sub>Astro · Starlight · Vercel</sub>

<br />

**[Documentation](https://docs.gapwise.ca)** · **[Developer hub](https://gapwise.ca/developers)** · **[API](https://api.gapwise.ca/v1)** · **[OpenAPI](https://api.gapwise.ca/openapi.json)** · **[Main repository](https://github.com/andrewmuratov/gapwise)**

</div>

---

## What this repository is

This repository is the public documentation surface for the Gapwise developer platform. It explains the same versioned API contract implemented in [`andrewmuratov/gapwise`](https://github.com/andrewmuratov/gapwise) rather than defining a separate protocol or data model.

The canonical API base URL is:

```text
https://api.gapwise.ca/v1
```

The authoritative machine-readable contract is:

```text
https://api.gapwise.ca/openapi.json
```

The public API exposes campus intelligence only. It does not expose student timetables, accounts, friends, private sync state, credentials, or precise live location.

---

## Documentation map

| Area | Covers |
| --- | --- |
| **Start** | Platform overview and quickstart |
| **SDKs** | JavaScript/TypeScript and Python clients |
| **API** | Buildings, places, routing, gap planning, errors, and rate-limit behavior |
| **Guides** | Integration recipes and common workflows |
| **AI & MCP** | AI-client connection, delegation, tools, permissions, privacy, and compatibility |
| **Platform** | Provenance, uncertainty, privacy, versioning, and changelog |

The docs deliberately preserve uncertainty. Unknown campus facts remain unknown rather than being rewritten as confident guesses, and routing/accessibility limitations are documented as part of the contract.

---

## Brand

The documentation uses the canonical Gapwise deer geometry from the main repository with separate presentation assets:

- `public/logo-mark-white.svg` — clean white README hero mark;
- `public/favicon.svg` — canonical Gapwise blue (`#4EA7FE`) for Starlight/site favicon branding.

Both assets use the same mirrored deer paths as the main Gapwise mark with no outline, stroke, morphology filter, or rendering workaround. `npm run verify:brand` checks the global favicon configuration, canonical geometry, intended colors, README asset reference, and absence of seam-producing SVG effects.

---

## Run locally

Requires Node.js 22 or newer.

```bash
git clone https://github.com/andrewmuratov/gapwise-docs.git
cd gapwise-docs
npm install
npm run check
npm run build
npm run dev
```

Useful commands:

```bash
npm run verify:brand
npm run check
npm run build
npm run preview
```

---

## Source-of-truth rules

- OpenAPI 3.1 is authoritative for the HTTP contract.
- The main Gapwise repository is authoritative for implementation behavior and SDK source.
- Documentation examples must match the released client signatures.
- Public v1 is unauthenticated and must never imply access to private student data.
- The docs must not invent a fixed global quota; clients should handle `429` defensively.
- Provenance, freshness, and uncertainty should remain visible wherever they affect interpretation.

SDK source is production-validated in the main repository. Registry availability should be verified before telling developers that `npm install @gapwise/sdk` or `pip install gapwise` is publicly available.

---

## Deployment

`main` is the production documentation branch and deploys to **[docs.gapwise.ca](https://docs.gapwise.ca)** through Vercel.

Keep documentation changes focused and prefer a single validated commit or pull request for related edits so production deployments remain intentional.
