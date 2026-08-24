---
title: Quickstart
description: Make your first Gapwise API request.
---

Gapwise's public campus endpoints do not require an API key.

## List UTM buildings

```bash
curl https://gapwise.ca/api/utm-buildings
```

## Calculate a route

```bash
curl -X POST https://gapwise.ca/api/utm-route \
  -H 'content-type: application/json' \
  -d '{"from":"MN","to":"IB"}'
```

## Plan a gap

```bash
curl -X POST https://gapwise.ca/api/utm-gap-plan \
  -H 'content-type: application/json' \
  -d '{"from":"MN","to":"IB","term":"Fall","weekday":"Wednesday","startTime":660,"endTime":780}'
```

The canonical versioned API is being prepared at `api.gapwise.ca`. Until that contract is stabilized, these existing production endpoints remain the supported preview surface.

## JavaScript

A zero-dependency browser client is currently available from Gapwise itself. A published `@gapwise/sdk` package is planned after API v1 stabilization.

## Python

An official Python package is planned after API v1 stabilization. For now, use any HTTP client against the documented endpoints.
