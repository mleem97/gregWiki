---
title: greg.SYSTEM.ComponentInitialized
description: gregCore Hook — Auto-generated from Il2Cpp unpack: ComputerShop.Awake
---

# `greg.SYSTEM.ComponentInitialized`

## Kurzbeschreibung

- Auto-generated from Il2Cpp unpack: ComputerShop.Awake
- Auto-generated from Il2Cpp unpack: MainGameManager.Awake
- Auto-generated from Il2Cpp unpack: MainGameManager.Start
- Auto-generated from Il2Cpp unpack: PatchPanel.Awake
- Auto-generated from Il2Cpp unpack: TimeController.Awake
- Auto-generated from Il2Cpp unpack: TimeController.Start

## Patch-Ziele (Il2Cpp)

Dieser Hook-Name kann auf **6** Harmony-Ziel(e) abgebildet sein:

| Patch-Ziel | Strategie | Beschreibung |
|------------|-----------|--------------|
| `Il2Cpp.ComputerShop::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: ComputerShop.Awake |
| `Il2Cpp.MainGameManager::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: MainGameManager.Awake |
| `Il2Cpp.MainGameManager::Start()` | Postfix | Auto-generated from Il2Cpp unpack: MainGameManager.Start |
| `Il2Cpp.PatchPanel::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: PatchPanel.Awake |
| `Il2Cpp.TimeController::Awake()` | Postfix | Auto-generated from Il2Cpp unpack: TimeController.Awake |
| `Il2Cpp.TimeController::Start()` | Postfix | Auto-generated from Il2Cpp unpack: TimeController.Start |

**Strategie:** Postfix — Im Katalog steht **Postfix** → verwende typischerweise `HookBinder.OnAfter(...)`.

## Payload-Schema (aus Registry)

| Feld | Typ / Hinweis |
|------|----------------|
| `method` | `string` |

## So verwendest du den Hook

### 1. Harmony-Pipeline: `HookBinder` (Hauptweg für `greg_hooks.json`)

Der Framework-Code patcht Il2Cpp-Methoden und ruft `HookBinder.DispatchBefore` / `DispatchAfter` auf. Du registrierst Handler mit dem **exakten** String `greg.SYSTEM.ComponentInitialized`:

```csharp
using FrikaMF.Hooks;

// Bei Postfix-Strategie (üblich):
HookBinder.OnAfter("greg.SYSTEM.ComponentInitialized", ctx =>
{
    // ctx.HookName, ctx.Method, ctx.Instance, ctx.Arguments, ctx.ReturnValue
});
```

Voraussetzungen:

- Ein Hook-**Katalog** / Alias-Datei wurde geladen (z. B. `HookBinder.LoadAliases(pfad)` oder `Hooker.InstallFromCatalog(...)`), sodass die Il2Cpp-Signatur auf den kanonischen String `greg.SYSTEM.ComponentInitialized` gemappt ist.
- Namespace `FrikaMF.Hooks`, Typ `HookContext` (u. a. `Arguments`, `Instance`, `ReturnValue`).

### 2. Objekt-Bus: `GregEventDispatcher` (Rust / FFI / manuelle Emits)

Manche Namen der Form `greg.<Domäne>.<Aktion>` werden **zusätzlich** vom Kern über `GregHookIntegration` / `GregEventDispatcher.Emit` gefeuert (numerische `EventIds` → String). Wenn dein Hook **nur** in `greg_hooks.json` als Il2Cpp-Patch steht, ist **`HookBinder`** der richtige Einstieg; `GregEventDispatcher` nutzt du, wenn du explizit auf den Payload-Bus hörst:

```csharp
using gregFramework.Core;

GregEventDispatcher.On("greg.SYSTEM.ComponentInitialized", payload =>
{
    // je nach Payload-Typ; Hilfen: GregPayload.Get<T>(payload, "feld", fallback)
});
```

Abmelden: `GregEventDispatcher.Off("greg.SYSTEM.ComponentInitialized", handler)` (dieselbe Delegaten-Referenz wie bei `On`).

## Siehe auch

- [Übersicht aller greg-Hooks](./../README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`
