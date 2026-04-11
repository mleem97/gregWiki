---
title: Player Hooks
sidebar_label: Player Hooks
---
## PLAYER-CheckFallsThroughMap

---
title: greg.PLAYER.CheckFallsThroughMap
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Player.CheckFallsThroughMap"
---

# `greg.PLAYER.CheckFallsThroughMap`

## Description

- Auto-generated from Il2Cpp unpack: Player.CheckFallsThroughMap

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Player::CheckFallsThroughMap()` | Postfix | Auto-generated from Il2Cpp unpack: Player.CheckFallsThroughMap |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.PLAYER.CheckFallsThroughMap`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.PLAYER.CheckFallsThroughMap", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.PLAYER.CheckFallsThroughMap`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.PLAYER.CheckFallsThroughMap", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.PLAYER.CheckFallsThroughMap", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## PLAYER-ComponentInitialized

---
title: greg.PLAYER.ComponentInitialized
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Player.Start"
---

# `greg.PLAYER.ComponentInitialized`

## Description

- Auto-generated from Il2Cpp unpack: Player.Start
- Auto-generated from Il2Cpp unpack: PlayerHit.OnEnable
- Auto-generated from Il2Cpp unpack: PlayerManager.Awake
- Auto-generated from Il2Cpp unpack: PlayerManager.Start

## Patch Targets (Il2Cpp)

This hook name can be mapped to **4** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Player::Start()` | Postfix | Auto-generated from Il2Cpp unpack: Player.Start |
| `Il2Cpp.PlayerHit::OnEnable()` | Postfix | Auto-generated from Il2Cpp unpack: PlayerHit.OnEnable |
| `Il2Cpp.PlayerManager::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: PlayerManager.Awake |
| `Il2Cpp.PlayerManager::Start()` | Postfix | Auto-generated from Il2Cpp unpack: PlayerManager.Start |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `money` | `float` |
| `reputation` | `float` |
| `xp` | `float` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.PLAYER.ComponentInitialized`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.PLAYER.ComponentInitialized", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.PLAYER.ComponentInitialized`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.PLAYER.ComponentInitialized", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.PLAYER.ComponentInitialized", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## PLAYER-ConfinedCursorforUI

---
title: greg.PLAYER.ConfinedCursorforUI
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: PlayerManager.ConfinedCursorforUI"
---

# `greg.PLAYER.ConfinedCursorforUI`

## Description

- Auto-generated from Il2Cpp unpack: PlayerManager.ConfinedCursorforUI

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.PlayerManager::ConfinedCursorforUI()` | Postfix | Auto-generated from Il2Cpp unpack: PlayerManager.ConfinedCursorforUI |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.PLAYER.ConfinedCursorforUI`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.PLAYER.ConfinedCursorforUI", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.PLAYER.ConfinedCursorforUI`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.PLAYER.ConfinedCursorforUI", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.PLAYER.ConfinedCursorforUI", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## PLAYER-DefaultActionEffect

---
title: greg.PLAYER.DefaultActionEffect
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: PlayerManager.DefaultActionEffect"
---

# `greg.PLAYER.DefaultActionEffect`

## Description

- Auto-generated from Il2Cpp unpack: PlayerManager.DefaultActionEffect

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.PlayerManager::DefaultActionEffect(Vector3, float)` | Postfix | Auto-generated from Il2Cpp unpack: PlayerManager.DefaultActionEffect |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.PLAYER.DefaultActionEffect`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.PLAYER.DefaultActionEffect", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.PLAYER.DefaultActionEffect`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.PLAYER.DefaultActionEffect", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.PLAYER.DefaultActionEffect", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## PLAYER-DroppedAllItems

---
title: greg.PLAYER.DroppedAllItems
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Player.DropAllItems"
---

# `greg.PLAYER.DroppedAllItems`

## Description

- Auto-generated from Il2Cpp unpack: Player.DropAllItems

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Player::DropAllItems()` | Postfix | Auto-generated from Il2Cpp unpack: Player.DropAllItems |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `money` | `float` |
| `reputation` | `float` |
| `xp` | `float` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.PLAYER.DroppedAllItems`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.PLAYER.DroppedAllItems", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.PLAYER.DroppedAllItems`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.PLAYER.DroppedAllItems", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.PLAYER.DroppedAllItems", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## PLAYER-GainIOPSEffect

---
title: greg.PLAYER.GainIOPSEffect
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: PlayerManager.GainIOPSEffect"
---

# `greg.PLAYER.GainIOPSEffect`

## Description

- Auto-generated from Il2Cpp unpack: PlayerManager.GainIOPSEffect

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.PlayerManager::GainIOPSEffect()` | Postfix | Auto-generated from Il2Cpp unpack: PlayerManager.GainIOPSEffect |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.PLAYER.GainIOPSEffect`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.PLAYER.GainIOPSEffect", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.PLAYER.GainIOPSEffect`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.PLAYER.GainIOPSEffect", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.PLAYER.GainIOPSEffect", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## PLAYER-Loaded

---
title: greg.PLAYER.Loaded
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Player.LoadPlayer"
---

# `greg.PLAYER.Loaded`

## Description

- Auto-generated from Il2Cpp unpack: Player.LoadPlayer

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Player::LoadPlayer(PlayerData)` | Postfix | Auto-generated from Il2Cpp unpack: Player.LoadPlayer |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `data` | `PlayerData` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.PLAYER.Loaded`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.PLAYER.Loaded", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.PLAYER.Loaded`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.PLAYER.Loaded", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.PLAYER.Loaded", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## PLAYER-LockedCursorForPlayerMovement

---
title: greg.PLAYER.LockedCursorForPlayerMovement
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: PlayerManager.LockedCursorForPlayerMovement"
---

# `greg.PLAYER.LockedCursorForPlayerMovement`

## Description

- Auto-generated from Il2Cpp unpack: PlayerManager.LockedCursorForPlayerMovement

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.PlayerManager::LockedCursorForPlayerMovement()` | Postfix | Auto-generated from Il2Cpp unpack: PlayerManager.LockedCursorForPlayerMovement |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.PLAYER.LockedCursorForPlayerMovement`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.PLAYER.LockedCursorForPlayerMovement", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.PLAYER.LockedCursorForPlayerMovement`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.PLAYER.LockedCursorForPlayerMovement", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.PLAYER.LockedCursorForPlayerMovement", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## PLAYER-PlayerStopMovement

---
title: greg.PLAYER.PlayerStopMovement
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: PlayerManager.PlayerStopMovement"
---

# `greg.PLAYER.PlayerStopMovement`

## Description

- Auto-generated from Il2Cpp unpack: PlayerManager.PlayerStopMovement

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.PlayerManager::PlayerStopMovement()` | Postfix | Auto-generated from Il2Cpp unpack: PlayerManager.PlayerStopMovement |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.PLAYER.PlayerStopMovement`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.PLAYER.PlayerStopMovement", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.PLAYER.PlayerStopMovement`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.PLAYER.PlayerStopMovement", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.PLAYER.PlayerStopMovement", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## PLAYER-Warped

---
title: greg.PLAYER.Warped
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Player.WarpPlayer"
---

# `greg.PLAYER.Warped`

## Description

- Auto-generated from Il2Cpp unpack: Player.WarpPlayer

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Player::WarpPlayer(Vector3, Quaternion)` | Postfix | Auto-generated from Il2Cpp unpack: Player.WarpPlayer |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `position` | `Vector3` |
| `rotation` | `Quaternion` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.PLAYER.Warped`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.PLAYER.Warped", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.PLAYER.Warped`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.PLAYER.Warped", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.PLAYER.Warped", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`



