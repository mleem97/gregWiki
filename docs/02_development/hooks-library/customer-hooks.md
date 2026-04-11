---
title: Customer Hooks
sidebar_label: Customer Hooks
---
## CUSTOMER-AppPerformanceAdded

---
title: greg.CUSTOMER.AppPerformanceAdded
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.AddAppPerformance"
---

# `greg.CUSTOMER.AppPerformanceAdded`

## Description

- Auto-generated from Il2Cpp unpack: CustomerBase.AddAppPerformance

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::AddAppPerformance(int, float)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.AddAppPerformance |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.CUSTOMER.AppPerformanceAdded`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.CUSTOMER.AppPerformanceAdded", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.CUSTOMER.AppPerformanceAdded`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.AppPerformanceAdded", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.CUSTOMER.AppPerformanceAdded", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-AppText

---
title: greg.CUSTOMER.AppText
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.AppText"
---

# `greg.CUSTOMER.AppText`

## Description

- Auto-generated from Il2Cpp unpack: CustomerBase.AppText

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::AppText(int)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.AppText |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.CUSTOMER.AppText`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.CUSTOMER.AppText", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.CUSTOMER.AppText`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.AppText", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.CUSTOMER.AppText", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-ComponentInitialized

---
title: greg.CUSTOMER.ComponentInitialized
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.Awake"
---

# `greg.CUSTOMER.ComponentInitialized`

## Description

- Auto-generated from Il2Cpp unpack: CustomerBase.Awake
- Auto-generated from Il2Cpp unpack: CustomerBase.Start

## Patch Targets (Il2Cpp)

This hook name can be mapped to **2** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.Awake |
| `Il2Cpp.CustomerBase::Start()` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.Start |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.CUSTOMER.ComponentInitialized`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.CUSTOMER.ComponentInitialized", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.CUSTOMER.ComponentInitialized`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.ComponentInitialized", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.CUSTOMER.ComponentInitialized", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-CustomerServerCountAndSpeedChanged

---
title: greg.CUSTOMER.CustomerServerCountAndSpeedChanged
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.UpdateCustomerServerCountAndSpeed"
---

# `greg.CUSTOMER.CustomerServerCountAndSpeedChanged`

## Description

- Auto-generated from Il2Cpp unpack: CustomerBase.UpdateCustomerServerCountAndSpeed

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::UpdateCustomerServerCountAndSpeed(int, float)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.UpdateCustomerServerCountAndSpeed |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.CUSTOMER.CustomerServerCountAndSpeedChanged`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.CUSTOMER.CustomerServerCountAndSpeedChanged", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.CUSTOMER.CustomerServerCountAndSpeedChanged`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.CustomerServerCountAndSpeedChanged", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.CUSTOMER.CustomerServerCountAndSpeedChanged", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-DataLoaded

---
title: greg.CUSTOMER.DataLoaded
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.LoadData"
---

# `greg.CUSTOMER.DataLoaded`

## Description

- Auto-generated from Il2Cpp unpack: CustomerBase.LoadData

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::LoadData(CustomerBaseSaveData)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.LoadData |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.CUSTOMER.DataLoaded`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.CUSTOMER.DataLoaded", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.CUSTOMER.DataLoaded`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.DataLoaded", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.CUSTOMER.DataLoaded", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-GetAppIDForIP

---
title: greg.CUSTOMER.GetAppIDForIP
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.GetAppIDForIP"
---

# `greg.CUSTOMER.GetAppIDForIP`

## Description

- Auto-generated from Il2Cpp unpack: CustomerBase.GetAppIDForIP

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::GetAppIDForIP(string)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.GetAppIDForIP |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.CUSTOMER.GetAppIDForIP`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.CUSTOMER.GetAppIDForIP", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.CUSTOMER.GetAppIDForIP`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.GetAppIDForIP", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.CUSTOMER.GetAppIDForIP", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-GetServerTypeForIP

---
title: greg.CUSTOMER.GetServerTypeForIP
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.GetServerTypeForIP"
---

# `greg.CUSTOMER.GetServerTypeForIP`

## Description

- Auto-generated from Il2Cpp unpack: CustomerBase.GetServerTypeForIP

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::GetServerTypeForIP(string)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.GetServerTypeForIP |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.CUSTOMER.GetServerTypeForIP`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.CUSTOMER.GetServerTypeForIP", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.CUSTOMER.GetServerTypeForIP`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.GetServerTypeForIP", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.CUSTOMER.GetServerTypeForIP", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-GetSubnetsPerApp

---
title: greg.CUSTOMER.GetSubnetsPerApp
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.GetSubnetsPerApp"
---

# `greg.CUSTOMER.GetSubnetsPerApp`

## Description

- Auto-generated from Il2Cpp unpack: CustomerBase.GetSubnetsPerApp

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::GetSubnetsPerApp()` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.GetSubnetsPerApp |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.CUSTOMER.GetSubnetsPerApp`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.CUSTOMER.GetSubnetsPerApp", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.CUSTOMER.GetSubnetsPerApp`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.GetSubnetsPerApp", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.CUSTOMER.GetSubnetsPerApp", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-GetTotalAppSpeed

---
title: greg.CUSTOMER.GetTotalAppSpeed
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.GetTotalAppSpeed"
---

