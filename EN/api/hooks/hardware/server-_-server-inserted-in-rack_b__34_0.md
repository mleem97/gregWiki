---
title: Server._ServerInsertedInRack_b__34_0
description: Hook event for Server._ServerInsertedInRack_b__34_0
path: /api/hooks/hardware/server-_-server-inserted-in-rack_b__34_0
---

# Server._ServerInsertedInRack_b__34_0

> **Hook ID:** `greg.hardware.server._serverinsertedinrack_b__34_0`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server._ServerInsertedInRack_b__34_0()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean _ServerInsertedInRack_b__34_0(Server s)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `s` | `Server` | ... |


## Using this Hook

::: tip
Use this hook to react to `_ServerInsertedInRack_b__34_0` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.server._serverinsertedinrack_b__34_0", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.server._serverinsertedinrack_b__34_0", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.server._serverinsertedinrack_b__34_0")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.server._serverinsertedinrack_b__34_0", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.server._serverinsertedinrack_b__34_0", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.server._serverinsertedinrack_b__34_0", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
