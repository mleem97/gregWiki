---
title: NetworkMap.RegisterCableConnection
description: Hook event for NetworkMap.RegisterCableConnection
path: /api/hooks/networking/network-map-register-cable-connection
---

# NetworkMap.RegisterCableConnection

> **Hook ID:** `greg.networking.networkmap.registercableconnection`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.RegisterCableConnection()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RegisterCableConnection(Int32 cableId, Vector3 startPos, Vector3 endPos, TypeOfLink startType, TypeOfLink endType, String startSwitchID, String endSwitchID, Int32 startCustomerID, Int32 endCustomerID, String startServerID, String endServerID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cableId` | `Int32` | ... |
| `startPos` | `Vector3` | ... |
| `endPos` | `Vector3` | ... |
| `startType` | `TypeOfLink` | ... |
| `endType` | `TypeOfLink` | ... |
| `startSwitchID` | `String` | ... |
| `endSwitchID` | `String` | ... |
| `startCustomerID` | `Int32` | ... |
| `endCustomerID` | `Int32` | ... |
| `startServerID` | `String` | ... |
| `endServerID` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `RegisterCableConnection` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkmap.registercableconnection", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkmap.registercableconnection", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkmap.registercableconnection")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkmap.registercableconnection", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkmap.registercableconnection", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkmap.registercableconnection", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
