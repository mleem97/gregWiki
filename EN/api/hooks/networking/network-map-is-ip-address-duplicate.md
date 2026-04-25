---
title: NetworkMap.IsIpAddressDuplicate
description: Hook event for NetworkMap.IsIpAddressDuplicate
path: /api/hooks/networking/network-map-is-ip-address-duplicate
---

# NetworkMap.IsIpAddressDuplicate

> **Hook ID:** `greg.networking.networkmap.isipaddressduplicate`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.IsIpAddressDuplicate()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsIpAddressDuplicate(String ip, Server serverToExclude)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `ip` | `String` | ... |
| `serverToExclude` | `Server` | ... |


## Using this Hook

::: tip
Use this hook to react to `IsIpAddressDuplicate` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkmap.isipaddressduplicate", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkmap.isipaddressduplicate", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkmap.isipaddressduplicate")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkmap.isipaddressduplicate", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkmap.isipaddressduplicate", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkmap.isipaddressduplicate", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
