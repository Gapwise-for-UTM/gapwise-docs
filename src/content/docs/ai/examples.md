---
title: Examples
description: Safe conceptual workflows for common student requests using the live Gapwise AI tool surface.
---

These examples use synthetic student intents. The AI client supplies the conversational reasoning; Gapwise supplies schedule, availability, gap, and other deterministic facts through registered tools.

## “What does my day look like?”

Use `get_my_day` for the requested calendar date. Summarize the returned source-backed academic meetings, permitted personal items, and delegated gap context without inventing missing events or locations.

## “What does my week look like?”

Use `get_my_week` for the academic term. Keep academic meetings visibly distinct from personal items and from any model-generated advice.

## “Find me a study window”

For one date or one term weekday, use `find_my_available_windows`. For a whole academic week, use `find_my_weekly_opportunities` rather than repeatedly subtracting timetable intervals in the model.

A weekly opportunity covered by a delegated Gapwise gap assessment may include Gapwise's usable-activity budget and transition state. A result marked temporal-only should not be upgraded into a route-safe recommendation.

## “Can I fit this plan between classes?”

Use `check_my_plan_feasibility` on the exact proposed interval before recommending a concrete personal block. The tool checks delegated hard conflicts and known Gapwise gap/transition constraints where applicable.

A proposed arbitrary location is not route-validated by that tool, so do not claim a commute is safe unless Gapwise supplied the relevant route evidence.

## “What can I do in this gap?”

Use `get_my_gap_plan` for the exact delegated gap window. Preserve Gapwise's returned route status, confidence, travel/buffer timing, leave-by/arrival facts, warnings, and recommendation instead of recomputing them from intuition.

## “Add a personal commitment”

Confirm the intended personal item, read the current revision, check feasibility for a fixed block when appropriate, then call `create_personal_item` only when personal-item writes are delegated.

> Synthetic example: “Study group, Thursday 15:00–16:00.”

A successful MCP call means **the change was queued for Gapwise**. It does not mean the AI client directly rewrote the canonical timetable. Read again before making a dependent change.

If the revision is stale, fetch current state and reconsider instead of force-overwriting.

## “Change my gap preference”

Read the delegated preferences and current revision with `get_my_ai_preferences`, explain the bounded change, then use `update_gap_preferences` only when preference writes are delegated. Preference authority never permits editing an academic meeting.