# `greg.CUSTOMER.GetTotalAppSpeed`

## Description

- Auto-generated from Il2Cpp unpack: CustomerBase.GetTotalAppSpeed

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::GetTotalAppSpeed()` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.GetTotalAppSpeed |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.CUSTOMER.GetTotalAppSpeed`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.CUSTOMER.GetTotalAppSpeed", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.CUSTOMER.GetTotalAppSpeed`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.GetTotalAppSpeed", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.CUSTOMER.GetTotalAppSpeed", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-IsIPPresent

---
title: greg.CUSTOMER.IsIPPresent
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.IsIPPresent"
---

# `greg.CUSTOMER.IsIPPresent`

## Description

- Auto-generated from Il2Cpp unpack: CustomerBase.IsIPPresent

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::IsIPPresent(string)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.IsIPPresent |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.CUSTOMER.IsIPPresent`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.CUSTOMER.IsIPPresent", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.CUSTOMER.IsIPPresent`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.IsIPPresent", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.CUSTOMER.IsIPPresent", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-ResetAllAppSpeeds

---
title: greg.CUSTOMER.ResetAllAppSpeeds
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.ResetAllAppSpeeds"
---

# `greg.CUSTOMER.ResetAllAppSpeeds`

## Description

- Auto-generated from Il2Cpp unpack: CustomerBase.ResetAllAppSpeeds

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::ResetAllAppSpeeds()` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.ResetAllAppSpeeds |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.CUSTOMER.ResetAllAppSpeeds`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.CUSTOMER.ResetAllAppSpeeds", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.CUSTOMER.ResetAllAppSpeeds`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.ResetAllAppSpeeds", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.CUSTOMER.ResetAllAppSpeeds", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-SpeedOnCustomerBaseAppChanged

---
title: greg.CUSTOMER.SpeedOnCustomerBaseAppChanged
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.UpdateSpeedOnCustomerBaseApp"
---

# `greg.CUSTOMER.SpeedOnCustomerBaseAppChanged`

## Description

- Auto-generated from Il2Cpp unpack: CustomerBase.UpdateSpeedOnCustomerBaseApp

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::UpdateSpeedOnCustomerBaseApp(int, float)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.UpdateSpeedOnCustomerBaseApp |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.CUSTOMER.SpeedOnCustomerBaseAppChanged`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.CUSTOMER.SpeedOnCustomerBaseAppChanged", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.CUSTOMER.SpeedOnCustomerBaseAppChanged`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.SpeedOnCustomerBaseAppChanged", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.CUSTOMER.SpeedOnCustomerBaseAppChanged", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-UpAppSet

---
title: greg.CUSTOMER.UpAppSet
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.SetUpApp"
---

# `greg.CUSTOMER.UpAppSet`

## Description

- Auto-generated from Il2Cpp unpack: CustomerBase.SetUpApp

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::SetUpApp(int, int, CustomerBaseSaveData)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.SetUpApp |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.CUSTOMER.UpAppSet`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.CUSTOMER.UpAppSet", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.CUSTOMER.UpAppSet`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.UpAppSet", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.CUSTOMER.UpAppSet", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-UpBaseSet

---
title: greg.CUSTOMER.UpBaseSet
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.SetUpBase"
---

# `greg.CUSTOMER.UpBaseSet`

## Description

- Auto-generated from Il2Cpp unpack: CustomerBase.SetUpBase

## Patch Targets (Il2Cpp)

This hook name can be mapped to **1** Harmony target(s):

| Patch Target | Strategy | Description |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::SetUpBase(CustomerItem, CustomerBaseSaveData)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.SetUpBase |

**Strategy:** Postfix — The catalog says **Postfix** → typically use `HookBinder.OnAfter(...)`.

## Payload Schema (from Registry)

| Field | Type / Note |
|------|----------------|
| `method` | `string` |

## How to use this hook

### 1. Harmony Pipeline: `HookBinder` (Main path for `greg_hooks.json`)

The framework code patches Il2Cpp methods and calls `HookBinder.DispatchBefore` / `DispatchAfter`. You register handlers with the **exact** string `greg.CUSTOMER.UpBaseSet`:

```csharp
using FrikaMF.Hooks;

// For Postfix strategy (common):
HookBinder.OnAfter("greg.CUSTOMER.UpBaseSet", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Prerequisites:

- A hook **catalog** / alias file has been loaded (e.g., `HookBinder.LoadAliases(path)` or `Hooker.InstallFromCatalog(...)`), so the Il2Cpp signature is mapped to the canonical string `greg.CUSTOMER.UpBaseSet`.
- Namespace `FrikaMF.Hooks`, type `HookContext` (includes `Arguments`, `Instance`, `ReturnValue`, etc.).

### 2. Object Bus: `GregEventDispatcher` (Rust / FFI / manual emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.UpBaseSet", payload =>
{
    // depending on the payload type; helpers: GregPayload.Get<T>(payload, "field", fallback)
});
```

Unregister: `GregEventDispatcher.Off("greg.CUSTOMER.UpBaseSet", handler)` (same delegate reference as for `On`).

## See also

- [Overview of all greg hooks](../../_internal/README.md)
- Source: `gregCore/gregFramework/greg_hooks.json`



