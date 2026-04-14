---
title: Asset Management Guide (WIP)
sidebar_label: Asset Management Guide (WIP)
description: Sorting, filtering, and queue management extensions for asset operations.
---

:::caution WIP
Asset management sorting/filtering is planned for framework-side composition to avoid fragile UI patches.
:::

## Planned Features

- Sort by EOL, label, state, and custom priority.
- Clickable headers with asc/desc order.
- Filter views for open/new/in-progress jobs.
- Queue-all and queue-priority actions.

## Planned APIs

- `GregAssetManagementUIExtension`
- `GregJobListFilterService`
- `GregEolSortingService`
- `GregDispatchService`
- `greg.SYSTEM.AssetManagementSorted`

## Status

| Capability | Status |
| --- | --- |
| Basic list hooks and events | ⚠️ PARTIAL |
| Multi-column sorting and priority model | ❌ MISSING |
| Stable UI extension contract | ❌ MISSING |
