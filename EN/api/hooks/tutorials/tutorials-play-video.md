---
title: Tutorials.PlayVideo
description: Hook event for Tutorials.PlayVideo
path: /api/hooks/tutorials/tutorials-play-video
---

# Tutorials.PlayVideo

> **Hook ID:** `greg.tutorials.tutorials.playvideo`
> **Category:** Tutorials
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Tutorials.PlayVideo()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void PlayVideo(Int32 _tutorialIndex, Boolean isInPauseMenu)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_tutorialIndex` | `Int32` | ... |
| `isInPauseMenu` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `PlayVideo` events in `Tutorials`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.tutorials.tutorials.playvideo", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.tutorials.tutorials.playvideo", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.tutorials.tutorials.playvideo")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.tutorials.tutorials.playvideo", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.tutorials.tutorials.playvideo", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.tutorials.tutorials.playvideo", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
