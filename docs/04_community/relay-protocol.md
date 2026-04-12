---
title: Relay Protocol (WIP)
sidebar_label: Relay Protocol (WIP)
description: Draft wire protocol for gregCore multiplayer relay transport and session lifecycle.
---

:::caution WIP
Protocol draft for cooperative sessions in **Data Center (Waseku)**.
:::

## Protocol Principles

- Relay forwards packets; no gameplay logic in relay.
- Host remains authoritative.
- Packet types are byte enums to reduce overhead.
- Message payloads are compact and versioned.

## Base Packet Shape

```json
{
  "t": 2,
  "sid": "abc123",
  "ts": 1744420200,
  "seq": 4721,
  "d": {}
}
```

## Channel Intent

- `RELIABLE_ORDERED`: critical world state mutations
- `RELIABLE_UNORDERED`: non-order-sensitive reliable updates (chat/inventory diffs)
- `UNRELIABLE`: high-frequency transient state (positions)

## Session Lifecycle

1. Host creates session via relay.
2. Relay issues join code.
3. Client joins by code.
4. Host sends full snapshot.
5. Delta updates stream during session.

## Planned Event Surface

- `greg.RELAY.SessionCreated`
- `greg.RELAY.PlayerJoined`
- `greg.RELAY.PlayerLeft`
- `greg.RELAY.HostMigrated`
- `greg.RELAY.PacketSent`
- `greg.RELAY.PacketReceived`

## Security / Trust (Draft)

- Session-scoped identity tokens
- Replay protection via sequence/timestamp checks
- Optional message signing for admin/relay control paths
