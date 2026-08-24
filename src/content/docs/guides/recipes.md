---
title: Recipes
description: Practical patterns for building on the Gapwise public API.
---

These recipes use the canonical API directly so they work regardless of language or SDK availability.

## Search buildings for a picker

```js
const url = new URL("https://api.gapwise.ca/v1/buildings");
url.searchParams.set("q", input);
url.searchParams.set("limit", "10");

const response = await fetch(url);
const { data, meta } = await response.json();
```

Use canonical building codes as stored identifiers after the user chooses a result. Names and aliases are useful for discovery; codes are better for durable requests.

## Page through a collection

```js
let offset = 0;
const limit = 50;
const buildings = [];

for (;;) {
  const response = await fetch(
    `https://api.gapwise.ca/v1/buildings?limit=${limit}&offset=${offset}`,
  );
  const { data, meta } = await response.json();
  buildings.push(...data);
  if (meta.pagination.nextOffset === null) break;
  offset = meta.pagination.nextOffset;
}
```

Follow `nextOffset`; do not infer the next page from array length alone.

## Show availability without lying

```js
function availabilityLabel(place) {
  switch (place.availability.state) {
    case "open":
      return "Open";
    case "closed":
      return "Closed";
    default:
      return "Hours unknown";
  }
}
```

Never collapse `unknown` into `closed`.

## Compare route modes

```js
async function route(mode) {
  const response = await fetch("https://api.gapwise.ca/v1/routes", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ from: "MN", to: "IB", mode }),
  });
  return response.json();
}

const fastest = await route("fastest");
const stepFree = await route("step-free");
```

Present returned accuracy and warning information with the result. A route mode is a preference over the available graph, not a promise that every desired edge is verified.

## Plan only a known free interval

```js
const response = await fetch("https://api.gapwise.ca/v1/gaps/plan", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    from: "MN",
    to: "IB",
    term: "Fall",
    weekday: "Wednesday",
    startTime: 660,
    endTime: 780,
  }),
});
```

If your app has a timetable, calculate the free interval locally and send only the interval needed for the plan. The public Gapwise API does not need the rest of the schedule.

## Log useful failures

```js
if (!response.ok) {
  const body = await response.json();
  console.error({
    status: response.status,
    code: body.error?.code,
    requestId: body.meta?.requestId,
  });
}
```

Keep private user data out of diagnostics. Endpoint, status, structured code, request ID, and a sanitized request shape are usually enough to investigate a public API failure.
