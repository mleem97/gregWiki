---
title: RackMount.InstallRack
description: Hook event for RackMount.InstallRack
path: /api/hooks/hardware/rack-mount-install-rack
---

# RackMount.InstallRack

> **Hook ID:** `greg.hardware.rackmount.installrack`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RackMount.InstallRack()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator InstallRack(Boolean cheat, Int32 type)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cheat` | `Boolean` | ... |
| `type` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `InstallRack` events in `RackMount`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.rackmount.installrack", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.rackmount.installrack", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.rackmount.installrack")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.rackmount.installrack", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.rackmount.installrack", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.rackmount.installrack", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
