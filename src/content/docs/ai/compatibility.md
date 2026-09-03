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

The underlying Gapwise AI service now has defense-in-depth cross-account protections at both database and application boundaries: RLS/user ownership, approved OAuth user/client pairs, MCP audience-bound token validation, explicit application owner assertions on returned rows and owner-bearing inserts, and caller-bound encrypted delegated state. These controls reduce the chance that a database-policy or query regression could silently become a cross-account AI read.

That is still not the same as proving a named external client end to end. This table deliberately does not claim verified support for ChatGPT, Claude, or another named product without current production-equivalent evidence.

Before relying on a named client, the release matrix must cover connection and reauthorization, tool discovery, delegated reads, cross-account refusal, refusal of ungranted writes, stale-revision handling, academic-meeting immutability, revocation, and post-revocation failure. Product documentation and roadmap statements are not substitutes for that evidence.
