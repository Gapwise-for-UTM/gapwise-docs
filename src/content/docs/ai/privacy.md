---
title: Privacy & security
description: The private-data boundary for Gapwise AI integrations.
---

The public [Gapwise API](/api/) exposes campus intelligence and no student account data. Gapwise AI is the separate, protected path for student-delegated private access.

## Data a student may delegate

Depending on the permissions and tools currently offered, a delegation can make selected schedule or private-state information available to answer the student's request. Results should be scoped to the called tool and the granted capability—not treated as an account export.

## Not automatically exposed

- Gapwise passwords, session secrets, and encryption keys;
- unrestricted account access;
- data outside the approved delegation;
- a general-purpose feed of all private state;
- write authority implied from read authority;
- precise live location merely because campus routing is available.

The AI provider may process the prompts and tool results visible to its client. Students should review that provider's retention, training, and workspace policies separately from Gapwise's controls.

## Safe integration checklist

- Use current service discovery and browser-based authorization.
- Ask for least authority and prefer reads.
- Minimize private data copied into prompts, logs, and analytics.
- Never log credentials, authorization artifacts, or encryption material.
- Show the target and effect before a write.
- Handle stale revisions by reading again, not force-overwriting.
- Stop immediately on revocation or authorization failure.

Security researchers and implementers can consult the [gapwise-ai repository](https://github.com/andrewmuratov/gapwise-ai) for deeper security documentation.
