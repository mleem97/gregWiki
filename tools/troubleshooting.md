---
title: Troubleshooting & Debugging
description: Resolve common issues and learn how to debug gregCore mods
path: /tools/troubleshooting
---

# 🛠️ Troubleshooting & Debugging

Modding an IL2CPP game is complex. Even with gregCore's abstractions, you might encounter crashes or logic errors. This guide helps you identify and fix the most common issues.

## 📋 General Debugging Workflow

1.  **Check the Console**: Press \`~\` (Tilde) to open the MelonLoader console. Look for red text (Errors) or yellow text (Warnings).
2.  **Inspect the Logs**: gregCore writes a detailed log to \`MelonLoader/Latest.log\`.
3.  **Use the DevConsole**: Type \`/help\` in the in-game DevConsole to see available diagnostic commands.

## 🛑 Common Errors

### 1. `MissingMethodException`
- **Cause**: A mod is trying to call a method that doesn't exist in the current game version or gregCore version.
- **Fix**: Update gregCore to the latest version. If the error persists, the mod author needs to recompile the mod against the latest `gregCore.dll`.

### 2. `HarmonyException: IL Compile Error`
- **Cause**: A hook is pointing to a method signature that has changed (e.g., a parameter was added or renamed in a game update).
- **Fix**: Report this to the gregCore maintainers. They need to update the `greg_hooks.json` mapping.

### 3. `System.TypeLoadException`
- **Cause**: Usually happens when `gregDependencies` are missing or incomplete.
- **Fix**: Ensure the \`Mods/gregDependencies\` folder contains all required DLLs (LiteDB, MoonSharp, Jint, etc.).

## 🧪 Advanced Debugging Tools

### Hook Tracing
You can enable real-time hook tracing in the DevConsole:
```bash
/trace hooks enable
```
This will log every single gregCore hook that fires to the console. **Warning**: This will significantly impact performance and is only for short-term debugging.

### Payload Inspection
To see what data is actually inside a hook's payload:
1.  Use the **[HexViewer](/api/hooks/devtools/hexviewer)** mod.
2.  Open the "Hook Monitor" (F2).
3.  Click on any fired hook to see the raw JSON dictionary of its data.

## 📈 Performance Bottlenecks

If your FPS drops significantly:
- **Interpreted Scripts**: Check if a Lua or JS script is running heavy logic inside `UnityEngine.Update`.
- **Too many Hooks**: Unsubscribe from hooks you no longer need using `GregAPI.Hooks.Unsubscribe()`.
- **GC Pressure**: Avoid creating new objects (like \`new Vector3()\`) inside high-frequency loops.

---

::: tip
**Need Help?**: Join the **#mod-support** channel on the official TeamGreg Discord. Always attach your `Latest.log` file when asking for help!
:::
