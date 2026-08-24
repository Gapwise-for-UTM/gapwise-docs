---
title: Versioning
description: API and SDK compatibility policy.
---

Gapwise is preparing a stable `v1` HTTP API. Breaking HTTP changes will be introduced behind a new API version instead of silently changing existing contracts.

The current `gapwise.ca/api/...` endpoints are a public preview surface. The canonical stable API will use `api.gapwise.ca/v1/...` once the v1 contract is finalized.

Official JavaScript and Python SDKs will use semantic versioning and will document the API versions they support.
