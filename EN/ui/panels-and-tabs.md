# Panels and Tabs

The easiest way to give your mod a UI is to register a **Tab** in the "Mods" menu.

## 1. Registering a Tab (C#)

```csharp
public override void OnReady()
{
    Api.UI.RegisterTab("com.mymod.tab", "My Mod", (panel) => {
        panel.AddLabel("Welcome to my Mod UI!");
        panel.AddButton("Click Me", () => {
            Api.UI.ShowNotification("Button clicked!");
        });
    });
}
```

## 2. Using the `GregUiPanel`
The `onPopulate` callback provides a `GregUiPanel` object, which has helper methods for adding components:

| Method | Description |
| :--- | :--- |
| `AddLabel(text)` | Adds a static text label. |
| `AddButton(text, onClick)` | Adds a clickable button. |
| `AddToggle(text, val, onChange)` | Adds a checkbox/toggle. |
| `AddSlider(text, min, max, val, onChange)` | Adds a numeric slider. |

## 3. Native Settings Tab
gregCore automatically creates a settings tab for your mod if you register settings during `OnLoad`.

```csharp
public override void OnLoad()
{
    Api.Settings.RegisterToggle("com.mymod", "auto_repair", "Auto-Repair Servers", false);
}
```

---
[Next: Widgets and Components](widgets.md)
