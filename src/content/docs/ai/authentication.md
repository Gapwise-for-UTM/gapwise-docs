---
title: Authentication & delegation
description: How Gapwise separates client authorization from student-granted authority.
---

Connecting an MCP transport does not by itself grant access to private Gapwise data. Private requests cross two boundaries:

1. **Authorization:** the client proves that it may call the protected MCP resource.
2. **Delegation:** the signed-in student explicitly chooses the capabilities the integration may exercise.

The authorization UI is the place to review authority. Do not infer access from a client's natural-language prompt or from the mere presence of a tool name.

## Read and write authority

Read and write access are separate. A read grant does not imply write access. Writes, where offered, are limited to supported personal items or preferences; academic timetable meetings remain read-only.

See [Permissions & writes](/ai/permissions/) for the state-revision boundary that applies to mutations.

## Revocation and reauthorization

Revoking a delegation removes the integration's authority. Calls made with the revoked grant must no longer be treated as authorized.

Reauthorization is a fresh decision. The student reviews the permissions again, and the integration must use the newly issued authority and current state. It must not replay a queued mutation or silently restore permissions from the revoked grant.

Gapwise keeps operational OAuth details and secrets out of public documentation. Integrators should follow the discovery and authorization metadata published by the protected service rather than constructing authorization URLs themselves.
