---
title: Gapwise AI & MCP
description: Connect AI clients to permissioned Gapwise context without turning deterministic campus or schedule facts into model guesses.
---

Gapwise AI is the **remote Model Context Protocol (MCP) integration boundary** between an AI client and Gapwise. It lets a compatible client request narrowly defined Gapwise capabilities without receiving unrestricted access to a student's account.

The client supplies the model and reasoning layer. **Gapwise supplies the canonical facts, permissions, and bounded actions.**

## Start here

| Goal | Guide |
| --- | --- |
| Connect a remote MCP client | **[Connect an AI client](/ai/connect/)** |
| Understand OAuth and explicit delegation | [Authentication & delegation](/ai/authentication/) |
| See every currently exposed tool | [Tools](/ai/tools/) |
| Understand what AI may write | [Permissions & writes](/ai/permissions/) |
| Review the data boundary | [Privacy & security](/ai/privacy/) |
| Check ChatGPT / Claude / other client status | [Client compatibility](/ai/compatibility/) |
| See realistic requests | [Examples](/ai/examples/) |
| Diagnose unsupported or failed flows | [Limitations & troubleshooting](/ai/limitations/) |

## Canonical service endpoints

Remote MCP resource:

```text
https://ai.gapwise.ca/api/mcp
```

OAuth protected-resource metadata:

```text
https://ai.gapwise.ca/.well-known/oauth-protected-resource
```

Service identity:

```text
https://ai.gapwise.ca
```

Implementation source: [github.com/andrewmuratov/gapwise-ai](https://github.com/andrewmuratov/gapwise-ai)

## Current live surface

The production handler currently registers **13 permissioned tools** for delegated schedule/status/planning reads and bounded queued writes.

Important boundaries:

- Academic timetable meetings are **read-only** through AI.
- Personal-item and delegated-preference writes require the corresponding granted permission.
- Writes are revision-aware; stale state is not silently overwritten.
- Write success means Gapwise accepted a typed queued action. It does not mean the AI client directly rewrote canonical timetable state.
- Four stateless public-campus MCP tool definitions exist in source, but they are intentionally **not registered** in the live handler. The public [Gapwise API](/api/) remains the canonical unauthenticated route for those campus capabilities.

## API or AI & MCP?

Use the **public API / SDKs** when your integration only needs UTM buildings, places, deterministic routes, or gap assessment for an explicit interval you already have. That surface is unauthenticated and contains no private student state.

Use **Gapwise AI & MCP** when the user's AI client needs explicitly delegated Gapwise context or bounded personal actions. That surface is OAuth-protected and permissioned.

Do not route public campus questions through private delegation merely because an AI model is involved. Do not use the public API as a way to infer private schedule state.

## Two different responsibilities

**Gapwise computes facts.** Schedule state, gap calculation, availability, campus places, and routing come from Gapwise's deterministic systems.

**The AI client reasons about intent.** A model can choose which available tool to call and explain the result, but it must not present an invented schedule, route, leave-by time, or availability window as a Gapwise result.

Gapwise remains the source of truth for schedules and private state.

## Delegation and safety model

- Private access starts only after the student explicitly delegates authority.
- The client receives tool results, not Gapwise encryption keys or unrestricted account access.
- Delegated state excludes the raw ACORN `.ics` file, friend data, precise/live location, account credentials, and Gapwise's primary private-state encryption keys.
- Any personal-item or preference write is bounded by its granted permission.
- Revocation removes the delegated authority. A later authorization is a new grant, not silent restoration of the old one.
- A legitimate integration never needs the student's Gapwise password, a private encryption key, or a copied browser-session token.

## Client support status

The MCP service is live and public-source, but **protocol availability is not the same as verified named-client support**. Broad ChatGPT, Claude, and other external-client compatibility remains gated on current production OAuth/read/write/revoke validation.

Until those matrices are complete, these docs deliberately avoid claiming a named client is fully verified. See [Client compatibility](/ai/compatibility/) for the current status and validation expectations.

**Ready to try the protocol flow? [Connect an AI client →](/ai/connect/)**
