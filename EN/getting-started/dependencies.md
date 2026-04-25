---
title: Framework Dependencies
description: Built-in dependency policy and bundled runtime stack for gregCore
path: /getting-started/dependencies
---

::: info
**Target Audience**: Framework Maintainers and Advanced Modders.
**Objective**: Understand the built-in-only dependency model of gregCore.
:::

gregCore follows a strict **Built-in Only** policy for framework/runtime dependencies.

## ✅ Dependency Policy

- **Runtime Rule**: All dependencies used by gregCore must be bundled with the framework or game loader environment.
- **No External Runtime Fetching**: No dependency may be pulled at runtime from package registries or online sources.
- **No Hard External Toolchain Requirement for End Users**: End users should not have to install extra runtime packages beyond game + loader prerequisites.
- **Optional Bridges**: Optional language bridges may be available, but core startup must remain functional without them.

## 🏛️ Core Engine & Loader (Bundled/Provided)

### 1. MelonLoader
- **Version**: 0.6.0 or higher (Required)
- **Role**: Base mod loader for *Data Center*. gregCore is loaded as a `MelonMod` and uses MelonLoader discovery/logging.
- **Delivery**: Provided by the loader installation.

### 2. HarmonyX (`0Harmony`)
- **Role**: Method patching layer used for hook dispatch and safe patch workflows.
- **Delivery**: Bundled with MelonLoader.

### 3. Il2CppInterop
- **Role**: Bridge between IL2CPP game runtime and .NET execution layer in gregCore.
- **Delivery**: Provided by loader/game integration.

## 🌍 Built-in Language Runtimes (Framework Side)

### 1. Lua Runtime (MoonSharp Integration)
- **Role**: Executes Lua scripts inside the framework runtime.
- **Delivery**: Integrated into the project/runtime distribution.
- **Location**: `gregCore/lib/MoonSharp`

### 2. JavaScript Runtime (Jint Integration)
- **Role**: Executes JavaScript/TypeScript bridge scripts.
- **Delivery**: Must be shipped with gregCore distribution (built-in policy).

### 3. Python Bridge Runtime
- **Role**: Optional Python host bridge.
- **Delivery**: Must be bundled/optional-safe; no hard startup dependency for core.
- **Note**: If unavailable, Python host remains disabled while core continues to run.

## 🛠️ Utility Components (Built-in Policy)

### 1. IL/Assembly Analysis Utilities
- **Role**: Analyze assemblies and validate patch targets.
- **Delivery**: Must be included in framework bundle for release builds.

### 2. JSON Serialization
- **Role**: Persist settings and exchange payload data across bridges.
- **Delivery**: Must be present as built-in framework dependency.

## 🚫 Not Allowed by Policy

- Runtime dependency download from NuGet/CDN.
- Mandatory external interpreter installations for core startup.
- Dependency activation without presence checks and fallback behavior.

## 🔗 Development Tools
If you are contributing to gregCore, you will also need:
- **.NET 6.0 SDK**: The target runtime.
- **Visual Studio 2022**: Recommended IDE.
- **dnSpy / ILSpy**: Essential for reverse-engineering the `Assembly-CSharp.dll` to find new hooks.

---
[Back to Getting Started](/getting-started)
