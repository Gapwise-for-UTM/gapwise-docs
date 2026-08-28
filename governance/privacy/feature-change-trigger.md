# Feature-change privacy trigger checklist

> **DRAFT — HUMAN/LEGAL REVIEW REQUIRED** — This triage aid does not decide legal obligations. When evidence is incomplete, pause and obtain human/privacy/legal review.

Complete during design and repeat before release. Link the change, exact repository commits, `[PHASE-1: inventory row/control/processor IDs]`, reviewer, and decision record.

## Triggers

Does the change introduce or alter any of the following?

- [ ] Data category, field, inference, purpose, source, user group, or sensitive context.
- [ ] Collection frequency, precision, monitoring, profiling, automated decision, or ability to combine/re-identify data.
- [ ] Browser-local/server boundary, sync behavior, storage system, logs, telemetry, backups, exports, or retention/deletion.
- [ ] Access role, authentication, authorization, sharing, public/private boundary, or new recipient.
- [ ] Third party/subprocessor, provider feature, AI/MCP snapshot/action, model use, external client, or cross-border/residency assumption.
- [ ] User notice, choice, consent, access, correction, deletion, portability, revocation, or account closure behavior.
- [ ] Security control, encryption/key handling, secret, incident detection, or recovery behavior.
- [ ] Product audience, jurisdiction, institutional relationship, contract, policy, or legal assumption.
- [ ] Existing Phase 1 claim, public trust statement, diagram, privacy text, retention row, or request runbook becoming inaccurate.

## Decision

If any answer is **yes or unknown**, open/update the PIA and inventory, identify affected public/internal documents, complete security and third-party review where relevant, and block publication until required human decisions are recorded. If all are **no**, record evidence and reviewer—not merely `no impact`.

Bounded user-control ideas discovered here must be proposed separately with scope, evidence, threat/privacy review, and tests. Do not silently add telemetry, identifiers, verification data, or broader collection to implement a control.
