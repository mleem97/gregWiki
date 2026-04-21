---
title: UI & Interface
description: Building native-feeling mod menus
path: /ui
---

# 🎨 UI & Interface

Build beautiful, consistent user interfaces that feel like a native part of *Data Center*. gregCore uses the **Luminescent Architect** design system to ensure all mod UIs look professional.

## GregUIBuilder

The `GregUIBuilder` is a fluent API for building IMGUI-based windows.

```csharp
var panel = GregUIBuilder.Create("MyModSettings")
    .SetTitle("Mod Configuration")
    .AddTab("General", tab => {
        tab.AddToggle("Enable Logging", _config.LogEnabled, (val) => _config.LogEnabled = val);
        tab.AddSlider("UI Scale", 0.5f, 2.0f, _config.Scale, (val) => _config.Scale = val);
    })
    .AddTab("Advanced", tab => {
        tab.AddButton("Reset All", () => ResetSettings());
    })
    .Build();
```

## Features
- **Theme Awareness**: Automatically adapts to the current game theme.
- **Draggable Windows**: Native support for dragging and resizing.
- **Auto-Layout**: No need to calculate pixel positions manually.
- **Keybind Integration**: Easily bind panels to F-keys or custom shortcuts.

---

::: tip
See the [Custom Panels Guide](/ui/custom-panels) for more advanced examples.
:::
