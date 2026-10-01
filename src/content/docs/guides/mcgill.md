---
title: McGill University edition
description: Import a myCourses calendar and use Gapwise's source-backed downtown campus navigation.
---

The McGill edition is available at [mcgill.gapwise.ca](https://mcgill.gapwise.ca). Its initial campus scope is the downtown Montreal campus. Gapwise does not currently claim coverage of Macdonald Campus, indoor routes, construction detours, or verified step-free paths.

## Import a timetable

Gapwise accepts the standard `.ics` calendar export documented by McGill for myCourses:

1. Open the myCourses Calendar and enable calendar feeds.
2. Choose **Subscribe** and select the course events to export.
3. Choose **Download** and save the `.ics` file.
4. Open `mcgill.gapwise.ca` and import that file locally in the browser.

Gapwise does not ask for a McGill username or password, scrape Minerva, or upload the original calendar file. Events whose summaries do not contain a recognizable McGill course code remain excluded with an import warning; unmatched physical locations remain visible without being attached to an invented building.

McGill's official instructions are available in the [myCourses calendar guide](https://teachingkb.mcgill.ca/tlk/organize-your-course-schedule-and-create-task-list).

## Campus data and routing

The downtown model combines factual building identity from McGill's published campus map and exam-location directory with redistributable OpenStreetMap footprints, entrance nodes, and outdoor pedestrian ways. Explicitly mapped entrances retain their OSM identity. Short building-to-path connectors are labeled inferred, and entrance access remains unknown unless the source explicitly marks it restricted.

The initial release includes building discovery, outdoor pedestrian routing, Day Route, and between-class planning for mapped downtown locations. Step-free routing is unavailable because accessibility has not been verified for this graph. See the [Gapwise Data source notes](https://github.com/GapwiseHQ/data/blob/main/docs/universities/mcgill-sources.md) for the exact provenance and exclusions.
