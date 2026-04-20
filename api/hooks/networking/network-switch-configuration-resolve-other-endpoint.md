---
title: NetworkSwitchConfiguration.ResolveOtherEndpoint
description: Hook event for NetworkSwitchConfiguration.ResolveOtherEndpoint
path: /api/hooks/networking/network-switch-configuration-resolve-other-endpoint
---

# NetworkSwitchConfiguration.ResolveOtherEndpoint

> **Hook ID:** `greg.networking.networkswitchconfiguration.resolveotherendpoint`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkSwitchConfiguration.ResolveOtherEndpoint()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String ResolveOtherEndpoint(ValueTuple`2 conn, String primaryId, String fallbackId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `conn` | `ValueTuple`2` | ... |
| `primaryId` | `String` | ... |
| `fallbackId` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `ResolveOtherEndpoint` events in `NetworkSwitchConfiguration`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkswitchconfiguration.resolveotherendpoint", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkswitchconfiguration.resolveotherendpoint", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkswitchconfiguration.resolveotherendpoint")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkswitchconfiguration.resolveotherendpoint", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkswitchconfiguration.resolveotherendpoint", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkswitchconfiguration.resolveotherendpoint", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
