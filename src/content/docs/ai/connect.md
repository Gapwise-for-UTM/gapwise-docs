---
title: Connect an AI client
description: Requirements and the canonical connection workflow for Gapwise AI.
---

Gapwise AI is a **remote, OAuth-protected MCP service**. Its canonical Streamable HTTP resource is:

```text
https://ai.gapwise.ca/api/mcp
```

Protected-resource metadata is published at:

```text
https://ai.gapwise.ca/.well-known/oauth-protected-resource
```

Use a client that can connect to a remote MCP service, follow protected-resource discovery, complete browser-based authorization, and retain the resulting authorization securely.

## Connection workflow

1. In the AI client, choose its option to add a remote MCP integration.
2. Enter `https://ai.gapwise.ca/api/mcp` as the MCP server/resource URL.
3. Follow the browser authorization flow advertised by the service instead of constructing an authorization URL yourself.
4. Complete Gapwise sign-in and review the requested AI delegation.
5. Approve only the permissions you want the integration to have.
6. Return to the client and inspect the tools it actually discovers.
7. Begin with a read-only request, such as “What does my day look like?”

:::caution[Do not paste a Gapwise password or encryption key]
Authorization happens at the Gapwise boundary. A legitimate integration does not need the student's Gapwise password, Gapwise private-data encryption keys, or an unrestricted copied browser-session token.
:::

The MCP transport permits unauthenticated initialization and tool discovery so a compatible client can learn the authentication requirement. Protected tool execution remains fail-closed until the caller presents a verified OAuth credential and the student has an active delegation with the required capability.

The service currently exposes 13 permissioned tools. See [Tools](/ai/tools/) for the verified catalog and [Authentication & delegation](/ai/authentication/) for the two authorization boundaries.

Before connecting a particular product, check [Client compatibility](/ai/compatibility/). The service is a public release candidate; broad named-client support is not claimed until the real production OAuth/read/write/revoke matrices are complete.
