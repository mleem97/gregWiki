---
title: Troubleshooting (WIP)
sidebar_label: Troubleshooting (WIP)
description: Known runtime issues, workarounds, and status notes for demo/full-version transitions.
---

:::info
Operational troubleshooting notes for issues reported by community and acknowledged in roadmap discussions.
:::

## Known Issues

| Topic | Status | Workaround |
| --- | --- | --- |
| Motion blur / camera smoothness startup mismatch (`B-82`) | 🎮 GAME-LEVEL | Re-apply settings each launch until game-side fix ships |
| Demo settings persistence gaps (`B-82`) | 🎮 GAME-LEVEL | Keep preferred graphics/input profile checklist |
| Dumpster usage discoverability (`B-75`) | ✅ ALREADY IN GAME | Hold item and press `E` near dumpster |
| 0.0m cable leftovers | ⚠️ PARTIAL | Track for cleanup policy in `GregBatchCleanupService` |
| Second entrance availability (`B-45`) | ✅ ALREADY IN GAME | Confirm patch `1.0.44` or newer |

## Documentation Rule

When an issue is game-owned, keep this page as user guidance and avoid marking framework implementation as complete.
