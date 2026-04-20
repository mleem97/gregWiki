---
title: Multiplayer Readiness (WIP)
sidebar_label: Multiplayer Readiness (WIP)
description: Preparatory architecture for multiplayer-safe gregCore services and hook-bus behavior.
---

:::caution WIP
Multiplayer is game-level and post-release, but framework architecture can prepare now.
:::

## Readiness Principles

- Keep services instance-scoped where possible.
- Avoid hidden static state in cross-domain orchestration.
- Prefer deterministic event payloads for syncable actions.
- Define authoritative ownership boundaries per domain.

## Reserve Hooks

- `greg.SYSTEM.MultiplayerSessionStarted`

## Architectural Checklist

| Area | Status |
| --- | --- |
| Hook bus event shape consistency | ⚠️ PARTIAL |
| Service singleton removal audit | ❌ MISSING |
| Session lifecycle contract | ❌ MISSING |
| Multiplayer-safe persistence boundaries | ❌ MISSING |

## Scope Boundary

This page does not claim multiplayer implementation today; it tracks framework prerequisites only.
