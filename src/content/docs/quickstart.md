---
title: Developer quickstart
description: Choose the public Gapwise API/SDK surface or the permissioned Gapwise AI/MCP integration.
---

Gapwise has **two developer surfaces with different privacy boundaries**. Start by choosing the one your integration actually needs.

## Choose your integration

### Public API & SDKs

Use the public platform when you need canonical campus data or deterministic campus calculations across supported universities without private student context.

- No API key or Gapwise account is required.
- Covers universities, campuses, buildings, places, routing, and route-aware planning for an explicit free interval you provide.
- Does **not** expose student timetables, accounts, friends, private sync state, credentials, or precise live location.
- Official SDKs are published for JavaScript/TypeScript and Python.

**[Start the public API quickstart ↓](#public-api-quickstart)** · [API overview](/api/) · [SDKs](/sdk/javascript/)

### Gapwise AI & MCP

Use Gapwise AI when a compatible remote MCP client needs deterministic public campus intelligence across 11 supported universities, **explicitly delegated private Gapwise context**, or bounded personal actions.

- Remote MCP resource: `https://ai.gapwise.ca/api/mcp`
- OAuth protected-resource metadata: `https://ai.gapwise.ca/.well-known/oauth-protected-resource`
- Twelve stateless public campus tools do not require private Gapwise account context.
- Thirteen private tools require explicit delegation and the relevant permissions (twelve reads and one write).
- Private access is permissioned, minimized, revision-aware, and revocable.
- Academic timetable meetings are read-only through the AI boundary.
- The live service currently exposes **25 tools total: 12 public + 13 private**.

**[Open the AI & MCP guide →](/ai/)** · **[Connect an AI client →](/ai/connect/)** · [Review privacy & security](/ai/privacy/)

:::note[Named-client release status]
The remote MCP service is live, but these docs do not yet claim broad verified support for ChatGPT, Claude, or another named client. End-to-end production OAuth/read/write/revoke validation is still a release gate. See [Client compatibility](/ai/compatibility/).
:::

## Public API quickstart

Gapwise's canonical public API requires no API key. The production base URL is `https://api.gapwise.ca/v1`.

### Inspect API capabilities

```bash
curl https://api.gapwise.ca/v1
```

The root response reports the API version, campus data versions, supported capabilities, authentication mode, and privacy boundary.

### Discover supported universities & campuses

```bash
curl https://api.gapwise.ca/v1/universities
curl https://api.gapwise.ca/v1/campuses
```

Gapwise supports 11 Canadian universities and 13 campus models. Query parameters `university` (default `uoft`) and `campus` (default `utm`) scope building and routing calls.

### List campus buildings

List buildings for Carleton University:

```bash
curl 'https://api.gapwise.ca/v1/buildings?university=carleton&limit=10'
```

Or query UTM (default):

```bash
curl 'https://api.gapwise.ca/v1/buildings?q=instructional&category=academic'
```

Collections return a deterministic page in `data` and pagination metadata in `meta.pagination`. Use `limit` and `offset` to page through results.

### Find campus places

```bash
curl 'https://api.gapwise.ca/v1/places?building=HM&openNow=unknown'
```

Availability is explicitly `open`, `closed`, or `unknown`. Never treat `unknown` as `closed`.

### Calculate a route

Calculate a route at Carleton University (from Tory Building to Mackenzie Building):

```bash
curl -X POST https://api.gapwise.ca/v1/routes \
  -H 'content-type: application/json' \
  -d '{"from":"TB","to":"ML","university":"carleton"}'
```

Route results are building-level campus routes. Inspect the returned status, accuracy, verification state, and warnings instead of assuming every requested route is fully verified.

### Plan a gap

```bash
curl -X POST https://api.gapwise.ca/v1/gaps/plan \
  -H 'content-type: application/json' \
  -d '{"from":"MN","to":"IB","term":"Fall","weekday":"Wednesday","startTime":660,"endTime":780}'
```

Gap planning evaluates only the explicit free interval you send. The public API does not retrieve or accept a private student timetable.

### Response envelope

Successful responses use:

```json
{
  "data": {},
  "meta": {
    "apiVersion": "v1",
    "requestId": "..."
  }
}
```

Errors use:

```json
{
  "error": {
    "code": "building_not_found",
    "message": "Campus building not found."
  },
  "meta": {
    "apiVersion": "v1",
    "requestId": "..."
  }
}
```

See [Errors](/api/errors/) for the canonical failure model and [Rate limits](/api/rate-limits/) for retry guidance.

### SDKs

Both first-party SDK implementations are published and target the same canonical v1 contract. The JavaScript/TypeScript implementation is distributed through npm and JSR; Python is distributed through PyPI.

JavaScript / TypeScript (npm):

```bash
npm install @gapwise/sdk@0.1.2
```

JavaScript / TypeScript (JSR / Deno):

```bash
deno add jsr:@gapwise/sdk@0.1.2
```

Python:

```bash
python -m pip install gapwise==0.1.1
```

The Python release was independently clean-installed and exercised against the production API. Registry publishing uses trusted OIDC workflows rather than long-lived release tokens where supported.

- [JavaScript & TypeScript SDK](/sdk/javascript/)
- [Python SDK](/sdk/python/)

For common integration patterns, continue to [Recipes](/guides/recipes/).

The authoritative machine-readable contract is `https://api.gapwise.ca/openapi.json`.
