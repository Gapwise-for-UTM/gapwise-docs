import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const sourceArg = process.argv.find((argument) => argument.startsWith("--source="));
const source =
  sourceArg?.slice("--source=".length) ??
  (existsSync(".canonical-gapwise/universities.json")
    ? ".canonical-gapwise/universities.json"
    : "../gapwise/universities.json");
const manifest = JSON.parse(await readFile(source, "utf8"));
const universities = manifest.universities.filter((university) => university.status === "supported");
const universityCount = universities.length;
const campusCount = universities.reduce(
  (count, university) => count + university.campuses.length,
  0,
);

const requiredCountFiles = [
  "README.md",
  "CAMPUS_DATA_OWNERSHIP.md",
  "ECOSYSTEM.md",
  "src/content/docs/index.mdx",
  "src/content/docs/quickstart.md",
  "src/content/docs/api.md",
  "src/content/docs/data/index.md",
];

for (const file of requiredCountFiles) {
  const content = await readFile(file, "utf8");
  if (!content.includes(String(universityCount)) || !content.includes(String(campusCount))) {
    throw new Error(
      `${file} must reflect the canonical ${universityCount}-university, ${campusCount}-campus registry`,
    );
  }
}

for (const file of [
  "README.md",
  "src/content/docs/guides/add-university.md",
  "src/content/docs/platform/ecosystem.md",
  "src/content/docs/platform/institutional-brief.md",
]) {
  const content = await readFile(file, "utf8");
  for (const university of universities) {
    const canonicalHost = university.hosts[0];
    const mustListName = !file.endsWith("platform/ecosystem.md");
    if ((mustListName && !content.includes(university.name)) || !content.includes(canonicalHost)) {
      throw new Error(`${file} is missing ${university.name} (${canonicalHost})`);
    }
  }
}

console.log(`Verified docs coverage for ${universityCount} universities and ${campusCount} campuses.`);
