---
title: Client compatibility
description: Conservative support status for third-party MCP clients.
---

Protocol support is not the same as production verification. A client must support the remote protected-resource and authorization behavior used by Gapwise, and its complete connection flow must be tested before it is called verified.

## Current status

| Category | Status |
| --- | --- |
| Verified named clients | No named client is publicly verified in this documentation revision |
| Protocol-compatible / expected | Remote MCP clients that support protected-resource discovery and the required browser authorization flow; validation is pending |
| Not supported by this flow | Local-stdio-only clients, clients that require pasted credentials, or clients unable to complete protected-resource authorization |

This table deliberately does not claim verified support for ChatGPT, Claude, or another named product without current end-to-end production evidence. Product documentation and roadmap statements are not substitutes for that evidence.

Before relying on a client, test connection, tool discovery, a delegated read, refusal of an ungranted write, stale-revision handling, and behavior after revocation.
