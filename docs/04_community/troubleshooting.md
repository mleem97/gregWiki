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

## Runtime Debug Case: `Interact.OnHoverOver` hook loop (resolved)

### Scope and layer ownership

- **Core SDK layer:** `gregCore` Harmony patch path around `Interact.OnHoverOver` (`GregHexViewerPatch`)
- **Mod layer symptom:** startup instability with early process termination during hover-driven interaction flow

### Verified diagnosis chain

1. **Crash signature collection:** Windows `Application Error (1000)` repeatedly showed stack overflow (`0xc00000fd`) in CLR modules.
2. **Dump forensics:** Managed stack inspection exposed recursive repetition of `OnHoverOver` trampoline frames and `GregHexViewerPatch.Postfix`.
3. **Mitigation:** The unsafe hover postfix path was guarded/disabled in the Core SDK layer to stop the recursion vector.
4. **Post-mitigation validation:** No further `0xc00000fd` overflow signatures were observed in follow-up startup runs.
5. **Current state distinction:** Recent short-lifetime runs can end as clean exits (no new `.NET Runtime 1026` or `Application Error 1000` events), which is different from the earlier hard crash loop.

### Operational guidance

- Treat this as a **stability gate**, not as final feature completion.
- Keep `Latest.log` + `Player.log` + Event Viewer triage as the default sequence for any recurrence.
- Re-enable hover-path behavior only after a non-recursive implementation passes repeated startup + interaction stress checks.
