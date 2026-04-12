---
title: Staff Management Guide (WIP)
sidebar_label: Staff Management Guide (WIP)
description: Technician leveling, certifications, auto-rules, and assignment orchestration.
---

:::caution WIP
This guide tracks Batch 3 workforce requests (`B-57`) and their overlap with dispatch backlog work.
:::

## Scope

- Technician leveling and XP progression.
- Certification unlocks (for example CCNA/LPIC tracks).
- Rule-based automatic task assignment.
- Staff app terminal panel and operational controls.

## Planned Services

- `GregEmployeeRegistry` (extended leveling profile)
- `GregDispatchService` (rule-based execution)
- `GregTechnicianSpeedService` (level bonuses)
- `GregEmployeeCertificationRegistry`
- `GregModSettingsService` (staff app tab)

## Planned Hooks

- `greg.EMPLOYEE.LevelUp`
- `greg.EMPLOYEE.CertificationEarned`
- `greg.EMPLOYEE.AutoRuleTriggered`

## Status

| Capability | Status |
| --- | --- |
| Base employee registry | ⚠️ PARTIAL IN CORE |
| Leveling and certification contract | ❌ MISSING |
| Rule engine for auto-assignment | ❌ MISSING |
| Terminal staff app integration | ❌ MISSING |
