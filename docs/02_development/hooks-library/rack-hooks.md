---
title: Rack Hooks
sidebar_label: Rack Hooks
---
## RACK-AudioVolumeChanged

---
title: greg.RACK.AudioVolumeChanged
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Rack.UpdateAudioVolume"
---

# `greg.RACK.AudioVolumeChanged`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Rack.UpdateAudioVolume

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Rack::UpdateAudioVolume()` | Postfix | Auto-generated from Il2Cpp unpack: Rack.UpdateAudioVolume |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.RACK.AudioVolumeChanged`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.RACK.AudioVolumeChanged", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.RACK.AudioVolumeChanged` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.RACK.AudioVolumeChanged", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.RACK.AudioVolumeChanged", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## RACK-ButtonDisablePositionsInRack

---
title: greg.RACK.ButtonDisablePositionsInRack
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Rack.ButtonDisablePositionsInRack"
---

# `greg.RACK.ButtonDisablePositionsInRack`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Rack.ButtonDisablePositionsInRack

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Rack::ButtonDisablePositionsInRack()` | Postfix | Auto-generated from Il2Cpp unpack: Rack.ButtonDisablePositionsInRack |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.RACK.ButtonDisablePositionsInRack`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.RACK.ButtonDisablePositionsInRack", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.RACK.ButtonDisablePositionsInRack` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.RACK.ButtonDisablePositionsInRack", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.RACK.ButtonDisablePositionsInRack", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## RACK-ComponentInitialized

---
title: greg.RACK.ComponentInitialized
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Rack.Awake"
---

# `greg.RACK.ComponentInitialized`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Rack.Awake
- Auto-generated from Il2Cpp unpack: Rack.Start

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **2** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Rack::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: Rack.Awake |
| `Il2Cpp.Rack::Start()` | Postfix | Auto-generated from Il2Cpp unpack: Rack.Start |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.RACK.ComponentInitialized`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.RACK.ComponentInitialized", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.RACK.ComponentInitialized` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.RACK.ComponentInitialized", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.RACK.ComponentInitialized", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## RACK-DisablePositionsButtonMaterialSet

---
title: greg.RACK.DisablePositionsButtonMaterialSet
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Rack.SetDisablePositionsButtonMaterial"
---

# `greg.RACK.DisablePositionsButtonMaterialSet`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Rack.SetDisablePositionsButtonMaterial

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Rack::SetDisablePositionsButtonMaterial(Material)` | Postfix | Auto-generated from Il2Cpp unpack: Rack.SetDisablePositionsButtonMaterial |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.RACK.DisablePositionsButtonMaterialSet`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.RACK.DisablePositionsButtonMaterialSet", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.RACK.DisablePositionsButtonMaterialSet` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.RACK.DisablePositionsButtonMaterialSet", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.RACK.DisablePositionsButtonMaterialSet", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## RACK-IsPositionAvailable

---
title: greg.RACK.IsPositionAvailable
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Rack.IsPositionAvailable"
---

# `greg.RACK.IsPositionAvailable`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Rack.IsPositionAvailable

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Rack::IsPositionAvailable(int, int)` | Postfix | Auto-generated from Il2Cpp unpack: Rack.IsPositionAvailable |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.RACK.IsPositionAvailable`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.RACK.IsPositionAvailable", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.RACK.IsPositionAvailable` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.RACK.IsPositionAvailable", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.RACK.IsPositionAvailable", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## RACK-MarkPositionAsUnused

---
title: greg.RACK.MarkPositionAsUnused
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Rack.MarkPositionAsUnused"
---

# `greg.RACK.MarkPositionAsUnused`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Rack.MarkPositionAsUnused

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Rack::MarkPositionAsUnused(int, int)` | Postfix | Auto-generated from Il2Cpp unpack: Rack.MarkPositionAsUnused |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.RACK.MarkPositionAsUnused`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.RACK.MarkPositionAsUnused", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.RACK.MarkPositionAsUnused` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.RACK.MarkPositionAsUnused", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.RACK.MarkPositionAsUnused", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## RACK-MarkPositionAsUsed

---
title: greg.RACK.MarkPositionAsUsed
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Rack.MarkPositionAsUsed"
---

# `greg.RACK.MarkPositionAsUsed`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Rack.MarkPositionAsUsed

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Rack::MarkPositionAsUsed(int, int)` | Postfix | Auto-generated from Il2Cpp unpack: Rack.MarkPositionAsUsed |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.RACK.MarkPositionAsUsed`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.RACK.MarkPositionAsUsed", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.RACK.MarkPositionAsUsed` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.RACK.MarkPositionAsUsed", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.RACK.MarkPositionAsUsed", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## RACK-OnDestroy

---
title: greg.RACK.OnDestroy
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Rack.OnDestroy"
---

# `greg.RACK.OnDestroy`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Rack.OnDestroy

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Rack::OnDestroy()` | Postfix | Auto-generated from Il2Cpp unpack: Rack.OnDestroy |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.RACK.OnDestroy`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.RACK.OnDestroy", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.RACK.OnDestroy` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.RACK.OnDestroy", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.RACK.OnDestroy", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## RACK-OnLoad

---
title: greg.RACK.OnLoad
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Rack.OnLoad"
---

# `greg.RACK.OnLoad`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Rack.OnLoad

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Rack::OnLoad()` | Postfix | Auto-generated from Il2Cpp unpack: Rack.OnLoad |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.RACK.OnLoad`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.RACK.OnLoad", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.RACK.OnLoad` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.RACK.OnLoad", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.RACK.OnLoad", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


