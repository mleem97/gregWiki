---
title: Performance Optimization Guide (WIP)
sidebar_label: Performance Optimization Guide (WIP)
description: Operational tuning for routes, packet effects, CPU loops, and high-scale technician automation.
---

:::caution WIP
This page tracks optimization proposals and safe implementation boundaries for IL2CPP/Unity runtime constraints.
:::

## High Priority Tracks

1. Orb/data packet rendering density and toggles.
2. Route reevaluation reduction and pointer-swap where safe.
3. Dispatch and EOL queue batching.
4. Inventory/trolley object check throttling.

## Planned Services / Hooks

- `GregPerformanceProfilerService`
- `greg.SYSTEM.PerformanceThrottleApplied`
- `greg.SYSTEM.OrbRenderDensityChanged`
- `greg.NETWORK.OrbPerCustomerToggled`
- `greg.SERVER.RoutePointerSwapped`
- `greg.SERVER.RouteFullReevaluated`

## Already in Game

- Wire packet light toggle: `✅ ALREADY IN GAME` (documented setting path pending screenshot update).
