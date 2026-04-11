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

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CablePositions.AssignNewPosition

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::AssignNewPosition(int, Transform, bool, bool, CableLink.TypeOfLink, string)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.AssignNewPosition |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.AssignNewPosition`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.AssignNewPosition", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.AssignNewPosition` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.AssignNewPosition", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.AssignNewPosition", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-BrokenServerAdded

---
title: greg.NETWORK.BrokenServerAdded
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.AddBrokenServer"
---

# `greg.NETWORK.BrokenServerAdded`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.AddBrokenServer

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::AddBrokenServer(Server)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.AddBrokenServer |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.BrokenServerAdded`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.BrokenServerAdded", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.BrokenServerAdded` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.BrokenServerAdded", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.BrokenServerAdded", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-BrokenServerRemoved

---
title: greg.NETWORK.BrokenServerRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RemoveBrokenServer"
---

# `greg.NETWORK.BrokenServerRemoved`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.RemoveBrokenServer

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RemoveBrokenServer(string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RemoveBrokenServer |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.BrokenServerRemoved`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.BrokenServerRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.BrokenServerRemoved` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.BrokenServerRemoved", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.BrokenServerRemoved", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ButtonShowNetworkSwitchConfig

---
title: greg.NETWORK.ButtonShowNetworkSwitchConfig
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.ButtonShowNetworkSwitchConfig"
---

# `greg.NETWORK.ButtonShowNetworkSwitchConfig`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.ButtonShowNetworkSwitchConfig

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::ButtonShowNetworkSwitchConfig()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.ButtonShowNetworkSwitchConfig |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.ButtonShowNetworkSwitchConfig`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.ButtonShowNetworkSwitchConfig", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.ButtonShowNetworkSwitchConfig` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ButtonShowNetworkSwitchConfig", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.ButtonShowNetworkSwitchConfig", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CableConnectionRemoved

---
title: greg.NETWORK.CableConnectionRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RemoveCableConnection"
---

# `greg.NETWORK.CableConnectionRemoved`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.RemoveCableConnection

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RemoveCableConnection(int)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RemoveCableConnection |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.CableConnectionRemoved`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.CableConnectionRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.CableConnectionRemoved` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CableConnectionRemoved", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.CableConnectionRemoved", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CableFromLACPGroupsRemoved

---
title: greg.NETWORK.CableFromLACPGroupsRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RemoveCableFromLACPGroups"
---

# `greg.NETWORK.CableFromLACPGroupsRemoved`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.RemoveCableFromLACPGroups

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RemoveCableFromLACPGroups(int)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RemoveCableFromLACPGroups |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.CableFromLACPGroupsRemoved`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.CableFromLACPGroupsRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.CableFromLACPGroupsRemoved` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CableFromLACPGroupsRemoved", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.CableFromLACPGroupsRemoved", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CableLoaded

---
title: greg.NETWORK.CableLoaded
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.LoadCable"
---

# `greg.NETWORK.CableLoaded`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CablePositions.LoadCable

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::LoadCable(CableSaveData)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.LoadCable |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.CableLoaded`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.CableLoaded", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.CableLoaded` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CableLoaded", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.CableLoaded", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CanAcceptSFP

---
title: greg.NETWORK.CanAcceptSFP
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPBox.CanAcceptSFP"
---

# `greg.NETWORK.CanAcceptSFP`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: SFPBox.CanAcceptSFP

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.SFPBox::CanAcceptSFP(int)` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.CanAcceptSFP |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.CanAcceptSFP`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.CanAcceptSFP", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.CanAcceptSFP` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CanAcceptSFP", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.CanAcceptSFP", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ClearErrorSign

---
title: greg.NETWORK.ClearErrorSign
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.ClearErrorSign"
---

# `greg.NETWORK.ClearErrorSign`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.ClearErrorSign

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::ClearErrorSign()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.ClearErrorSign |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.ClearErrorSign`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.ClearErrorSign", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.ClearErrorSign` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ClearErrorSign", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.ClearErrorSign", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ClearMap

---
title: greg.NETWORK.ClearMap
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.ClearMap"
---

# `greg.NETWORK.ClearMap`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.ClearMap

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::ClearMap()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.ClearMap |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.ClearMap`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.ClearMap", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.ClearMap` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ClearMap", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.ClearMap", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ClearWarningSign

---
title: greg.NETWORK.ClearWarningSign
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.ClearWarningSign"
---

# `greg.NETWORK.ClearWarningSign`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.ClearWarningSign

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::ClearWarningSign(bool)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.ClearWarningSign |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.ClearWarningSign`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.ClearWarningSign", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.ClearWarningSign` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ClearWarningSign", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.ClearWarningSign", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ComponentInitialized

---
title: greg.NETWORK.ComponentInitialized
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CableLink.Start"
---

# `greg.NETWORK.ComponentInitialized`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CableLink.Start
- Auto-generated from Il2Cpp unpack: CablePositions.Awake
- Auto-generated from Il2Cpp unpack: CablePositions.Start
- Auto-generated from Il2Cpp unpack: NetworkMap.Awake
- Auto-generated from Il2Cpp unpack: NetworkSwitch.Awake
- Auto-generated from Il2Cpp unpack: NetworkSwitch.Start
- Auto-generated from Il2Cpp unpack: SFPBox.Awake
- Auto-generated from Il2Cpp unpack: SFPModule.Awake

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **8** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CableLink::Start()` | Postfix | Auto-generated from Il2Cpp unpack: CableLink.Start |
| `Il2Cpp.CablePositions::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.Awake |
| `Il2Cpp.CablePositions::Start()` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.Start |
| `Il2Cpp.NetworkMap::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.Awake |
| `Il2Cpp.NetworkSwitch::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.Awake |
| `Il2Cpp.NetworkSwitch::Start()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.Start |
| `Il2Cpp.SFPBox::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.Awake |
| `Il2Cpp.SFPModule::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: SFPModule.Awake |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.ComponentInitialized`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.ComponentInitialized", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.ComponentInitialized` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ComponentInitialized", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.ComponentInitialized", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-Connect

---
title: greg.NETWORK.Connect
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.Connect"
---

# `greg.NETWORK.Connect`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.Connect

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::Connect(string, string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.Connect |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.Connect`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.Connect", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.Connect` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.Connect", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.Connect", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CreateLACPGroup

---
title: greg.NETWORK.CreateLACPGroup
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.CreateLACPGroup"
---

# `greg.NETWORK.CreateLACPGroup`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.CreateLACPGroup

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::CreateLACPGroup(string, string, List<int>)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.CreateLACPGroup |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.CreateLACPGroup`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.CreateLACPGroup", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.CreateLACPGroup` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CreateLACPGroup", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.CreateLACPGroup", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CreateNewReverseCable

---
title: greg.NETWORK.CreateNewReverseCable
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.CreateNewReverseCable"
---

# `greg.NETWORK.CreateNewReverseCable`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CablePositions.CreateNewReverseCable

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::CreateNewReverseCable()` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.CreateNewReverseCable |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.CreateNewReverseCable`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.CreateNewReverseCable", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.CreateNewReverseCable` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CreateNewReverseCable", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.CreateNewReverseCable", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CreateRopeAttachPoint

---
title: greg.NETWORK.CreateRopeAttachPoint
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CableLink.CreateRopeAttachPoint"
---

# `greg.NETWORK.CreateRopeAttachPoint`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CableLink.CreateRopeAttachPoint

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CableLink::CreateRopeAttachPoint()` | Postfix | Auto-generated from Il2Cpp unpack: CableLink.CreateRopeAttachPoint |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.CreateRopeAttachPoint`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.CreateRopeAttachPoint", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.CreateRopeAttachPoint` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CreateRopeAttachPoint", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.CreateRopeAttachPoint", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CreateTubeMesh

---
title: greg.NETWORK.CreateTubeMesh
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.CreateTubeMesh"
---

# `greg.NETWORK.CreateTubeMesh`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CablePositions.CreateTubeMesh

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::CreateTubeMesh(List<Vector3>)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.CreateTubeMesh |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.CreateTubeMesh`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.CreateTubeMesh", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.CreateTubeMesh` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CreateTubeMesh", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.CreateTubeMesh", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-CustomerServerCountAndSpeedChanged

---
title: greg.NETWORK.CustomerServerCountAndSpeedChanged
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.UpdateCustomerServerCountAndSpeed"
---

# `greg.NETWORK.CustomerServerCountAndSpeedChanged`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.UpdateCustomerServerCountAndSpeed

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::UpdateCustomerServerCountAndSpeed(int, int, float)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.UpdateCustomerServerCountAndSpeed |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.CustomerServerCountAndSpeedChanged`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.CustomerServerCountAndSpeedChanged", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.CustomerServerCountAndSpeedChanged` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.CustomerServerCountAndSpeedChanged", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.CustomerServerCountAndSpeedChanged", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-DeviceAdded

---
title: greg.NETWORK.DeviceAdded
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.AddDevice"
---

# `greg.NETWORK.DeviceAdded`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.AddDevice

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::AddDevice(string, CableLink.TypeOfLink, int)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.AddDevice |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.DeviceAdded`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.DeviceAdded", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.DeviceAdded` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.DeviceAdded", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.DeviceAdded", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-DeviceCustomerIDChanged

---
title: greg.NETWORK.DeviceCustomerIDChanged
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.UpdateDeviceCustomerID"
---

# `greg.NETWORK.DeviceCustomerIDChanged`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.UpdateDeviceCustomerID

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::UpdateDeviceCustomerID(string, int)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.UpdateDeviceCustomerID |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.DeviceCustomerIDChanged`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.DeviceCustomerIDChanged", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.DeviceCustomerIDChanged` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.DeviceCustomerIDChanged", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.DeviceCustomerIDChanged", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-DeviceRemoved

---
title: greg.NETWORK.DeviceRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RemoveDevice"
---

# `greg.NETWORK.DeviceRemoved`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.RemoveDevice

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RemoveDevice(string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RemoveDevice |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.DeviceRemoved`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.DeviceRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.DeviceRemoved` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.DeviceRemoved", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.DeviceRemoved", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-DeviceRepaired

---
title: greg.NETWORK.DeviceRepaired
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.RepairDevice"
---

# `greg.NETWORK.DeviceRepaired`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.RepairDevice

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::RepairDevice()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.RepairDevice |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.DeviceRepaired`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.DeviceRepaired", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.DeviceRepaired` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.DeviceRepaired", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.DeviceRepaired", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-Disconnect

---
title: greg.NETWORK.Disconnect
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.Disconnect"
---

# `greg.NETWORK.Disconnect`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.Disconnect

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::Disconnect(string, string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.Disconnect |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.Disconnect`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.Disconnect", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.Disconnect` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.Disconnect", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.Disconnect", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-DisconnectCables

---
title: greg.NETWORK.DisconnectCables
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.DisconnectCables"
---

# `greg.NETWORK.DisconnectCables`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.DisconnectCables

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::DisconnectCables()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.DisconnectCables |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.DisconnectCables`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.DisconnectCables", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.DisconnectCables` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.DisconnectCables", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.DisconnectCables", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-DisconnectCablesWhenSwitchIsOff

---
title: greg.NETWORK.DisconnectCablesWhenSwitchIsOff
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.DisconnectCablesWhenSwitchIsOff"
---

# `greg.NETWORK.DisconnectCablesWhenSwitchIsOff`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.DisconnectCablesWhenSwitchIsOff

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::DisconnectCablesWhenSwitchIsOff()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.DisconnectCablesWhenSwitchIsOff |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.DisconnectCablesWhenSwitchIsOff`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.DisconnectCablesWhenSwitchIsOff", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.DisconnectCablesWhenSwitchIsOff` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.DisconnectCablesWhenSwitchIsOff", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.DisconnectCablesWhenSwitchIsOff", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-FindAllRoutes

---
title: greg.NETWORK.FindAllRoutes
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.FindAllRoutes"
---

# `greg.NETWORK.FindAllRoutes`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.FindAllRoutes

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::FindAllRoutes(string, string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.FindAllRoutes |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.FindAllRoutes`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.FindAllRoutes", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.FindAllRoutes` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.FindAllRoutes", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.FindAllRoutes", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-FindPhysicalPath

---
title: greg.NETWORK.FindPhysicalPath
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.FindPhysicalPath"
---

# `greg.NETWORK.FindPhysicalPath`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.FindPhysicalPath

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::FindPhysicalPath(string, string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.FindPhysicalPath |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.FindPhysicalPath`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.FindPhysicalPath", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.FindPhysicalPath` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.FindPhysicalPath", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.FindPhysicalPath", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-FromPortRemoved

---
title: greg.NETWORK.FromPortRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPModule.RemoveFromPort"
---

# `greg.NETWORK.FromPortRemoved`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: SFPModule.RemoveFromPort

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.SFPModule::RemoveFromPort()` | Postfix | Auto-generated from Il2Cpp unpack: SFPModule.RemoveFromPort |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.FromPortRemoved`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.FromPortRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.FromPortRemoved` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.FromPortRemoved", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.FromPortRemoved", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GenerateBentSegment

---
title: greg.NETWORK.GenerateBentSegment
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.GenerateBentSegment"
---

# `greg.NETWORK.GenerateBentSegment`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CablePositions.GenerateBentSegment

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::GenerateBentSegment(Vector3, Vector3, Transform, bool)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.GenerateBentSegment |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GenerateBentSegment`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GenerateBentSegment", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GenerateBentSegment` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GenerateBentSegment", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GenerateBentSegment", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GenerateCornerBend

---
title: greg.NETWORK.GenerateCornerBend
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.GenerateCornerBend"
---

# `greg.NETWORK.GenerateCornerBend`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CablePositions.GenerateCornerBend

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::GenerateCornerBend(Vector3, Vector3, Vector3, Transform)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.GenerateCornerBend |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GenerateCornerBend`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GenerateCornerBend", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GenerateCornerBend` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GenerateCornerBend", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GenerateCornerBend", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GenerateDeviceName

---
title: greg.NETWORK.GenerateDeviceName
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GenerateDeviceName"
---

# `greg.NETWORK.GenerateDeviceName`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.GenerateDeviceName

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GenerateDeviceName(CableLink.TypeOfLink, Vector3)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GenerateDeviceName |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GenerateDeviceName`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GenerateDeviceName", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GenerateDeviceName` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GenerateDeviceName", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GenerateDeviceName", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GenerateFinalPath

---
title: greg.NETWORK.GenerateFinalPath
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.GenerateFinalPath"
---

# `greg.NETWORK.GenerateFinalPath`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CablePositions.GenerateFinalPath

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::GenerateFinalPath(int)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.GenerateFinalPath |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GenerateFinalPath`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GenerateFinalPath", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GenerateFinalPath` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GenerateFinalPath", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GenerateFinalPath", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetAllBrokenServers

---
title: greg.NETWORK.GetAllBrokenServers
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetAllBrokenServers"
---

# `greg.NETWORK.GetAllBrokenServers`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.GetAllBrokenServers

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetAllBrokenServers()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetAllBrokenServers |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetAllBrokenServers`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetAllBrokenServers", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetAllBrokenServers` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetAllBrokenServers", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetAllBrokenServers", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetAllBrokenSwitches

---
title: greg.NETWORK.GetAllBrokenSwitches
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetAllBrokenSwitches"
---

# `greg.NETWORK.GetAllBrokenSwitches`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.GetAllBrokenSwitches

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetAllBrokenSwitches()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetAllBrokenSwitches |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetAllBrokenSwitches`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetAllBrokenSwitches", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetAllBrokenSwitches` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetAllBrokenSwitches", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetAllBrokenSwitches", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetAllDevices

---
title: greg.NETWORK.GetAllDevices
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetAllDevices"
---

# `greg.NETWORK.GetAllDevices`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.GetAllDevices

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetAllDevices()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetAllDevices |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetAllDevices`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetAllDevices", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetAllDevices` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetAllDevices", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetAllDevices", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetAllLACPGroups

---
title: greg.NETWORK.GetAllLACPGroups
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetAllLACPGroups"
---

# `greg.NETWORK.GetAllLACPGroups`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.GetAllLACPGroups

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetAllLACPGroups()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetAllLACPGroups |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetAllLACPGroups`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetAllLACPGroups", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetAllLACPGroups` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetAllLACPGroups", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetAllLACPGroups", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetAllNetworkSwitches

---
title: greg.NETWORK.GetAllNetworkSwitches
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetAllNetworkSwitches"
---

# `greg.NETWORK.GetAllNetworkSwitches`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.GetAllNetworkSwitches

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetAllNetworkSwitches()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetAllNetworkSwitches |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetAllNetworkSwitches`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetAllNetworkSwitches", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetAllNetworkSwitches` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetAllNetworkSwitches", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetAllNetworkSwitches", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetAllServers

---
title: greg.NETWORK.GetAllServers
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetAllServers"
---

# `greg.NETWORK.GetAllServers`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.GetAllServers

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetAllServers()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetAllServers |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetAllServers`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetAllServers", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetAllServers` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetAllServers", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetAllServers", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetCableMaterial

---
title: greg.NETWORK.GetCableMaterial
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.GetCableMaterial"
---

# `greg.NETWORK.GetCableMaterial`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CablePositions.GetCableMaterial

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::GetCableMaterial(int)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.GetCableMaterial |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetCableMaterial`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetCableMaterial", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetCableMaterial` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetCableMaterial", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetCableMaterial", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetCablePositions

---
title: greg.NETWORK.GetCablePositions
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.GetCablePositions"
---

# `greg.NETWORK.GetCablePositions`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CablePositions.GetCablePositions

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::GetCablePositions(int)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.GetCablePositions |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetCablePositions`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetCablePositions", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetCablePositions` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetCablePositions", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetCablePositions", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetConnectedDevices

---
title: greg.NETWORK.GetConnectedDevices
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.GetConnectedDevices"
---

# `greg.NETWORK.GetConnectedDevices`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.GetConnectedDevices

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::GetConnectedDevices()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.GetConnectedDevices |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetConnectedDevices`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetConnectedDevices", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetConnectedDevices` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetConnectedDevices", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetConnectedDevices", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetCustomerBase

---
title: greg.NETWORK.GetCustomerBase
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetCustomerBase"
---

# `greg.NETWORK.GetCustomerBase`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.GetCustomerBase

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetCustomerBase(int)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetCustomerBase |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetCustomerBase`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetCustomerBase", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetCustomerBase` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetCustomerBase", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetCustomerBase", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetDevice

---
title: greg.NETWORK.GetDevice
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetDevice"
---

# `greg.NETWORK.GetDevice`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.GetDevice

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetDevice(string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetDevice |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetDevice`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetDevice", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetDevice` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetDevice", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetDevice", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetFreeSpaceInTheBox

---
title: greg.NETWORK.GetFreeSpaceInTheBox
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPBox.GetFreeSpaceInTheBox"
---

# `greg.NETWORK.GetFreeSpaceInTheBox`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: SFPBox.GetFreeSpaceInTheBox

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.SFPBox::GetFreeSpaceInTheBox()` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.GetFreeSpaceInTheBox |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetFreeSpaceInTheBox`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetFreeSpaceInTheBox", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetFreeSpaceInTheBox` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetFreeSpaceInTheBox", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetFreeSpaceInTheBox", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetLACPGroupBetween

---
title: greg.NETWORK.GetLACPGroupBetween
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetLACPGroupBetween"
---

# `greg.NETWORK.GetLACPGroupBetween`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.GetLACPGroupBetween

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetLACPGroupBetween(string, string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetLACPGroupBetween |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetLACPGroupBetween`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetLACPGroupBetween", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetLACPGroupBetween` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetLACPGroupBetween", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetLACPGroupBetween", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetLACPGroupForCable

---
title: greg.NETWORK.GetLACPGroupForCable
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetLACPGroupForCable"
---

# `greg.NETWORK.GetLACPGroupForCable`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.GetLACPGroupForCable

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetLACPGroupForCable(int)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetLACPGroupForCable |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetLACPGroupForCable`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetLACPGroupForCable", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetLACPGroupForCable` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetLACPGroupForCable", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetLACPGroupForCable", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetRawCablePositions

---
title: greg.NETWORK.GetRawCablePositions
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.GetRawCablePositions"
---

# `greg.NETWORK.GetRawCablePositions`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CablePositions.GetRawCablePositions

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::GetRawCablePositions(int)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.GetRawCablePositions |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetRawCablePositions`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetRawCablePositions", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetRawCablePositions` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetRawCablePositions", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetRawCablePositions", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetRawLinkTransforms

---
title: greg.NETWORK.GetRawLinkTransforms
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.GetRawLinkTransforms"
---

# `greg.NETWORK.GetRawLinkTransforms`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CablePositions.GetRawLinkTransforms

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::GetRawLinkTransforms(int)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.GetRawLinkTransforms |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetRawLinkTransforms`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetRawLinkTransforms", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetRawLinkTransforms` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetRawLinkTransforms", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetRawLinkTransforms", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetRopeAttachPoint

---
title: greg.NETWORK.GetRopeAttachPoint
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CableLink.GetRopeAttachPoint"
---

# `greg.NETWORK.GetRopeAttachPoint`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CableLink.GetRopeAttachPoint

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CableLink::GetRopeAttachPoint()` | Postfix | Auto-generated from Il2Cpp unpack: CableLink.GetRopeAttachPoint |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetRopeAttachPoint`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetRopeAttachPoint", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetRopeAttachPoint` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetRopeAttachPoint", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetRopeAttachPoint", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetServer

---
title: greg.NETWORK.GetServer
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetServer"
---

# `greg.NETWORK.GetServer`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.GetServer

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetServer(string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetServer |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetServer`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetServer", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetServer` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetServer", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetServer", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetSwitchById

---
title: greg.NETWORK.GetSwitchById
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.GetSwitchById"
---

# `greg.NETWORK.GetSwitchById`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.GetSwitchById

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::GetSwitchById(string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.GetSwitchById |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetSwitchById`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetSwitchById", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetSwitchById` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetSwitchById", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetSwitchById", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-GetSwitchId

---
title: greg.NETWORK.GetSwitchId
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.GetSwitchId"
---

# `greg.NETWORK.GetSwitchId`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.GetSwitchId

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::GetSwitchId()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.GetSwitchId |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.GetSwitchId`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.GetSwitchId", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.GetSwitchId` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.GetSwitchId", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.GetSwitchId", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-HandleNewCableWhileOff

---
title: greg.NETWORK.HandleNewCableWhileOff
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.HandleNewCableWhileOff"
---

# `greg.NETWORK.HandleNewCableWhileOff`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.HandleNewCableWhileOff

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::HandleNewCableWhileOff(int)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.HandleNewCableWhileOff |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.HandleNewCableWhileOff`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.HandleNewCableWhileOff", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.HandleNewCableWhileOff` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.HandleNewCableWhileOff", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.HandleNewCableWhileOff", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-InsertDirectlyIntoPort

---
title: greg.NETWORK.InsertDirectlyIntoPort
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPModule.InsertDirectlyIntoPort"
---

# `greg.NETWORK.InsertDirectlyIntoPort`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: SFPModule.InsertDirectlyIntoPort

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.SFPModule::InsertDirectlyIntoPort(CableLink)` | Postfix | Auto-generated from Il2Cpp unpack: SFPModule.InsertDirectlyIntoPort |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.InsertDirectlyIntoPort`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.InsertDirectlyIntoPort", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.InsertDirectlyIntoPort` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.InsertDirectlyIntoPort", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.InsertDirectlyIntoPort", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-InsertedInSFPPort

---
title: greg.NETWORK.InsertedInSFPPort
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPModule.InsertedInSFPPort"
---

# `greg.NETWORK.InsertedInSFPPort`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: SFPModule.InsertedInSFPPort

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.SFPModule::InsertedInSFPPort(CableLink, bool)` | Postfix | Auto-generated from Il2Cpp unpack: SFPModule.InsertedInSFPPort |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.InsertedInSFPPort`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.InsertedInSFPPort", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.InsertedInSFPPort` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.InsertedInSFPPort", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.InsertedInSFPPort", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-InsertSFPBackIntoBox

---
title: greg.NETWORK.InsertSFPBackIntoBox
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPBox.InsertSFPBackIntoBox"
---

# `greg.NETWORK.InsertSFPBackIntoBox`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: SFPBox.InsertSFPBackIntoBox

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.SFPBox::InsertSFPBackIntoBox()` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.InsertSFPBackIntoBox |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.InsertSFPBackIntoBox`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.InsertSFPBackIntoBox", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.InsertSFPBackIntoBox` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.InsertSFPBackIntoBox", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.InsertSFPBackIntoBox", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-InteractOnClick

---
title: greg.NETWORK.InteractOnClick
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CableLink.InteractOnClick"
---

# `greg.NETWORK.InteractOnClick`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CableLink.InteractOnClick
- Auto-generated from Il2Cpp unpack: NetworkSwitch.InteractOnClick
- Auto-generated from Il2Cpp unpack: SFPBox.InteractOnClick
- Auto-generated from Il2Cpp unpack: SFPModule.InteractOnClick

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **4** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CableLink::InteractOnClick()` | Postfix | Auto-generated from Il2Cpp unpack: CableLink.InteractOnClick |
| `Il2Cpp.NetworkSwitch::InteractOnClick()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.InteractOnClick |
| `Il2Cpp.SFPBox::InteractOnClick()` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.InteractOnClick |
| `Il2Cpp.SFPModule::InteractOnClick()` | Postfix | Auto-generated from Il2Cpp unpack: SFPModule.InteractOnClick |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.InteractOnClick`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.InteractOnClick", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.InteractOnClick` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.InteractOnClick", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.InteractOnClick", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-IsAllowedToDoSecondAction

---
title: greg.NETWORK.IsAllowedToDoSecondAction
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CableLink.IsAllowedToDoSecondAction"
---

# `greg.NETWORK.IsAllowedToDoSecondAction`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CableLink.IsAllowedToDoSecondAction

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CableLink::IsAllowedToDoSecondAction()` | Postfix | Auto-generated from Il2Cpp unpack: CableLink.IsAllowedToDoSecondAction |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.IsAllowedToDoSecondAction`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.IsAllowedToDoSecondAction", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.IsAllowedToDoSecondAction` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.IsAllowedToDoSecondAction", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.IsAllowedToDoSecondAction", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-IsAnyCableConnected

---
title: greg.NETWORK.IsAnyCableConnected
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.IsAnyCableConnected"
---

# `greg.NETWORK.IsAnyCableConnected`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.IsAnyCableConnected
- Auto-generated from Il2Cpp unpack: SFPModule.IsAnyCableConnected

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **2** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::IsAnyCableConnected()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.IsAnyCableConnected |
| `Il2Cpp.SFPModule::IsAnyCableConnected()` | Postfix | Auto-generated from Il2Cpp unpack: SFPModule.IsAnyCableConnected |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.IsAnyCableConnected`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.IsAnyCableConnected", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.IsAnyCableConnected` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.IsAnyCableConnected", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.IsAnyCableConnected", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-IsCableComplete

---
title: greg.NETWORK.IsCableComplete
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.IsCableComplete"
---

# `greg.NETWORK.IsCableComplete`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CablePositions.IsCableComplete

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::IsCableComplete(int)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.IsCableComplete |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.IsCableComplete`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.IsCableComplete", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.IsCableComplete` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.IsCableComplete", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.IsCableComplete", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-IsIpAddressDuplicate

---
title: greg.NETWORK.IsIpAddressDuplicate
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.IsIpAddressDuplicate"
---

# `greg.NETWORK.IsIpAddressDuplicate`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.IsIpAddressDuplicate

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::IsIpAddressDuplicate(string, Server)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.IsIpAddressDuplicate |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.IsIpAddressDuplicate`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.IsIpAddressDuplicate", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.IsIpAddressDuplicate` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.IsIpAddressDuplicate", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.IsIpAddressDuplicate", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-IsolatedDevicesRemoved

---
title: greg.NETWORK.IsolatedDevicesRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RemoveIsolatedDevices"
---

# `greg.NETWORK.IsolatedDevicesRemoved`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.RemoveIsolatedDevices

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RemoveIsolatedDevices()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RemoveIsolatedDevices |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.IsolatedDevicesRemoved`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.IsolatedDevicesRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.IsolatedDevicesRemoved` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.IsolatedDevicesRemoved", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.IsolatedDevicesRemoved", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-IsPatchPanelPort

---
title: greg.NETWORK.IsPatchPanelPort
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.IsPatchPanelPort"
---

# `greg.NETWORK.IsPatchPanelPort`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.IsPatchPanelPort

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::IsPatchPanelPort(string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.IsPatchPanelPort |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.IsPatchPanelPort`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.IsPatchPanelPort", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.IsPatchPanelPort` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.IsPatchPanelPort", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.IsPatchPanelPort", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ItIsBroken

---
title: greg.NETWORK.ItIsBroken
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.ItIsBroken"
---

# `greg.NETWORK.ItIsBroken`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.ItIsBroken

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::ItIsBroken()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.ItIsBroken |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.ItIsBroken`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.ItIsBroken", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.ItIsBroken` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ItIsBroken", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.ItIsBroken", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-LACPGroupRemoved

---
title: greg.NETWORK.LACPGroupRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RemoveLACPGroup"
---

# `greg.NETWORK.LACPGroupRemoved`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.RemoveLACPGroup

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RemoveLACPGroup(int)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RemoveLACPGroup |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.LACPGroupRemoved`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.LACPGroupRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.LACPGroupRemoved` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.LACPGroupRemoved", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.LACPGroupRemoved", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-LACPGroupsSet

---
title: greg.NETWORK.LACPGroupsSet
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.SetLACPGroups"
---

# `greg.NETWORK.LACPGroupsSet`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.SetLACPGroups

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::SetLACPGroups(Dictionary<int, NetworkMap.LACPGroup>)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.SetLACPGroups |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.LACPGroupsSet`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.LACPGroupsSet", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.LACPGroupsSet` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.LACPGroupsSet", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.LACPGroupsSet", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-LastPositionRemoved

---
title: greg.NETWORK.LastPositionRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.RemoveLastPosition"
---

# `greg.NETWORK.LastPositionRemoved`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CablePositions.RemoveLastPosition

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::RemoveLastPosition(int)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.RemoveLastPosition |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.LastPositionRemoved`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.LastPositionRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.LastPositionRemoved` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.LastPositionRemoved", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.LastPositionRemoved", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0

---
title: greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: PacketSpawnerSystem.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0"
---

# `greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: PacketSpawnerSystem.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.PacketSpawnerSystem::Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0(IntPtr, IntPtr)` | Postfix | Auto-generated from Il2Cpp unpack: PacketSpawnerSystem.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0 |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_0", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1

---
title: greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: PacketSpawnerSystem.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1"
---

# `greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: PacketSpawnerSystem.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.PacketSpawnerSystem::Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1(IntPtr, IntPtr)` | Postfix | Auto-generated from Il2Cpp unpack: PacketSpawnerSystem.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1 |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.Method_Internal_Static_Void_IntPtr_IntPtr_PDM_1", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-OnDestroy

---
title: greg.NETWORK.OnDestroy
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.OnDestroy"
---

# `greg.NETWORK.OnDestroy`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.OnDestroy
- Auto-generated from Il2Cpp unpack: SFPModule.OnDestroy

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **2** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::OnDestroy()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.OnDestroy |
| `Il2Cpp.SFPModule::OnDestroy()` | Postfix | Auto-generated from Il2Cpp unpack: SFPModule.OnDestroy |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.OnDestroy`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.OnDestroy", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.OnDestroy` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.OnDestroy", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.OnDestroy", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-OnHoverOver

---
title: greg.NETWORK.OnHoverOver
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CableLink.OnHoverOver"
---

# `greg.NETWORK.OnHoverOver`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CableLink.OnHoverOver

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CableLink::OnHoverOver()` | Postfix | Auto-generated from Il2Cpp unpack: CableLink.OnHoverOver |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.OnHoverOver`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.OnHoverOver", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.OnHoverOver` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.OnHoverOver", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.OnHoverOver", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-PowerButton

---
title: greg.NETWORK.PowerButton
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.PowerButton"
---

# `greg.NETWORK.PowerButton`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.PowerButton

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::PowerButton(bool)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.PowerButton |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.PowerButton`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.PowerButton", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.PowerButton` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.PowerButton", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.PowerButton", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-PowerLightMaterialSet

---
title: greg.NETWORK.PowerLightMaterialSet
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.SetPowerLightMaterial"
---

# `greg.NETWORK.PowerLightMaterialSet`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.SetPowerLightMaterial

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::SetPowerLightMaterial(Material)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.SetPowerLightMaterial |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.PowerLightMaterialSet`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.PowerLightMaterialSet", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.PowerLightMaterialSet` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.PowerLightMaterialSet", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.PowerLightMaterialSet", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-PrintNetworkMap

---
title: greg.NETWORK.PrintNetworkMap
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.PrintNetworkMap"
---

# `greg.NETWORK.PrintNetworkMap`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.PrintNetworkMap

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::PrintNetworkMap()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.PrintNetworkMap |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.PrintNetworkMap`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.PrintNetworkMap", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.PrintNetworkMap` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.PrintNetworkMap", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.PrintNetworkMap", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ReconnectCables

---
title: greg.NETWORK.ReconnectCables
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.ReconnectCables"
---

# `greg.NETWORK.ReconnectCables`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.ReconnectCables

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::ReconnectCables()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.ReconnectCables |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.ReconnectCables`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.ReconnectCables", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.ReconnectCables` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ReconnectCables", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.ReconnectCables", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-RedrawCable

---
title: greg.NETWORK.RedrawCable
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CablePositions.RedrawCable"
---

# `greg.NETWORK.RedrawCable`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CablePositions.RedrawCable

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CablePositions::RedrawCable(int)` | Postfix | Auto-generated from Il2Cpp unpack: CablePositions.RedrawCable |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.RedrawCable`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.RedrawCable", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.RedrawCable` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.RedrawCable", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.RedrawCable", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-RegisterCableConnection

---
title: greg.NETWORK.RegisterCableConnection
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RegisterCableConnection"
---

# `greg.NETWORK.RegisterCableConnection`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.RegisterCableConnection

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RegisterCableConnection(int, Vector3, Vector3, CableLink.TypeOfLink, CableLink.TypeOfLink, string, string, int, int, string, string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RegisterCableConnection |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.RegisterCableConnection`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.RegisterCableConnection", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.RegisterCableConnection` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.RegisterCableConnection", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.RegisterCableConnection", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-RegisterCustomerBase

---
title: greg.NETWORK.RegisterCustomerBase
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RegisterCustomerBase"
---

# `greg.NETWORK.RegisterCustomerBase`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.RegisterCustomerBase

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RegisterCustomerBase(CustomerBase)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RegisterCustomerBase |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.RegisterCustomerBase`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.RegisterCustomerBase", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.RegisterCustomerBase` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.RegisterCustomerBase", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.RegisterCustomerBase", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-RegisterServer

---
title: greg.NETWORK.RegisterServer
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RegisterServer"
---

# `greg.NETWORK.RegisterServer`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.RegisterServer

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RegisterServer(Server)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RegisterServer |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.RegisterServer`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.RegisterServer", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.RegisterServer` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.RegisterServer", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.RegisterServer", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-RegisterSwitch

---
title: greg.NETWORK.RegisterSwitch
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.RegisterSwitch"
---

# `greg.NETWORK.RegisterSwitch`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.RegisterSwitch

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::RegisterSwitch(NetworkSwitch)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.RegisterSwitch |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.RegisterSwitch`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.RegisterSwitch", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.RegisterSwitch` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.RegisterSwitch", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.RegisterSwitch", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ResolveThroughPatchPanel

---
title: greg.NETWORK.ResolveThroughPatchPanel
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.ResolveThroughPatchPanel"
---

# `greg.NETWORK.ResolveThroughPatchPanel`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.ResolveThroughPatchPanel

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::ResolveThroughPatchPanel(string, string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.ResolveThroughPatchPanel |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.ResolveThroughPatchPanel`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.ResolveThroughPatchPanel", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.ResolveThroughPatchPanel` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ResolveThroughPatchPanel", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.ResolveThroughPatchPanel", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ReturnSFPDirectly

---
title: greg.NETWORK.ReturnSFPDirectly
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPBox.ReturnSFPDirectly"
---

# `greg.NETWORK.ReturnSFPDirectly`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: SFPBox.ReturnSFPDirectly

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.SFPBox::ReturnSFPDirectly(SFPModule)` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.ReturnSFPDirectly |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.ReturnSFPDirectly`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.ReturnSFPDirectly", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.ReturnSFPDirectly` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ReturnSFPDirectly", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.ReturnSFPDirectly", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ScreenUIChanged

---
title: greg.NETWORK.ScreenUIChanged
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.UpdateScreenUI"
---

# `greg.NETWORK.ScreenUIChanged`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.UpdateScreenUI

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::UpdateScreenUI()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.UpdateScreenUI |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.ScreenUIChanged`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.ScreenUIChanged", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.ScreenUIChanged` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ScreenUIChanged", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.ScreenUIChanged", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-SecondActionOnClick

---
title: greg.NETWORK.SecondActionOnClick
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: CableLink.SecondActionOnClick"
---

# `greg.NETWORK.SecondActionOnClick`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: CableLink.SecondActionOnClick

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.CableLink::SecondActionOnClick()` | Postfix | Auto-generated from Il2Cpp unpack: CableLink.SecondActionOnClick |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.SecondActionOnClick`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.SecondActionOnClick", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.SecondActionOnClick` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.SecondActionOnClick", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.SecondActionOnClick", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-SFPFromBoxRemoved

---
title: greg.NETWORK.SFPFromBoxRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPBox.RemoveSFPFromBox"
---

# `greg.NETWORK.SFPFromBoxRemoved`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: SFPBox.RemoveSFPFromBox

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.SFPBox::RemoveSFPFromBox(int)` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.RemoveSFPFromBox |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.SFPFromBoxRemoved`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.SFPFromBoxRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.SFPFromBoxRemoved` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.SFPFromBoxRemoved", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.SFPFromBoxRemoved", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-SFPsFromSaveLoaded

---
title: greg.NETWORK.SFPsFromSaveLoaded
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPBox.LoadSFPsFromSave"
---

# `greg.NETWORK.SFPsFromSaveLoaded`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: SFPBox.LoadSFPsFromSave

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.SFPBox::LoadSFPsFromSave()` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.LoadSFPsFromSave |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.SFPsFromSaveLoaded`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.SFPsFromSaveLoaded", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.SFPsFromSaveLoaded` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.SFPsFromSaveLoaded", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.SFPsFromSaveLoaded", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-SwitchConnectionAdded

---
title: greg.NETWORK.SwitchConnectionAdded
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkMap.AddSwitchConnection"
---

# `greg.NETWORK.SwitchConnectionAdded`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkMap.AddSwitchConnection

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkMap::AddSwitchConnection(string, string)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkMap.AddSwitchConnection |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.SwitchConnectionAdded`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.SwitchConnectionAdded", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.SwitchConnectionAdded` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.SwitchConnectionAdded", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.SwitchConnectionAdded", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-SwitchInsertedInRack

---
title: greg.NETWORK.SwitchInsertedInRack
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.SwitchInsertedInRack"
---

# `greg.NETWORK.SwitchInsertedInRack`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.SwitchInsertedInRack

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::SwitchInsertedInRack(SwitchSaveData)` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.SwitchInsertedInRack |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.SwitchInsertedInRack`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.SwitchInsertedInRack", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.SwitchInsertedInRack` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.SwitchInsertedInRack", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.SwitchInsertedInRack", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-TakeSFPFromBox

---
title: greg.NETWORK.TakeSFPFromBox
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: SFPBox.TakeSFPFromBox"
---

# `greg.NETWORK.TakeSFPFromBox`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: SFPBox.TakeSFPFromBox

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.SFPBox::TakeSFPFromBox()` | Postfix | Auto-generated from Il2Cpp unpack: SFPBox.TakeSFPFromBox |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.TakeSFPFromBox`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.TakeSFPFromBox", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.TakeSFPFromBox` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.TakeSFPFromBox", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.TakeSFPFromBox", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-TurnOffCommonFunctions

---
title: greg.NETWORK.TurnOffCommonFunctions
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.TurnOffCommonFunctions"
---

# `greg.NETWORK.TurnOffCommonFunctions`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.TurnOffCommonFunctions

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::TurnOffCommonFunctions()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.TurnOffCommonFunctions |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.TurnOffCommonFunctions`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.TurnOffCommonFunctions", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.TurnOffCommonFunctions` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.TurnOffCommonFunctions", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.TurnOffCommonFunctions", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-TurnOnCommonFunction

---
title: greg.NETWORK.TurnOnCommonFunction
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.TurnOnCommonFunction"
---

# `greg.NETWORK.TurnOnCommonFunction`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.TurnOnCommonFunction

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::TurnOnCommonFunction()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.TurnOnCommonFunction |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.TurnOnCommonFunction`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.TurnOnCommonFunction", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.TurnOnCommonFunction` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.TurnOnCommonFunction", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.TurnOnCommonFunction", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## NETWORK-ValidateRackPosition

---
title: greg.NETWORK.ValidateRackPosition
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: NetworkSwitch.ValidateRackPosition"
---

# `greg.NETWORK.ValidateRackPosition`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: NetworkSwitch.ValidateRackPosition

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.NetworkSwitch::ValidateRackPosition()` | Postfix | Auto-generated from Il2Cpp unpack: NetworkSwitch.ValidateRackPosition |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.NETWORK.ValidateRackPosition`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.NETWORK.ValidateRackPosition", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.NETWORK.ValidateRackPosition` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.NETWORK.ValidateRackPosition", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.NETWORK.ValidateRackPosition", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


