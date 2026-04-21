---
title: Adding New Hooks
description: Workflow for extending the gregCore intercept registry
path: /maintainer/adding-hooks
---

# 🪝 Adding New Hooks

gregCore's strength lies in its massive hook coverage. As *Data Center* updates or new game features are discovered, maintainers must extend the hook registry to provide modders with fresh integration points.

## 🛠️ Tools of the Trade
We use the **`gregExtractor`** (located in `/gregExtractor`) to automate the discovery of game methods. This tool scans the `Assembly-CSharp.dll` and generates the metadata required for `greg_hooks.json`.

## 🚀 The Extraction Workflow

### 1. Snapshot generation
Run the extractor against the latest game assemblies:
```bash
cd gregExtractor
dotnet run --mode scan --input "../MelonLoader/Il2CppAssemblies"
```

### 2. Matching and Categorization
The extractor uses a "fuzzy matcher" to group methods into domains. Review the output for:
- **Domain Mismatches**: e.g., a networking method ending up in `Economy`.
- **Duplicate Names**: Methods with the same name but different signatures.

### 3. Updating the Registry
Append the new hooks to `gregCore/assets/greg_hooks.json`. Each entry MUST follow this schema:

```json
{
  "name": "greg.DOMAIN.ActionName",
  "patchTarget": "Il2Cpp.ClassName::MethodName(ArgType1, ArgType2)",
  "strategy": "Postfix",
  "assembly": "Il2Cpp",
  "payloadSchema": {
    "paramName": "type"
  }
}
```

## 🏷️ Naming Conventions

Maintainers must adhere to the **Canonical Hook Naming Standard (CHNS)**:

| Layer | Format | Example |
| :--- | :--- | :--- |
| **Domain** | `greg.<DOMAIN>` (Lowercase) | `greg.hardware` |
| **Class** | `<Class>` (CamelCase) | `greg.hardware.Rack` |
| **Event** | `<Event>` (CamelCase) | `greg.hardware.Rack.ObjectMounted` |

- **State Changes**: Use past tense (e.g., `PoweredOn`, `Broken`).
- **Input/Actions**: Use active tense (e.g., `ButtonCheckOut`, `KeyBindTriggered`).

## 🧪 Validation Requirements

Before committing new hooks to the repository:
1.  **Dry Run**: Ensure gregCore starts without `HarmonyException` in the logs.
2.  **Payload Check**: Verify that captured arguments are not null and correctly mapped to the payload dictionary.
3.  **Performance Test**: New hooks added to the `Update` or `FixedUpdate` loops must be marked with `"highFrequency": true`.

---

::: warning
**Signature Changes**: If a game update changes a method signature, the old hook name MUST be moved to the `"legacy"` field of the new hook entry to maintain backward compatibility for existing mods.
:::
