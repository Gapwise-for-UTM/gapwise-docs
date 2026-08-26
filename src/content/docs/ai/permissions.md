---
title: Permissions & writes
description: Least-authority access, read-only academic meetings, and revision-bound queued mutations.
---

Permissions bound what an integration may do; a natural-language request does not expand them. OAuth identifies and authorizes the client to call the protected resource, while the student's Gapwise AI delegation separately controls which schedule, planning, preference, and write capabilities are available.

## What cannot be changed

Academic timetable meetings are read-only through Gapwise AI. They remain source-backed academic facts owned by Gapwise rather than assistant-owned content. No live MCP tool creates, edits, or deletes an imported academic meeting.

## Bounded writes

The current live write surface is deliberately small:

- `create_personal_item`
- `update_personal_item`
- `delete_personal_item`
- `update_gap_preferences`

Each write requires its relevant explicit delegation and the current `expectedRevision`. Personal-item creates and updates are typed, and fixed items are independently revalidated by the service against delegated hard timetable conflicts and known Gapwise transition/activity-envelope violations before the action can be queued.

A safe client:

1. reads the relevant current state and revision;
2. explains the proposed change;
3. obtains any confirmation required by the client experience;
4. submits only the bounded change with the current `expectedRevision`;
5. reports that Gapwise AI **queued** the action when the call succeeds;
6. reads again before making a dependent change.

## Queued does not mean applied

MCP write tools do not directly rewrite Gapwise's canonical encrypted private payload. A successful write creates a typed queued action for the first-party Gapwise application to apply against canonical state. After application, Gapwise republishes a newer delegated snapshot.

This means an assistant must not tell the student “your timetable has been updated” merely because the MCP write returned successfully. The accurate statement is that the requested personal/preference change was queued for Gapwise.

## Stale writes and exact retries

`expectedRevision` prevents a client from silently overwriting newer delegated state. If the snapshot changed after the client read it, the mutation fails as stale; read current state again and reconsider the proposed change.

Write tools may accept a bounded idempotency key. Reusing the same key for the exact same requested change makes retries safe; it must not be repurposed for a different mutation.

## Revocation and reauthorization

Revocation removes delegated state/actions and later private access fails closed. Reauthorization is a fresh grant. A client must use the new authorization and current snapshot; old queued intent must not be silently replayed under the new authority.

See [Tools](/ai/tools/) for the live write catalog and [Authentication & delegation](/ai/authentication/) for the authorization boundary.
