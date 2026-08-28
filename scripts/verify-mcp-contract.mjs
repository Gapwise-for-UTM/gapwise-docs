import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const contract = JSON.parse(
  await readFile(new URL("contracts/mcp-live-surface.json", root), "utf8"),
);
const toolsDoc = await readFile(new URL("src/content/docs/ai/tools.md", root), "utf8");
const permissionsDoc = await readFile(
  new URL("src/content/docs/ai/permissions.md", root),
  "utf8",
);
const overviewDoc = await readFile(new URL("src/content/docs/ai/index.md", root), "utf8");
const connectDoc = await readFile(new URL("src/content/docs/ai/connect.md", root), "utf8");

const section = (document, heading, nextHeading) => {
  const start = document.indexOf(heading);
  assert.notEqual(start, -1, `Missing documentation section: ${heading}`);
  const end = nextHeading ? document.indexOf(nextHeading, start + heading.length) : -1;
  return document.slice(start, end === -1 ? undefined : end);
};

const tableTools = (markdown) =>
  [...markdown.matchAll(/^\| `([^`]+)` \|/gm)].map((match) => match[1]);
const bulletTools = (markdown) =>
  [...markdown.matchAll(/^- `([^`]+)`$/gm)].map((match) => match[1]);

const readTools = contract.registeredTools.read;
const writeTools = contract.registeredTools.write;
const allRegisteredTools = [...readTools, ...writeTools];
const uniqueRegisteredTools = new Set(allRegisteredTools);

assert.equal(
  uniqueRegisteredTools.size,
  contract.registeredToolCount,
  "The contract manifest has duplicate or missing registered tools",
);
assert.equal(
  allRegisteredTools.length,
  contract.registeredToolCount,
  "registeredToolCount does not match the manifest tool lists",
);

assert.deepEqual(
  tableTools(
    section(toolsDoc, "## Read, status, and planning tools", "## Bounded write tools"),
  ),
  readTools,
  "The documented read-tool table drifted from the MCP contract manifest",
);
assert.deepEqual(
  tableTools(section(toolsDoc, "## Bounded write tools", "## Implemented but not live")),
  writeTools,
  "The documented write-tool table drifted from the MCP contract manifest",
);
assert.deepEqual(
  bulletTools(section(toolsDoc, "## Implemented but not live")),
  contract.unregisteredPublicCampusDefinitions,
  "The documented unregistered public-campus definitions drifted from the manifest",
);
assert.deepEqual(
  bulletTools(section(permissionsDoc, "## Bounded writes", "## Queued does not mean applied")),
  writeTools,
  "The permission guide's write surface drifted from the registered write tools",
);

for (const document of [toolsDoc, overviewDoc, connectDoc]) {
  assert.match(
    document,
    new RegExp(`\\b${contract.registeredToolCount} permissioned tools\\b`),
    "A live-surface overview has a stale registered-tool count",
  );
}

assert.match(
  toolsDoc,
  /Those four definitions are \*\*not registered by the current live MCP handler\*\*/,
  "The public-campus definitions must remain explicitly unregistered",
);
assert.match(
  permissionsDoc,
  /No live MCP tool creates, edits, or deletes an imported academic meeting\./,
  "The academic-timetable immutability boundary must remain explicit",
);
assert.match(
  permissionsDoc,
  /Each write requires its relevant explicit delegation and the current `expectedRevision`\./,
  "The write surface must document delegation and stale-write protection",
);
assert.match(
  permissionsDoc,
  /successful write creates a typed queued action/,
  "The docs must describe writes as queued rather than directly applied",
);
assert.match(
  permissionsDoc,
  /bounded idempotency key/,
  "The exact-retry boundary must remain documented",
);

console.log(
  `Verified ${allRegisteredTools.length} registered MCP tools, ${writeTools.length} bounded writes, and ${contract.unregisteredPublicCampusDefinitions.length} unregistered public-campus definitions.`,
);
