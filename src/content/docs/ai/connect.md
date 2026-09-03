---
title: Connect an AI client
description: Requirements and the canonical connection workflow for the Gapwise remote MCP service.
---

Gapwise AI is a **remote MCP service with a mixed public/private tool surface**. Its canonical Streamable HTTP resource is:

```text
https://ai.gapwise.ca/api/mcp
```

Private student-context tools use OAuth. Protected-resource metadata is published at:

```text
https://ai.gapwise.ca/.well-known/oauth-protected-resource
```

A client can discover and use stateless public UTM campus tools without private Gapwise account access. To use private schedule/planning tools, the client must follow protected-resource discovery, complete browser-based authorization, and retain the resulting authorization securely.

## Connection workflow

1. In the AI client, choose its option to add a remote MCP integration.
2. Enter `https://ai.gapwise.ca/api/mcp` as the MCP server/resource URL.
3. Inspect the tools the client discovers. Public campus tools can be used without private delegation.
4. When a private tool is requested, follow the browser authorization flow advertised by the service instead of constructing an authorization URL yourself.
5. Complete Gapwise sign-in and review the requested AI delegation.
6. Approve only the permissions you want the integration to have.
7. Return to the client and begin with a read-only private request, such as “What does my day look like?”

:::caution[Do not paste a Gapwise password or encryption key]
Authorization happens at the Gapwise boundary. A legitimate integration does not need the student's Gapwise password, Gapwise private-data encryption keys, or an unrestricted copied browser-session token.
:::

The MCP transport permits unauthenticated initialization and tool discovery. Protected private tool execution remains fail-closed until the caller presents a verified OAuth credential and the student has an active delegation with the required capability.

The service exposes 17 tools: four stateless public campus reads, nine permissioned private reads/status/planning tools, and four bounded private writes. See [Tools](/ai/tools/) for the catalog and [Authentication & delegation](/ai/authentication/) for the authorization boundaries.

Before connecting a particular product, check [Client compatibility](/ai/compatibility/). Broad named-client support is not claimed until the real production OAuth/read/write/revoke matrices are complete.
