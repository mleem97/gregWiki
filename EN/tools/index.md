Title: Tools & Debugging Overview
Path: /tools/index
Type: Overview
Audience: mod developer, framework developer
Summary: Overview of the essential tools, debugging techniques, and runtime utilities available for gregFramework development.
Suggested Tags: tools, debugging, console, logging, hooks, melonloader
Related Pages: /tools/greg-extractor/index, /tools/greg-modmanager, /api/hooks/catalog
Split Recommendation: Create overview + children

# Tools & Debugging

Modding is 10% coding and 90% debugging. The **gregFramework** provides a suite of tools and runtime utilities to streamline your development workflow and help you identify issues quickly.

## Essential Tooling Stack

- **.NET SDK & IDE**: Use `dotnet` 6.0+ and an IDE like Visual Studio 2022 or Rider for C# development.
- **MelonLoader**: The primary runtime loader for Unity/IL2CPP mod injection. Diagnostics are located in `MelonLoader/Latest.log`.
- **Harmony / HarmonyX**: Used for low-level method patching when direct APIs are unavailable.
- **[gregExtractor](./greg-extractor/index)**: Our proprietary tool for hook discovery and mod scaffolding.
- **[gregModmanager](./greg-modmanager)**: Desktop client for installing and managing mods.

## In-Game Debugging

### 1. The Developer Console
Press **`~` (tilde)** in-game to open the **gregCore Dev Console**.
- View real-time, color-coded logs.
- Filter messages by Mod ID.
- Execute live code snippets for rapid testing.

### 2. Hook Tracing
If a hook isn't firing as expected, enable tracing in `gregCore.json`:
```json
{
  "EnableHookTracing": true
}
```
This will log every single framework event to the console for deep inspection.

## Logging Best Practices

Always use the unified `GregLogger` to ensure your messages are routed correctly to the console and log files:

- **`Logger.Info`**: General status updates.
- **`Logger.Debug`**: Detailed diagnostics (only visible if `DebugMode` is enabled).
- **`Logger.Warning`**: Unexpected but non-fatal scenarios.
- **`Logger.Error`**: Critical failures that impact mod functionality.

## Common Failures & Fixes

| Symptom | Cause | Resolution |
| :--- | :--- | :--- |
| **Mod not loading** | Version mismatch or missing DLL | Check `MelonLoader/Latest.log` for assembly load errors. |
| **Hook not firing** | Patch target changed or never hit | Enable Hook Tracing or use `SafePatch` logs to verify method calls. |
| **Bridge Error** | Missing runtime (Lua/Python) | Ensure the required language DLLs are in the correct `Mods/` path. |

---
[Next: gregExtractor Guide](./greg-extractor/index)
