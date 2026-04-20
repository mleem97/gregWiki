---
title: TrolleyLoadingBay.FreeTrolleySlot
description: Hook event for TrolleyLoadingBay.FreeTrolleySlot
path: /api/hooks/world/trolley-loading-bay-free-trolley-slot
---

# TrolleyLoadingBay.FreeTrolleySlot

> **Hook ID:** `greg.world.trolleyloadingbay.freetrolleyslot`
> **Category:** World
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `TrolleyLoadingBay.FreeTrolleySlot()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void FreeTrolleySlot(Int32 startIdx, Int32 sizeInU)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `startIdx` | `Int32` | ... |
| `sizeInU` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `FreeTrolleySlot` events in `TrolleyLoadingBay`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.world.trolleyloadingbay.freetrolleyslot", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.world.trolleyloadingbay.freetrolleyslot", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.world.trolleyloadingbay.freetrolleyslot")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.world.trolleyloadingbay.freetrolleyslot", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.world.trolleyloadingbay.freetrolleyslot", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.world.trolleyloadingbay.freetrolleyslot", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
