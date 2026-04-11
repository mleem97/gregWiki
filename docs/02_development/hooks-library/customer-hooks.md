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

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CustomerBase.AddAppPerformance

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::AddAppPerformance(int, float)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.AddAppPerformance |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.CUSTOMER.AppPerformanceAdded`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.CUSTOMER.AppPerformanceAdded", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.CUSTOMER.AppPerformanceAdded` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.AppPerformanceAdded", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.CUSTOMER.AppPerformanceAdded", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-AppText

---
title: greg.CUSTOMER.AppText
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.AppText"
---

# `greg.CUSTOMER.AppText`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CustomerBase.AppText

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::AppText(int)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.AppText |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.CUSTOMER.AppText`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.CUSTOMER.AppText", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.CUSTOMER.AppText` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.AppText", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.CUSTOMER.AppText", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-ComponentInitialized

---
title: greg.CUSTOMER.ComponentInitialized
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.Awake"
---

# `greg.CUSTOMER.ComponentInitialized`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CustomerBase.Awake
- Auto-generated from Il2Cpp unpack: CustomerBase.Start

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **2** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.Awake |
| `Il2Cpp.CustomerBase::Start()` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.Start |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.CUSTOMER.ComponentInitialized`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.CUSTOMER.ComponentInitialized", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.CUSTOMER.ComponentInitialized` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.ComponentInitialized", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.CUSTOMER.ComponentInitialized", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-CustomerServerCountAndSpeedChanged

---
title: greg.CUSTOMER.CustomerServerCountAndSpeedChanged
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.UpdateCustomerServerCountAndSpeed"
---

# `greg.CUSTOMER.CustomerServerCountAndSpeedChanged`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CustomerBase.UpdateCustomerServerCountAndSpeed

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::UpdateCustomerServerCountAndSpeed(int, float)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.UpdateCustomerServerCountAndSpeed |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.CUSTOMER.CustomerServerCountAndSpeedChanged`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.CUSTOMER.CustomerServerCountAndSpeedChanged", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.CUSTOMER.CustomerServerCountAndSpeedChanged` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.CustomerServerCountAndSpeedChanged", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.CUSTOMER.CustomerServerCountAndSpeedChanged", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-DataLoaded

---
title: greg.CUSTOMER.DataLoaded
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.LoadData"
---

# `greg.CUSTOMER.DataLoaded`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CustomerBase.LoadData

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::LoadData(CustomerBaseSaveData)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.LoadData |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.CUSTOMER.DataLoaded`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.CUSTOMER.DataLoaded", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.CUSTOMER.DataLoaded` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.DataLoaded", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.CUSTOMER.DataLoaded", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-GetAppIDForIP

---
title: greg.CUSTOMER.GetAppIDForIP
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.GetAppIDForIP"
---

# `greg.CUSTOMER.GetAppIDForIP`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CustomerBase.GetAppIDForIP

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::GetAppIDForIP(string)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.GetAppIDForIP |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.CUSTOMER.GetAppIDForIP`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.CUSTOMER.GetAppIDForIP", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.CUSTOMER.GetAppIDForIP` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.GetAppIDForIP", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.CUSTOMER.GetAppIDForIP", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-GetServerTypeForIP

---
title: greg.CUSTOMER.GetServerTypeForIP
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.GetServerTypeForIP"
---

# `greg.CUSTOMER.GetServerTypeForIP`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CustomerBase.GetServerTypeForIP

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::GetServerTypeForIP(string)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.GetServerTypeForIP |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.CUSTOMER.GetServerTypeForIP`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.CUSTOMER.GetServerTypeForIP", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.CUSTOMER.GetServerTypeForIP` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.GetServerTypeForIP", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.CUSTOMER.GetServerTypeForIP", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-GetSubnetsPerApp

---
title: greg.CUSTOMER.GetSubnetsPerApp
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.GetSubnetsPerApp"
---

