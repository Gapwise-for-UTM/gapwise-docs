import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

const STATUS_ORIGIN = "https://status.gapwise.ca";

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;

  if (route.id !== "status" && !route.id.startsWith("status/")) {
    return;
  }

  const publicUrl = new URL(context.url.pathname, STATUS_ORIGIN).href;

  for (const entry of route.head) {
    if (entry.tag === "link" && entry.attrs?.rel === "canonical") {
      entry.attrs.href = publicUrl;
    }

    if (entry.tag === "meta" && entry.attrs?.property === "og:url") {
      entry.attrs.content = publicUrl;
    }
  }
});
