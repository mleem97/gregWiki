---
title: NetworkSwitchConfiguration.GetDevicePrefix
description: Hook event for NetworkSwitchConfiguration.GetDevicePrefix
path: /api/hooks/networking/network-switch-configuration-get-device-prefix
---

# NetworkSwitchConfiguration.GetDevicePrefix

> **Hook ID:** `greg.networking.networkswitchconfiguration.getdeviceprefix`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitchConfiguration.GetDevicePrefix()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String GetDevicePrefix(String deviceId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `deviceId` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetDevicePrefix` events in `NetworkSwitchConfiguration`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkswitchconfiguration.getdeviceprefix", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkswitchconfiguration.getdeviceprefix", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkswitchconfiguration.getdeviceprefix")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkswitchconfiguration.getdeviceprefix", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkswitchconfiguration.getdeviceprefix", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkswitchconfiguration.getdeviceprefix", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
