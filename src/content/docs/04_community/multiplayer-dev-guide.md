---
title: Multiplayer Dev Guide (WIP)
sidebar_label: Multiplayer Dev Guide (WIP)
description: Developer guide for building multiplayer-compatible mods with host authority and deterministic state handling.
---

:::caution WIP
Guidance is for **Data Center (Waseku)** and the planned gregCore multiplayer stack.
:::

## Goal

Enable mod authors to write features that remain stable under host-authority multiplayer.

## Compatibility Rules

- Treat host as authoritative for all world-changing actions.
- Avoid direct state mutation on clients for shared world objects.
- Use request/response semantics for critical interactions.
- Keep payloads deterministic and versioned.

## Recommended Interaction Pattern

1. Client sends action request.
2. Host validates against lock/state rules.
3. Host emits grant/deny.
4. On grant: host applies state and broadcasts delta.
5. On deny: client rolls back prediction and applies correction.

## Suggested Hook Families (planned)

- `greg.MP.ActionRequested`
- `greg.MP.ActionGranted`
- `greg.MP.ActionDenied`
- `greg.MP.StateCorrection`
- `greg.MP.ItemLocked`
- `greg.MP.ItemUnlocked`
- `greg.MP.SnapshotReceived`

## Sync Priorities

- **High:** item ownership, rack slot mutations, cable connect/disconnect
- **Medium:** customer assignments, dispatch actions, route outcomes
- **Low:** cosmetic-only animation detail

## Anti-Patterns

- Client-side final authority for rack/cable/customer state
- Multiple independent route evaluations on each client
- Non-versioned packet payloads
- Long-running mutable locks without timeout handling
