---
title: Server Hooks
sidebar_label: Server Hooks
---
## SERVER-ButtonClickChangeCustomer

---
title: greg.SERVER.ButtonClickChangeCustomer
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.ButtonClickChangeCustomer"
---

# `greg.SERVER.ButtonClickChangeCustomer`

## Description

- Auto-generated from Il2Cpp unpack: Server.ButtonClickChangeCustomer

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::ButtonClickChangeCustomer(bool)` | Postfix | Auto-generated from Il2Cpp unpack: Server.ButtonClickChangeCustomer |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.ButtonClickChangeCustomer`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.ButtonClickChangeCustomer", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.ButtonClickChangeCustomer`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.ButtonClickChangeCustomer", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.ButtonClickChangeCustomer", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## SERVER-ButtonClickChangeIP

---
title: greg.SERVER.ButtonClickChangeIP
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.ButtonClickChangeIP"
---

# `greg.SERVER.ButtonClickChangeIP`

## Description

- Auto-generated from Il2Cpp unpack: Server.ButtonClickChangeIP

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::ButtonClickChangeIP()` | Postfix | Auto-generated from Il2Cpp unpack: Server.ButtonClickChangeIP |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.ButtonClickChangeIP`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.ButtonClickChangeIP", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.ButtonClickChangeIP`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.ButtonClickChangeIP", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.ButtonClickChangeIP", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## SERVER-ClearErrorSign

---
title: greg.SERVER.ClearErrorSign
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.ClearErrorSign"
---

# `greg.SERVER.ClearErrorSign`

## Description

- Auto-generated from Il2Cpp unpack: Server.ClearErrorSign

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::ClearErrorSign()` | Postfix | Auto-generated from Il2Cpp unpack: Server.ClearErrorSign |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.ClearErrorSign`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.ClearErrorSign", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.ClearErrorSign`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.ClearErrorSign", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.ClearErrorSign", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## SERVER-ClearWarningSign

---
title: greg.SERVER.ClearWarningSign
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.ClearWarningSign"
---

# `greg.SERVER.ClearWarningSign`

## Description

- Auto-generated from Il2Cpp unpack: Server.ClearWarningSign

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::ClearWarningSign(bool)` | Postfix | Auto-generated from Il2Cpp unpack: Server.ClearWarningSign |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.ClearWarningSign`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.ClearWarningSign", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.ClearWarningSign`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.ClearWarningSign", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.ClearWarningSign", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## SERVER-ComponentInitialized

---
title: greg.SERVER.ComponentInitialized
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.Awake"
---

# `greg.SERVER.ComponentInitialized`

## Description

- Auto-generated from Il2Cpp unpack: Server.Awake
- Auto-generated from Il2Cpp unpack: Server.Start

## Patch Targets (Il2Cpp)

This hook name can be mapped to **2** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: Server.Awake |
| `Il2Cpp.Server::Start()` | Postfix | Auto-generated from Il2Cpp unpack: Server.Start |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.ComponentInitialized`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.ComponentInitialized", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.ComponentInitialized`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.ComponentInitialized", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.ComponentInitialized", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## SERVER-GetCustomerID

---
title: greg.SERVER.GetCustomerID
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.GetCustomerID"
---

# `greg.SERVER.GetCustomerID`

## Description

- Auto-generated from Il2Cpp unpack: Server.GetCustomerID

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::GetCustomerID()` | Postfix | Auto-generated from Il2Cpp unpack: Server.GetCustomerID |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.GetCustomerID`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.GetCustomerID", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.GetCustomerID`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.GetCustomerID", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.GetCustomerID", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## SERVER-GetNextCustomerID

---
title: greg.SERVER.GetNextCustomerID
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.GetNextCustomerID"
---

# `greg.SERVER.GetNextCustomerID`

## Description

- Auto-generated from Il2Cpp unpack: Server.GetNextCustomerID

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::GetNextCustomerID(int, bool)` | Postfix | Auto-generated from Il2Cpp unpack: Server.GetNextCustomerID |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.GetNextCustomerID`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.GetNextCustomerID", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.GetNextCustomerID`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.GetNextCustomerID", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.GetNextCustomerID", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## SERVER-InteractOnClick

---
title: greg.SERVER.InteractOnClick
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.InteractOnClick"
---

# `greg.SERVER.InteractOnClick`

## Description

- Auto-generated from Il2Cpp unpack: Server.InteractOnClick

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::InteractOnClick()` | Postfix | Auto-generated from Il2Cpp unpack: Server.InteractOnClick |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.InteractOnClick`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.InteractOnClick", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.InteractOnClick`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.InteractOnClick", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.InteractOnClick", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## SERVER-IPSet

---
title: greg.SERVER.IPSet
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.SetIP"
---

# `greg.SERVER.IPSet`

## Description

- Auto-generated from Il2Cpp unpack: Server.SetIP

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::SetIP(string)` | Postfix | Auto-generated from Il2Cpp unpack: Server.SetIP |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.IPSet`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.IPSet", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.IPSet`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.IPSet", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.IPSet", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## SERVER-IsAnyCableConnected

---
title: greg.SERVER.IsAnyCableConnected
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.IsAnyCableConnected"
---

