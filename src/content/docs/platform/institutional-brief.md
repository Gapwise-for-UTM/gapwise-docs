---
title: Institutional Overview & Brief
description: Executive overview of Gapwise for university stakeholders, student unions, and campus partners.
---

import { Aside } from '@astrojs/starlight/components';

<Aside type="note" title="Non-Affiliation Disclosure">
Gapwise is an independent, open-source student platform created by Andrew Muratov. It is not an official service of any university and does not claim official endorsement or sponsorship unless formalized through written agreement.
</Aside>

## Executive Summary

**Gapwise** is a free, privacy-first, open-source campus intelligence and schedule movement platform. It bridges the gap between academic course schedules and physical campus navigation.

While existing institutional portals typically end at exporting calendar blocks or displaying static PDF campus maps, Gapwise connects student schedules to verified campus geometry:
- **True Usable Time**: Automatically deducts walking travel time, room transition buffers, and meal periods from raw breaks to show true productive study windows.
- **Pedestrian Navigation**: Computes outdoor walking routes between verified campus building entrances, including step-free accessibility options.
- **Multi-University Scale**: Supports **13 Canadian universities and 15 campus models**, mapping academic buildings, source-classified entrances, student places, and 199 university residences.

---

## Origin & Leadership

Gapwise was created by **Andrew Muratov**, a first-year student at the University of Toronto Mississauga (UTM) and the project's lead engineer. 

The project began from a universal student experience: navigating large university campuses with fragmented tools. Commercial mapping applications fail inside university grounds (they lack building interior context, campus shortcuts, official building acronyms, and verified entrance doors), while student information systems stop at listing lecture times.

Gapwise was engineered from day one to demonstrate that student software can be high-performance, beautiful, and architecturally respectful of privacy.

---

## Platform Scope & University Coverage

Gapwise currently serves 13 Canadian universities across 15 campus models with dedicated, edition-specific web portals:

| University | Campus Model(s) | Status | Edition URL |
| :--- | :--- | :---: | :--- |
| **University of Toronto** | Mississauga (UTM), St. George (UTSG), Scarborough (UTSC) | Supported | `gapwise.ca` |
| **Carleton University** | Ottawa Campus | Supported | `carleton.gapwise.ca` |
| **Toronto Metropolitan University (TMU)** | Downtown Toronto Campus | Supported | `tmu.gapwise.ca` |
| **York University** | Keele Campus | Supported | `york.gapwise.ca` |
| **McMaster University** | Main Hamilton Campus | Supported | `mcmaster.gapwise.ca` |
| **Queen's University** | Kingston Campus | Supported | `queens.gapwise.ca` |
| **Western University** | London Campus | Supported | `western.gapwise.ca` |
| **Wilfrid Laurier University** | Waterloo Campus | Supported | `laurier.gapwise.ca` |
| **University of Guelph** | Guelph Campus | Supported | `guelph.gapwise.ca` |
| **University of Ottawa** | Downtown Ottawa Campus | Supported | `uottawa.gapwise.ca` |
| **Brock University** | St. Catharines Campus | Supported | `brock.gapwise.ca` |
| **University of British Columbia** | Vancouver / Point Grey Campus | Supported | `ubc.gapwise.ca` |
| **University of Waterloo** | Main Campus | Supported | `waterloo.gapwise.ca` |

---

## Core Capabilities

### 1. Timetable Ingestion & Schedule Context
- **Client-Side Parsing**: Calendar exports (`.ics`, ACORN, Carleton Central, RAMSS/MyServiceHub, etc.) are parsed locally inside the browser using WebAssembly and TypeScript. Raw calendar files are never sent to or stored on Gapwise servers.
- **Deterministic Schedule Alignment**: Harmonizes course components, lecture sections, tutorial rooms, recurring weekday patterns, and academic term boundaries.

### 2. Pedestrian Campus Navigation & Routing
- **Verified Entrances**: Navigation connects specific entrance coordinates rather than arbitrary building centroid pins.
- **Accessibility by Architecture**: Provides step-free route selection, avoiding exterior stairs and steep inclines where verified data exists.
- **University Housing**: First-class support for 199 university residences across all supported campuses without recording private room numbers.

