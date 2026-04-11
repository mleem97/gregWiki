---
title: Gameplay Hooks
sidebar_label: Gameplay Hooks
---
## GAMEPLAY-ClearObjectives

---
title: greg.GAMEPLAY.ClearObjectives
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Objectives.ClearObjectives"
---

# `greg.GAMEPLAY.ClearObjectives`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Objectives.ClearObjectives

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Objectives::ClearObjectives()` | Postfix | Auto-generated from Il2Cpp unpack: Objectives.ClearObjectives |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.GAMEPLAY.ClearObjectives`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.GAMEPLAY.ClearObjectives", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.GAMEPLAY.ClearObjectives` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.GAMEPLAY.ClearObjectives", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.GAMEPLAY.ClearObjectives", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## GAMEPLAY-ComponentInitialized

---
title: greg.GAMEPLAY.ComponentInitialized
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Objectives.Awake"
---

# `greg.GAMEPLAY.ComponentInitialized`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Objectives.Awake
- Auto-generated from Il2Cpp unpack: Objectives.Start

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **2** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Objectives::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: Objectives.Awake |
| `Il2Cpp.Objectives::Start()` | Postfix | Auto-generated from Il2Cpp unpack: Objectives.Start |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.GAMEPLAY.ComponentInitialized`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.GAMEPLAY.ComponentInitialized", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.GAMEPLAY.ComponentInitialized` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.GAMEPLAY.ComponentInitialized", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.GAMEPLAY.ComponentInitialized", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## GAMEPLAY-CreateAppObjective

---
title: greg.GAMEPLAY.CreateAppObjective
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Objectives.CreateAppObjective"
---

# `greg.GAMEPLAY.CreateAppObjective`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Objectives.CreateAppObjective

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Objectives::CreateAppObjective(int, int, int, int)` | Postfix | Auto-generated from Il2Cpp unpack: Objectives.CreateAppObjective |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.GAMEPLAY.CreateAppObjective`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.GAMEPLAY.CreateAppObjective", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.GAMEPLAY.CreateAppObjective` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.GAMEPLAY.CreateAppObjective", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.GAMEPLAY.CreateAppObjective", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## GAMEPLAY-CreateNewObjective

---
title: greg.GAMEPLAY.CreateNewObjective
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Objectives.CreateNewObjective"
---

# `greg.GAMEPLAY.CreateNewObjective`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Objectives.CreateNewObjective

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Objectives::CreateNewObjective(int, int, Vector3, int, int, bool)` | Postfix | Auto-generated from Il2Cpp unpack: Objectives.CreateNewObjective |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.GAMEPLAY.CreateNewObjective`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.GAMEPLAY.CreateNewObjective", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.GAMEPLAY.CreateNewObjective` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.GAMEPLAY.CreateNewObjective", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.GAMEPLAY.CreateNewObjective", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## GAMEPLAY-DestroyObjective

---
title: greg.GAMEPLAY.DestroyObjective
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Objectives.DestroyObjective"
---

# `greg.GAMEPLAY.DestroyObjective`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Objectives.DestroyObjective

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Objectives::DestroyObjective(int)` | Postfix | Auto-generated from Il2Cpp unpack: Objectives.DestroyObjective |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.GAMEPLAY.DestroyObjective`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.GAMEPLAY.DestroyObjective", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.GAMEPLAY.DestroyObjective` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.GAMEPLAY.DestroyObjective", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.GAMEPLAY.DestroyObjective", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## GAMEPLAY-GetTimedObjective

---
title: greg.GAMEPLAY.GetTimedObjective
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Objectives.GetTimedObjective"
---

# `greg.GAMEPLAY.GetTimedObjective`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Objectives.GetTimedObjective

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Objectives::GetTimedObjective(int)` | Postfix | Auto-generated from Il2Cpp unpack: Objectives.GetTimedObjective |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.GAMEPLAY.GetTimedObjective`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.GAMEPLAY.GetTimedObjective", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.GAMEPLAY.GetTimedObjective` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.GAMEPLAY.GetTimedObjective", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.GAMEPLAY.GetTimedObjective", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## GAMEPLAY-InstantiateObjectiveSign

---
title: greg.GAMEPLAY.InstantiateObjectiveSign
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Objectives.InstantiateObjectiveSign"
---

