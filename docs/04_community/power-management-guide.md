---
title: Power Management Guide (WIP)
sidebar_label: Power Management Guide (WIP)
description: UPS/generator/power failure and billing integration roadmap.
---

:::caution WIP
Power stack requests require new framework APIs and selected game-level integration points.
:::

## Planned Services and Hooks

- `GregPowerManagementService`
- `GregElectricityBillingService`
- `greg.SYSTEM.PowerFailureDetected`
- `greg.SYSTEM.UpsActivated`
- `greg.SYSTEM.GeneratorStarted`
- `greg.ECONOMY.ElectricityBillPaid`

## Status

| Area | Status |
| --- | --- |
| Power failure hook layer | ❌ MISSING |
| UPS/generator state modeling | ❌ MISSING |
| Electricity billing integration | ❌ MISSING |
| DHCP lease event coupling | ❌ MISSING |
