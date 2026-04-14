---
title: Publishing, Deployment & Web Platforms
sidebar_label: Publishing & Platform
description: Tooling for releases, workshop publishing, docs deployment, and ecosystem websites.
---

## Source, releases, and mirrors

- **GitHub releases** (primary public release channel)
  - Example: `https://github.com/mleem97/gregCore/releases`
- **Gitea mirror / team workspace**
  - `https://git.datacentermods.com/teamGreg`

## Community and entry points

- **Main entry / redirect surface:** `https://datacentermods.com`
- **Project website:** `https://gregframework.eu`
- **Discord invite:** `https://discord.gg/greg`

## Deployment and operations tools

- **Docker / Compose**
  - Use for reproducible local docs/services runtime.
- **Coolify**
  - Useful for self-hosted deployment pipelines.
  - Practical note: keep `package.json` and lockfile in sync for `npm ci`-based builds.

## Docs maintenance tools in this repo

- `scripts/sync-wiki-to-docs.mjs`
- `scripts/fix-wiki-import-en-links.mjs`
- `scripts/normalize-wiki-import-i18n.mjs`
- `scripts/write-wiki-import-category-keys.mjs`

## Layer mapping

- **ModManager / Platform layers:** release, distribution, deployment.
- **Core SDK layer:** consumed artifacts and compatibility guarantees.
