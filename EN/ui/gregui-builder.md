# GregUI Builder API

The **GregUIBuilder** is the primary way for modders to create safe, high-performance UIs in Unity 6 IL2CPP. It avoids the 'Method unstripping failed' issues of IMGUI by using persistent UGUI components.

## Usage Types

### 1. Tablets (Main Dashboards)
Used for complex interfaces like Economy Hub or AutoBuilder. Centered and highlighted with a thick Teal border.

`csharp
var ui = GregUIBuilder.CreateTablet("MY DASHBOARD")
    .SetSize(800, 600)
    .AddHeadline("Section Alpha")
    .AddLabel("Status: Nominal")
    .AddPrimaryButton("EXECUTE", () => { /* Logic */ })
    .Build();
`

### 2. Widgets (Compact Tools)
Used for auxiliary tools like HexViewer or status displays. Free-floating and draggable.

`csharp
var widget = GregUIBuilder.CreateWidget("TOOLBOX", 50, 50)
    .SetSize(300, 400)
    .AddHeadline("Inspector")
    .AddLabel("Monitoring...")
    .Build();
`

## Features

- **Auto-Layout**: All elements are managed by a VerticalLayoutGroup with standard spacing.
- **IL2CPP Safety**: Button clicks are automatically wrapped in native-safe delegates.
- **Design System**: Automatically applies colors, fonts, and rounded corners.
- **Naming**: Elements are registered in the GregUIManager by name for easy toggling via GregUIManager.TogglePanel("Name").

## Method Reference

| Method | Description |
| :--- | :--- |
| AddHeadline(text) | Adds a Cyan All-Caps title. |
| AddLabel(text) | Adds standard white body text. |
| AddPrimaryButton(label, action) | Adds a vibrant Teal button (CTA). |
| AddSecondaryButton(label, action) | Adds a subtle outlined/transparent button. |
| AddToggle(label, current, action) | Adds a standardized toggle switch. |
| AddSlider(label, min, max, current, action) | Adds a precision slider component. |
| AddSearchableList<T>(items, selector, action) | Adds a virtualized list (Object Pooling) for 1000+ items. |
