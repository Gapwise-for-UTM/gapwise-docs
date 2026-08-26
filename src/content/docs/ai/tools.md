---
title: Tools
description: How to identify the tools currently registered by Gapwise AI.
---

The production tool list is the set returned by MCP tool discovery for an authorized connection. A tool implemented in source is **not live** unless the production handler registers it.

## Availability policy

| Status | Meaning |
| --- | --- |
| Registered/live | Returned by current production MCP discovery and callable with the required delegation |
| Experimental | Implemented or discussed in source but not registered; do not build against it |
| Deprecated/non-live | Retained only for history or migration; not an available capability |

This page does not publish a static catalog because the current production registration source could not be independently verified for this documentation revision. That omission is deliberate: tool names, arguments, permissions, and result shapes must not be guessed from architectural prose or an unregistered implementation.

After connecting, inspect the client's discovered schema for each tool's:

- exact name and purpose;
- input arguments and required fields;
- read or write behavior;
- required delegation;
- result structure and structured errors.

Treat a discovered write tool as sensitive even when its change appears small. Confirm the intended object, current revision, and user-visible effect before calling it. See [Permissions & writes](/ai/permissions/).

For implementation status, consult the [gapwise-ai source](https://github.com/andrewmuratov/gapwise-ai) and verify registration—not merely definition—against the deployed service.
