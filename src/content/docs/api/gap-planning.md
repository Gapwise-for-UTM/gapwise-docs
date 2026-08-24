---
title: Gap planning
description: Route-aware deterministic assessment of time between classes.
---

Use `POST /api/utm-gap-plan` to assess whether a gap is practically usable after accounting for travel and protected transition time.

```json
{
  "from": "MN",
  "to": "IB",
  "term": "Fall",
  "weekday": "Wednesday",
  "startTime": 660,
  "endTime": 780
}
```

Gap planning is deterministic. Treat its uncertainty and route-coverage fields as part of the contract.
