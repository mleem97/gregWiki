---
id: documentation-layout
title: Documentation layout (`docs/`)
sidebar_label: Documentation layout
description: How curated docs, guides, and reference material are organized under docs/.
---

# Documentation layout (`docs/`)

This folder is the **single source of truth** for the public Docusaurus site. The app lives in the **gregWiki** repository root next to `docs/`; pages are served under the **`/wiki`** base path.

## How content is organized

| Area | Path | Purpose |
|------|------|--------|
| **Landing** | [`intro` → `/wiki`](/wiki) | Mod author wiki home (`slug: /`). |
| **Getting started** | [`getting-started.md`](../getting-started.md) | Onboarding (`getting-started`) + this layout page. |
| **Workspace** | [`workspace/`](../workspace/index.mdx) | Map of `gregFramework/` repos on disk. |
| **Framework** | [`framework/`](../framework/architecture.md) | Architecture, hooks, Hexmod. |
| **Plugins** | [`plugins/`](../plugins/index.md) | `FFM.Plugin.*` assemblies; repos `gregExt.*` on disk. |
| **Mods** | [`mods/`](../mods/index.md) | Gameplay mods (`FMF.*`); repos `gregMod.*` on disk. |
| **Tools** | [`tools/`](../tools/workshop-uploader.md) | GregModManager (Gregtools Modmanager / `WorkshopUploader` project). |
| **Guides** | [`guides/`](../guides/mod-developers/overview.md) | **Players** live on [`/players`](/players); this tree is mod developers, contributors, sponsors. |
| **Releases** | [`releases/`](../releases/index.mdx) | Per-artifact release notes. |
| **Reference** | [`reference/`](../reference/wiki-mapping.md) | Naming, catalogs, MCP, release channels. |
| **Contributors** | [`contributors/`](../contributors/repo-inventory.md) | Repo inventory, Docusaurus workflow, design system. |
| **Roadmap** | [`roadmap/`](../roadmap/unified-roadmap.md) | Planning docs. |
| **Topics hub** | [`topics/`](../topics/index.md) | Cross-cutting overviews (assets, multiplayer, security, …). |
| **Meta** | [`meta/`](../meta/Steam-Workshop-and-Tooling.md) | Workshop tooling notes, devserver API, backlog; **[architecture principles](../meta/system-architecture-principles.md)** (stack model & doc rules). |

## URLs

- Doc id `intro` → `/wiki` (root of the docs plugin).
- Typical doc → `/wiki/<doc-id-path>` (e.g. `mods/framework` → `/wiki/mods/framework`).

## Language

- **English only** — all curated content lives under `docs/`.

## Historical note

The former GitHub Wiki bulk import under `docs/legacy/wiki-import/` has been **removed**. Author new material under the folders above; use Git history if you need obsolete text.
