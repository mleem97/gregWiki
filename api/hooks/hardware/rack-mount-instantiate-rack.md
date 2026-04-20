---
title: RackMount.InstantiateRack
description: Hook event for RackMount.InstantiateRack
path: /api/hooks/hardware/rack-mount-instantiate-rack
---

# RackMount.InstantiateRack

> **Hook ID:** `greg.hardware.rackmount.instantiaterack`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RackMount.InstantiateRack()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
GameObject InstantiateRack(InteractObjectData saveData)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `saveData` | `InteractObjectData` | ... |


## Using this Hook

::: tip
Use this hook to react to `InstantiateRack` events in `RackMount`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.rackmount.instantiaterack", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.rackmount.instantiaterack", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.rackmount.instantiaterack")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.rackmount.instantiaterack", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.rackmount.instantiaterack", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.rackmount.instantiaterack", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `GameObject`
- **Safe to block?**: Yes
