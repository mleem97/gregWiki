---
id: extending-gregcore
title: EXTENDING gregCore
description: Framework extension tutorial for adding hooks, API methods, and FFI bridges in gregCore.
---

## 1. Introduction

Framework extensions are changes inside `gregCore` that expand the SDK/runtime capabilities for all mods and plugins.

Prerequisites:

- Visual Studio 2022 (or `dotnet` CLI)
- .NET 6 SDK
- `MoonSharp.Interpreter` available at runtime.

---

## 2. Framework structure overview

The core project is organized into logical layers:

```text
gregCore/src/
├─ API/
│  └─ GregAPI.cs           <-- Single Source of Truth API
├─ Bridge/
│  ├─ RustFFI/             <-- Rust Bridge implementation
│  └─ LuaFFI/              <-- Lua Bridge (MoonSharp)
├─ Core/                   <-- Internal logic (Bus, Models, etc.)
├─ GameLayer/
│  ├─ Hooks/               <-- Event orchestration
│  └─ Patches/             <-- Harmony patches for IL2CPP
├─ PublicApi/              <-- Object-oriented C# modules
└─ gregCore.csproj
```

---

## 3. Extension #1: Add a new API method

Target file: `src/API/GregAPI.cs`

All cross-language features must be added here first.

### Step-by-step

1. Add the static method to `GregAPI.cs`.
2. Implement the game logic using IL2CPP classes.
3. Update the `RustFFIBridge` struct and function table.
4. Update the `LuaFFIBridge` table registration.

### Example: Adding `GetGameVersion()`

**1. GregAPI.cs**
```csharp
public static string GetGameVersion() => global::Il2Cpp.VersionInfo.current;
```

**2. RustFFIBridge.cs**
Update `GregCoreAPI` struct and assignment.
```rust
pub get_game_version: extern "C" fn() -> *const c_char,
```

**3. LuaFFIBridge.cs**
```csharp
greg["get_game_version"] = (Func<string>)GregAPI.GetGameVersion;
```

---

## 4. Extension #2: Add a new Event

Target file: `src/API/GregEventId.cs`

1. Define a new unique ID in the `GregEventId` enum.
2. Update the `_eventIdToHook` mapping in `GregAPI.cs`.
3. (Optional) Add a Harmony patch to trigger the event via `GregAPI.FireEvent`.

---

## 5. Build and deploy

```bash
dotnet build gregCore.csproj --configuration Release
```

Copy outputs:
- `bin/Release/net6.0/gregCore.dll` -> `Data Center/Mods/`
