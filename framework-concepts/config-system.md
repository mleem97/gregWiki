Title: Mod Configuration System
Path: /framework-concepts/config-system
Type: Concept
Audience: mod developer, framework developer
Summary: Overview of the gregCore Mod Config System for persisting and managing mod settings with F8 UI integration.
Suggested Tags: configuration, json, persistence, ui, settings
Related Pages: /ui/f8-settings-hub, /getting-started/architecture
Split Recommendation: Keep as one page

# Mod Configuration System

The **Mod Config System** allows MelonLoader mods to register, read, and write configuration entries (booleans, integers, and floats) that are:

- **Persisted**: Saved to JSON files in `UserData/ModConfigs/<modId>.json`.
- **Editable at Runtime**: Managed through the central settings panel (Hotkey: **F8**).
- **Reactive**: Immediately saved and updated across the framework when a value changes.

---

## Quick Start (C#)

All configuration interactions are managed through the static **`gregCore.API.ModConfigSystem`** class.

```csharp
using gregCore.API;

// 1. Set metadata for the F8 panel
ModConfigSystem.SetModInfo("my_cool_mod", "YourName", "1.0.0");

// 2. Register options during OnInitializeMelon
ModConfigSystem.RegisterBoolOption("my_cool_mod", "god_mode", "God Mode", false, "Prevents all damage");
ModConfigSystem.RegisterIntOption("my_cool_mod", "speed", "Move Speed", 5, 1, 20);

// 3. Read live values at any time
bool isGodMode = ModConfigSystem.GetBoolValue("my_cool_mod", "god_mode");
```

---

## Accessing the Settings Panel

Players can access the configuration UI via two primary methods:
- **Hot-key F8**: Toggles the Mod Settings Hub from anywhere in the game.
- **Main Menu**: Navigate to **Settings → Mod Settings**.

While the panel is active, game input and the Unity `EventSystem` are partially disabled to prevent "click-through" into the game world.

---

## API Reference

### Registration
Registration should occur early in the mod lifecycle (e.g., `OnInitializeMelon`).

- **`RegisterBoolOption`**: Creates a toggle switch.
- **`RegisterIntOption`**: Creates an integer field with increment/decrement buttons.
- **`RegisterFloatOption`**: Creates a floating-point field with precise controls.

### Data Retrieval (Getters)
Getters are lightweight and safe to call every frame.
- `GetBoolValue(modId, key)`
- `GetIntValue(modId, key)`
- `GetFloatValue(modId, key)`

### Data Modification (Setters)
Programmatic changes are immediately flushed to the JSON file and reflected in the UI.
- `SetBoolValue(modId, key, value)`
- `SetIntValue(modId, key, value)`
- `SetFloatValue(modId, key, value)`

---

## Persistence & File Format

Configuration files are stored as human-readable JSON:
`Data Center/UserData/ModConfigs/<modId>.json`

### Example Schema
```json
{
  "modId": "my_cool_mod",
  "author": "YourName",
  "version": "1.0.0",
  "entries": {
    "god_mode": {
      "type": "Bool",
      "displayName": "God Mode",
      "value": true,
      "default": false
    }
  }
}
```
*Note: Players can manually edit these files while the game is closed to adjust settings outside of the UI.*

---

## Thread Safety & Performance
- **Main Thread Only**: All configuration methods must be called from the main Unity thread.
- **Efficiency**: The retrieval methods use internal dictionaries for O(1) lookup performance, making them suitable for use in `OnUpdate()` loops.
