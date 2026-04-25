---
title: RackPosition.IsAllowedItem
description: Hook event for RackPosition.IsAllowedItem
path: /api/hooks/hardware/rack-position-is-allowed-item
---

# RackPosition.IsAllowedItem

> **Hook ID:** `greg.hardware.rackposition.isalloweditem`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RackPosition.IsAllowedItem()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsAllowedItem(Boolean checkAvailability)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `checkAvailability` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `IsAllowedItem` events in `RackPosition`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.rackposition.isalloweditem", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.rackposition.isalloweditem", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.rackposition.isalloweditem")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.rackposition.isalloweditem", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.rackposition.isalloweditem", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.rackposition.isalloweditem", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
