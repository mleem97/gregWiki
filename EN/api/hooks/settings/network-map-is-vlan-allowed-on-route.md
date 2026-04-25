---
title: NetworkMap.IsVlanAllowedOnRoute
description: Hook event for NetworkMap.IsVlanAllowedOnRoute
path: /api/hooks/settings/network-map-is-vlan-allowed-on-route
---

# NetworkMap.IsVlanAllowedOnRoute

> **Hook ID:** `greg.settings.networkmap.isvlanallowedonroute`
> **Category:** Settings
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.IsVlanAllowedOnRoute()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsVlanAllowedOnRoute(List`1 path, Int32 vlanId, Dictionary`2 cablePairLookup)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `path` | `List`1` | ... |
| `vlanId` | `Int32` | ... |
| `cablePairLookup` | `Dictionary`2` | ... |


## Using this Hook

::: tip
Use this hook to react to `IsVlanAllowedOnRoute` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.settings.networkmap.isvlanallowedonroute", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.settings.networkmap.isvlanallowedonroute", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.settings.networkmap.isvlanallowedonroute")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.settings.networkmap.isvlanallowedonroute", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.settings.networkmap.isvlanallowedonroute", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.settings.networkmap.isvlanallowedonroute", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
