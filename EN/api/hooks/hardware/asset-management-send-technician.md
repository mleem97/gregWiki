---
title: AssetManagement.SendTechnician
description: Hook event for AssetManagement.SendTechnician
path: /api/hooks/hardware/asset-management-send-technician
---

# AssetManagement.SendTechnician

> **Hook ID:** `greg.hardware.assetmanagement.sendtechnician`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `AssetManagement.SendTechnician()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SendTechnician(NetworkSwitch networkSwitch, Server server)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `networkSwitch` | `NetworkSwitch` | ... |
| `server` | `Server` | ... |


## Using this Hook

::: tip
Use this hook to react to `SendTechnician` events in `AssetManagement`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.assetmanagement.sendtechnician", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.assetmanagement.sendtechnician", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.assetmanagement.sendtechnician")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.assetmanagement.sendtechnician", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.assetmanagement.sendtechnician", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.assetmanagement.sendtechnician", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
