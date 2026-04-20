# The gregCore Manual: UI Development

The **gregCore UI Bridge** is a powerful abstraction layer that allows you to create professional, native-looking interfaces within *Data Center* without needing to master Unity's complex UI system.

## 🏛️ UI Bridge Architecture
Instead of you creating Unity `GameObjects`, `Canvases`, and `EventSystems`, you provide gregCore with a **Definition** of your UI. The framework then handles the injection, layout, and event routing.

### Key Benefits
- **Native Look**: Your UI automatically matches the game's font, colors, and styling.
- **Auto-Layout**: Elements are automatically positioned and scaled.
- **Thread Safety**: UI callbacks are automatically synchronized with the Unity main thread.
- **No Reverse Engineering**: You don't need to find the game's canvas; gregCore finds it for you.

## 🛠️ The `GregUiPanel`
The primary building block of any custom UI is the `GregUiPanel`. You get access to this object when you register a **Tab** or a **Window**.

### 1. Registering a Custom Tab
Tabs appear in the "Mods" section of the game's Pause Menu.

```csharp
public override void OnReady()
{
    Api.UI.RegisterTab("com.example.mymod", "Control Center", (panel) => {
        panel.AddHeader("System Overview");
        panel.AddLabel("Status: Online");
        panel.AddButton("Reset System", () => {
            ResetMyMod();
        });
    });
}
```

### 2. UI Components (Widgets)

| Method | Parameters | Description |
| :--- | :--- | :--- |
| **`AddHeader`** | `text` | A large, bold title for a section. |
| **`AddLabel`** | `text, size` | Standard text. Supports basic markup. |
| **`AddButton`** | `text, onClick` | A clickable button with native styling. |
| **`AddToggle`** | `text, value, onToggle` | A checkbox/toggle switch. |
| **`AddSlider`** | `text, min, max, val, onMove`| A numeric slider for fine adjustments. |
| **`AddDropdown`** | `text, options, onSelect` | A selectable list of items. |
| **`AddSeparator`**| - | A horizontal line to divide content. |

## 🔄 Dynamic Updates
To update your UI while it is open, you should use the **State Pattern**. When your data changes, call `panel.Refresh()` to re-execute your population callback.

```csharp
private int _clickCount = 0;

private void Populate(GregUiPanel panel)
{
    panel.AddLabel($"Clicks: {_clickCount}");
    panel.AddButton("Click Me", () => {
        _clickCount++;
        panel.Refresh(); // Redraws the panel with new state
    });
}
```

## 🎨 Design Guidelines
To ensure your mod feels like a part of the game:
1.  **Grouping**: Use headers and separators to group related settings.
2.  **Conciseness**: Keep labels short. Use tooltips for long descriptions.
3.  **Feedback**: Always show a notification or change a label when a button is clicked.

## 🔗 Next Steps
- **[Settings Integration](settings-integration.md)**: How to add simple config options.
- **[Keybinds](../03-api-reference/registries/keybinds.md)**: Connecting UI actions to keyboard shortcuts.

---
[Back to Index](../README.md)
