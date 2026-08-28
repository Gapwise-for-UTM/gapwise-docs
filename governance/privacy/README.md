# Privacy governance package

> **DRAFT — HUMAN/LEGAL REVIEW REQUIRED**

Internal working templates for AND-157. They are not approved policies, legal conclusions, public promises, or evidence that a control has operated. Do not publish a completed record until its owner and legal/privacy reviewer approve it.

## Evidence and claim rules

Every substantive entry must carry one classification:

- **VERIFIED** — supported by current implementation, configuration, or retained operational evidence. Cite an immutable repository path and commit, configuration snapshot, or record ID.
- **PROCESS** — a proposed or adopted operating step. Name an owner and approval record; do not describe it as historical fact.
- **HUMAN-CONFIRMATION** — unknown or dependent on legal, provider, dashboard, contractual, or organizational confirmation.

Use `[PHASE-1: inventory row/processor/control ID]` wherever Phase 1 evidence is required. Replace the token only with a stable link to the approved Phase 1 inventory; never infer a value. Record `Unknown — confirmation required` rather than guessing. Retain prior approved versions instead of silently overwriting them.

## Templates

1. [Privacy Impact Assessment](privacy-impact-assessment.md)
2. [Retention and deletion schedule](retention-deletion-schedule.md)
3. [Privacy complaint and request handling](complaint-request-handling.md)
4. [Access, correction, and deletion workflow](data-rights-workflow.md)
5. [Third-party and subprocessor review](third-party-review.md)
6. [Feature-change privacy trigger](feature-change-trigger.md)
7. [Privacy-incident escalation](privacy-incident-escalation.md)

## Record controls

For each completed copy record: document ID, status (`Working draft`, `In review`, or `Approved internal process`), owner, reviewers, created/updated dates, evidence cutoff commit(s), related decision/incident/request IDs, approval date, and next review trigger. Keep request and incident records access-restricted; place no personal data in tickets or public repositories.

## Completion gate

- [ ] Phase 1 links resolve and evidence matches the recorded cutoff.
- [ ] VERIFIED, PROCESS, and HUMAN-CONFIRMATION statements are distinguishable.
- [ ] Unknown legal duties, provider terms, residency, retention, and contacts remain unknown.
- [ ] No new data collection is introduced by completing the template.
- [ ] Security-sensitive or personal information is stored only in an approved restricted system.
- [ ] Human/privacy and legal reviewers have recorded approval where applicable.
