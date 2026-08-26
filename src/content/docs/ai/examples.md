---
title: Examples
description: Safe conceptual workflows for common student requests.
---

These synthetic examples describe intent and safety checks. Exact tool names and schemas come from current MCP discovery.

## “What is my next class?”

Read the delegated schedule, compare it with the requested/current time, and answer from returned meeting data. If time zone or schedule data is missing, ask rather than guess.

## “What does my day look like?”

Read that day's meetings and permitted personal items, order them deterministically, and summarize. Keep authoritative events distinct from the model's suggestions.

## “Find me a study window”

Read availability, evaluate explicit gaps, then use campus place or route data if relevant. Present the computed interval and any uncertainty behind the recommendation.

## “Can I go to another building during this gap?”

Use the gap boundaries and deterministic [routing](/api/routing/) or [gap-planning](/api/gap-planning/) result. Do not have the model estimate travel time from intuition.

## “Add a personal commitment”

Confirm the title, time, and intended effect. Use only a currently registered personal-item write with the necessary permission and expected revision. Report the stored result; if the revision is stale, read again and reconfirm.

> Example synthetic item: “CHEM Study Group, Thursday 15:00–16:00.”

## “Change a preference”

Read the current preference and revision, explain the change, and use a registered preference write only if delegated. Never treat preference access as permission to edit an academic meeting.
