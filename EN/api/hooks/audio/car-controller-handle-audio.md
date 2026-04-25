---
title: CarController.HandleAudio
description: Hook event for CarController.HandleAudio
path: /api/hooks/audio/car-controller-handle-audio
---

# CarController.HandleAudio

> **Hook ID:** `greg.audio.carcontroller.handleaudio`
> **Category:** Audio
> **Namespace:** `Il2CppPolyStang`

This hook intercepts calls to `CarController.HandleAudio()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void HandleAudio()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `HandleAudio` events in `CarController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.audio.carcontroller.handleaudio", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.audio.carcontroller.handleaudio", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.audio.carcontroller.handleaudio")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.audio.carcontroller.handleaudio", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.audio.carcontroller.handleaudio", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.audio.carcontroller.handleaudio", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
