---
title: Tutorials.OnVideoPrepared
description: Hook event for Tutorials.OnVideoPrepared
path: /api/hooks/tutorials/tutorials-on-video-prepared
---

# Tutorials.OnVideoPrepared

> **Hook ID:** `greg.tutorials.tutorials.onvideoprepared`
> **Category:** Tutorials
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Tutorials.OnVideoPrepared()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnVideoPrepared(VideoPlayer vp)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `vp` | `VideoPlayer` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnVideoPrepared` events in `Tutorials`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.tutorials.tutorials.onvideoprepared", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.tutorials.tutorials.onvideoprepared", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.tutorials.tutorials.onvideoprepared")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.tutorials.tutorials.onvideoprepared", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.tutorials.tutorials.onvideoprepared", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.tutorials.tutorials.onvideoprepared", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
