---
title: EOL System Guide (WIP)
sidebar_label: EOL System Guide (WIP)
description: Planned EOL architecture for policy overrides, tiers, upgrades, and dispatch integration.
---

:::caution WIP
This is a design track for a configurable EOL model; not all APIs are available yet.
:::

## Goals

- Improve EOL gameplay without forcing global disable.
- Support tiered hardware (MK I / II / III).
- Support repair and replacement policies per profile.
- Integrate EOL queues with technician priority dispatch.

## Required Services

- `GregEolPolicyService`
- `GregServerTierRegistry`
- `GregEolJobListService`
- `GregTechnicianSpeedService`
- `GregEolSortingService`

## Current Status

| Capability | Status |
| --- | --- |
| Basic broken/repaired hooks | ✅ FULL |
| EOL policy override | ❌ MISSING |
| Tier-based EOL duration | ❌ MISSING |
| Usage-based degradation model | ❌ MISSING |
| Bulk EOL queue actions | ⚠️ PARTIAL |
