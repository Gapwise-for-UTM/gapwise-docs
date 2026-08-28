import { readFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("governance/privacy");
const templates = [
  "privacy-impact-assessment.md",
  "retention-deletion-schedule.md",
  "complaint-request-handling.md",
  "data-rights-workflow.md",
  "third-party-review.md",
  "feature-change-trigger.md",
  "privacy-incident-escalation.md",
];

const requiredDraftMark = "DRAFT — HUMAN/LEGAL REVIEW REQUIRED";
const errors = [];
const index = await readFile(path.join(root, "README.md"), "utf8");

for (const file of templates) {
  let contents;
  try {
    contents = await readFile(path.join(root, file), "utf8");
  } catch {
    errors.push(`missing privacy governance template: ${file}`);
    continue;
  }

  if (!index.includes(`](${file})`)) {
    errors.push(`privacy governance index does not link ${file}`);
  }
  if (!contents.includes(requiredDraftMark)) {
    errors.push(`${file} is missing the required draft/legal-review mark`);
  }
  if (!contents.includes("PHASE-1")) {
    errors.push(`${file} does not link evidence-dependent work to Phase 1`);
  }
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Verified ${templates.length} privacy governance templates and their index.`);
}
