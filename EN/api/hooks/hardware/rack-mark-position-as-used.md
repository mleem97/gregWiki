---
title: Rack.MarkPositionAsUsed
description: Hook event for Rack.MarkPositionAsUsed
path: /api/hooks/hardware/rack-mark-position-as-used
---

# Rack.MarkPositionAsUsed

> **Hook ID:** `greg.hardware.rack.markpositionasused`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Rack.MarkPositionAsUsed()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void MarkPositionAsUsed(Int32 index, Int32 sizeInU)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `index` | `Int32` | ... |
| `sizeInU` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `MarkPositionAsUsed` events in `Rack`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.rack.markpositionasused", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.rack.markpositionasused", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.rack.markpositionasused")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.rack.markpositionasused", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.rack.markpositionasused", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.rack.markpositionasused", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
