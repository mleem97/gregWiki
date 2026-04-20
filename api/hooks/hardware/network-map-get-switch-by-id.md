---
title: NetworkMap.GetSwitchById
description: Hook event for NetworkMap.GetSwitchById
path: /api/hooks/hardware/network-map-get-switch-by-id
---

# NetworkMap.GetSwitchById

> **Hook ID:** `greg.hardware.networkmap.getswitchbyid`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.GetSwitchById()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
NetworkSwitch GetSwitchById(String switchId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `switchId` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetSwitchById` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.networkmap.getswitchbyid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.networkmap.getswitchbyid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.networkmap.getswitchbyid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.networkmap.getswitchbyid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.networkmap.getswitchbyid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.networkmap.getswitchbyid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `NetworkSwitch`
- **Safe to block?**: Yes
