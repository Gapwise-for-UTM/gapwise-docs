import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.gapwise.ca",
  integrations: [
    starlight({
      title: "Gapwise Developers",
      description:
        "Official developer documentation for the Gapwise campus intelligence platform and permissioned AI/MCP integration.",
      favicon: "/favicon.svg",
      logo: {
        light: "./src/assets/logo-mark-blue.svg",
        dark: "./src/assets/logo-mark-white.svg",
        alt: "Gapwise",
      },
      customCss: ["./src/styles/custom.css"],
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/andrewmuratov/gapwise" },
      ],
      editLink: {
        baseUrl: "https://github.com/andrewmuratov/gapwise-docs/edit/main/",
      },
      sidebar: [
        {
          label: "Start",
          items: [
            { label: "Overview", slug: "" },
            { label: "Choose an integration", slug: "quickstart" },
          ],
        },
        {
          label: "AI & MCP",
          items: [
            { label: "AI & MCP overview", slug: "ai" },
            { label: "Connect an AI client", slug: "ai/connect" },
            { label: "Authentication & delegation", slug: "ai/authentication" },
            { label: "Tools", slug: "ai/tools" },
            { label: "Permissions & writes", slug: "ai/permissions" },
            { label: "Privacy & security", slug: "ai/privacy" },
            { label: "Client compatibility", slug: "ai/compatibility" },
            { label: "Examples", slug: "ai/examples" },
            { label: "Limitations & troubleshooting", slug: "ai/limitations" },
          ],
        },
        {
          label: "SDKs",
          items: [
            { label: "JavaScript & TypeScript", slug: "sdk/javascript" },
            { label: "Python", slug: "sdk/python" },
          ],
        },
        {
          label: "API",
          items: [
            { label: "API overview", slug: "api" },
            { label: "Buildings", slug: "api/buildings" },
            { label: "Places", slug: "api/places" },
            { label: "Routing", slug: "api/routing" },
            { label: "Gap planning", slug: "api/gap-planning" },
            { label: "Errors", slug: "api/errors" },
            { label: "Rate limits", slug: "api/rate-limits" },
          ],
        },
        {
          label: "Guides",
          items: [{ label: "Recipes", slug: "guides/recipes" }],
        },
        {
          label: "Platform",
          items: [
            { label: "Security overview", slug: "platform/security" },
            { label: "Architecture & data flow", slug: "platform/architecture" },
            { label: "Data & provenance", slug: "platform/provenance" },
            { label: "Accuracy & uncertainty", slug: "platform/accuracy" },
            { label: "Privacy", slug: "platform/privacy" },
            { label: "Versioning", slug: "platform/versioning" },
            { label: "Changelog", slug: "platform/changelog" },
          ],
        },
      ],
    }),
  ],
});
