# Retention and deletion schedule template

> **DRAFT — HUMAN/LEGAL REVIEW REQUIRED** — No period or deletion guarantee is established by this template. Use only implementation evidence and approved human decisions.

## Schedule

| Data/inventory ID | System + copies | Purpose | Start event | Current implemented behavior | Proposed period or trigger | Deletion method + verification | Backup/log/provider treatment | User control | Evidence/class/owner |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `[PHASE-1]` | `[PHASE-1]` | `[PHASE-1]` | `Unknown — confirmation required` | `[VERIFIED link or unknown]` | `[HUMAN-CONFIRMATION]` | `[VERIFIED/PROCESS]` | `[HUMAN-CONFIRMATION]` | `[PHASE-1]` | `[PLACEHOLDER]` |

## Review procedure

1. Reconcile every Phase 1 data category and every primary, replica, cache, log, backup, export, and processor copy.
2. Separate **current implemented behavior** from a proposed schedule. Never substitute a desired period for code/configuration evidence.
3. Obtain legal/business approval for purpose, trigger, holds, exceptions, and any period.
4. Test deletion in a non-production-safe manner; record what was and was not observable, including delayed or provider-managed deletion.
5. Resolve contradictions in product copy and request workflows before approval.

## Exceptions and evidence

Record any preservation/hold decision, authority, scope, start/end, access restriction, and disposal approval in the restricted record system. Do not put personal data or sensitive operational detail here. Where backups or provider deletion cannot be directly verified, state that limitation and assign human follow-up.

- [ ] Each Phase 1 row is represented or explicitly marked not stored.
- [ ] No unevidenced period, residency, contract term, or statutory conclusion appears.
- [ ] Account deletion, AI authorization revocation, local-device clearing, and processor deletion are not conflated.
- [ ] Test evidence, owner, approval, and next review date/trigger are recorded.
