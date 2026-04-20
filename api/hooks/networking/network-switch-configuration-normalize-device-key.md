---
title: NetworkSwitchConfiguration.NormalizeDeviceKey
description: Hook event for NetworkSwitchConfiguration.NormalizeDeviceKey
path: /api/hooks/networking/network-switch-configuration-normalize-device-key
---

# NetworkSwitchConfiguration.NormalizeDeviceKey

> **Hook ID:** `greg.networking.networkswitchconfiguration.normalizedevicekey`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitchConfiguration.NormalizeDeviceKey()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String NormalizeDeviceKey(String deviceName)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `deviceName` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `NormalizeDeviceKey` events in `NetworkSwitchConfiguration`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkswitchconfiguration.normalizedevicekey", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkswitchconfiguration.normalizedevicekey", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkswitchconfiguration.normalizedevicekey")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkswitchconfiguration.normalizedevicekey", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkswitchconfiguration.normalizedevicekey", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkswitchconfiguration.normalizedevicekey", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
