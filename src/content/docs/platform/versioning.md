---
title: Versioning
description: API, campus-data, and SDK compatibility policy.
---

The canonical HTTP contract is Gapwise API `v1` at `https://api.gapwise.ca/v1`. Breaking HTTP changes require a new API version rather than silently changing the meaning or type of an existing v1 field.

## What can change within v1

Non-breaking v1 evolution may include:

- additive resources or operations;
- new optional response fields;
- new optional request fields;
- new stable error codes;
- additional enum values only where the schema/documentation requires clients to tolerate extension.

Clients should ignore response fields they do not need unless the OpenAPI contract says otherwise.

## What requires a new API version

Examples of breaking changes include:

- removing a documented field;
- changing a field's documented type or meaning;
- making an optional request field required;
- changing an existing operation in a way that invalidates conforming v1 clients.

## API version and data version are separate

`meta.apiVersion` identifies the HTTP contract. `meta.dataVersion` identifies the relevant campus dataset or snapshot. Campus facts can be refreshed without creating a new HTTP API version.

Where present, `meta.generatedAt` describes snapshot generation time. Do not infer freshness solely from the SDK package version.

## SDK versions are separate too

The JavaScript/TypeScript package `@gapwise/sdk` and Python package `gapwise` use their own semantic versions. Package `0.1.0` targets the v1 contract, but future SDK patch/minor releases can improve ergonomics, typing, compatibility, or diagnostics without changing API v1.

## Legacy endpoints

The older `https://gapwise.ca/api/utm-*` routes remain compatibility aliases and retain their legacy flat envelopes. They are not the versioning authority for new integrations. New applications should use `api.gapwise.ca/v1` and the OpenAPI 3.1 contract.

## Migration discipline

Before upgrading an SDK, read its changelog and test against your supported runtime. Before depending on a newly documented response field, make sure your application behaves safely if older cached data does not contain it.
