---
title: NetworkMap.RemoveCableFromLACPGroups
description: Hook event for NetworkMap.RemoveCableFromLACPGroups
path: /api/hooks/networking/network-map-remove-cable-from-lacp-groups
---

# NetworkMap.RemoveCableFromLACPGroups

> **Hook ID:** `greg.networking.networkmap.removecablefromlacpgroups`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.RemoveCableFromLACPGroups()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RemoveCableFromLACPGroups(Int32 cableId)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cableId` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `RemoveCableFromLACPGroups` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkmap.removecablefromlacpgroups", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkmap.removecablefromlacpgroups", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkmap.removecablefromlacpgroups")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkmap.removecablefromlacpgroups", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkmap.removecablefromlacpgroups", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkmap.removecablefromlacpgroups", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
