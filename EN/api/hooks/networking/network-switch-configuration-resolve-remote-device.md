---
title: NetworkSwitchConfiguration.ResolveRemoteDevice
description: Hook event for NetworkSwitchConfiguration.ResolveRemoteDevice
path: /api/hooks/networking/network-switch-configuration-resolve-remote-device
---

# NetworkSwitchConfiguration.ResolveRemoteDevice

> **Hook ID:** `greg.networking.networkswitchconfiguration.resolveremotedevice`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitchConfiguration.ResolveRemoteDevice()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String ResolveRemoteDevice(CableLink port)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `port` | `CableLink` | ... |


## Using this Hook

::: tip
Use this hook to react to `ResolveRemoteDevice` events in `NetworkSwitchConfiguration`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkswitchconfiguration.resolveremotedevice", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkswitchconfiguration.resolveremotedevice", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkswitchconfiguration.resolveremotedevice")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkswitchconfiguration.resolveremotedevice", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkswitchconfiguration.resolveremotedevice", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkswitchconfiguration.resolveremotedevice", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
