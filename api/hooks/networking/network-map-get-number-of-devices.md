---
title: NetworkMap.GetNumberOfDevices
description: Hook event for NetworkMap.GetNumberOfDevices
path: /api/hooks/networking/network-map-get-number-of-devices
---

# NetworkMap.GetNumberOfDevices

> **Hook ID:** `greg.networking.networkmap.getnumberofdevices`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.GetNumberOfDevices()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Il2CppStructArray`1 GetNumberOfDevices()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetNumberOfDevices` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkmap.getnumberofdevices", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkmap.getnumberofdevices", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkmap.getnumberofdevices")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkmap.getnumberofdevices", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkmap.getnumberofdevices", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkmap.getnumberofdevices", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Il2CppStructArray`1`
- **Safe to block?**: Yes
