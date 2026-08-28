import { readFile } from "node:fs/promises";

const config = JSON.parse(await readFile("vercel.json", "utf8"));
const rule = config.headers?.find((entry) => entry.source === "/(.*)");
if (!rule) throw new Error("Missing global docs security-header rule");

const headers = new Map(rule.headers.map(({ key, value }) => [key, value]));
const expected = new Map([
  ["Strict-Transport-Security", "max-age=63072000; includeSubDomains"],
  ["Referrer-Policy", "no-referrer"],
  ["X-Content-Type-Options", "nosniff"],
  ["X-Frame-Options", "DENY"],
  ["X-Permitted-Cross-Domain-Policies", "none"],
]);

for (const [key, value] of expected) {
  if (headers.get(key) !== value) {
    throw new Error(`${key} deployment header drifted from the locked value`);
  }
}

const permissions = headers.get("Permissions-Policy") ?? "";
for (const capability of [
  "camera=()",
  "microphone=()",
  "geolocation=()",
  "payment=()",
  "usb=()",
]) {
  if (!permissions.includes(capability)) {
    throw new Error(`Permissions-Policy must contain ${capability}`);
  }
}

console.log("Docs deployment security header audit passed.");
