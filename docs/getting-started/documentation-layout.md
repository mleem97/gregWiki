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
| **Workspace** | [`workspace/`](../workspace/index.mdx) | Map of `gregFramework/` repos on disk. |
| **Framework** | [`framework/`](../framework/architecture.md) | Architecture, hooks, Hexmod. |
| **Plugins** | [`plugins/`](../plugins/index.md) | `FFM.Plugin.*` wiki pages. |
| **Mods** | [`mods/`](../mods/index.md) | Gameplay mods (`FMF.*`) + framework overview. |
| **Tools** | [`tools/`](../tools/workshop-uploader.md) | Workshop uploader and related. |
| **Guides** | [`guides/`](../guides/players/overview.md) | Role-based paths (players, mod developers, contributors, sponsors). |
| **Releases** | [`releases/`](../releases/index.mdx) | Per-artifact release notes. |
| **Reference** | [`reference/`](../reference/wiki-mapping.md) | Naming, catalogs, MCP, release channels. |
| **Contributors** | [`contributors/`](../contributors/repo-inventory.md) | Repo inventory, Docusaurus workflow, design system. |
| **Roadmap** | [`roadmap/`](../roadmap/unified-roadmap.md) | Planning docs. |
| **Topics hub** | [`topics/`](../topics/index.md) | Cross-cutting overviews (assets, multiplayer, security, …). |
| **Meta** | [`meta/`](../meta/Steam-Workshop-and-Tooling.md) | Workshop tooling notes, devserver API, backlog. |
| **Legacy** | [`legacy/`](../legacy/index.md) | GitHub Wiki mirror under `legacy/wiki-import/`. |

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
- **Deutsch (`de`):** overrides under `i18n/de/docusaurus-plugin-content-docs/current/` mirroring `docs/` paths where translated files exist; otherwise Docusaurus falls back to English.
