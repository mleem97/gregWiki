---
title: Network Infrastructure Guide (WIP)
sidebar_label: Network Infrastructure Guide (WIP)
description: Planned network stack upgrades including stacking, patch panel dual-side flows, VLAN, and media conversion.
---

:::caution WIP
Not all requested networking features are framework-only; some are game-level dependent.
:::

## Focus Areas

- Switch stacking and logical aggregation.
- Patch panel dual-side routing behavior.
- VLAN and segmented policy handling.
- Media converter support (`RJ45 ↔ SFP`).
- Throughput visibility per switch port.

## Current Baseline

- Rich network hook surface exists (`greg.NETWORK.*`).
- `GregNetworkCompatibilityService` exists.
- Dedicated stack/panel/VLAN orchestration services are still missing.

## Planned Hooks

- `greg.NETWORK.PatchPanelPortConnected`
- `greg.NETWORK.SwitchStackFormed`
- `greg.NETWORK.VlanConfigured`
- `greg.NETWORK.PortThroughputChanged`
- `greg.NETWORK.MediaConverterConnected`
