---
title: Server.ServerInsertedInRack
description: Hook event for Server.ServerInsertedInRack
path: /api/hooks/hardware/server-server-inserted-in-rack
---

# Server.ServerInsertedInRack

> **Hook ID:** `greg.hardware.server.serverinsertedinrack`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server.ServerInsertedInRack()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ServerInsertedInRack(ServerSaveData serverSaveData)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `serverSaveData` | `ServerSaveData` | ... |


## Using this Hook

::: tip
Use this hook to react to `ServerInsertedInRack` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.server.serverinsertedinrack", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.server.serverinsertedinrack", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.server.serverinsertedinrack")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.server.serverinsertedinrack", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.server.serverinsertedinrack", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.server.serverinsertedinrack", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
