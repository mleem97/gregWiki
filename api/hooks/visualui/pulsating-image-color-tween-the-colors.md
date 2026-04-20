---
title: PulsatingImageColor.TweenTheColors
description: Hook event for PulsatingImageColor.TweenTheColors
path: /api/hooks/visualui/pulsating-image-color-tween-the-colors
---

# PulsatingImageColor.TweenTheColors

> **Hook ID:** `greg.visualui.pulsatingimagecolor.tweenthecolors`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PulsatingImageColor.TweenTheColors()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void TweenTheColors()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `TweenTheColors` events in `PulsatingImageColor`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.pulsatingimagecolor.tweenthecolors", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.pulsatingimagecolor.tweenthecolors", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.pulsatingimagecolor.tweenthecolors")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.pulsatingimagecolor.tweenthecolors", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.pulsatingimagecolor.tweenthecolors", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.pulsatingimagecolor.tweenthecolors", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
