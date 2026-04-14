---
title: Performance Guide (WIP)
sidebar_label: Performance Guide (WIP)
description: Runtime bottlenecks and framework-level optimization strategies for large saves.
---

:::caution WIP
This page will be synchronized with profiler captures and benchmark sessions.
:::

## Main Bottleneck Areas

- Route reevaluation churn on high device counts.
- High-volume object checks (inventory/trolley/debris loops).
- Heavy visual packet/orb rendering.
- Dispatch queue and repeated candidate scans.

## Planned Framework Mitigations

- Batch interval scheduler for heavy loops.
- Route pointer-swap optimization where safe.
- Configurable visual density and per-customer toggles.
- Dispatch queue priority and batching.
- Unified cleanup classifier to reduce redundant scans.

## Related Feature Tracks

- `performance-optimization-guide.md`
- `technician-management-guide.md`
- `asset-management-guide.md`
