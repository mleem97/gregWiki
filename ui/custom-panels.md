---
title: Custom UI and Mod Settings
description: Learn how to build polished, native-feeling interfaces and settings menus
path: /ui/custom-panels
---

# 🎨 Custom UI and Mod Settings

Building a clean, production-quality UI is crucial for a professional mod. gregCore provides a high-level UI abstraction layer that allows you to inject custom panels into the game's native menu system without having to write raw Unity UGUI code.

---

## 1. The Mod Settings Hub

gregCore automatically injects a **"Mods"** tab into the game's `PauseMenu`. By registering settings through the API, your mod's configuration will automatically appear here.

### Registering Basic Settings (C# Example)
```csharp
GregAPI.Settings.RegisterToggle(
    modId: "myMod",
    settingId: "enable_god_mode",
    displayName: "God Mode",
    defaultValue: false,
    onChanged: (val) => GregLogger.Info($"God mode is now {val}"),
    category: "Cheats"
);

GregAPI.Settings.RegisterSlider(
    modId: "myMod",
    settingId: "money_multiplier",
    displayName: "Income Multiplier",
    defaultValue: 1.0f,
    onChanged: (val) => GregLogger.Info($"Multiplier set to {val}"),
    category: "Economy"
);
```

> 💡 **Tip**: Categories help organize your mod's settings into collapsible groups in the UI.

---

## 2. Building Custom Panels

If you need more than just simple settings (e.g., a dashboard or an inventory view), you can create **Custom Panels**.

### Step 1: Define the Panel
A panel consists of a layout and interactive elements.

```csharp
var myPanel = GregAPI.UI.CreatePanel("Data Analyzer");

myPanel.AddLabel("System Status", LabelSize.Large);
myPanel.AddButton("Run Diagnostic", () => RunDiagnostic());
myPanel.AddProgressBar("Progress", 0.0f);
```

### Step 2: Show the Panel
You can bind a panel to a keybind or trigger it from a hook.

```csharp
GregAPI.Input.RegisterKeybind("myMod.analyzer", "Open Analyzer", KeyCode.F7, () => {
    myPanel.Show();
});
```

---

## 3. Advanced UI Components

gregCore supports structured data display through **Tables** and **Tabs**.

### Creating a Data Table
Tables are perfect for displaying employee lists, server stats, or transaction history.

```csharp
var table = myPanel.AddTable("Employee Stats");
table.AddHeader("Name", "Job", "Salary");

table.AddRow("Alice", "Admin", "$5000");
table.AddRow("Bob", "Technician", "$4200");
```

### Using Tabs within Panels
If your panel is complex, split it into sub-tabs.

```csharp
var tabGroup = myPanel.AddTabGroup();
var generalTab = tabGroup.AddTab("General");
var advancedTab = tabGroup.AddTab("Advanced");

generalTab.AddLabel("Basic controls here...");
advancedTab.AddLabel("Expert settings here...");
```

---

## 4. Connecting UI to Events

A dynamic UI should update in response to game events.

```csharp
GregAPI.Events.Subscribe("greg.economy.MoneyChanged", (payload) => {
    myPanel.UpdateLabel("balance_label", $"Balance: {payload.GetDouble("Total"):C}");
});
```

---

## 5. Persistence of UI State

`gregCore` automatically saves the state of any registered `SettingEntry` (Toggles, Sliders). However, if your **Custom Panel** contains non-setting data (e.g., custom filters), you must save that state manually.

```csharp
// Saving UI filter state
GregAPI.Persistence.SaveData("analyzer_filter_mode", 2);
```

---

## 🎨 Design Philosophy & Best Practices

1.  **Consistency**: Use the native font (`Inter` or `Roboto`) and color palettes provided by gregCore's CSS constants to ensure your mod looks like part of the game.
2.  **Avoid Clutter**: If you have more than 5 settings, use **Categories** to keep them manageable.
3.  **Responsive Layouts**: Use the `VerticalLayoutGroup` and `HorizontalLayoutGroup` provided by gregCore rather than absolute positioning. This ensures your UI works on different screen resolutions (1080p to 4K).
4.  **Polish**: Add tooltips to complex settings using `.AddTooltip("Text")` to help your users.

---

## 📖 Related Links
*   [**UI Hook Reference**](/api/hooks/ui)
*   [**UI Service API Documentation**](/api/services/ui)
*   [**Example: Mod Hub (Full Code)**](/community/examples/mod-hub)
