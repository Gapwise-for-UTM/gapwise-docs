import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.gapwise.ca",
  integrations: [
    starlight({
      title: "Gapwise Developers",
      description: "Official developer documentation for the Gapwise campus intelligence platform.",
      favicon: "/favicon.svg",
      customCss: ["./src/styles/custom.css"],
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/andrewmuratov/gapwise" },
      ],
      editLink: {
        baseUrl: "https://github.com/andrewmuratov/gapwise-docs/edit/main/",
      },
      sidebar: [
        { label: "Start", items: [
          { label: "Overview", slug: "" },
          { label: "Quickstart", slug: "quickstart" },
        ] },
        { label: "API", items: [
          { label: "API overview", slug: "api" },
          { label: "Buildings", slug: "api/buildings" },
          { label: "Places", slug: "api/places" },
          { label: "Routing", slug: "api/routing" },
          { label: "Gap planning", slug: "api/gap-planning" },
        ] },
        { label: "Platform", items: [
          { label: "Data & provenance", slug: "platform/provenance" },
          { label: "Privacy", slug: "platform/privacy" },
          { label: "Versioning", slug: "platform/versioning" },
        ] },
      ],
    }),
  ],
});
