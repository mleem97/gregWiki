---
title: Workshop Uploader
sidebar_label: Workshop Uploader
description: Practical checklist and tooling references for Steam Workshop upload flows.
---

This page centralizes Workshop-related tooling references for mod authors.

## What to prepare

- Build output (`.dll`, assets, metadata)
- Changelog and semantic versioning notes
- Preview images and clear mod description

## Tooling options

- **ModManager-based flow**
  - Use `gregModmanager` when you want guided publishing UX.
- **Scripted/CLI flow**
  - Use project scripts and CI automation for reproducible release pipelines.
- **Steam tooling**
  - Validate app/workshop targets and credentials before upload.

## Validation checklist

1. Verify runtime load locally (`MelonLoader/Latest.log`).
2. Validate compatibility with current `gregCore` pre-release/stable target.
3. Confirm dependencies in release notes.
4. Upload and re-download once to verify final package integrity.

## Related pages

- `/wiki/community/mod-index`
- `/wiki/community/mod-security-policy`
- `/wiki/community/troubleshooting`
- `/wiki/development/modding-guides/prepare-content-workshop`
