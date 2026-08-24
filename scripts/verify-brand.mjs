import { readFile } from "node:fs/promises";

const [config, favicon] = await Promise.all([
  readFile(new URL("../astro.config.mjs", import.meta.url), "utf8"),
  readFile(new URL("../public/favicon.svg", import.meta.url), "utf8"),
]);

const requiredConfigTokens = ['favicon: "/favicon.svg"'];
const requiredFaviconTokens = [
  "M627 638 540 534",
  "M627 692 522 558",
  'transform="translate(1254 0) scale(-1 1)"',
  'fill="#fff"',
  'flood-color="#000"',
];

for (const token of requiredConfigTokens) {
  if (!config.includes(token)) {
    throw new Error(`Global docs favicon configuration is missing: ${token}`);
  }
}

for (const token of requiredFaviconTokens) {
  if (!favicon.includes(token)) {
    throw new Error(`Official Gapwise deer favicon is missing required token: ${token}`);
  }
}

if (/#[0-9a-f]{6}/i.test(favicon.replaceAll("#fff", "").replaceAll("#000", ""))) {
  throw new Error("Docs favicon contains a non-monochrome brand color.");
}

console.log("Verified global Gapwise docs deer favicon.");
