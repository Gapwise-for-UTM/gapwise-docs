---
title: Gapwise AI & MCP
description: Connect AI clients to Gapwise without turning deterministic campus facts into model guesses.
---

Gapwise AI is the integration boundary between an AI client and Gapwise. It uses the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) so a client can request narrowly defined Gapwise capabilities instead of receiving unrestricted access to a student's account.

The service identity is [ai.gapwise.ca](https://ai.gapwise.ca). This documentation is the canonical public guide; the [gapwise-ai repository](https://github.com/andrewmuratov/gapwise-ai) contains implementation and maintainer material.

## Two different responsibilities

**Gapwise computes facts.** Schedule state, gap calculation, availability, campus places, and routing come from Gapwise's deterministic systems. The public [campus API](/api/) documents the overlapping non-private building, place, route, and gap-planning primitives.

**The AI client reasons about an intent.** A model can choose which available tool to call and explain the result, but it must not present an invented schedule, route, or availability window as a Gapwise result.

Gapwise remains the source of truth for schedules and private state.

## Safety model

- Private access starts only after the student explicitly delegates authority.
- The client receives tool results, not Gapwise encryption keys or unrestricted account access.
- Academic timetable meetings are read-only through the AI boundary.
- Any personal-item or preference write is bounded by its granted permission.
- A write must respect the current state revision; stale state is not silently overwritten.
- Revocation removes the delegated authority. A later authorization is a new grant, not silent restoration of the old one.

Start with [Connect an AI client](/ai/connect/) or review [Privacy & security](/ai/privacy/).
