---
title: Server._ValidateRackPosition_b__47_0
description: Hook event for Server._ValidateRackPosition_b__47_0
path: /api/hooks/networking/server-_-validate-rack-position_b__47_0
---

# Server._ValidateRackPosition_b__47_0

> **Hook ID:** `greg.networking.server._validaterackposition_b__47_0`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server._ValidateRackPosition_b__47_0()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean _ValidateRackPosition_b__47_0(RackPosition r)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `r` | `RackPosition` | ... |


## Using this Hook

::: tip
Use this hook to react to `_ValidateRackPosition_b__47_0` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.server._validaterackposition_b__47_0", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.server._validaterackposition_b__47_0", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.server._validaterackposition_b__47_0")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.server._validaterackposition_b__47_0", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.server._validaterackposition_b__47_0", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.server._validaterackposition_b__47_0", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
