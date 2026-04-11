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

- [Übersicht aller greg-Hooks](./../README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`
