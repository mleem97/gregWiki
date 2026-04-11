---
title: greg.NETWORK.InteractOnClick
description: gregCore Hook — Auto-generated from Il2Cpp unpack: CableLink.InteractOnClick
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

- [Übersicht aller greg-Hooks](./../README.md)
- Quelle: `gregCore/gregFramework/greg_hooks.json`
