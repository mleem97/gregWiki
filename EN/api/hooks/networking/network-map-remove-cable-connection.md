---
title: NetworkMap.RemoveCableConnection
description: Hook event for NetworkMap.RemoveCableConnection
path: /api/hooks/networking/network-map-remove-cable-connection
---

# NetworkMap.RemoveCableConnection

> **Hook ID:** `greg.networking.networkmap.removecableconnection`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.RemoveCableConnection()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RemoveCableConnection(Int32 cableId, Boolean preserveLACP)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `cableId` | `Int32` | ... |
| `preserveLACP` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `RemoveCableConnection` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.networkmap.removecableconnection", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.networkmap.removecableconnection", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.networkmap.removecableconnection")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.networkmap.removecableconnection", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.networkmap.removecableconnection", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.networkmap.removecableconnection", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
