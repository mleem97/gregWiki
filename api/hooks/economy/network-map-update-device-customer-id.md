---
title: NetworkMap.UpdateDeviceCustomerID
description: Hook event for NetworkMap.UpdateDeviceCustomerID
path: /api/hooks/economy/network-map-update-device-customer-id
---

# NetworkMap.UpdateDeviceCustomerID

> **Hook ID:** `greg.economy.networkmap.updatedevicecustomerid`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.UpdateDeviceCustomerID()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateDeviceCustomerID(String deviceName, Int32 customerID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `deviceName` | `String` | ... |
| `customerID` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `UpdateDeviceCustomerID` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.networkmap.updatedevicecustomerid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.networkmap.updatedevicecustomerid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.networkmap.updatedevicecustomerid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.networkmap.updatedevicecustomerid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.networkmap.updatedevicecustomerid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.networkmap.updatedevicecustomerid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
