Title: Scripting Language Support
Path: /guides/languages/scripting-language-support
Type: Overview
Audience: mod developer, framework developer, advanced contributor
Summary: Overview of all scripting languages supported by gregCore, including activation logic and host mapping.
Suggested Tags: scripting, lua, rust, python, javascript, csharp-script
Related Pages: /guides/languages/moonsharp-lua-integration, /getting-started/architecture
Split Recommendation: Keep as one page

# Scripting Language Support

## Overview

`gregCore` maintains a strict distinction between:

- **Plugins**: MelonLoader assemblies (`*.dll`).
- **Scripts**: Source files located in `Mods/Scripts` (`*.lua`, `*.py`, `*.rs`, `*.rmod`, `*.js`, `*.ts`, `*.cs`).

> ⚠️ **WIKI↔CODE CONFLICT**: Older bridge implementations internally used `Plugins/<Lang>` folders. The current activation logic scans `Mods/Scripts` as the **Single Source of Truth**.

## Activation Model (On-Demand)

During startup (`OnInitializeMelon`), `gregCore` executes:

```csharp
// Signature
public static void ScanAndActivate(string modsScriptsDir)
```

The registry only activates hosts for which corresponding files were detected.

```csharp
// Signatures
public static bool IsActive(Language lang)
public static IGregLanguageHost GetHost(Language lang)
```

## Language Matrix

| Language | Pattern in `Mods/Scripts` | Dependency in `gregCore` | Host | Status |
|---|---|---|---|---|
| **Lua** | `*.lua` | MoonSharp `2.0.0` | `GregLuaHost` | Activatable |
| **Rust** | `*.rs`, `*.rmod` | Rust-Bridge (FFI/ABI Layer) | `GregRustHost` | Activatable |
| **Python** | `*.py` | Python-Host Bindings (`pythonnet`) | `GregPythonHost` | Activatable at Runtime |
| **C# Script** | `*.cs` | Roslyn (if available) | `GregCSharpScriptHost` | [UNVERIFIED] Execution Layer |
| **JS / TS** | `*.js`, `*.ts` | Jint JS-Runtime Binding | `GregJsHost` | `*.js` active, `*.ts` requires transpilation |

## Entry Points by Language

### Lua
- **Use Case**: Rapid gameplay automation, hooks, and utilities.
- **Host**: `GregLuaHost`.

```lua
-- File: Mods/Scripts/hello.lua
greg.log_info("Hello from Lua")
```

### Rust
- **Use Case**: Performance-critical modules, FFI integration.
- **Host**: `GregRustHost`.

```rust
// File: Mods/Scripts/example.rs
// Note: Currently the FFI bridge uses native exports; 
// the .rs file serves as a trigger for host activation.
fn main() {
    // runtime-specific logic
}
```

### Python
- **Use Case**: Prototyping, automation, and data workflows.
- **Host**: `GregPythonHost`.

```python
# File: Mods/Scripts/hello.py
greg.log_info("Hello from Python")
```

### C# Script
- **Use Case**: Script-based C# extensions without a plugin build step.
- **Host**: `GregCSharpScriptHost`.

```csharp
// File: Mods/Scripts/hello.cs
// [UNVERIFIED] Full script execution depends on Roslyn runtime.
```

### JavaScript / TypeScript
- **Use Case**: Rapid script automation, modular tools.
- **Host**: `GregJsHost`.

```javascript
// File: Mods/Scripts/hello.js
greg_log("Hello from JS");
```

```ts
// File: Mods/Scripts/hello.ts
// Currently only detection is supported; transpiler integration is required.
```

## Known Limitations

- **`GregCSharpScriptHost`**: The execution layer is documented in `MISSING.md`.
- **TypeScript**: Detection is available, but there is no integrated transpilation pipeline.
- **Python**: If `Python.Runtime.dll` is missing, the Python host remains disabled.

## Related Pages

- [MoonSharp Lua Integration](./moonsharp-lua-integration.md)
- [Framework Architecture](/getting-started/architecture)
