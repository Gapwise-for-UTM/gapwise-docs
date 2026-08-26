---
title: Connect an AI client
description: Requirements and a safe connection workflow for Gapwise AI.
---

Gapwise AI is a **remote protected MCP service**. Use a client that can connect to a remote MCP service, complete its browser-based authorization flow, and retain the resulting authorization securely.

## Connection workflow

1. In the AI client, choose its option to add a remote MCP integration.
2. Start from [ai.gapwise.ca](https://ai.gapwise.ca) and follow the connection information the service publishes. Do not guess a path or paste credentials into an untrusted client.
3. Complete Gapwise sign-in in the browser.
4. Review the requested delegation and approve only the permissions you want the client to have.
5. Return to the client and inspect the tools it actually discovers.
6. Begin with a read-only request, such as “What does my day look like?”

:::caution[Do not paste a Gapwise password or encryption key]
Authorization must happen at the Gapwise boundary. A legitimate client does not need the student's Gapwise password, data-encryption key, or a copied unrestricted account token.
:::

The exact protected-resource URL and tool catalog are intentionally obtained from current service metadata during connection. This avoids hard-coding an unverified path or advertising a tool that is not registered in production.

Before connecting a particular product, check [Client compatibility](/ai/compatibility/).
