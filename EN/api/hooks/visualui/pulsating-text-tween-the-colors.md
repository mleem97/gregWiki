---
title: PulsatingText.TweenTheColors
description: Hook event for PulsatingText.TweenTheColors
path: /api/hooks/visualui/pulsating-text-tween-the-colors
---

# PulsatingText.TweenTheColors

> **Hook ID:** `greg.visualui.pulsatingtext.tweenthecolors`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `PulsatingText.TweenTheColors()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void TweenTheColors()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `TweenTheColors` events in `PulsatingText`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.pulsatingtext.tweenthecolors", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.pulsatingtext.tweenthecolors", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.pulsatingtext.tweenthecolors")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.pulsatingtext.tweenthecolors", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.pulsatingtext.tweenthecolors", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.pulsatingtext.tweenthecolors", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
