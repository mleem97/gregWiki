---
title: NetworkMap.GetLACPGroupForCable
description: Hook event for NetworkMap.GetLACPGroupForCable
path: /api/hooks/networking/network-map-get-lacp-group-for-cable
---

# NetworkMap.GetLACPGroupForCable

> **Hook ID:** `greg.networking.networkmap.getlacpgroupforcable`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.GetLACPGroupForCable()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
LACPGroup GetLACPGroupForCable(Int32 cableId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cableId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetLACPGroupForCable` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkmap.getlacpgroupforcable", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkmap.getlacpgroupforcable", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkmap.getlacpgroupforcable")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkmap.getlacpgroupforcable", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkmap.getlacpgroupforcable", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkmap.getlacpgroupforcable", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `LACPGroup`
- **Safe to block?**: Yes
