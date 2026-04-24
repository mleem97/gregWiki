Title: F8 Settings Hub
Path: /ui/f8-settings-hub
Type: How-to
Audience: mod developer
Summary: How to use and extend the F8 Settings Hub, the central configuration menu for gregCore mods.
Suggested Tags: ui, settings, f8, config, gui-builder
Related Pages: /ui/gregui-builder, /advanced/vanilla-save-compatibility
Split Recommendation: Keep as one page

# F8 Settings Hub

## What is the F8 Settings Hub?

The F8 Hub is the central mod configuration menu for all `gregCore` mods. It is built on the `GregUIBuilder` (OnGUI) and utilizes the **Luminescent Architect** design system. Mod authors are encouraged to use this shared hub rather than building separate, detached windows for settings.

## Standard Tabs

- **[Framework]**: Displays core information and debug toggles.
- **[Grid]**: Settings for `greg.GridPlacement`.
- **[SaveEngine]**: Settings for `greg.SaveEngine`.
- **[Languages]**: Status of registered scripting languages.
- **[Debug]**: Diagnostics and logs.

## Registering a Custom Tab

Modders can easily register their own configuration tabs within the hub:

```csharp
// Register a custom tab in the F8 menu
GregSettingsHub.RegisterTab("myMod.settings", "My Mod", (builder) => {
    builder.AddLabel("My Mod v1.0.0")
           .AddToggle("Enable Feature X", config.FeatureX, v => config.FeatureX = v)
           .AddSlider("Speed", 0.1f, 5f, config.Speed, v => config.Speed = v)
           .AddButton("Reset to Defaults", ResetConfig);
});

// Remove the tab during mod shutdown
GregSettingsHub.UnregisterTab("myMod.settings");
```

## Vanilla Save Banner

When a vanilla save is loaded, the F8 menu displays a warning banner: `Vanilla Save detected — Grid Placement disabled`. This alerts the user that potentially game-breaking features have been disabled to prevent corruption of the vanilla save file.
