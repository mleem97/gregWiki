---
title: NetworkMap.GetAllNetworkSwitches
description: Hook event for NetworkMap.GetAllNetworkSwitches
path: /api/hooks/networking/network-map-get-all-network-switches
---

# NetworkMap.GetAllNetworkSwitches

> **Hook ID:** `greg.networking.networkmap.getallnetworkswitches`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.GetAllNetworkSwitches()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerable`1 GetAllNetworkSwitches()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetAllNetworkSwitches` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkmap.getallnetworkswitches", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkmap.getallnetworkswitches", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkmap.getallnetworkswitches")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkmap.getallnetworkswitches", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkmap.getallnetworkswitches", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkmap.getallnetworkswitches", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerable`1`
- **Safe to block?**: Yes