# `greg.GAMEPLAY.InstantiateObjectiveSign`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Objectives.InstantiateObjectiveSign

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Objectives::InstantiateObjectiveSign(int, Vector3)` | Postfix | Auto-generated from Il2Cpp unpack: Objectives.InstantiateObjectiveSign |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.GAMEPLAY.InstantiateObjectiveSign`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.GAMEPLAY.InstantiateObjectiveSign", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.GAMEPLAY.InstantiateObjectiveSign` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.GAMEPLAY.InstantiateObjectiveSign", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.GAMEPLAY.InstantiateObjectiveSign", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## GAMEPLAY-IsTutorialInProgress

---
title: greg.GAMEPLAY.IsTutorialInProgress
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Objectives.IsTutorialInProgress"
---

# `greg.GAMEPLAY.IsTutorialInProgress`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Objectives.IsTutorialInProgress

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Objectives::IsTutorialInProgress()` | Postfix | Auto-generated from Il2Cpp unpack: Objectives.IsTutorialInProgress |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.GAMEPLAY.IsTutorialInProgress`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.GAMEPLAY.IsTutorialInProgress", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.GAMEPLAY.IsTutorialInProgress` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.GAMEPLAY.IsTutorialInProgress", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.GAMEPLAY.IsTutorialInProgress", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## GAMEPLAY-ObjectiveSignRemoved

---
title: greg.GAMEPLAY.ObjectiveSignRemoved
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Objectives.RemoveObjectiveSign"
---

# `greg.GAMEPLAY.ObjectiveSignRemoved`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Objectives.RemoveObjectiveSign

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Objectives::RemoveObjectiveSign(int)` | Postfix | Auto-generated from Il2Cpp unpack: Objectives.RemoveObjectiveSign |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.GAMEPLAY.ObjectiveSignRemoved`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.GAMEPLAY.ObjectiveSignRemoved", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.GAMEPLAY.ObjectiveSignRemoved` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.GAMEPLAY.ObjectiveSignRemoved", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.GAMEPLAY.ObjectiveSignRemoved", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## GAMEPLAY-ObjectiveTimedText

---
title: greg.GAMEPLAY.ObjectiveTimedText
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Objectives.ObjectiveTimedText"
---

# `greg.GAMEPLAY.ObjectiveTimedText`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Objectives.ObjectiveTimedText

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Objectives::ObjectiveTimedText()` | Postfix | Auto-generated from Il2Cpp unpack: Objectives.ObjectiveTimedText |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.GAMEPLAY.ObjectiveTimedText`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.GAMEPLAY.ObjectiveTimedText", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.GAMEPLAY.ObjectiveTimedText` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.GAMEPLAY.ObjectiveTimedText", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.GAMEPLAY.ObjectiveTimedText", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## GAMEPLAY-OnDestroy

---
title: greg.GAMEPLAY.OnDestroy
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Objectives.OnDestroy"
---

# `greg.GAMEPLAY.OnDestroy`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Objectives.OnDestroy

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Objectives::OnDestroy()` | Postfix | Auto-generated from Il2Cpp unpack: Objectives.OnDestroy |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.GAMEPLAY.OnDestroy`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.GAMEPLAY.OnDestroy", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.GAMEPLAY.OnDestroy` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.GAMEPLAY.OnDestroy", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.GAMEPLAY.OnDestroy", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## GAMEPLAY-OnLoad

---
title: greg.GAMEPLAY.OnLoad
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Objectives.OnLoad"
---

# `greg.GAMEPLAY.OnLoad`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Objectives.OnLoad

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Objectives::OnLoad()` | Postfix | Auto-generated from Il2Cpp unpack: Objectives.OnLoad |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.GAMEPLAY.OnLoad`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.GAMEPLAY.OnLoad", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.GAMEPLAY.OnLoad` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.GAMEPLAY.OnLoad", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.GAMEPLAY.OnLoad", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


## GAMEPLAY-StartObjective

---
title: greg.GAMEPLAY.StartObjective
description: "gregCore Hook — Auto-generated from Il2Cpp unpack: Objectives.StartObjective"
---

# `greg.GAMEPLAY.StartObjective`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: Objectives.StartObjective

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **1** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.Objectives::StartObjective(int, Vector3, bool)` | Postfix | Auto-generated from Il2Cpp unpack: Objectives.StartObjective |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.GAMEPLAY.StartObjective`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.GAMEPLAY.StartObjective", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.GAMEPLAY.StartObjective` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.GAMEPLAY.StartObjective", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.GAMEPLAY.StartObjective", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](../../_internal/README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`


