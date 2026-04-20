---
title: FootSteps.PlayRequestedStepSound
description: Hook event for FootSteps.PlayRequestedStepSound
path: /api/hooks/audio/foot-steps-play-requested-step-sound
---

# FootSteps.PlayRequestedStepSound

> **Hook ID:** `greg.audio.footsteps.playrequestedstepsound`
> **Category:** Audio
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `FootSteps.PlayRequestedStepSound()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void PlayRequestedStepSound(Int32 _clipArray)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_clipArray` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `PlayRequestedStepSound` events in `FootSteps`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.audio.footsteps.playrequestedstepsound", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.audio.footsteps.playrequestedstepsound", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.audio.footsteps.playrequestedstepsound")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.audio.footsteps.playrequestedstepsound", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.audio.footsteps.playrequestedstepsound", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.audio.footsteps.playrequestedstepsound", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
