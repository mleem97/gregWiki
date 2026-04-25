---
title: Server.TurnOffCommonFunctions
description: Hook event for Server.TurnOffCommonFunctions
path: /api/hooks/networking/server-turn-off-common-functions
---

# Server.TurnOffCommonFunctions

> **Hook ID:** `greg.networking.server.turnoffcommonfunctions`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server.TurnOffCommonFunctions()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void TurnOffCommonFunctions()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `TurnOffCommonFunctions` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.server.turnoffcommonfunctions", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.server.turnoffcommonfunctions", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.server.turnoffcommonfunctions")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.server.turnoffcommonfunctions", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.server.turnoffcommonfunctions", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.server.turnoffcommonfunctions", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
