---
id: documentation-layout
title: Documentation layout (`docs/`)
sidebar_label: Documentation layout
description: How curated docs, guides, and the legacy GitHub Wiki mirror are organized under docs/.
---

# Documentation layout (`docs/`)

This folder is the **single source of truth** for the public Docusaurus site. The app lives in the **gregWiki** repository root next to `docs/`; pages are served under the **`/wiki`** base path.

## How content is organized

| Area | Path | Purpose |
|------|------|--------|
| **Landing** | [`intro` → `/wiki/docs`](/wiki/docs) | Site home. |
| **Getting started** | [`getting-started.md`](../getting-started.md) | Onboarding (`getting-started`) + this layout page. |
| **Workspace** | [`workspace/`](../workspace/) | Map of `gregFramework/` repos on disk. |
| **Framework** | [`framework/`](../framework/) | Architecture, hooks, Hexmod. |
| **Plugins** | [`plugins/`](../plugins/) | `FFM.Plugin.*` wiki pages. |
| **Mods** | [`mods/`](../mods/) | Gameplay mods (`FMF.*`) + framework overview. |
| **Tools** | [`tools/`](../tools/) | Workshop uploader and related. |
| **Guides** | [`guides/`](../guides/) | Role-based paths (players, mod developers, contributors, sponsors). |
| **Releases** | [`releases/`](../releases/) | Per-artifact release notes. |
| **Reference** | [`reference/`](../reference/) | Naming, catalogs, MCP, release channels. |
| **Contributors** | [`contributors/`](../contributors/) | Repo inventory, Docusaurus workflow, design system. |
| **Roadmap** | [`roadmap/`](../roadmap/) | Planning docs. |
| **Topics hub** | [`topics/`](../topics/) | Cross-cutting overviews (assets, multiplayer, security, …). |
| **Meta** | [`meta/`](../meta/) | Workshop tooling notes, devserver API, backlog. |
| **Legacy** | [`legacy/`](../legacy/) | GitHub Wiki mirror under `legacy/wiki-import/`. |

## Legacy GitHub Wiki (`docs/legacy/wiki-import/`)

Long-form pages mirrored from the **GitHub Wiki** live here (synced from `.wiki/`).

1. Clone the wiki working tree as **`../.wiki/`** under `gregFramework/` (same level as sibling repos).
2. From **gregWiki** root: `npm run wiki:refresh` (or `wiki:sync` → `wiki:normalize-i18n`).
3. German paired pages live under `i18n/de/docusaurus-plugin-content-docs/current/legacy/wiki-import/` after normalization.
4. Prefer **new curated docs** under `guides/`, `reference/`, or `framework/`; keep bulk legacy material in `legacy/wiki-import/` until migrated.

Details: [`topics/wiki-import/overview`](../topics/wiki-import/overview.md).

## URLs

- Doc id `intro` → `/wiki/docs`.
- Typical doc → `/wiki/<doc-id-path>` (e.g. `mods/framework` → `/wiki/mods/framework`).

## Scripts (gregWiki root)

| Script | Role |
|--------|------|
| `wiki:sync` | Copies `.wiki/` → `docs/legacy/wiki-import/`. |
| `wiki:normalize-i18n` | Splits DE/EN pairs into default locale + `i18n/de/...`. |
| `write-wiki-import-category-keys` | Refreshes `_category_.json` keys under imported trees. |

## Locales

- **Default:** `en` — files under `docs/`.
- **Deutsch:** overrides under `i18n/de/docusaurus-plugin-content-docs/current/` mirroring `docs/` paths.
- **fr, es, ru, ja:** fallback to English where no file exists.
