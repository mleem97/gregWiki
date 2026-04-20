---
title: Maintainer Documentation
description: Procedures for managing hooks, APIs, and documentation sync
path: /maintainer
---

# 🛠️ Maintainer Documentation

This section is for the architects and core contributors of the **gregCore** framework. It outlines the procedures for adding new hooks, maintaining API stability, and keeping this documentation in sync with the source code.

---

## 1. Adding New Hooks

When a game update introduces new systems or when a modder requests a new interception point, follow these steps:

### Step 1: Identify the Target
Use a decompiler (like **dnSpy** or **ILSpy**) to find the internal method in `Assembly-CSharp.dll` that you want to hook.

### Step 2: Update `game_hooks.json`
Add the new entry to the master JSON manifest in `gregCore/game_hooks.json`.

```json
{
  "Group": "Hardware",
  "Namespace": "Il2Cpp",
  "ClassName": "ServerObject",
  "MethodName": "OnThermalShutdown",
  "ReturnType": "Void",
  "Parameters": [
    { "Name": "temperature", "Type": "Single" }
  ]
}
```

### Step 3: Rebuild the Documentation
Run the manual script `gregWiki/scripts/build_hooks_wiki.py` to regenerate the hook reference pages. This ensures the 1771+ hooks are always up-to-date with the JSON manifest.

---

## 2. API Deprecation Policy

To prevent breaking existing mods, never remove a public method from `GregAPI`.
1.  **Mark as Obsolete**: Use the `[Obsolete]` attribute in C# with a message pointing to the new method.
2.  **Versioning**: Increment the minor version of gregCore (e.g., 2.1.0 -> 2.2.0).
3.  **Removal**: Only removed deprecated methods during major version shifts (e.g., 2.x -> 3.x) after a 6-month grace period.

---

## 3. Managing Payload Shapes

The `EventPayload` structure is the most critical part of the framework.
- **Additive Only**: You may add new keys to a payload, but never rename or remove existing ones.
- **Type Consistency**: If a key `Amount` was a `double`, it must stay a `double` forever.

---

## 4. Syncing the Wiki

The wiki is stored as a Git repository. 
- **Landing Pages**: Manually update the `README.md` files in each section when major new features are added.
- **Language Examples**: When documentation templates change, update the `build_hooks_wiki.py` script to reflect the new markdown patterns.

---

## 🏗️ Technical Support Workflow

When a bug is reported:
1.  **Reproduce**: Use the `gregMod.HookShowcase` mod to verify if the relevant hook is firing correctly.
2.  **Audit**: Check the `MelonLoader` logs for IL2CPP interop errors.
3.  **Trace**: Use the `GregHookRegistry` debug mode to see every interception in real-time.

---

## 📖 Related Links
*   [**Hook Implementation Logic (C#)**](/advanced/hook-engine)
*   [**Versioning Standards**](/roadmap/versioning)
*   [**Contributing to gregCore**](/community/contribution)
