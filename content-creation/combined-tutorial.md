---
id: content-creation-combined-tutorial
title: Combined End-to-End Tutorial
sidebar_label: Combined Tutorial
description: End-to-end walkthrough from empty project to a functional custom content pack with server, cable, customer, furniture, and model override.
---

**Layer ownership:** end-to-end flow combines **Mod Layer implementation** with optional **FrameworkExtension** gaps.

## Goal scenario

You will build one pack containing:

- One new server model and definition
- One custom cable type
- One custom customer
- One furniture item
- One model override for existing content

## Step 1: scaffold

```text
CustomContentPack/
├── Content/
│   ├── Servers/
│   ├── Cables/
│   ├── Customers/
│   ├── Furniture/
│   └── Items/
├── Models/
│   ├── Servers/
│   ├── Furniture/
│   └── Shared/
└── Scripts/
```

## Step 2: add definitions

Create these files:

- `Content/Servers/EnterpriseRackServer.json`
- `Content/Cables/CableOm4Purple15m.json`
- `Content/Customers/NorthFinanceGroup.json`
- `Content/Furniture/DiagnosticWorkbench.json`
- `Content/Items/ModelOverrides.json`

Use the exact examples from category pages.

## Step 3: add bootstrap

Create `Scripts/CustomContentPack.cs`:

```csharp
using MelonLoader;

namespace CustomContentPack;

public sealed class CustomContentPackMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        RuntimeBootstrap.Initialize();
    }
}
```

Create `Scripts/RuntimeBootstrap.cs`:

```csharp
namespace CustomContentPack;

public static class RuntimeBootstrap
{
    public static void Initialize()
    {
        ContentDefinitionLoader.LoadAll("Mods/CustomContentPack/Content");
        ContentValidationPipeline.Run();
        RuntimeRegistration.Attach();
    }
}
```

## Step 4: runtime registration bridge

Create `Scripts/Runtime/RuntimeRegistration.cs`:

```csharp
using MelonLoader;

namespace CustomContentPack.Runtime;

public static class RuntimeRegistration
{
    public static void Attach()
    {
        // Placeholder APIs: examples only until framework registry is documented.
        // GregContentRegistry.RegisterServerType(...);
        // GregContentRegistry.RegisterCableType(...);
        // GregContentRegistry.RegisterCustomer(...);
        // GregContentRegistry.RegisterFurniture(...);

        MelonLogger.Msg("[CustomContentPack] Runtime registration prepared.");
    }
}
```

## Step 5: model override application

Create `Scripts/Overrides/OverrideBootstrap.cs`:

```csharp
using MelonLoader;

namespace CustomContentPack.Overrides;

public static class OverrideBootstrap
{
    public static void Apply()
    {
        // Placeholder API until official model override service exists.
        // GregModelOverrideService.ReplaceModel("base.server.standard_rack", "Models/Servers/StandardRack_Override.prefab", "Models/Servers/Fallback/StandardRackFallback.prefab");

        MelonLogger.Msg("[CustomContentPack] Model override map processed.");
    }
}
```

## Step 6: build and deploy

```powershell
dotnet build .\CustomContentPack\Scripts\CustomContentPack.csproj -c Release
```

Copy DLL/content/model files into Data Center `Mods` folder as shown in deployment page.

## Step 7: validate in game

- Confirm content files are loaded.
- Confirm runtime hook handlers are active.
- Confirm fallback model behavior works when model path is invalid.
- Confirm no crash on missing optional content categories.

## “possible vs missing” summary

| Area | Status |
| --- | --- |
| Data definitions for all target categories | Possible now |
| Hook/event-driven runtime integration (`greg.*`) | Possible now |
| First-class registry APIs for all categories | FrameworkExtension needed |
| Official model override service | Currently missing in documented wiki APIs |

## Contributor handoff checklist

- Open targeted framework issue per missing capability.
- Include local `MISSING.md` evidence and proposed signatures.
- Keep changes layer-safe: Mod Layer data, Core SDK contracts, Plugin runtime wiring.
- Add tests for schema, runtime events, and fallback visuals.

This concludes the full custom-content starter path.
