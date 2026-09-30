---
title: Gapwise CLI
description: Install the official Gapwise command-line tool for multi-university campus discovery, public API queries, and university integration scaffolding.
---

The [Gapwise CLI](https://github.com/GapwiseHQ/cli) is an open-source command-line interface for developers and campus data contributors. It queries the [public API](/api/) for university and campus discovery, buildings, residences, places, and routing. Its maintainer commands scaffold and validate integrations in sibling `gapwise` and `data` checkouts. It does not access a student's private timetable or account.

## Install and maintain

Use Node.js **22 or newer**. Install the current verified [`@gapwise/cli` package from npm](https://www.npmjs.com/package/@gapwise/cli):

```sh
npm install -g @gapwise/cli@0.2.1
gapwise --version
gapwise --help
```

Upgrade with `npm install -g @gapwise/cli@latest`. Uninstall with `npm uninstall -g @gapwise/cli`. The [CLI repository](https://github.com/GapwiseHQ/cli) has the MIT license, tests, release workflow, and source history.

## Discover universities and campuses

```sh
gapwise universities
gapwise campuses --university uoft
gapwise campuses --university carleton
gapwise campuses --university york
```

Gapwise currently supports 13 universities and 15 campus models. Discovery shows canonical IDs, names, and routing availability. Public campus queries require `--university ID`; otherwise the API's historical U of T default could silently give the wrong edition's data. `--campus` selects one of that university's campus IDs; omitting it uses that university's default campus.

## Query public campus facts

```sh
gapwise buildings --university carleton --query library
gapwise residences --university york --limit 10
gapwise buildings --university tmu --category academic
gapwise places --university uoft --campus utm --kind study
gapwise route --university carleton --from TB --to ML
```

The CLI reports empty results when a campus has no matching public records. Routing is refused when the selected campus is not routable; route results retain API warnings and verification status. Place availability and route coverage are source dependent.

For scripts, add `--json` to print the full `{ data, meta }` response to stdout. Errors go to stderr and set a nonzero exit code:

```sh
gapwise buildings --university carleton --query library --json
```

The CLI is intentionally a thin public API client. For pagination, advanced queries, application integrations, and all public v1 operations, use the [API reference](/api/) or [official SDKs](/sdk/javascript/).

## University integration tooling

Clone [cli](https://github.com/GapwiseHQ/cli), [gapwise](https://github.com/GapwiseHQ/gapwise), and [data](https://github.com/GapwiseHQ/data) as sibling repositories. Pass their parent directory with `--workspace PATH` or `GAPWISE_WORKSPACE` if they are elsewhere. App validation and development also require the runtimes used by those repositories, including Bun.

```sh
gapwise university create example-university --name "Example University" --dry-run
gapwise university validate carleton
gapwise university test carleton
gapwise university dev carleton
gapwise data validate carleton
```

The scaffold starts inactive with empty campus data and a deliberately unimplemented timetable adapter. Review source rights and evidence before activation. See [Add a university](/guides/add-university/) for the full workflow.

Gapwise is an independent project and is not affiliated with or endorsed by the supported universities.
