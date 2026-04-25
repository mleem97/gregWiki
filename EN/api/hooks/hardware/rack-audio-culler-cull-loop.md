---
title: RackAudioCuller.CullLoop
description: Hook event for RackAudioCuller.CullLoop
path: /api/hooks/hardware/rack-audio-culler-cull-loop
---

# RackAudioCuller.CullLoop

> **Hook ID:** `greg.hardware.rackaudioculler.cullloop`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RackAudioCuller.CullLoop()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator CullLoop()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `CullLoop` events in `RackAudioCuller`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.rackaudioculler.cullloop", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.rackaudioculler.cullloop", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.rackaudioculler.cullloop")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.rackaudioculler.cullloop", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.rackaudioculler.cullloop", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.rackaudioculler.cullloop", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
