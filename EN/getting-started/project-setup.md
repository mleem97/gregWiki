# Project Setup (C#)

To develop gregCore mods in C#, you need to set up a standard .NET development environment.

## 1. Prerequisites
- **Visual Studio 2022** or **VS Code**.
- **.NET 6.0 SDK**.
- **MelonLoader** installed in your game directory.

## 2. Create the Project
1. Open your IDE and create a new **Class Library (.NET)** project.
2. Target **.NET 6.0**.
3. Set the project name (e.g., `MyCoolMod`).

## 3. Add References
You need to reference the following DLLs from your game directory:
- `Mods/gregCore.dll`
- `MelonLoader/MelonLoader.dll`
- `Data Center_Data/Managed/UnityEngine.CoreModule.dll`
- `Data Center_Data/Managed/UnityEngine.dll`

### Visual Studio (csproj) example:
```xml
<ItemGroup>
  <Reference Include="gregCore">
    <HintPath>$(GamePath)\Mods\gregCore.dll</HintPath>
  </Reference>
  <Reference Include="MelonLoader">
    <HintPath>$(GamePath)\MelonLoader\MelonLoader.dll</HintPath>
  </Reference>
</ItemGroup>
```

## 4. Build Configuration
Set your output path to the game's `Mods/` folder to automatically deploy your mod when building.

---
[Next: Creating Your First Mod](first-mod.md)
