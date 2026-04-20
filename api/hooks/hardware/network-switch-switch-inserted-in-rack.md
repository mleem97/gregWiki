---
title: NetworkSwitch.SwitchInsertedInRack
description: Hook event for NetworkSwitch.SwitchInsertedInRack
path: /api/hooks/hardware/network-switch-switch-inserted-in-rack
---

# NetworkSwitch.SwitchInsertedInRack

> **Hook ID:** `greg.hardware.networkswitch.switchinsertedinrack`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitch.SwitchInsertedInRack()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SwitchInsertedInRack(SwitchSaveData switchSaveData)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `switchSaveData` | `SwitchSaveData` | ... |


## Using this Hook

::: tip
Use this hook to react to `SwitchInsertedInRack` events in `NetworkSwitch`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.networkswitch.switchinsertedinrack", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.networkswitch.switchinsertedinrack", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.networkswitch.switchinsertedinrack")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.networkswitch.switchinsertedinrack", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.networkswitch.switchinsertedinrack", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.networkswitch.switchinsertedinrack", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
