---
title: Network Hooks
sidebar_label: Network Hooks
---
## NETWORK-AssignNewPosition

---
title: greg.NETWORK.AssignNewPosition
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.AssignNewPosition"
---

# `greg.NETWORK.AssignNewPosition`

## Description

- Auto-generated from Il2Cpp unpack: CablePositions.AssignNewPosition

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::AssignNewPosition(int, Transform, bool, bool, CableLink.TypeOfLink, string)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.AssignNewPosition |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.AssignNewPosition`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.AssignNewPosition", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.AssignNewPosition`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.AssignNewPosition", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.AssignNewPosition", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-BrokenServerAdded

---
title: greg.NETWORK.BrokenServerAdded
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.AddBrokenServer"
---

# `greg.NETWORK.BrokenServerAdded`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.AddBrokenServer

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::AddBrokenServer(Server)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.AddBrokenServer |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.BrokenServerAdded`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.BrokenServerAdded", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.BrokenServerAdded`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.BrokenServerAdded", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.BrokenServerAdded", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-BrokenServerRemoved

---
title: greg.NETWORK.BrokenServerRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RemoveBrokenServer"
---

# `greg.NETWORK.BrokenServerRemoved`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.RemoveBrokenServer

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RemoveBrokenServer(string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RemoveBrokenServer |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.BrokenServerRemoved`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.BrokenServerRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.BrokenServerRemoved`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.BrokenServerRemoved", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.BrokenServerRemoved", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ButtonShowNetworkSwitchConfig

---
title: greg.NETWORK.ButtonShowNetworkSwitchConfig
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.ButtonShowNetworkSwitchConfig"
---

# `greg.NETWORK.ButtonShowNetworkSwitchConfig`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.ButtonShowNetworkSwitchConfig

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::ButtonShowNetworkSwitchConfig()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.ButtonShowNetworkSwitchConfig |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.ButtonShowNetworkSwitchConfig`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.ButtonShowNetworkSwitchConfig", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.ButtonShowNetworkSwitchConfig`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ButtonShowNetworkSwitchConfig", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.ButtonShowNetworkSwitchConfig", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CableConnectionRemoved

---
title: greg.NETWORK.CableConnectionRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RemoveCableConnection"
---

# `greg.NETWORK.CableConnectionRemoved`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.RemoveCableConnection

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RemoveCableConnection(int)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RemoveCableConnection |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.CableConnectionRemoved`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.CableConnectionRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.CableConnectionRemoved`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CableConnectionRemoved", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.CableConnectionRemoved", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CableFromLACPGroupsRemoved

---
title: greg.NETWORK.CableFromLACPGroupsRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RemoveCableFromLACPGroups"
---

# `greg.NETWORK.CableFromLACPGroupsRemoved`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.RemoveCableFromLACPGroups

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RemoveCableFromLACPGroups(int)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RemoveCableFromLACPGroups |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.CableFromLACPGroupsRemoved`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.CableFromLACPGroupsRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.CableFromLACPGroupsRemoved`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CableFromLACPGroupsRemoved", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.CableFromLACPGroupsRemoved", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CableLoaded

---
title: greg.NETWORK.CableLoaded
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.LoadCable"
---

# `greg.NETWORK.CableLoaded`

## Description

- Auto-generated from Il2Cpp unpack: CablePositions.LoadCable

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::LoadCable(CableSaveData)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.LoadCable |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.CableLoaded`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.CableLoaded", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.CableLoaded`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CableLoaded", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.CableLoaded", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CanAcceptSFP

---
title: greg.NETWORK.CanAcceptSFP
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPBox.CanAcceptSFP"
---

# `greg.NETWORK.CanAcceptSFP`

## Description

- Auto-generated from Il2Cpp unpack: SFPBox.CanAcceptSFP

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.SFPBox::CanAcceptSFP(int)` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.CanAcceptSFP |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.CanAcceptSFP`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.CanAcceptSFP", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.CanAcceptSFP`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CanAcceptSFP", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.CanAcceptSFP", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ClearErrorSign

---
title: greg.NETWORK.ClearErrorSign
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.ClearErrorSign"
---

# `greg.NETWORK.ClearErrorSign`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.ClearErrorSign

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::ClearErrorSign()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.ClearErrorSign |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.ClearErrorSign`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.ClearErrorSign", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.ClearErrorSign`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ClearErrorSign", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.ClearErrorSign", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ClearMap

---
title: greg.NETWORK.ClearMap
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.ClearMap"
---

# `greg.NETWORK.ClearMap`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.ClearMap

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::ClearMap()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.ClearMap |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.ClearMap`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.ClearMap", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.ClearMap`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ClearMap", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.ClearMap", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ClearWarningSign

---
title: greg.NETWORK.ClearWarningSign
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.ClearWarningSign"
---

# `greg.NETWORK.ClearWarningSign`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.ClearWarningSign

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::ClearWarningSign(bool)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.ClearWarningSign |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.ClearWarningSign`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.ClearWarningSign", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.ClearWarningSign`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ClearWarningSign", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.ClearWarningSign", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ComponentInitialized

---
title: greg.NETWORK.ComponentInitialized
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CableLink.Start"
---

# `greg.NETWORK.ComponentInitialized`

## Description

- Auto-generated from Il2Cpp unpack: CableLink.Start
- Auto-generated from Il2Cpp unpack: CablePositions.Awake
- Auto-generated from Il2Cpp unpack: CablePositions.Start
- Auto-generated from Il2Cpp unpack: NetworkMap.Awake
- Auto-generated from Il2Cpp unpack: NetworkSwitch.Awake
- Auto-generated from Il2Cpp unpack: NetworkSwitch.Start
- Auto-generated from Il2Cpp unpack: SFPBox.Awake
- Auto-generated from Il2Cpp unpack: SFPModule.Awake

## Patch Targets (Il2Cpp)

This hook name can be mapped to **8** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CableLink::Start()` | Postfix | Auto-generated from Il2Cpp unpack: CableLink.Start |
| `Il2Cpp.CablePositions::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.Awake |
| `Il2Cpp.CablePositions::Start()` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.Start |
| `Il2Cpp.NetworkMap::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.Awake |
| `Il2Cpp.NetworkSwitch::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.Awake |
| `Il2Cpp.NetworkSwitch::Start()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.Start |
| `Il2Cpp.SFPBox::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.Awake |
| `Il2Cpp.SFPModule::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: SFPModule.Awake |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.ComponentInitialized`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.ComponentInitialized", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.ComponentInitialized`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ComponentInitialized", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.ComponentInitialized", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-Connect

---
title: greg.NETWORK.Connect
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.Connect"
---

# `greg.NETWORK.Connect`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.Connect

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::Connect(string, string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.Connect |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.Connect`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.Connect", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.Connect`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.Connect", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.Connect", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CreateLACPGroup

---
title: greg.NETWORK.CreateLACPGroup
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.CreateLACPGroup"
---

# `greg.NETWORK.CreateLACPGroup`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.CreateLACPGroup

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::CreateLACPGroup(string, string, List<int>)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.CreateLACPGroup |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.CreateLACPGroup`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.CreateLACPGroup", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.CreateLACPGroup`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CreateLACPGroup", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.CreateLACPGroup", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CreateNewReverseCable

---
title: greg.NETWORK.CreateNewReverseCable
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.CreateNewReverseCable"
---

# `greg.NETWORK.CreateNewReverseCable`

## Description

- Auto-generated from Il2Cpp unpack: CablePositions.CreateNewReverseCable

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::CreateNewReverseCable()` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.CreateNewReverseCable |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.CreateNewReverseCable`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.CreateNewReverseCable", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.CreateNewReverseCable`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CreateNewReverseCable", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.CreateNewReverseCable", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CreateRopeAttachPoint

---
title: greg.NETWORK.CreateRopeAttachPoint
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CableLink.CreateRopeAttachPoint"
---

# `greg.NETWORK.CreateRopeAttachPoint`

## Description

- Auto-generated from Il2Cpp unpack: CableLink.CreateRopeAttachPoint

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CableLink::CreateRopeAttachPoint()` | Postfix | Auto-generated from Il2Cpp unpack: CableLink.CreateRopeAttachPoint |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.CreateRopeAttachPoint`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.CreateRopeAttachPoint", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.CreateRopeAttachPoint`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CreateRopeAttachPoint", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.CreateRopeAttachPoint", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CreateTubeMesh

---
title: greg.NETWORK.CreateTubeMesh
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.CreateTubeMesh"
---

# `greg.NETWORK.CreateTubeMesh`

## Description

- Auto-generated from Il2Cpp unpack: CablePositions.CreateTubeMesh

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::CreateTubeMesh(List<Vector3>)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.CreateTubeMesh |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.CreateTubeMesh`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.CreateTubeMesh", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.CreateTubeMesh`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CreateTubeMesh", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.CreateTubeMesh", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CustomerServerCountAndSpeedChanged

---
title: greg.NETWORK.CustomerServerCountAndSpeedChanged
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.UpdateCustomerServerCountAndSpeed"
---

# `greg.NETWORK.CustomerServerCountAndSpeedChanged`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.UpdateCustomerServerCountAndSpeed

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::UpdateCustomerServerCountAndSpeed(int, int, float)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.UpdateCustomerServerCountAndSpeed |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.CustomerServerCountAndSpeedChanged`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.CustomerServerCountAndSpeedChanged", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.CustomerServerCountAndSpeedChanged`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CustomerServerCountAndSpeedChanged", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.CustomerServerCountAndSpeedChanged", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-DeviceAdded

---
title: greg.NETWORK.DeviceAdded
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.AddDevice"
---

# `greg.NETWORK.DeviceAdded`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.AddDevice

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::AddDevice(string, CableLink.TypeOfLink, int)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.AddDevice |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.DeviceAdded`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.DeviceAdded", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.DeviceAdded`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.DeviceAdded", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.DeviceAdded", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-DeviceCustomerIDChanged

---
title: greg.NETWORK.DeviceCustomerIDChanged
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.UpdateDeviceCustomerID"
---

# `greg.NETWORK.DeviceCustomerIDChanged`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.UpdateDeviceCustomerID

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::UpdateDeviceCustomerID(string, int)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.UpdateDeviceCustomerID |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.DeviceCustomerIDChanged`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.DeviceCustomerIDChanged", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.DeviceCustomerIDChanged`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.DeviceCustomerIDChanged", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.DeviceCustomerIDChanged", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-DeviceRemoved

---
title: greg.NETWORK.DeviceRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RemoveDevice"
---

# `greg.NETWORK.DeviceRemoved`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.RemoveDevice

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RemoveDevice(string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RemoveDevice |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.DeviceRemoved`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.DeviceRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.DeviceRemoved`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.DeviceRemoved", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.DeviceRemoved", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-DeviceRepaired

---
title: greg.NETWORK.DeviceRepaired
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.RepairDevice"
---

# `greg.NETWORK.DeviceRepaired`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.RepairDevice

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::RepairDevice()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.RepairDevice |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.DeviceRepaired`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.DeviceRepaired", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.DeviceRepaired`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.DeviceRepaired", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.DeviceRepaired", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-Disconnect

---
title: greg.NETWORK.Disconnect
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.Disconnect"
---

# `greg.NETWORK.Disconnect`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.Disconnect

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::Disconnect(string, string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.Disconnect |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.Disconnect`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.Disconnect", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.Disconnect`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.Disconnect", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.Disconnect", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-DisconnectCables

---
title: greg.NETWORK.DisconnectCables
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.DisconnectCables"
---

# `greg.NETWORK.DisconnectCables`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.DisconnectCables

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::DisconnectCables()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.DisconnectCables |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.DisconnectCables`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.DisconnectCables", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.DisconnectCables`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.DisconnectCables", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.DisconnectCables", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-DisconnectCablesWhenSwitchIsOff

---
title: greg.NETWORK.DisconnectCablesWhenSwitchIsOff
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.DisconnectCablesWhenSwitchIsOff"
---

# `greg.NETWORK.DisconnectCablesWhenSwitchIsOff`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.DisconnectCablesWhenSwitchIsOff

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::DisconnectCablesWhenSwitchIsOff()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.DisconnectCablesWhenSwitchIsOff |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.DisconnectCablesWhenSwitchIsOff`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.DisconnectCablesWhenSwitchIsOff", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.DisconnectCablesWhenSwitchIsOff`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.DisconnectCablesWhenSwitchIsOff", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.DisconnectCablesWhenSwitchIsOff", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-FindAllRoutes

---
title: greg.NETWORK.FindAllRoutes
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.FindAllRoutes"
---

# `greg.NETWORK.FindAllRoutes`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.FindAllRoutes

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::FindAllRoutes(string, string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.FindAllRoutes |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.FindAllRoutes`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.FindAllRoutes", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.FindAllRoutes`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.FindAllRoutes", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.FindAllRoutes", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-FindPhysicalPath

---
title: greg.NETWORK.FindPhysicalPath
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.FindPhysicalPath"
---

# `greg.NETWORK.FindPhysicalPath`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.FindPhysicalPath

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::FindPhysicalPath(string, string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.FindPhysicalPath |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.FindPhysicalPath`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.FindPhysicalPath", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.FindPhysicalPath`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.FindPhysicalPath", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.FindPhysicalPath", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-FromPortRemoved

---
title: greg.NETWORK.FromPortRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPModule.RemoveFromPort"
---

# `greg.NETWORK.FromPortRemoved`

## Description

- Auto-generated from Il2Cpp unpack: SFPModule.RemoveFromPort

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.SFPModule::RemoveFromPort()` | Postfix | Auto-generated from Il2Cpp unpack: SFPModule.RemoveFromPort |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.FromPortRemoved`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.FromPortRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.FromPortRemoved`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.FromPortRemoved", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.FromPortRemoved", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GenerateBentSegment

---
title: greg.NETWORK.GenerateBentSegment
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.GenerateBentSegment"
---

# `greg.NETWORK.GenerateBentSegment`

## Description

- Auto-generated from Il2Cpp unpack: CablePositions.GenerateBentSegment

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::GenerateBentSegment(Vector3, Vector3, Transform, bool)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.GenerateBentSegment |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GenerateBentSegment`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GenerateBentSegment", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GenerateBentSegment`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GenerateBentSegment", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GenerateBentSegment", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GenerateCornerBend

---
title: greg.NETWORK.GenerateCornerBend
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.GenerateCornerBend"
---

# `greg.NETWORK.GenerateCornerBend`

## Description

- Auto-generated from Il2Cpp unpack: CablePositions.GenerateCornerBend

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::GenerateCornerBend(Vector3, Vector3, Vector3, Transform)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.GenerateCornerBend |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GenerateCornerBend`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GenerateCornerBend", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GenerateCornerBend`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GenerateCornerBend", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GenerateCornerBend", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GenerateDeviceName

---
title: greg.NETWORK.GenerateDeviceName
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GenerateDeviceName"
---

# `greg.NETWORK.GenerateDeviceName`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.GenerateDeviceName

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GenerateDeviceName(CableLink.TypeOfLink, Vector3)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GenerateDeviceName |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GenerateDeviceName`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GenerateDeviceName", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GenerateDeviceName`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GenerateDeviceName", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GenerateDeviceName", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GenerateFinalPath

---
title: greg.NETWORK.GenerateFinalPath
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.GenerateFinalPath"
---

# `greg.NETWORK.GenerateFinalPath`

## Description

- Auto-generated from Il2Cpp unpack: CablePositions.GenerateFinalPath

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::GenerateFinalPath(int)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.GenerateFinalPath |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GenerateFinalPath`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GenerateFinalPath", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GenerateFinalPath`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GenerateFinalPath", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GenerateFinalPath", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetAllBrokenServers

---
title: greg.NETWORK.GetAllBrokenServers
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetAllBrokenServers"
---

# `greg.NETWORK.GetAllBrokenServers`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.GetAllBrokenServers

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetAllBrokenServers()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetAllBrokenServers |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetAllBrokenServers`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetAllBrokenServers", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetAllBrokenServers`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetAllBrokenServers", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetAllBrokenServers", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetAllBrokenSwitches

---
title: greg.NETWORK.GetAllBrokenSwitches
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetAllBrokenSwitches"
---

# `greg.NETWORK.GetAllBrokenSwitches`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.GetAllBrokenSwitches

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetAllBrokenSwitches()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetAllBrokenSwitches |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetAllBrokenSwitches`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetAllBrokenSwitches", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetAllBrokenSwitches`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetAllBrokenSwitches", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetAllBrokenSwitches", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetAllDevices

---
title: greg.NETWORK.GetAllDevices
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetAllDevices"
---

# `greg.NETWORK.GetAllDevices`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.GetAllDevices

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetAllDevices()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetAllDevices |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetAllDevices`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetAllDevices", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetAllDevices`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetAllDevices", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetAllDevices", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetAllLACPGroups

---
title: greg.NETWORK.GetAllLACPGroups
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetAllLACPGroups"
---

# `greg.NETWORK.GetAllLACPGroups`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.GetAllLACPGroups

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetAllLACPGroups()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetAllLACPGroups |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetAllLACPGroups`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetAllLACPGroups", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetAllLACPGroups`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetAllLACPGroups", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetAllLACPGroups", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetAllNetworkSwitches

---
title: greg.NETWORK.GetAllNetworkSwitches
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetAllNetworkSwitches"
---

# `greg.NETWORK.GetAllNetworkSwitches`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.GetAllNetworkSwitches

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetAllNetworkSwitches()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetAllNetworkSwitches |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetAllNetworkSwitches`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetAllNetworkSwitches", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetAllNetworkSwitches`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetAllNetworkSwitches", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetAllNetworkSwitches", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetAllServers

---
title: greg.NETWORK.GetAllServers
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetAllServers"
---

# `greg.NETWORK.GetAllServers`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.GetAllServers

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetAllServers()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetAllServers |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetAllServers`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetAllServers", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetAllServers`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetAllServers", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetAllServers", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetCableMaterial

---
title: greg.NETWORK.GetCableMaterial
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.GetCableMaterial"
---

# `greg.NETWORK.GetCableMaterial`

## Description

- Auto-generated from Il2Cpp unpack: CablePositions.GetCableMaterial

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::GetCableMaterial(int)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.GetCableMaterial |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetCableMaterial`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetCableMaterial", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetCableMaterial`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetCableMaterial", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetCableMaterial", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetCablePositions

---
title: greg.NETWORK.GetCablePositions
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.GetCablePositions"
---

# `greg.NETWORK.GetCablePositions`

## Description

- Auto-generated from Il2Cpp unpack: CablePositions.GetCablePositions

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::GetCablePositions(int)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.GetCablePositions |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetCablePositions`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetCablePositions", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetCablePositions`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetCablePositions", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetCablePositions", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetConnectedDevices

---
title: greg.NETWORK.GetConnectedDevices
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.GetConnectedDevices"
---

# `greg.NETWORK.GetConnectedDevices`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.GetConnectedDevices

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::GetConnectedDevices()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.GetConnectedDevices |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetConnectedDevices`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetConnectedDevices", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetConnectedDevices`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetConnectedDevices", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetConnectedDevices", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetCustomerBase

---
title: greg.NETWORK.GetCustomerBase
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetCustomerBase"
---

# `greg.NETWORK.GetCustomerBase`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.GetCustomerBase

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetCustomerBase(int)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetCustomerBase |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetCustomerBase`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetCustomerBase", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetCustomerBase`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetCustomerBase", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetCustomerBase", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetDevice

---
title: greg.NETWORK.GetDevice
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetDevice"
---

# `greg.NETWORK.GetDevice`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.GetDevice

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetDevice(string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetDevice |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetDevice`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetDevice", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetDevice`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetDevice", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetDevice", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetFreeSpaceInTheBox

---
title: greg.NETWORK.GetFreeSpaceInTheBox
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPBox.GetFreeSpaceInTheBox"
---

# `greg.NETWORK.GetFreeSpaceInTheBox`

## Description

- Auto-generated from Il2Cpp unpack: SFPBox.GetFreeSpaceInTheBox

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.SFPBox::GetFreeSpaceInTheBox()` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.GetFreeSpaceInTheBox |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetFreeSpaceInTheBox`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetFreeSpaceInTheBox", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetFreeSpaceInTheBox`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetFreeSpaceInTheBox", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetFreeSpaceInTheBox", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetLACPGroupBetween

---
title: greg.NETWORK.GetLACPGroupBetween
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetLACPGroupBetween"
---

# `greg.NETWORK.GetLACPGroupBetween`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.GetLACPGroupBetween

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetLACPGroupBetween(string, string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetLACPGroupBetween |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetLACPGroupBetween`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetLACPGroupBetween", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetLACPGroupBetween`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetLACPGroupBetween", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetLACPGroupBetween", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetLACPGroupForCable

---
title: greg.NETWORK.GetLACPGroupForCable
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetLACPGroupForCable"
---

# `greg.NETWORK.GetLACPGroupForCable`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.GetLACPGroupForCable

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetLACPGroupForCable(int)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetLACPGroupForCable |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetLACPGroupForCable`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetLACPGroupForCable", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetLACPGroupForCable`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetLACPGroupForCable", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetLACPGroupForCable", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetRawCablePositions

---
title: greg.NETWORK.GetRawCablePositions
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.GetRawCablePositions"
---

# `greg.NETWORK.GetRawCablePositions`

## Description

- Auto-generated from Il2Cpp unpack: CablePositions.GetRawCablePositions

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::GetRawCablePositions(int)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.GetRawCablePositions |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetRawCablePositions`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetRawCablePositions", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetRawCablePositions`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetRawCablePositions", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetRawCablePositions", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetRawLinkTransforms

---
title: greg.NETWORK.GetRawLinkTransforms
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.GetRawLinkTransforms"
---

# `greg.NETWORK.GetRawLinkTransforms`

## Description

- Auto-generated from Il2Cpp unpack: CablePositions.GetRawLinkTransforms

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::GetRawLinkTransforms(int)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.GetRawLinkTransforms |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetRawLinkTransforms`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetRawLinkTransforms", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetRawLinkTransforms`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetRawLinkTransforms", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetRawLinkTransforms", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetRopeAttachPoint

---
title: greg.NETWORK.GetRopeAttachPoint
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CableLink.GetRopeAttachPoint"
---

# `greg.NETWORK.GetRopeAttachPoint`

## Description

- Auto-generated from Il2Cpp unpack: CableLink.GetRopeAttachPoint

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CableLink::GetRopeAttachPoint()` | Postfix | Auto-generated from Il2Cpp unpack: CableLink.GetRopeAttachPoint |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetRopeAttachPoint`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetRopeAttachPoint", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetRopeAttachPoint`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetRopeAttachPoint", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetRopeAttachPoint", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetServer

---
title: greg.NETWORK.GetServer
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetServer"
---

# `greg.NETWORK.GetServer`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.GetServer

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetServer(string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetServer |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetServer`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetServer", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetServer`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetServer", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetServer", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetSwitchById

---
title: greg.NETWORK.GetSwitchById
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetSwitchById"
---

# `greg.NETWORK.GetSwitchById`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.GetSwitchById

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetSwitchById(string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetSwitchById |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetSwitchById`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetSwitchById", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetSwitchById`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetSwitchById", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetSwitchById", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetSwitchId

---
title: greg.NETWORK.GetSwitchId
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.GetSwitchId"
---

# `greg.NETWORK.GetSwitchId`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.GetSwitchId

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::GetSwitchId()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.GetSwitchId |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.GetSwitchId`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.GetSwitchId", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.GetSwitchId`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetSwitchId", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.GetSwitchId", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-HandleNewCableWhileOff

---
title: greg.NETWORK.HandleNewCableWhileOff
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.HandleNewCableWhileOff"
---

# `greg.NETWORK.HandleNewCableWhileOff`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.HandleNewCableWhileOff

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::HandleNewCableWhileOff(int)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.HandleNewCableWhileOff |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.HandleNewCableWhileOff`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.HandleNewCableWhileOff", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.HandleNewCableWhileOff`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.HandleNewCableWhileOff", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.HandleNewCableWhileOff", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-InsertDirectlyIntoPort

---
title: greg.NETWORK.InsertDirectlyIntoPort
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPModule.InsertDirectlyIntoPort"
---

# `greg.NETWORK.InsertDirectlyIntoPort`

## Description

- Auto-generated from Il2Cpp unpack: SFPModule.InsertDirectlyIntoPort

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.SFPModule::InsertDirectlyIntoPort(CableLink)` | Postfix | Auto-generated from Il2Cpp unpack: SFPModule.InsertDirectlyIntoPort |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.InsertDirectlyIntoPort`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.InsertDirectlyIntoPort", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.InsertDirectlyIntoPort`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.InsertDirectlyIntoPort", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.InsertDirectlyIntoPort", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-InsertedInSFPPort

---
title: greg.NETWORK.InsertedInSFPPort
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPModule.InsertedInSFPPort"
---

# `greg.NETWORK.InsertedInSFPPort`

## Description

- Auto-generated from Il2Cpp unpack: SFPModule.InsertedInSFPPort

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.SFPModule::InsertedInSFPPort(CableLink, bool)` | Postfix | Auto-generated from Il2Cpp unpack: SFPModule.InsertedInSFPPort |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.InsertedInSFPPort`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.InsertedInSFPPort", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.InsertedInSFPPort`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.InsertedInSFPPort", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.InsertedInSFPPort", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-InsertSFPBackIntoBox

---
title: greg.NETWORK.InsertSFPBackIntoBox
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPBox.InsertSFPBackIntoBox"
---

# `greg.NETWORK.InsertSFPBackIntoBox`

## Description

- Auto-generated from Il2Cpp unpack: SFPBox.InsertSFPBackIntoBox

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.SFPBox::InsertSFPBackIntoBox()` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.InsertSFPBackIntoBox |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.InsertSFPBackIntoBox`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.InsertSFPBackIntoBox", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.InsertSFPBackIntoBox`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.InsertSFPBackIntoBox", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.InsertSFPBackIntoBox", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-InteractOnClick

---
title: greg.NETWORK.InteractOnClick
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CableLink.InteractOnClick"
---

# `greg.NETWORK.InteractOnClick`

## Description

- Auto-generated from Il2Cpp unpack: CableLink.InteractOnClick
- Auto-generated from Il2Cpp unpack: NetworkSwitch.InteractOnClick
- Auto-generated from Il2Cpp unpack: SFPBox.InteractOnClick
- Auto-generated from Il2Cpp unpack: SFPModule.InteractOnClick

## Patch Targets (Il2Cpp)

This hook name can be mapped to **4** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CableLink::InteractOnClick()` | Postfix | Auto-generated from Il2Cpp unpack: CableLink.InteractOnClick |
| `Il2Cpp.NetworkSwitch::InteractOnClick()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.InteractOnClick |
| `Il2Cpp.SFPBox::InteractOnClick()` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.InteractOnClick |
| `Il2Cpp.SFPModule::InteractOnClick()` | Postfix | Auto-generated from Il2Cpp unpack: SFPModule.InteractOnClick |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.InteractOnClick`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.InteractOnClick", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.InteractOnClick`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.InteractOnClick", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.InteractOnClick", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-IsAllowedToDoSecondAction

---
title: greg.NETWORK.IsAllowedToDoSecondAction
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CableLink.IsAllowedToDoSecondAction"
---

# `greg.NETWORK.IsAllowedToDoSecondAction`

## Description

- Auto-generated from Il2Cpp unpack: CableLink.IsAllowedToDoSecondAction

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CableLink::IsAllowedToDoSecondAction()` | Postfix | Auto-generated from Il2Cpp unpack: CableLink.IsAllowedToDoSecondAction |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.IsAllowedToDoSecondAction`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.IsAllowedToDoSecondAction", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.IsAllowedToDoSecondAction`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.IsAllowedToDoSecondAction", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.IsAllowedToDoSecondAction", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-IsAnyCableConnected

---
title: greg.NETWORK.IsAnyCableConnected
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.IsAnyCableConnected"
---

# `greg.NETWORK.IsAnyCableConnected`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.IsAnyCableConnected
- Auto-generated from Il2Cpp unpack: SFPModule.IsAnyCableConnected

## Patch Targets (Il2Cpp)

This hook name can be mapped to **2** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::IsAnyCableConnected()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.IsAnyCableConnected |
| `Il2Cpp.SFPModule::IsAnyCableConnected()` | Postfix | Auto-generated from Il2Cpp unpack: SFPModule.IsAnyCableConnected |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.IsAnyCableConnected`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.IsAnyCableConnected", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.IsAnyCableConnected`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.IsAnyCableConnected", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.IsAnyCableConnected", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-IsCableComplete

---
title: greg.NETWORK.IsCableComplete
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.IsCableComplete"
---

# `greg.NETWORK.IsCableComplete`

## Description

- Auto-generated from Il2Cpp unpack: CablePositions.IsCableComplete

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::IsCableComplete(int)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.IsCableComplete |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.IsCableComplete`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.IsCableComplete", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.IsCableComplete`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.IsCableComplete", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.IsCableComplete", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-IsIpAddressDuplicate

---
title: greg.NETWORK.IsIpAddressDuplicate
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.IsIpAddressDuplicate"
---

# `greg.NETWORK.IsIpAddressDuplicate`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.IsIpAddressDuplicate

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::IsIpAddressDuplicate(string, Server)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.IsIpAddressDuplicate |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.IsIpAddressDuplicate`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.IsIpAddressDuplicate", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.IsIpAddressDuplicate`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.IsIpAddressDuplicate", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.IsIpAddressDuplicate", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-IsolatedDevicesRemoved

---
title: greg.NETWORK.IsolatedDevicesRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RemoveIsolatedDevices"
---

# `greg.NETWORK.IsolatedDevicesRemoved`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.RemoveIsolatedDevices

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RemoveIsolatedDevices()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RemoveIsolatedDevices |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.IsolatedDevicesRemoved`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.IsolatedDevicesRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.IsolatedDevicesRemoved`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.IsolatedDevicesRemoved", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.IsolatedDevicesRemoved", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-IsPatchPanelPort

---
title: greg.NETWORK.IsPatchPanelPort
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.IsPatchPanelPort"
---

# `greg.NETWORK.IsPatchPanelPort`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.IsPatchPanelPort

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::IsPatchPanelPort(string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.IsPatchPanelPort |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.IsPatchPanelPort`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.IsPatchPanelPort", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.IsPatchPanelPort`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.IsPatchPanelPort", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.IsPatchPanelPort", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ItIsBroken

---
title: greg.NETWORK.ItIsBroken
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.ItIsBroken"
---

# `greg.NETWORK.ItIsBroken`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.ItIsBroken

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::ItIsBroken()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.ItIsBroken |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.ItIsBroken`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.ItIsBroken", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.ItIsBroken`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ItIsBroken", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.ItIsBroken", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-LACPGroupRemoved

---
title: greg.NETWORK.LACPGroupRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RemoveLACPGroup"
---

# `greg.NETWORK.LACPGroupRemoved`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.RemoveLACPGroup

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RemoveLACPGroup(int)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RemoveLACPGroup |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.LACPGroupRemoved`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.LACPGroupRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.LACPGroupRemoved`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.LACPGroupRemoved", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.LACPGroupRemoved", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-LACPGroupsSet

---
title: greg.NETWORK.LACPGroupsSet
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.SetLACPGroups"
---

# `greg.NETWORK.LACPGroupsSet`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.SetLACPGroups

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::SetLACPGroups(Dictionary<int, NetworkMap.LACPGroup>)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.SetLACPGroups |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.LACPGroupsSet`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.LACPGroupsSet", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.LACPGroupsSet`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.LACPGroupsSet", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.LACPGroupsSet", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-LastPositionRemoved

---
title: greg.NETWORK.LastPositionRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.RemoveLastPosition"
---

# `greg.NETWORK.LastPositionRemoved`

## Description

- Auto-generated from Il2Cpp unpack: CablePositions.RemoveLastPosition

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::RemoveLastPosition(int)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.RemoveLastPosition |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.LastPositionRemoved`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.LastPositionRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.LastPositionRemoved`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.LastPositionRemoved", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.LastPositionRemoved", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0

---
title: greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: PacketSpawnerSystem.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0"
---

# `greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0`

## Description

- Auto-generated from Il2Cpp unpack: PacketSpawnerSystem.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.PacketSpawnerSystem::Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0(IntPtr, IntPtr)` | Postfix | Auto-generated from Il2Cpp unpack: PacketSpawnerSystem.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0 |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1

---
title: greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: PacketSpawnerSystem.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1"
---

# `greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1`

## Description

- Auto-generated from Il2Cpp unpack: PacketSpawnerSystem.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.PacketSpawnerSystem::Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1(IntPtr, IntPtr)` | Postfix | Auto-generated from Il2Cpp unpack: PacketSpawnerSystem.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1 |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-OnDestroy

---
title: greg.NETWORK.OnDestroy
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.OnDestroy"
---

# `greg.NETWORK.OnDestroy`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.OnDestroy
- Auto-generated from Il2Cpp unpack: SFPModule.OnDestroy

## Patch Targets (Il2Cpp)

This hook name can be mapped to **2** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::OnDestroy()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.OnDestroy |
| `Il2Cpp.SFPModule::OnDestroy()` | Postfix | Auto-generated from Il2Cpp unpack: SFPModule.OnDestroy |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.OnDestroy`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.OnDestroy", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.OnDestroy`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.OnDestroy", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.OnDestroy", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-OnHoverOver

---
title: greg.NETWORK.OnHoverOver
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CableLink.OnHoverOver"
---

# `greg.NETWORK.OnHoverOver`

## Description

- Auto-generated from Il2Cpp unpack: CableLink.OnHoverOver

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CableLink::OnHoverOver()` | Postfix | Auto-generated from Il2Cpp unpack: CableLink.OnHoverOver |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.OnHoverOver`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.OnHoverOver", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.OnHoverOver`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.OnHoverOver", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.OnHoverOver", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-PowerButton

---
title: greg.NETWORK.PowerButton
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.PowerButton"
---

# `greg.NETWORK.PowerButton`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.PowerButton

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::PowerButton(bool)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.PowerButton |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.PowerButton`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.PowerButton", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.PowerButton`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.PowerButton", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.PowerButton", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-PowerLightMaterialSet

---
title: greg.NETWORK.PowerLightMaterialSet
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.SetPowerLightMaterial"
---

# `greg.NETWORK.PowerLightMaterialSet`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.SetPowerLightMaterial

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::SetPowerLightMaterial(Material)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.SetPowerLightMaterial |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.PowerLightMaterialSet`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.PowerLightMaterialSet", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.PowerLightMaterialSet`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.PowerLightMaterialSet", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.PowerLightMaterialSet", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-PrintNetworkMap

---
title: greg.NETWORK.PrintNetworkMap
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.PrintNetworkMap"
---

# `greg.NETWORK.PrintNetworkMap`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.PrintNetworkMap

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::PrintNetworkMap()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.PrintNetworkMap |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.PrintNetworkMap`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.PrintNetworkMap", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.PrintNetworkMap`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.PrintNetworkMap", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.PrintNetworkMap", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ReconnectCables

---
title: greg.NETWORK.ReconnectCables
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.ReconnectCables"
---

# `greg.NETWORK.ReconnectCables`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.ReconnectCables

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::ReconnectCables()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.ReconnectCables |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.ReconnectCables`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.ReconnectCables", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.ReconnectCables`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ReconnectCables", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.ReconnectCables", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-RedrawCable

---
title: greg.NETWORK.RedrawCable
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.RedrawCable"
---

# `greg.NETWORK.RedrawCable`

## Description

- Auto-generated from Il2Cpp unpack: CablePositions.RedrawCable

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::RedrawCable(int)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.RedrawCable |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.RedrawCable`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.RedrawCable", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.RedrawCable`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.RedrawCable", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.RedrawCable", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-RegisterCableConnection

---
title: greg.NETWORK.RegisterCableConnection
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RegisterCableConnection"
---

# `greg.NETWORK.RegisterCableConnection`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.RegisterCableConnection

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RegisterCableConnection(int, Vector3, Vector3, CableLink.TypeOfLink, CableLink.TypeOfLink, string, string, int, int, string, string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RegisterCableConnection |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.RegisterCableConnection`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.RegisterCableConnection", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.RegisterCableConnection`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.RegisterCableConnection", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.RegisterCableConnection", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-RegisterCustomerBase

---
title: greg.NETWORK.RegisterCustomerBase
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RegisterCustomerBase"
---

# `greg.NETWORK.RegisterCustomerBase`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.RegisterCustomerBase

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RegisterCustomerBase(CustomerBase)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RegisterCustomerBase |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.RegisterCustomerBase`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.RegisterCustomerBase", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.RegisterCustomerBase`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.RegisterCustomerBase", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.RegisterCustomerBase", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-RegisterServer

---
title: greg.NETWORK.RegisterServer
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RegisterServer"
---

# `greg.NETWORK.RegisterServer`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.RegisterServer

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RegisterServer(Server)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RegisterServer |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.RegisterServer`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.RegisterServer", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.RegisterServer`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.RegisterServer", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.RegisterServer", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-RegisterSwitch

---
title: greg.NETWORK.RegisterSwitch
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RegisterSwitch"
---

# `greg.NETWORK.RegisterSwitch`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.RegisterSwitch

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RegisterSwitch(NetworkSwitch)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RegisterSwitch |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.RegisterSwitch`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.RegisterSwitch", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.RegisterSwitch`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.RegisterSwitch", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.RegisterSwitch", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ResolveThroughPatchPanel

---
title: greg.NETWORK.ResolveThroughPatchPanel
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.ResolveThroughPatchPanel"
---

# `greg.NETWORK.ResolveThroughPatchPanel`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.ResolveThroughPatchPanel

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::ResolveThroughPatchPanel(string, string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.ResolveThroughPatchPanel |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.ResolveThroughPatchPanel`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.ResolveThroughPatchPanel", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.ResolveThroughPatchPanel`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ResolveThroughPatchPanel", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.ResolveThroughPatchPanel", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ReturnSFPDirectly

---
title: greg.NETWORK.ReturnSFPDirectly
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPBox.ReturnSFPDirectly"
---

# `greg.NETWORK.ReturnSFPDirectly`

## Description

- Auto-generated from Il2Cpp unpack: SFPBox.ReturnSFPDirectly

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.SFPBox::ReturnSFPDirectly(SFPModule)` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.ReturnSFPDirectly |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.ReturnSFPDirectly`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.ReturnSFPDirectly", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.ReturnSFPDirectly`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ReturnSFPDirectly", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.ReturnSFPDirectly", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ScreenUIChanged

---
title: greg.NETWORK.ScreenUIChanged
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.UpdateScreenUI"
---

# `greg.NETWORK.ScreenUIChanged`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.UpdateScreenUI

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::UpdateScreenUI()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.UpdateScreenUI |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.ScreenUIChanged`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.ScreenUIChanged", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.ScreenUIChanged`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ScreenUIChanged", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.ScreenUIChanged", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-SecondActionOnClick

---
title: greg.NETWORK.SecondActionOnClick
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CableLink.SecondActionOnClick"
---

# `greg.NETWORK.SecondActionOnClick`

## Description

- Auto-generated from Il2Cpp unpack: CableLink.SecondActionOnClick

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CableLink::SecondActionOnClick()` | Postfix | Auto-generated from Il2Cpp unpack: CableLink.SecondActionOnClick |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.SecondActionOnClick`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.SecondActionOnClick", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.SecondActionOnClick`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.SecondActionOnClick", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.SecondActionOnClick", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-SFPFromBoxRemoved

---
title: greg.NETWORK.SFPFromBoxRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPBox.RemoveSFPFromBox"
---

# `greg.NETWORK.SFPFromBoxRemoved`

## Description

- Auto-generated from Il2Cpp unpack: SFPBox.RemoveSFPFromBox

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.SFPBox::RemoveSFPFromBox(int)` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.RemoveSFPFromBox |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.SFPFromBoxRemoved`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.SFPFromBoxRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.SFPFromBoxRemoved`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.SFPFromBoxRemoved", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.SFPFromBoxRemoved", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-SFPsFromSaveLoaded

---
title: greg.NETWORK.SFPsFromSaveLoaded
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPBox.LoadSFPsFromSave"
---

# `greg.NETWORK.SFPsFromSaveLoaded`

## Description

- Auto-generated from Il2Cpp unpack: SFPBox.LoadSFPsFromSave

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.SFPBox::LoadSFPsFromSave()` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.LoadSFPsFromSave |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.SFPsFromSaveLoaded`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.SFPsFromSaveLoaded", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.SFPsFromSaveLoaded`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.SFPsFromSaveLoaded", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.SFPsFromSaveLoaded", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-SwitchConnectionAdded

---
title: greg.NETWORK.SwitchConnectionAdded
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.AddSwitchConnection"
---

# `greg.NETWORK.SwitchConnectionAdded`

## Description

- Auto-generated from Il2Cpp unpack: NetworkMap.AddSwitchConnection

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::AddSwitchConnection(string, string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.AddSwitchConnection |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.SwitchConnectionAdded`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.SwitchConnectionAdded", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.SwitchConnectionAdded`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.SwitchConnectionAdded", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.SwitchConnectionAdded", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-SwitchInsertedInRack

---
title: greg.NETWORK.SwitchInsertedInRack
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.SwitchInsertedInRack"
---

# `greg.NETWORK.SwitchInsertedInRack`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.SwitchInsertedInRack

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::SwitchInsertedInRack(SwitchSaveData)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.SwitchInsertedInRack |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.SwitchInsertedInRack`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.SwitchInsertedInRack", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.SwitchInsertedInRack`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.SwitchInsertedInRack", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.SwitchInsertedInRack", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-TakeSFPFromBox

---
title: greg.NETWORK.TakeSFPFromBox
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPBox.TakeSFPFromBox"
---

# `greg.NETWORK.TakeSFPFromBox`

## Description

- Auto-generated from Il2Cpp unpack: SFPBox.TakeSFPFromBox

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.SFPBox::TakeSFPFromBox()` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.TakeSFPFromBox |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.TakeSFPFromBox`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.TakeSFPFromBox", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.TakeSFPFromBox`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.TakeSFPFromBox", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.TakeSFPFromBox", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-TurnOffCommonFunctions

---
title: greg.NETWORK.TurnOffCommonFunctions
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.TurnOffCommonFunctions"
---

# `greg.NETWORK.TurnOffCommonFunctions`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.TurnOffCommonFunctions

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::TurnOffCommonFunctions()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.TurnOffCommonFunctions |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.TurnOffCommonFunctions`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.TurnOffCommonFunctions", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.TurnOffCommonFunctions`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.TurnOffCommonFunctions", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.TurnOffCommonFunctions", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-TurnOnCommonFunction

---
title: greg.NETWORK.TurnOnCommonFunction
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.TurnOnCommonFunction"
---

# `greg.NETWORK.TurnOnCommonFunction`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.TurnOnCommonFunction

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::TurnOnCommonFunction()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.TurnOnCommonFunction |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.TurnOnCommonFunction`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.TurnOnCommonFunction", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.TurnOnCommonFunction`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.TurnOnCommonFunction", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.TurnOnCommonFunction", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ValidateRackPosition

---
title: greg.NETWORK.ValidateRackPosition
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.ValidateRackPosition"
---

# `greg.NETWORK.ValidateRackPosition`

## Description

- Auto-generated from Il2Cpp unpack: NetworkSwitch.ValidateRackPosition

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::ValidateRackPosition()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.ValidateRackPosition |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.NETWORK.ValidateRackPosition`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.NETWORK.ValidateRackPosition", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.NETWORK.ValidateRackPosition`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ValidateRackPosition", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.NETWORK.ValidateRackPosition", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`



