---
title: Server.TurnOnCommonFunction
description: Hook event for Server.TurnOnCommonFunction
path: /api/hooks/networking/server-turn-on-common-function
---

# Server.TurnOnCommonFunction

> **Hook ID:** `greg.networking.server.turnoncommonfunction`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server.TurnOnCommonFunction()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void TurnOnCommonFunction()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `TurnOnCommonFunction` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.server.turnoncommonfunction", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.server.turnoncommonfunction", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.server.turnoncommonfunction")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.server.turnoncommonfunction", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.server.turnoncommonfunction", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.server.turnoncommonfunction", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
