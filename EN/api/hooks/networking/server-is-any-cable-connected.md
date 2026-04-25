---
title: Server.IsAnyCableConnected
description: Hook event for Server.IsAnyCableConnected
path: /api/hooks/networking/server-is-any-cable-connected
---

# Server.IsAnyCableConnected

> **Hook ID:** `greg.networking.server.isanycableconnected`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server.IsAnyCableConnected()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsAnyCableConnected()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `IsAnyCableConnected` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.server.isanycableconnected", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.server.isanycableconnected", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.server.isanycableconnected")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.server.isanycableconnected", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.server.isanycableconnected", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.server.isanycableconnected", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
