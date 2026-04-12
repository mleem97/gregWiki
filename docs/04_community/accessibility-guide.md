---
title: Accessibility Guide (WIP)
sidebar_label: Accessibility Guide (WIP)
description: Accessibility planning for UI scale, typography, color support, and visibility tools.
---

:::caution WIP
Accessibility features span framework and game UI layers; some controls are game-level dependent.
:::

## Planned APIs

- `GregAccessibilityService`
- `GregColorAccessibilityService`
- `GregModSettingsService` (Accessibility tab)
- `greg.SYSTEM.AccessibilitySettingChanged`

## Feature Scope

- UI scale presets.
- Font size/weight preferences.
- Colorblind overlays for cables/drums/labels.
- Optional wire tracer tool for packet visibility.

## Status

| Capability | Status |
| --- | --- |
| Color accessibility overlays | ❌ MISSING |
| UI scale and typography contract | ⚠️ PARTIAL GAME-LEVEL |
| Accessibility settings persistence | ❌ MISSING |
