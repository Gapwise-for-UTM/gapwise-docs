---
title: Tools
description: The 13 tools currently registered by the Gapwise AI MCP handler.
---

The current `gapwise-ai` production handler registers **13 permissioned tools**: nine read/status/planning tools and four bounded write tools. Tool discovery is provider-neutral, but private calls require a verified OAuth caller and the relevant non-revoked Gapwise AI delegation permissions.

Academic meetings remain source-backed and read-only. Tool handlers do not accept arbitrary SQL, JavaScript, URLs, graph nodes, or generic execute instructions.

## Read, status, and planning tools

| Tool | Purpose |
| --- | --- |
| `get_ai_delegation_status` | Return delegation state, revision, and permissions without timetable content. |
| `get_my_day` | Return source-backed academic meetings, permitted personal items, and delegated deterministic gap context for one calendar date. |
| `get_my_week` | Return the normalized delegated timetable for one academic term, including permitted personal items and gap context. |
| `get_my_gap_plan` | Return the exact delegated Gapwise assessment for one named gap window, including route/timing/confidence facts already computed by Gapwise. |
| `get_my_ai_preferences` | Return only planning/routing preferences explicitly delegated to AI. |
| `get_my_decision_context` | Return compact term-level planning context: hard schedule load, fixed personal constraints, Gapwise gap opportunities, route uncertainty, revision/freshness, and permitted preferences. |
| `find_my_available_windows` | Find source-backed free windows for one date or term weekday. Without explicit bounds, it does not invent wake/sleep or edge-of-day availability. |
| `find_my_weekly_opportunities` | Search all seven weekdays (Monday–Sunday) for usable planning windows while respecting delegated Gapwise activity budgets and route state. |
| `check_my_plan_feasibility` | Check a proposed personal block against delegated hard conflicts and, when applicable, the authoritative activity envelope/transition state for a delegated Gapwise gap. |

## Bounded write tools

| Tool | Purpose |
| --- | --- |
| `create_personal_item` | Queue creation of a personal timetable item. Requires personal-item write delegation and the current `expectedRevision`. |
| `update_personal_item` | Queue a bounded update to an AI-visible personal item by stable ID. Requires personal-item write delegation and the current `expectedRevision`. |
| `delete_personal_item` | Queue deletion of an AI-visible personal item by stable ID. Requires personal-item write delegation and the current `expectedRevision`. |
| `update_gap_preferences` | Queue a bounded partial gap-preference update. Requires preference-write delegation and the current `expectedRevision`. |

A successful write means **queued for Gapwise**, not that an AI client directly rewrote the student's canonical encrypted state. Fixed personal-item creates and updates are independently revalidated against delegated hard conflicts and known deterministic transition/activity-envelope constraints before queueing. Optional idempotency keys support safe exact retries.

Models should read again before making a dependent change because a queued action is not equivalent to immediate canonical-state mutation.

## Implemented but not live

`gapwise-ai` also defines four stateless public-campus tools backed by Gapwise's deterministic campus API:

- `list_utm_buildings`
- `get_utm_building`
- `route_between_utm_buildings`
- `plan_utm_gap_window`

Those four definitions are **not registered by the current live MCP handler** and are therefore not part of the 13-tool production surface. Do not build against them as available MCP tools unless a future release explicitly registers and validates them.

For machine-readable argument and output schemas, use the schemas returned by MCP tool discovery from the [canonical service](/ai/connect/). For deeper implementation detail, see the [`gapwise-ai` tool contract](https://github.com/andrewmuratov/gapwise-ai/blob/main/docs/TOOL_CONTRACT.md).
