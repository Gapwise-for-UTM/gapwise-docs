---
title: Routing
description: Deterministic UTM building-to-building routing.
---

Use `POST /api/utm-route` for deterministic UTM routing.

```json
{
  "from": "MN",
  "to": "IB"
}
```

Routing is based on Gapwise's bundled campus graph. It does not call an LLM or fabricate missing indoor/accessibility paths. Preserve the response's status, warnings, verification, and accuracy fields in your own UI.
