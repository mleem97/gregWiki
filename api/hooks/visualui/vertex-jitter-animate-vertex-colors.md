---
title: VertexJitter.AnimateVertexColors
description: Hook event for VertexJitter.AnimateVertexColors
path: /api/hooks/visualui/vertex-jitter-animate-vertex-colors
---

# VertexJitter.AnimateVertexColors

> **Hook ID:** `greg.visualui.vertexjitter.animatevertexcolors`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `VertexJitter.AnimateVertexColors()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator AnimateVertexColors()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `AnimateVertexColors` events in `VertexJitter`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.vertexjitter.animatevertexcolors", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.vertexjitter.animatevertexcolors", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.vertexjitter.animatevertexcolors")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.vertexjitter.animatevertexcolors", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.vertexjitter.animatevertexcolors", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.vertexjitter.animatevertexcolors", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
