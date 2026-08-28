# Privacy Impact Assessment template

> **DRAFT — HUMAN/LEGAL REVIEW REQUIRED** — This worksheet does not determine legal compliance or create notice, response, retention, or remediation commitments.

## Record

| Field | Value |
| --- | --- |
| PIA ID / version / status | `[PLACEHOLDER]` |
| Feature, system, or change | `[PLACEHOLDER]` |
| Owner and reviewers | `[HUMAN-CONFIRMATION]` |
| Evidence cutoff (repo + commit) | `[PLACEHOLDER]` |
| Phase 1 inventory references | `[PHASE-1: inventory row/control/processor IDs]` |
| Decision and next review trigger | `[PLACEHOLDER]` |

## Scope and necessity

Describe the user need, intended purpose, affected people, boundaries, alternatives considered, and why each data element is necessary. List excluded uses explicitly. Mark the source of each statement VERIFIED, PROCESS, or HUMAN-CONFIRMATION.

## Data-flow worksheet

| Data category | Source | Purpose | Browser/server boundary | Storage/protection | Recipient/processor | User control | Retention/deletion | Evidence + class |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `[From Phase 1]` | `[PHASE-1]` | `[PLACEHOLDER]` | `[PHASE-1]` | `[PHASE-1]` | `[PHASE-1]` | `[PHASE-1]` | `[PHASE-1]` | `[link] — [class]` |

Do not add categories merely to complete the table. For AI/MCP changes, separately record the delegated snapshot/action, scope, authorization and revocation boundary, excluded categories, and whether any write is possible.

## Assessment

- Data minimization and less intrusive alternatives: `[PLACEHOLDER]`
- Transparency or policy text affected: `[PLACEHOLDER]`
- Access, correction, deletion, export, and revocation effects: `[PLACEHOLDER]`
- Authentication, authorization, isolation, encryption, logging, and secret-handling evidence: `[PHASE-1]`
- Third-party review IDs and unresolved provider facts: `[PLACEHOLDER]`
- Children/sensitive data, monitoring, profiling, automated decisions, new sharing, or cross-border questions: `[HUMAN-CONFIRMATION]`
- Abuse, re-identification, over-collection, unauthorized access, and accidental disclosure scenarios: `[PLACEHOLDER]`

## Risk register and decision

| Risk | Existing evidence-backed control | Likelihood/impact method | Proposed action + owner | Residual risk | Class/status |
| --- | --- | --- | --- | --- | --- |
| `[PLACEHOLDER]` | `[link or none]` | `[method pending approval]` | `[PROCESS]` | `[HUMAN-CONFIRMATION]` | `[class/status]` |

Decision: `Do not proceed / Revise and reassess / Approved for bounded implementation / Human decision pending`.

- [ ] Inventory and data-flow reconciliation complete.
- [ ] All third parties reviewed.
- [ ] User-facing text and controls tested without expanding collection.
- [ ] Security/privacy review findings resolved or explicitly accepted by an authorized human.
- [ ] Policy/legal conclusions and publication approved by humans.
