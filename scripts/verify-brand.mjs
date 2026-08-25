import { readFile } from "node:fs/promises";

const [config, favicon, readmeLogo, readme] = await Promise.all([
  readFile(new URL("../astro.config.mjs", import.meta.url), "utf8"),
  readFile(new URL("../public/favicon.svg", import.meta.url), "utf8"),
  readFile(new URL("../public/logo-mark-white.svg", import.meta.url), "utf8"),
  readFile(new URL("../README.md", import.meta.url), "utf8"),
]);

const requiredConfigTokens = ['favicon: "/favicon.svg"'];
const canonicalGeometryTokens = [
  'viewBox="350 315 554 554"',
  "M627 638 540 534",
  "M627 692 522 558",
  'transform="translate(1254 0) scale(-1 1)"',
];
const forbiddenSvgTokens = ["<filter", "feMorphology", "feFlood", "stroke=", "filter="];

for (const token of requiredConfigTokens) {
  if (!config.includes(token)) {
    throw new Error(`Global docs favicon configuration is missing: ${token}`);
  }
}

for (const [name, svg, fill] of [
  ["favicon", favicon, 'fill="#4EA7FE"'],
  ["README logo", readmeLogo, 'fill="#fff"'],
]) {
  for (const token of canonicalGeometryTokens) {
    if (!svg.includes(token)) {
      throw new Error(`${name} is missing canonical Gapwise deer geometry: ${token}`);
    }
  }
  if (!svg.includes(fill)) {
    throw new Error(`${name} is missing required brand color: ${fill}`);
  }
  for (const token of forbiddenSvgTokens) {
    if (svg.includes(token)) {
      throw new Error(`${name} contains forbidden seam-producing SVG styling: ${token}`);
    }
  }
}

if (!readme.includes('src="public/logo-mark-white.svg"')) {
  throw new Error("README does not reference the clean white Gapwise deer mark.");
}

if (/black outline/i.test(readme) || /black outline/i.test(favicon) || /black outline/i.test(readmeLogo)) {
  throw new Error("Obsolete black-outline branding text remains.");
}

console.log("Verified canonical Gapwise docs branding.");
