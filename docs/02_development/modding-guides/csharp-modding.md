---
title: C# Modding Guide
sidebar_label: C# (Managed)
description: How to build managed C# mods using gregCore and gregSdk.
---

# C# Modding with gregCore

C# is the primary language for building framework-heavy mods, plugins, and deep integrations with the game's IL2CPP layer.

## Prerequisites
- .NET 6.0 SDK
- IDE (Visual Studio, VS Code, or Rider)
- `gregCore.dll` (Build from source or download from releases)

## 1. Project Setup
The easiest way to start is by using the **`HexLabelMod`** C# template.

1.  Copy the `csharp/` folder from the `HexLabelMod` template to a new directory (e.g., `gregMod.MyNewMod/`).
2.  Open the `.csproj` file and ensure the reference to `gregCore.dll` is correct:
    ```xml
    <Reference Include="gregCore">
      <HintPath>path/to/gregCore.dll</HintPath>
    </Reference>
    ```

## 2. Using gregSdk
The `gregSdk` namespace provides all the tools you need to interact with the framework.

### Event Subscription
Use the `gregEventDispatcher` to listen for normalized game events:
```csharp
using gregSdk;

gregEventDispatcher.On(gregNativeEventHooks.ServerLoadingStarted, payload => {
    string serverId = gregPayload.Get<string>(payload, "EntityId");
    MelonLogger.Msg($"Server loading: {serverId}");
});
```

### Content Registration
Register new hardware using the typed registries:
```csharp
using gregSdk.Definitions;
using gregSdk.Registries;

var myServer = new ServerDefinition {
    Id = "custom.MegaServer",
    Name = "Mega Server 9000",
    RackUnits = 2
};

var registry = new GregServerRegistry();
registry.Register(myServer);
```

### Targeting & JADE HUD Rendering
```csharp
using UnityEngine;
using gregSdk;

public void OnGUI() {
    var hit = gregGameHooks.RaycastForward(10.0f);
    if (hit != null) {
        // Render standard JADE panel
        float x = (Screen.width / 2f) - 200f;
        GUI.Box(new Rect(x, 10f, 400f, 150f), "");
        GUI.Label(new Rect(x + 8f, 15f, 380f, 20f), "▶ " + hit.Value.Name);
        GUI.Label(new Rect(x + 8f, 40f, 380f, 20f), $"  TYPE    : {hit.Value.Name}");
    }
}
```

## 3. Deployment
1. Build your project in **Release** mode.
2. Copy your compiled `.dll` to `Data Center/Mods/`.
3. Ensure `gregCore.dll` and `MoonSharp.Interpreter.dll` are also in `Data Center/Mods/`.
