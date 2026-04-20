---
title: Rack.IsPositionAvailable
description: Hook event for Rack.IsPositionAvailable
path: /api/hooks/hardware/rack-is-position-available
---

# Rack.IsPositionAvailable

> **Hook ID:** `greg.hardware.rack.ispositionavailable`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Rack.IsPositionAvailable()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsPositionAvailable(Int32 index, Int32 sizeInU)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `index` | `Int32` | ... |
| `sizeInU` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `IsPositionAvailable` events in `Rack`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.rack.ispositionavailable", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.rack.ispositionavailable", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.rack.ispositionavailable")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.rack.ispositionavailable", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.rack.ispositionavailable", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.rack.ispositionavailable", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
