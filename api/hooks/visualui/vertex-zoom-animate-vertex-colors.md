---
title: VertexZoom.AnimateVertexColors
description: Hook event for VertexZoom.AnimateVertexColors
path: /api/hooks/visualui/vertex-zoom-animate-vertex-colors
---

# VertexZoom.AnimateVertexColors

> **Hook ID:** `greg.visualui.vertexzoom.animatevertexcolors`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `VertexZoom.AnimateVertexColors()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator AnimateVertexColors()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `AnimateVertexColors` events in `VertexZoom`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.vertexzoom.animatevertexcolors", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.vertexzoom.animatevertexcolors", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.vertexzoom.animatevertexcolors")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.vertexzoom.animatevertexcolors", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.vertexzoom.animatevertexcolors", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.vertexzoom.animatevertexcolors", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
