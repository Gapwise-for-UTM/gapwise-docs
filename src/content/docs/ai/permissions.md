---
title: Permissions & writes
description: Least-authority access, read-only academic meetings, and safe mutations.
---

Permissions bound what an integration may do; a natural-language request does not expand them. Request the smallest useful delegation and keep read access separate from write access.

## What cannot be changed

Academic timetable meetings are read-only through Gapwise AI. They represent authoritative academic schedule data rather than assistant-owned content. Preventing an AI integration from editing them protects schedule truth and avoids turning a conversational mistake into a changed class record.

## Bounded writes

Where the currently registered tools and delegation allow it, writes are limited to supported personal items or preferences. A safe client:

1. reads the relevant object and its current revision;
2. explains the proposed change;
3. obtains confirmation when the client experience requires it;
4. submits only the bounded change with the expected revision;
5. reports the stored result rather than assuming success.

## Stale writes and queues

The expected revision is the boundary against overwriting newer state. If state changed after a client read it, the mutation must fail as stale; the client should read again and ask the student to reconsider the updated state.

If a client queues a mutation, it must retain and revalidate the revision and authority under which the change was prepared. Revocation invalidates that authority, and reauthorization must not cause an old queued mutation to run silently under a new grant.
