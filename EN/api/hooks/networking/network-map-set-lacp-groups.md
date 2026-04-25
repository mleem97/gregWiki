---
title: NetworkMap.SetLACPGroups
description: Hook event for NetworkMap.SetLACPGroups
path: /api/hooks/networking/network-map-set-lacp-groups
---

# NetworkMap.SetLACPGroups

> **Hook ID:** `greg.networking.networkmap.setlacpgroups`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.SetLACPGroups()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetLACPGroups(Dictionary`2 groups)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `groups` | `Dictionary`2` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetLACPGroups` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkmap.setlacpgroups", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkmap.setlacpgroups", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkmap.setlacpgroups")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkmap.setlacpgroups", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkmap.setlacpgroups", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkmap.setlacpgroups", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
