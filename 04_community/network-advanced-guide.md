---
title: Network Advanced Guide (WIP)
sidebar_label: Network Advanced Guide (WIP)
description: Advanced networking backlog covering VLAN, LACP, MLAG, uplinks, FC/IB, and failover logic.
---

:::caution WIP
This page consolidates Batch 3 networking requests (`B-63`, `B-64`, `B-66`, `B-68`, `B-73`) into one architecture track.
:::

## Scope

- VLAN/trunk controls and oversubscription signals.
- LACP bonds and MLAG uplink models.
- Fiber patch panel and fibre channel compatibility preparation.
- Dual-uplink/failover workflows and switch policy constraints.

## Planned Services

- `GregNetworkCompatibilityService`
- `GregSwitchStackService`
- `GregPatchPanelService`
- `GregCustomerPolicyEngine`

## Planned Hooks

- `greg.NETWORK.LacpBondFormed`
- `greg.NETWORK.UplinkPortConnected`
- `greg.NETWORK.FiberPatchConnected`
- `greg.NETWORK.SwitchOversubscribed`
- `greg.SERVER.FailoverTriggered`

## Status

| Capability | Status |
| --- | --- |
| Base compatibility service | ✅ ALREADY IN CORE |
| LACP/MLAG orchestration | ⚠️ PARTIAL IN CORE |
| Dedicated uplink registry | ❌ MISSING |
| Fiber patch behavior parity | ⚠️ PARTIAL IN GAME |
| FC/IB late-game storage networking | ❌ MISSING |
