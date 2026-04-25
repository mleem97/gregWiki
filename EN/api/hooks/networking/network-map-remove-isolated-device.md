---
title: NetworkMap.RemoveIsolatedDevice
description: Hook event for NetworkMap.RemoveIsolatedDevice
path: /api/hooks/networking/network-map-remove-isolated-device
---

# NetworkMap.RemoveIsolatedDevice

> **Hook ID:** `greg.networking.networkmap.removeisolateddevice`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.RemoveIsolatedDevice()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RemoveIsolatedDevice(String deviceName)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `deviceName` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `RemoveIsolatedDevice` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkmap.removeisolateddevice", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkmap.removeisolateddevice", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkmap.removeisolateddevice")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkmap.removeisolateddevice", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkmap.removeisolateddevice", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkmap.removeisolateddevice", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
