---
title: NetworkMap._PrintNetworkMap_b__42_0
description: Hook event for NetworkMap._PrintNetworkMap_b__42_0
path: /api/hooks/networking/network-map-_-print-network-map_b__42_0
---

# NetworkMap._PrintNetworkMap_b__42_0

> **Hook ID:** `greg.networking.networkmap._printnetworkmap_b__42_0`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap._PrintNetworkMap_b__42_0()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean _PrintNetworkMap_b__42_0(Device d)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `d` | `Device` | ... |


## Using this Hook

::: tip
Use this hook to react to `_PrintNetworkMap_b__42_0` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkmap._printnetworkmap_b__42_0", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkmap._printnetworkmap_b__42_0", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkmap._printnetworkmap_b__42_0")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkmap._printnetworkmap_b__42_0", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkmap._printnetworkmap_b__42_0", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkmap._printnetworkmap_b__42_0", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
