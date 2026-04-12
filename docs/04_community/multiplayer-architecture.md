---
title: Multiplayer Architecture (WIP)
sidebar_label: Multiplayer Architecture (WIP)
description: Host-authority relay architecture for cooperative sessions in Data Center (Waseku).
---

:::caution WIP
This architecture targets cooperative multiplayer for **Data Center (Waseku)** only.
:::

## Scope

- Host-authority listen-server model
- Relay-mediated transport
- 2–4 players, cooperative only
- No PvP, no ranking, no dedicated fleet required

## Architecture Layers

- **Core SDK layer:** event/hook abstraction, state pipelines, authority decisions
- **Plugin layer:** multiplayer runtime module and sync adapters
- **Mod layer:** player-facing behavior and custom sync-aware features
- **Platform layer:** relay service, operational health, optional admin endpoints

## Transport and Session Model

- Host publishes authoritative world state
- Clients send action requests to host
- Host validates and broadcasts accepted state updates
- Relay only forwards packets/session metadata; relay has no gameplay authority

## Diagnostics-based Implementation Check (2026-04-11 snapshot)

Source files checked:

- `C:/Program Files (x86)/Steam/steamapps/common/Data Center/gregCore/Diagnostics/il2cpp-gameplay-index.txt`
- `C:/Program Files (x86)/Steam/steamapps/common/Data Center/gregCore/Diagnostics/il2cpp-event-catalog.txt`
- `C:/Program Files (x86)/Steam/steamapps/common/Data Center/gregCore/Diagnostics/game-signals-full.txt`

### Findings

- `il2cpp-gameplay-index.txt`: reports `status=missing_il2cpp_unpack_directory`.
- Event/signal catalogs contain strong candidates for multiplayer sync surfaces:
  - player/input actions (`OnDrop`, `OnInventory`)
  - rack lifecycle (`Rack.*`, `RackMount.*`, `RackDoor.*`)
  - cable/network surfaces (`Cable*`, `WaypointInitializationSystem.*`, `NetworkMap.*`)
  - customer/dispatch surfaces (`CustomerBase.*`, `TechnicianManager.EnqueueDispatch`, `ProcessDispatchQueue`)
- No native, complete multiplayer gameplay stack is exposed as a ready-to-use single subsystem.

### Coverage Verdict

| Area | Status | Notes |
| --- | --- | --- |
| Transport (relay + session) | ❌ MISSING IN CORE | Requires dedicated multiplayer module implementation |
| Host authority pipeline | ❌ MISSING IN CORE | Needs action request/grant/deny/correction flow |
| Player state sync candidates | ⚠️ PARTIAL SIGNALS | Runtime candidates exist, sync layer not implemented |
| Rack/server sync candidates | ⚠️ PARTIAL SIGNALS | Hooks/candidates exist, authority sync not implemented |
| Cable sync candidates | ⚠️ PARTIAL SIGNALS | Cable/path methods exist, deterministic strategy still required |
| Customer/route sync candidates | ⚠️ PARTIAL SIGNALS | Candidate methods exist, host-only evaluation not yet formalized |
| Turnkey multiplayer feature | ❌ NOT IMPLEMENTED | Still a WIP architecture target |

## Next Steps

1. Implement `gregMod.Multiplayer` runtime module skeleton.
2. Add relay protocol + packet channels.
3. Add host authority conflict resolution and state correction.
4. Start with player snapshot + position sync MVP before rack/cable/game-logic sync.
