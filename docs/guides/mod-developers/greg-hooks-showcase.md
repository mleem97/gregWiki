---
title: Greg hooks showcase (sample mod)
sidebar_label: Greg hooks showcase
description: Subscribe to greg.* hooks via GregShowcaseMod, GregEventDispatcher, GregPayload, and optional OnCancelable veto.
---

# Greg hooks showcase

The **gregFramework** repo ships **GregShowcaseMod** at `mods/GregShowcaseMod/`. It demonstrates the public API only:

- `GregEventDispatcher.On` / `Once` / `OnCancelable` / `UnregisterAll`
- `GregHookName.Create(GregDomain.*, "Action")`
- `GregPayload.Get<T>` / `GregPayload.Dump` for anonymous payloads

## Canonical hook strings

Runtime names look like `greg.<DOMAIN>.<Action>`. Always build them with `GregHookName.Create` — do not concatenate raw strings in mods.

## Registry

**`greg_hooks.json`** at the **gregFramework** repository root is the canonical catalog (`description`, `payloadSchema`, `strategy`, optional `legacy`). A copy is emitted next to **`FrikaModdingFramework.dll`** for `GregCompatBridge` legacy resolution.

Authoritative documentation: [greg hooks registry (IL2CPP)](/wiki/reference/greg-hooks-registry) — regeneration script, whitelist, and Harmony deduplication rules.

## FFI bridge and greg.* emission

`DataCenterModLoader.EventDispatcher` emits **`greg.*`** events through **`GregHookIntegration`** for the same gameplay moments as the Rust FFI event ids (money, cables, customers, save/load, etc.), even when the FFI bridge is not connected.

## Payload access patterns

**Pattern A — dynamic (anonymous types from compiler):**

```csharp
private static void OnCoinChanged(object payload)
{
    dynamic p = payload;
    float delta = (float)p.coinChangeAmount;
    float balance = (float)p.newBalance;
    MelonLogger.Msg($"Δ={delta} → {balance}");
}
```

**Pattern B — `GregPayload` (reflection, case-insensitive property names):**

```csharp
private static void OnReputationChanged(object payload)
{
    var amount = GregPayload.Get<float>(payload, "amount");
    var rep = GregPayload.Get<float>(payload, "reputation");
    MelonLogger.Msg($"Reputation: {amount} → {rep}");
}
```

**Pattern C — typed record (when you define a shared contract in your mod or core):**

```csharp
// public record PlayerMoneyPayload(float CoinChangeAmount, float NewBalance, bool WithoutSound, bool Accepted);
// if (payload is PlayerMoneyPayload p) { ... }
```

Use **`GregPayload.Dump(payload)`** for one-line debug strings.

## Prefix hooks and cancellation

Hooks that run **before** the original method (Harmony Prefix) can call **`GregEventDispatcher.InvokeCancelable(hookName, payload)`**. Mods register **`GregEventDispatcher.OnCancelable(hookName, p => bool, modId)`**; if any handler returns `false`, the integration can skip the original (e.g. `Player.UpdateCoin`). Der Showcase nutzt **`GregNativeEventHooks.PlayerCoinChanged`** (`greg.PLAYER.CoinChanged`).

Showcase: enable `blockNegativeTransactions` in `content/modconfig.json` to register a veto on large negative `coinChangeAmount` values.

## Configuration

Edit **`content/modconfig.json`** next to the built DLL (defaults are copied from the repo). Keys include `logPlayerEvents`, `logNetworkEvents`, `blockNegativeTransactions`, `reputationWarningThreshold`.

## See also

- [Mod developers (hub)](./overview)
- [System architecture principles](/wiki/meta/system-architecture-principles)
- [Framework](/wiki/mods/framework)
