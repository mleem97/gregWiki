---
title: Tutorials.StopVideoInPauseMenu
description: Hook event for Tutorials.StopVideoInPauseMenu
path: /api/hooks/lifecycle/tutorials-stop-video-in-pause-menu
---

# Tutorials.StopVideoInPauseMenu

> **Hook ID:** `greg.lifecycle.tutorials.stopvideoinpausemenu`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Tutorials.StopVideoInPauseMenu()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void StopVideoInPauseMenu()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `StopVideoInPauseMenu` events in `Tutorials`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.tutorials.stopvideoinpausemenu", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.tutorials.stopvideoinpausemenu", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.tutorials.stopvideoinpausemenu")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.tutorials.stopvideoinpausemenu", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.tutorials.stopvideoinpausemenu", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.tutorials.stopvideoinpausemenu", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
