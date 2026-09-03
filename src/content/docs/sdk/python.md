---
title: Python SDK
description: Use the typed synchronous and asynchronous Gapwise Python clients.
---

The official Python package lives in `sdk/python` in the Gapwise repository, targets the canonical v1 API, and is published on PyPI as `gapwise`.

> Registry status: `gapwise==0.1.0` is live on PyPI and was verified from a clean Python 3.14 virtual environment against the production Gapwise API.

## Install

```bash
python -m pip install gapwise
```

To pin the first release:

```bash
python -m pip install gapwise==0.1.0
```

Python 3.11 or newer is required.

## Synchronous client

```py
from gapwise import Gapwise

with Gapwise() as gapwise:
    buildings = gapwise.buildings.list(q="instructional")
    route = gapwise.routes.calculate(
        from_building="MN",
        to_building="IB",
    )
```

## Async client

```py
from gapwise import AsyncGapwise

async with AsyncGapwise() as gapwise:
    places = await gapwise.places.list(building="HM")
    plan = await gapwise.gaps.plan(
        from_building="MN",
        to_building="IB",
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

## Release and provenance

Python releases are published from reviewed `python-v<version>` Git tags through GitHub Actions and PyPI Trusted Publishing with short-lived OIDC credentials. No long-lived PyPI publishing token is required in the repository.

See [Errors](/api/errors/) and [Rate limits](/api/rate-limits/).
