---
title: UI & Interface
description: Building native-feeling mod menus
path: /ui
---

# 🎨 UI & Interface

Build beautiful, consistent user interfaces that feel like a native part of *Data Center*. gregCore uses the **Vibrant Dark Mode** design system (Level 2 Roundedness) to ensure all mod UIs look professional.

## GregUIBuilder (UGUI)

The GregUIBuilder is a fluent API for building native UGUI windows. This is the recommended way for Unity 6 IL2CPP stability.

`csharp
var panel = GregUIBuilder.CreateTablet('MyModSettings')
    .AddHeadline('Mod Configuration')
    .AddLabel('Version 1.0.0')
    .AddToggle('Enable Logging', true, (val) => { /* logic */ })
    .AddPrimaryButton('Apply Changes', () => { /* logic */ })
    .Build();
`

## Features
- **Theme Awareness**: Automatically applies the Teal/Cyan design system.
- **IL2CPP Safe**: Avoids 'Method unstripping failed' errors.
- **Virtualized Lists**: Support for massive data sets via AddSearchableList.
- **Draggable Windows**: Native support for dragging.

---

::: tip
See the [Design System Guide](/ui/design-system) for exact color tokens.
:::
