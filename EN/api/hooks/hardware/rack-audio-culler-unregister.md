---
title: RackAudioCuller.Unregister
description: Hook event for RackAudioCuller.Unregister
path: /api/hooks/hardware/rack-audio-culler-unregister
---

# RackAudioCuller.Unregister

> **Hook ID:** `greg.hardware.rackaudioculler.unregister`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RackAudioCuller.Unregister()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Unregister(Rack rack)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `rack` | `Rack` | ... |


## Using this Hook

::: tip
Use this hook to react to `Unregister` events in `RackAudioCuller`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.rackaudioculler.unregister", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.rackaudioculler.unregister", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.rackaudioculler.unregister")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.rackaudioculler.unregister", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.rackaudioculler.unregister", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.rackaudioculler.unregister", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
