---
title: UI Architect (Luminescent)
description: Documentation for the GregUiService and the LuminescentArchitect design system.
---

The **LuminescentArchitect** is the standard design system for all gregFramework UI components. It provides a distinct, "cyber-teal" aesthetic optimized for readability in low-light environments (like server rooms).

## Design Tokens

The `LuminescentArchitect` static class contains the primary color palette:

| Token | HSL / Hex | Description |
| :--- | :--- | :--- |
| **Surface** | `#000D0A (88%)` | Deep teal background for panels. |
| **PrimaryTeal** | `#61F5D9` | Brand color for highlights and active states. |
| **GlowTeal** | `#61F5D9 (25%)` | Soft glow effect around components. |
| **OnSurface** | `#D9FFFF` | Off-white text with a slight teal tint. |

## Creating Components

### Standard Panels
Use `CreateModernPanel` to create a stylized window container.

```csharp
var panel = GregUiService.CreateModernPanel(parentTransform, "MyModPanel", new Vector2(400, 300));
```

### Buttons
Modern buttons come with built-in hover effects and outlines.

```csharp
GregUiService.CreateModernButton(
    parent: panel.transform, 
    name: "SaveBtn", 
    label: "Save Configuration", 
    onClick: () => { /* save logic */ }
);
```

### Layouts
The UI service provides helpers to quickly arrange elements.

```csharp
// Adds a vertical layout with standard 12px spacing and 20px padding
var layout = GregUiService.AddVerticalLayout(panel, spacing: 12, padding: 20);
```

## Advanced: UI Takeover

One of the most powerful features is `TakeoverVanillaUi`. This allows you to completely disable and hide the original game UI for a specific panel to replace it with a modern version.

```csharp
// Disables all graphics and interactions on the target vanilla object
GregUiService.TakeoverVanillaUi(vanillaSettingsMenu);
```

## Global UI Scaling

The framework supports global UI scaling to ensure accessibility on high-resolution displays through the `SetGlobalScale` method.

```csharp
GregUiService.SetGlobalScale(1.15f); // 115% scaling
```
