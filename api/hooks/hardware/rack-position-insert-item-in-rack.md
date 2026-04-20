---
title: RackPosition.InsertItemInRack
description: Hook event for RackPosition.InsertItemInRack
path: /api/hooks/hardware/rack-position-insert-item-in-rack
---

# RackPosition.InsertItemInRack

> **Hook ID:** `greg.hardware.rackposition.insertiteminrack`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RackPosition.InsertItemInRack()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator InsertItemInRack()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `InsertItemInRack` events in `RackPosition`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.rackposition.insertiteminrack", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.rackposition.insertiteminrack", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.rackposition.insertiteminrack")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.rackposition.insertiteminrack", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.rackposition.insertiteminrack", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.rackposition.insertiteminrack", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