# `greg.CUSTOMER.GetSubnetsPerApp`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CustomerBase.GetSubnetsPerApp

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::GetSubnetsPerApp()` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.GetSubnetsPerApp |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.CUSTOMER.GetSubnetsPerApp`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.CUSTOMER.GetSubnetsPerApp", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.CUSTOMER.GetSubnetsPerApp` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.GetSubnetsPerApp", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.CUSTOMER.GetSubnetsPerApp", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-GetTotalAppSpeed

---
title: greg.CUSTOMER.GetTotalAppSpeed
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.GetTotalAppSpeed"
---

# `greg.CUSTOMER.GetTotalAppSpeed`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CustomerBase.GetTotalAppSpeed

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::GetTotalAppSpeed()` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.GetTotalAppSpeed |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.CUSTOMER.GetTotalAppSpeed`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.CUSTOMER.GetTotalAppSpeed", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.CUSTOMER.GetTotalAppSpeed` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.GetTotalAppSpeed", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.CUSTOMER.GetTotalAppSpeed", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-IsIPPresent

---
title: greg.CUSTOMER.IsIPPresent
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.IsIPPresent"
---

# `greg.CUSTOMER.IsIPPresent`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CustomerBase.IsIPPresent

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::IsIPPresent(string)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.IsIPPresent |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.CUSTOMER.IsIPPresent`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.CUSTOMER.IsIPPresent", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.CUSTOMER.IsIPPresent` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.IsIPPresent", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.CUSTOMER.IsIPPresent", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-ResetAllAppSpeeds

---
title: greg.CUSTOMER.ResetAllAppSpeeds
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.ResetAllAppSpeeds"
---

# `greg.CUSTOMER.ResetAllAppSpeeds`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CustomerBase.ResetAllAppSpeeds

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::ResetAllAppSpeeds()` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.ResetAllAppSpeeds |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.CUSTOMER.ResetAllAppSpeeds`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.CUSTOMER.ResetAllAppSpeeds", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.CUSTOMER.ResetAllAppSpeeds` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.ResetAllAppSpeeds", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.CUSTOMER.ResetAllAppSpeeds", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-SpeedOnCustomerBaseAppChanged

---
title: greg.CUSTOMER.SpeedOnCustomerBaseAppChanged
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.UpdateSpeedOnCustomerBaseApp"
---

# `greg.CUSTOMER.SpeedOnCustomerBaseAppChanged`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CustomerBase.UpdateSpeedOnCustomerBaseApp

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::UpdateSpeedOnCustomerBaseApp(int, float)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.UpdateSpeedOnCustomerBaseApp |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.CUSTOMER.SpeedOnCustomerBaseAppChanged`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.CUSTOMER.SpeedOnCustomerBaseAppChanged", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.CUSTOMER.SpeedOnCustomerBaseAppChanged` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.SpeedOnCustomerBaseAppChanged", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.CUSTOMER.SpeedOnCustomerBaseAppChanged", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-UpAppSet

---
title: greg.CUSTOMER.UpAppSet
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.SetUpApp"
---

# `greg.CUSTOMER.UpAppSet`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CustomerBase.SetUpApp

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::SetUpApp(int, int, CustomerBaseSaveData)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.SetUpApp |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.CUSTOMER.UpAppSet`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.CUSTOMER.UpAppSet", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.CUSTOMER.UpAppSet` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.UpAppSet", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.CUSTOMER.UpAppSet", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## CUSTOMER-UpBaseSet

---
title: greg.CUSTOMER.UpBaseSet
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CustomerBase.SetUpBase"
---

# `greg.CUSTOMER.UpBaseSet`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CustomerBase.SetUpBase

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CustomerBase::SetUpBase(CustomerItem, CustomerBaseSaveData)` | Postfix | Auto-generated from Il2Cpp unpack: CustomerBase.SetUpBase |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.CUSTOMER.UpBaseSet`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.CUSTOMER.UpBaseSet", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.CUSTOMER.UpBaseSet` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.CUSTOMER.UpBaseSet", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.CUSTOMER.UpBaseSet", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


