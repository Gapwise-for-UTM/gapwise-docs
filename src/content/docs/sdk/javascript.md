---
title: JavaScript & TypeScript SDK
description: Use the typed Gapwise client in browsers and Node.js.
---

The official JavaScript/TypeScript client lives in `sdk/javascript` in the Gapwise repository and targets the canonical `https://api.gapwise.ca/v1` contract.

> Registry status: `@gapwise/sdk@0.1.0` is published on npm with provenance.

## Install

```bash
npm install @gapwise/sdk@0.1.0
```

## Create a client

```ts
import { Gapwise } from "@gapwise/sdk";

const gapwise = new Gapwise();
```

No API key is required for the public v1 campus surface.

## Buildings

```ts
const page = await gapwise.buildings.list({
  q: "instructional",
  category: "academic",
  limit: 20,
});

const mn = await gapwise.buildings.get("MN");
```

## Places

```ts
const places = await gapwise.places.list({
  building: "HM",
  openNow: "unknown",
});

const place = await gapwise.places.get("davis-food-court");
```

Availability is `open`, `closed`, or `unknown`. Treat `unknown` as an explicit state, not as `closed`.

## Routing

```ts
const route = await gapwise.routes.calculate({
  from: "MN",
  to: "IB",
  preferences: {
    mode: "fastest",
  },
});

console.log(route.status, route.accuracy);
```

Supported route modes are `fastest`, `prefer-indoor`, and `step-free`. Route preferences live under the `preferences` object. A successful HTTP request can still describe an approximate or unavailable route; inspect the route result instead of assuming complete coverage.

## Gap planning

```ts
const plan = await gapwise.gaps.plan({
  from: "MN",
  to: "IB",
  term: "Fall",
  weekday: "Wednesday",
  startTime: 660,
  endTime: 780,
});
```

The public client plans only the explicit interval you provide. It does not read a student timetable.

## Client options

The client supports a custom base URL, custom `fetch`, request timeout, request headers, and `AbortSignal`. This makes it usable in browsers, Node, tests, proxies, and controlled server environments without changing the API surface.

## Errors

Non-success responses throw typed Gapwise errors containing the HTTP status, structured API error code, human-readable message, optional details, and request ID. Preserve the request ID in logs or bug reports so a failing request can be correlated with server diagnostics.

See [Errors](/api/errors/) for the wire format and retry guidance.
