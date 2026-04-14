---
title: Building Custom UIs with C(uGUI)
---
# Building Custom UIs with C# (uGUI)

For a modern, polished UI, you should use Unity's **uGUI** system. While the game uses some older IMGUI (`OnGUI`), a modernization mod should stick to the newer `GameObject`-based approach.

## 1. Creating a Canvas

Your UI must live inside a `Canvas`. You can either find the game's main HUD canvas or create your own:

```csharp
var canvasGo = new GameObject("My_Modern_HUD");
var canvas = canvasGo.AddComponent<Canvas>();
canvas.renderMode = RenderMode.ScreenSpaceOverlay;
canvasGo.AddComponent<CanvasScaler>();
canvasGo.AddComponent<GraphicRaycaster>();
```

## 2. Creating Modern Elements

Instead of using Unity's default `Legacy Text` (which the game often uses), you should aim for **TextMeshPro** for a modern look.

### Adding a Background (Image)

```csharp
var panel = new GameObject("Panel_Background");
panel.transform.SetParent(canvasGo.transform, false);
var img = panel.AddComponent<Image>();
img.color = new Color(0.12f, 0.12f, 0.14f, 0.9f); // Dark Slate
```

### Positioning with RectTransform

```csharp
var rt = panel.GetComponent<RectTransform>();
rt.anchorMin = new Vector2(0.5f, 0.5f); // Center
rt.anchorMax = new Vector2(0.5f, 0.5f);
rt.pivot = new Vector2(0.5f, 0.5f);
rt.sizeDelta = new Vector2(400f, 300f);
```

## 3. The "Modern" Look & Feel

To make the UI look high-end:

- **Subtle Gradients**: Use multiple images layered on top of each other.
- **Borders**: Add an "Outline" component or a slightly larger image behind the panel.
- **Transparency**: Use high alpha (0.9 - 0.95) with a slight blueish or greyish tint.
- **Spacing**: Ensure consistent margins (padding) between elements.

## 4. Handling Input

If you create your own UI, you need to prevent the game from detecting mouse clicks "through" your panel. You can use the `UiRaycastBlocker` logic seen in `gregIPAM`:

```csharp
// In your Update() or when opening UI
GameInputSuppression.SetSuppressed(true);
```


## Example Case: `gregIPAM`

Check `gregAddons/mods/gregIPAM/Ipam/IPAMOverlay.WindowUi.cs` to see how the IPAM mod handles its extensive IMGUI window, or `SetIpKeypadDhcpButton.cs` for the modern uGUI injection.
