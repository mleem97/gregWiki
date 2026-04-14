---
id: hexviewer-csharp
title: HexViewer Mod Tutorial (C#)
sidebar_label: HexViewer in C#
slug: /development/tutorials/hexviewer-csharp
description: Learn how to build a JADE-style HUD mod using gregCore and gregSdk.
---

# Building the HexViewer in C #

The HexViewer is the reference implementation for a JADE-style HUD. It detects the object the player is looking at and displays technical metadata.

## 1. Project Setup

Create a new C# Class Library project targeting **.NET 6.0**. Ensure you reference `gregCore.dll` and `MelonLoader.dll`.

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
    <Version>1.0.0</Version>
  </PropertyGroup>
  <ItemGroup>
    <Reference Include="gregCore"><HintPath>$(DataCenterDir)\Mods\gregCore.dll</HintPath></Reference>
    <Reference Include="MelonLoader"><HintPath>$(DataCenterDir)\MelonLoader\net6\MelonLoader.dll</HintPath></Reference>
    <Reference Include="UnityEngine"><HintPath>$(Il2CppDir)\UnityEngine.dll</HintPath></Reference>
    <Reference Include="UnityEngine.IMGUIModule"><HintPath>$(Il2CppDir)\UnityEngine.IMGUIModule.dll</HintPath></Reference>
  </ItemGroup>
</Project>
```

## 2. Implementation

We will use `gregGameHooks` for targeting and `GregMetadataService` for retrieving object info.

### The JADE Style Class

First, define the JADE visual constants:

```csharp
using UnityEngine;

public static class JadeStyle {
    public static readonly Color BackgroundColor = new Color(0.05f, 0.08f, 0.12f, 0.82f);
    public static readonly Color TextColor = new Color(0.72f, 0.93f, 0.72f, 1f);
    public static readonly Color HeaderColor = new Color(0.50f, 1.00f, 0.60f, 1f);
}
```

### The Mod Logic

Implement the `OnGUI` loop to render the panel:

```csharp
using MelonLoader;
using gregSdk;
using gregSdk.Services;
using UnityEngine;

namespace GregMod.HexViewer;

public class HexViewerMod : MelonMod {
    public override void OnGUI() {
        // 1. Raycast via gregCore SDK (10m range)
        var hit = gregGameHooks.RaycastForward(10.0f);
        if (hit == null) return;

        // 2. Fetch metadata for the targeted entity
        var metadata = GregMetadataService.GetMetadata(hit.Value.Name);

        // 3. Render JADE Panel
        float x = (Screen.width / 2f) - 200f;
        GUI.backgroundColor = JadeStyle.BackgroundColor;
        GUI.Box(new Rect(x, 10f, 400f, 120f), "");

        // Header
        var headerStyle = new GUIStyle(GUI.skin.label) { normal = { textColor = JadeStyle.HeaderColor } };
        GUI.Label(new Rect(x + 8f, 15f, 380f, 20f), "▶ " + hit.Value.Name, headerStyle);

        // Data Rows
        int y = 45;
        foreach (var entry in metadata) {
            GUI.Label(new Rect(x + 8f, y, 380f, 20f), $"  {entry.Key,-8} : {entry.Value}");
            y += 20;
        }
    }
}
```

## 3. Deployment

1. Compile your mod.
2. Copy the `.dll` to `Data Center/Mods/`.
3. Launch the game and hover over a rack or server to see the JADE HUD in action.

## Key Takeaways

- Use **`gregGameHooks.RaycastForward`** for consistent targeting.
- Pull custom data from **`GregMetadataService`**.
- Always follow the **JADE Style** (Center-top, 400px width, specific colors).
