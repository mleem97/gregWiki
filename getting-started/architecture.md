# Framework Architecture

To use gregCore effectively, you must understand its layered design. This architecture ensures that mods remain stable, performant, and cross-compatible.

## 🏛️ The Four Layers of gregCore

### 1. The Core Layer (The Brain)
The Core layer is responsible for the internal orchestration of the framework.
- **Mod Loading**: Scans and loads assemblies (.dll) and scripts (.lua, .py, .js).
- **Service Container**: Manages the lifecycle of internal services (Logging, Persistence, Validation).
- **Hook Bus**: The central nervous system that dispatches events from the game to your mods.

### 2. The Game Layer (The Bridge to Unity)
This layer interacts directly with the *Data Center* game engine.
- **Harmony Patches**: Low-level "detours" that intercept game methods.
- **IL2CPP Support**: Specialized logic to handle the game's compiled C++ nature.
- **Safe Patching**: A proprietary system that ensures a failing patch doesn't crash the game.

### 3. The SDK Layer (The Public API)
This is what you, the modder, interact with.
- **`GregMod` Base Class**: The entry point for all C# mods.
- **`GregAPI`**: A static access point for all services (Economy, World, UI, etc.).
- **Hook Catalog**: A versioned list of all 1771 available game events.

### 4. The Bridge & Compatibility Layer
This layer exposes the C# SDK to other programming languages and includes the integrated legacy compatibility runtime.
- **Lua (MoonSharp)**: High-speed scripting.
- **Python (Python.Runtime)**: Flexible data-driven logic.
- **Rust/Go (C-FFI)**: Native performance for compiled modules.
- **JavaScript (Jint)**: Modern web-tech for game modding.
- **DataCenterModLoader (integrated)**: Legacy RustBridge/LangCompat behavior maintained in-core at `src/Compatibility/DataCenterModLoader`.

## 🧩 Migration Status (Current)

- External trees `plugins/DataCenter-RustBridge` and `mods/greg.Plugin.LangCompatBridge` are retired from `gregCore`.
- Compatibility lifecycle is initialized directly by `GregCoreMod`.
- `gregCore` follows a built-in-first dependency model for core compatibility features.

## 🔄 The Data Flow
1.  **Event Occurs**: A player clicks a button in the game.
2.  **Interception**: A gregCore Harmony patch in the **Game Layer** catches the click.
3.  **Payload Creation**: The patch packages the click data (e.g., button ID) into a `GregPayload`.
4.  **Dispatch**: The **Core Layer** sends this payload to the Hook Bus.
5.  **Reaction**: Your mod (in the **SDK Layer**) receives the payload via a subscription and executes your code.

## 🛡️ Stability & Versioning
gregCore uses a **Semantic Versioning** system (MAJOR.MINOR.PATCH).
- **Major**: Breaking API changes.
- **Minor**: New hooks or services (Backward compatible).
- **Patch**: Bug fixes.

We guarantee that mods built for a specific Major version will continue to work throughout all Minor updates of that version.

---
[Next: Environment Setup](environment-setup.md)
