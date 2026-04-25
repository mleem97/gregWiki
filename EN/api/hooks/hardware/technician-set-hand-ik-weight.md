---
title: Technician.SetHandIKWeight
description: Hook event for Technician.SetHandIKWeight
path: /api/hooks/hardware/technician-set-hand-ik-weight
---

# Technician.SetHandIKWeight

> **Hook ID:** `greg.hardware.technician.sethandikweight`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Technician.SetHandIKWeight()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator SetHandIKWeight(Single targetWeight, Single duration)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `targetWeight` | `Single` | ... |
| `duration` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetHandIKWeight` events in `Technician`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.technician.sethandikweight", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.technician.sethandikweight", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.technician.sethandikweight")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.technician.sethandikweight", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.technician.sethandikweight", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.technician.sethandikweight", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
