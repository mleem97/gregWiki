---
title: gregCore Logging System Guide
description: A complete guide to the unified logging system in gregCore.
category: Guides
---

# gregCore Logging System Guide

## What is the gregCore Logging System?
The gregCore Logging System is a unified, structured logging framework built entirely on top of `MelonLoader.MelonLogger`. It enforces a strict, consistent format across the entire modding ecosystem for "Data Center", ensuring logs are highly readable, searchable, and professional.

## Why a unified system?
In complex modding environments with dozens of active plugins, logging can quickly become a chaotic mess. By enforcing a unified system, we ensure:
*   **Consistency:** Every log line looks the same, regardless of which mod generated it.
*   **Searchability:** Strict alignment and keyword usage make filtering logs with tools like `grep` trivial.
*   **Professionalism:** No emojis, pure English, and no messy console spam.
*   **Safety:** Direct dependency on `MelonLogger` ensures we are completely safe to use within IL2CPP constraints, with proper locking for thread safety.

## GregLogger vs GregModLogger
*   **`GregLogger`**: The core static logger used *only* by the framework itself (`GregCoreMod.cs`). It is responsible for the framework boot sequence and core lifecycle events.
*   **`GregModLogger`**: The per-mod wrapper that *every* plugin and mod must use. It prepends your `[ModTag]` to the log output, distinguishing your messages from the core framework.

## Prefix Format: `[gC-{FunctionName}]`
Every single log line produced by this system begins with the caller's function name, automatically resolved via the `[CallerMemberName]` attribute.

**Format Spec:**
```text
[gC-{FunctionName}] [{ModTag}] {Message}
```

*   `gC` is always lowercase 'g', uppercase 'C'.
*   `{FunctionName}` is the name of the method making the log call.
*   `[{ModTag}]` is the 16-character padded tag of the mod (if using `GregModLogger`).

**Examples:**
```text
[gC-OnInitializeMelon] [GridPlacement] --- Init ---
[gC-SaveAll]           [SaveEngine]    SAVED           847 objects in 12ms
```

## Log Levels
| Level | Method | When to use |
| :--- | :--- | :--- |
| **Msg** | `_log.Msg()` | Normal operational messages and lifecycle events. |
| **Warn** | `_log.Warn()` | Unexpected but non-fatal situations. |
| **Error** | `_log.Error()` | Exceptions, failed operations. Always pass the exception object if available. |
| **Debug** | `_log.Debug()` | Verbose output. Automatically suppressed when `GregCoreConfig.DebugMode == false`. |

## Shorthand Methods
Shorthand methods guarantee exact alignment and phrasing for common actions. The keywords are left-padded to 16 characters.

| Method | Output Format | When to use |
| :--- | :--- | :--- |
| `Section(title)` | `--- {title} ---` | Visual separation of distinct phases (e.g., "Init", "Shutdown"). |
| `PatchApplied(target)` | `PATCH APPLIED   {target}` | After a successful Harmony patch. |
| `PatchFailed(target, ex)` | `PATCH FAILED    {target}` | When a Harmony patch fails to apply. |
| `HookSubscribed(hook)` | `HOOK SUBSCRIBED  {hook}` | When subscribing to a framework event. |
| `HookFired(hook)` | `HOOK FIRED       {hook}` | Inside an event handler when triggered. |
| `Saved(count, ms)` | `SAVED           {count} objects in {ms}ms` | Upon successful data serialization. |
| `Loaded(count, src)` | `LOADED          {count} objects from {src}` | Upon successful data deserialization. |
| `VanillaSaveDetected(feat)` | `VANILLA SAVE DETECTED -- {feat} disabled` | When a vanilla format forces a feature disable. |
| `FeatureState(key, bool)` | `FEATURE {key} = ENABLED/DISABLED` | To report the state of a feature flag. |

## Boot Sequence
At startup, `GregCoreMod` prints the signature ASCII banner followed by the framework boot sequence:

```text
[00:00:00.000] [gregCore] 
[00:00:00.001] [gregCore]  ____  ____  _____ ____  ____  ___  ____  _____ 
[00:00:00.001] [gregCore] / ___|  _ \| ____/ ___|/ ___|/ _ \|  _ \| ____|
[00:00:00.001] [gregCore]| |  _| |_) |  _|| |  | |  _| | | | |_) |  _|  
[00:00:00.001] [gregCore]| |_| |  _ <| |__| |__| |_| | |_| |  _ <| |___ 
[00:00:00.001] [gregCore] \____|_| \_\_____\____|\____|\___/|_| \_\_____|
[00:00:00.001] [gregCore]  =============================================
[00:00:00.001] [gregCore]  gregCore Modding Framework
[00:00:00.001] [gregCore]  Version : 0.1.0
[00:00:00.001] [gregCore]  Game    : Data Center (Waseku)
[00:00:00.001] [gregCore]  Loader  : MelonLoader 0.6.5
[00:00:00.001] [gregCore]  Mode    : DEBUG
[00:00:00.001] [gregCore]  =============================================
[00:00:00.001] [gregCore] 
[00:00:00.002] [gregCore] [gC-OnInitializeMelon] --- Framework Boot ---
[00:00:00.003] [gregCore] [gC-OnInitializeMelon] [CoreFramework] Applying patches...
[00:00:00.004] [gregCore] [gC-OnInitializeMelon] [CoreFramework] PATCH APPLIED   SaveManager.SaveGame
```

## Strict Rules (MUST FOLLOW)
1.  **No Emojis.** Not one. Ever.
2.  **English Only.** All code, comments, and log messages.
3.  **No `Console.Write`.** Use only `GregModLogger`.

## Modder Guide: How to use `GregModLogger`

Instantiate `GregModLogger` once in your `MelonMod` entry point, passing your mod's short tag (max 16 characters).

```csharp
using System;
using MelonLoader;
using greg.Logging;

namespace greg.MyAwesomeMod
{
    public class Main : MelonMod
    {
        private GregModLogger _log = null!;

        public override void OnInitializeMelon()
        {
            // 1. Framework guard
            if (gregCore.Core.GregCoreMod.Instance == null)
            {
                LoggerInstance.Warning("[gC-OnInitializeMelon] gregCore not ready.");
                return;
            }

            // 2. Initialize logger with your ModTag
            _log = new GregModLogger("AwesomeMod");

            _log.Section("Init");
            _log.Msg("Starting initialization.");

            // 3. Log actions
            _log.PatchApplied("TargetClass.Method");
            _log.FeatureState("AwesomeMod", true);

            _log.Msg("Initialization complete.");
        }

        public override void OnApplicationQuit()
        {
            _log?.Section("Shutdown");
            _log?.Msg("Unloading.");
        }
    }
}
```

### Harmony Patches
For Harmony patch classes, use a `static readonly` logger for GC safety:

```csharp
internal static class ExamplePatch
{
    private static readonly GregModLogger _log = new GregModLogger("AwesomeMod");

    [HarmonyPatch(typeof(Target), "Method")]
    [HarmonyPrefix]
    private static bool Prefix()
    {
        _log.Debug("Prefix fired.");
        return true;
    }
}
```