---
title: NetworkMap.CreateLACPGroup
description: Hook event for NetworkMap.CreateLACPGroup
path: /api/hooks/networking/network-map-create-lacp-group
---

# NetworkMap.CreateLACPGroup

> **Hook ID:** `greg.networking.networkmap.createlacpgroup`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.CreateLACPGroup()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Int32 CreateLACPGroup(String deviceA, String deviceB, List`1 cableIds)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `deviceA` | `String` | ... |
| `deviceB` | `String` | ... |
| `cableIds` | `List`1` | ... |


## Using this Hook

::: tip
Use this hook to react to `CreateLACPGroup` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkmap.createlacpgroup", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkmap.createlacpgroup", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkmap.createlacpgroup")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkmap.createlacpgroup", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkmap.createlacpgroup", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkmap.createlacpgroup", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Int32`
- **Safe to block?**: Yes