# `greg.SERVER.IsAnyCableConnected`

## Description

- Auto-generated from Il2Cpp unpack: Server.IsAnyCableConnected

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::IsAnyCableConnected()` | Postfix | Auto-generated from Il2Cpp unpack: Server.IsAnyCableConnected |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.IsAnyCableConnected`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.IsAnyCableConnected", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.IsAnyCableConnected`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.IsAnyCableConnected", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.IsAnyCableConnected", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## SERVER-OnDestroy

---
title: greg.SERVER.OnDestroy
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.OnDestroy"
---

# `greg.SERVER.OnDestroy`

## Description

- Auto-generated from Il2Cpp unpack: Server.OnDestroy

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::OnDestroy()` | Postfix | Auto-generated from Il2Cpp unpack: Server.OnDestroy |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.OnDestroy`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.OnDestroy", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.OnDestroy`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.OnDestroy", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.OnDestroy", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## SERVER-OnLoadingComplete

---
title: greg.SERVER.OnLoadingComplete
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.OnLoadingComplete"
---

# `greg.SERVER.OnLoadingComplete`

## Description

- Auto-generated from Il2Cpp unpack: Server.OnLoadingComplete

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::OnLoadingComplete()` | Postfix | Auto-generated from Il2Cpp unpack: Server.OnLoadingComplete |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.OnLoadingComplete`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.OnLoadingComplete", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.OnLoadingComplete`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.OnLoadingComplete", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.OnLoadingComplete", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## SERVER-OnLoadingStarted

---
title: greg.SERVER.OnLoadingStarted
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.OnLoadingStarted"
---

# `greg.SERVER.OnLoadingStarted`

## Description

- Auto-generated from Il2Cpp unpack: Server.OnLoadingStarted

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::OnLoadingStarted()` | Postfix | Auto-generated from Il2Cpp unpack: Server.OnLoadingStarted |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.OnLoadingStarted`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.OnLoadingStarted", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.OnLoadingStarted`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.OnLoadingStarted", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.OnLoadingStarted", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## SERVER-PowerLightMaterialSet

---
title: greg.SERVER.PowerLightMaterialSet
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.SetPowerLightMaterial"
---

# `greg.SERVER.PowerLightMaterialSet`

## Description

- Auto-generated from Il2Cpp unpack: Server.SetPowerLightMaterial

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::SetPowerLightMaterial(Material)` | Postfix | Auto-generated from Il2Cpp unpack: Server.SetPowerLightMaterial |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.PowerLightMaterialSet`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.PowerLightMaterialSet", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.PowerLightMaterialSet`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.PowerLightMaterialSet", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.PowerLightMaterialSet", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## SERVER-ServerScreenUIChanged

---
title: greg.SERVER.ServerScreenUIChanged
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.UpdateServerScreenUI"
---

# `greg.SERVER.ServerScreenUIChanged`

## Description

- Auto-generated from Il2Cpp unpack: Server.UpdateServerScreenUI

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::UpdateServerScreenUI()` | Postfix | Auto-generated from Il2Cpp unpack: Server.UpdateServerScreenUI |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.ServerScreenUIChanged`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.ServerScreenUIChanged", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.ServerScreenUIChanged`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.ServerScreenUIChanged", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.ServerScreenUIChanged", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## SERVER-TurnOffCommonFunctions

---
title: greg.SERVER.TurnOffCommonFunctions
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.TurnOffCommonFunctions"
---

# `greg.SERVER.TurnOffCommonFunctions`

## Description

- Auto-generated from Il2Cpp unpack: Server.TurnOffCommonFunctions

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::TurnOffCommonFunctions()` | Postfix | Auto-generated from Il2Cpp unpack: Server.TurnOffCommonFunctions |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.TurnOffCommonFunctions`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.TurnOffCommonFunctions", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.TurnOffCommonFunctions`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.TurnOffCommonFunctions", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.TurnOffCommonFunctions", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## SERVER-TurnOnCommonFunction

---
title: greg.SERVER.TurnOnCommonFunction
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.TurnOnCommonFunction"
---

# `greg.SERVER.TurnOnCommonFunction`

## Description

- Auto-generated from Il2Cpp unpack: Server.TurnOnCommonFunction

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::TurnOnCommonFunction()` | Postfix | Auto-generated from Il2Cpp unpack: Server.TurnOnCommonFunction |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.TurnOnCommonFunction`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.TurnOnCommonFunction", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.TurnOnCommonFunction`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.TurnOnCommonFunction", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.TurnOnCommonFunction", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## SERVER-ValidateRackPosition

---
title: greg.SERVER.ValidateRackPosition
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Server.ValidateRackPosition"
---

# `greg.SERVER.ValidateRackPosition`

## Description

- Auto-generated from Il2Cpp unpack: Server.ValidateRackPosition

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.Server::ValidateRackPosition()` | Postfix | Auto-generated from Il2Cpp unpack: Server.ValidateRackPosition |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.SERVER.ValidateRackPosition`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.SERVER.ValidateRackPosition", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.SERVER.ValidateRackPosition`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SERVER.ValidateRackPosition", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.SERVER.ValidateRackPosition", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`



