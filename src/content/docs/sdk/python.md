---
title: Python SDK
description: Use the typed synchronous and asynchronous Gapwise Python clients.
---

The official Python package lives in `sdk/python` in the Gapwise repository and targets the canonical v1 API.

> Registry status: the source is release-ready at version `0.1.0`. Use the pip install command below only after `gapwise` is visible on PyPI.

## Install

```bash
python -m pip install gapwise
```

Python 3.11 or newer is required.

## Synchronous client

```py
from gapwise import Gapwise

with Gapwise() as gapwise:
    buildings = gapwise.buildings.list(q="instructional")
    route = gapwise.routes.calculate(from_="MN", to="IB")
```

## Async client

```py
from gapwise import AsyncGapwise

async with AsyncGapwise() as gapwise:
    places = await gapwise.places.list(building="HM")
    plan = await gapwise.gaps.plan(
        from_="MN",
        to="IB",
        term="Fall",
        weekday="Wednesday",
        start_time=660,
        end_time=780,
    )
```

The sync and async clients expose equivalent resources and typed result models.

## Typing

The wheel includes `py.typed`, so type checkers can consume the package's inline annotations. Public models use concrete types and literal values for bounded fields such as route status and availability state rather than falling back to unstructured dictionaries.

## HTTP behavior

The client uses `httpx` and supports custom base URLs, timeouts, headers, and transport behavior. Context managers close owned clients cleanly; applications that manage a longer-lived client can keep a Gapwise instance alive for reuse.

## Errors

API failures raise typed Gapwise exceptions with the status code, API error code, message, optional details, and request ID. Do not retry validation failures. For transient platform failures or a `429`, use bounded exponential backoff and respect any response guidance available at the time.

See [Errors](/api/errors/) and [Rate limits](/api/rate-limits/).
