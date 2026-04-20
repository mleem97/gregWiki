---
title: NetworkMap.RemapDeviceId
description: Hook event for NetworkMap.RemapDeviceId
path: /api/hooks/networking/network-map-remap-device-id
---

# NetworkMap.RemapDeviceId

> **Hook ID:** `greg.networking.networkmap.remapdeviceid`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.RemapDeviceId()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RemapDeviceId(String oldId, String newId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `oldId` | `String` | ... |
| `newId` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `RemapDeviceId` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkmap.remapdeviceid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkmap.remapdeviceid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkmap.remapdeviceid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkmap.remapdeviceid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkmap.remapdeviceid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkmap.remapdeviceid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
