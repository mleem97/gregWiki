---
title: RackPosition.SetUsed
description: Hook event for RackPosition.SetUsed
path: /api/hooks/hardware/rack-position-set-used
---

# RackPosition.SetUsed

> **Hook ID:** `greg.hardware.rackposition.setused`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RackPosition.SetUsed()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetUsed(Boolean used)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `used` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetUsed` events in `RackPosition`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.rackposition.setused", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.rackposition.setused", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.rackposition.setused")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.rackposition.setused", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.rackposition.setused", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.rackposition.setused", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