### 3. Gap Planning & Time Budgeting
- Translates unstructured breaks between lectures into actionable categories: meals, focused study sessions, quick resets, or work blocks.
- Accounts for realistic walking speed, packing buffers, and transit arrival windows.

---

## Open Ecosystem & Developer Infrastructure

Gapwise publishes an enterprise-grade open developer surface:

- **Public REST API**: Canonical versioned endpoints (`https://api.gapwise.ca/v1/`) for universities, campuses, buildings, places, and routes.
- **Official SDKs**: Published client libraries for [TypeScript/JavaScript (`@gapwise/sdk`)](https://www.npmjs.com/package/@gapwise/sdk) and [Python (`gapwise`)](https://pypi.org/project/gapwise/).
- **Model Context Protocol (MCP)**: Provider-neutral remote AI service (`https://ai.gapwise.ca`) exposing stateless campus intelligence and permissioned student context.
- **Developer CLI**: Open-source command-line tool ([`@gapwise/cli`](https://github.com/GapwiseHQ/cli)) for university scaffolding and data validation.
- **Open Campus Datasets**: Published, verifiable GeoJSON datasets under the [`GapwiseHQ/data`](https://github.com/GapwiseHQ/data) repository.

---

## Privacy & Security Model

<Aside type="tip" title="Privacy by Design">
Gapwise does not collect, sell, or monetize student data. There are no advertisements, third-party behavioral trackers, or invasive fingerprinting scripts.
</Aside>

1. **Zero-PII Guest Mode**: Students can import schedules, plan gaps, and navigate campus with zero account creation and no email address required.
2. **Application-Layer Encryption**: For students who opt into cloud synchronization across devices, records are encrypted client-side using the browser Web Crypto API before ciphertext reaches the database.
3. **Transparent Telemetry**: Only minimal, coarse aggregate metrics (anonymous event counters like page views and route requests) are recorded to monitor service capacity. Do Not Track (DNT) and Global Privacy Control (GPC) signals are honored unconditionally.
4. **Responsible Disclosure**: Maintained Vulnerability Disclosure Policy at [`gapwise.ca/security`](https://gapwise.ca/security) and RFC 9116 security contact at [`gapwise.ca/.well-known/security.txt`](https://gapwise.ca/.well-known/security.txt).

---

## Meaningful Institutional Collaboration

Gapwise welcomes non-bureaucratic, collaborative engagement with university groups:

### For Student Unions & Student Experience Offices
- **New Student Orientation**: Distribute Gapwise as a free, privacy-first wayfinding and timetable utility for first-year and commuter students.
- **Campus Guides**: Include links on official student union service hubs and linktrees.

### For University Accelerators & Innovation Hubs (e.g., ICUBE UTM)
- **Venture Incubation**: Founder mentorship, peer advisory, and competition participation (e.g., U of T Desjardins Startup Prize).
- **Showcase**: Highlight Gapwise as a flagship example of undergraduate software engineering and public-interest technology.

### For Academic Planning & Registrars
- **Data Validation**: Technical feedback on anonymized calendar export structures to guarantee continuous timetable import accuracy across academic calendar cycles.
- **Zero IT Burden**: Gapwise requires no direct institutional IT integration, custom database access, or server infrastructure from the university.

---

## Contact & Links

- **Creator & Lead Engineer**: Andrew Muratov (`andrewamuratov@gmail.com`)
- **General Support**: `support@gapwise.ca`
- **Security Inquiries**: `security@gapwise.ca`
- **Web Application**: [`https://gapwise.ca`](https://gapwise.ca)
- **Developer Documentation**: [`https://docs.gapwise.ca`](https://docs.gapwise.ca)
- **GitHub Organization**: [`https://github.com/GapwiseHQ`](https://github.com/GapwiseHQ)
- **Printable Single-Page PDF Brief**: [`https://gapwise.ca/institutional-brief.html`](https://gapwise.ca/institutional-brief.html)
