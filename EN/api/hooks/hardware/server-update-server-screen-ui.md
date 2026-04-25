---
title: Server.UpdateServerScreenUI
description: Hook event for Server.UpdateServerScreenUI
path: /api/hooks/hardware/server-update-server-screen-ui
---

# Server.UpdateServerScreenUI

> **Hook ID:** `greg.hardware.server.updateserverscreenui`
> **Category:** Hardware
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server.UpdateServerScreenUI()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateServerScreenUI()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `UpdateServerScreenUI` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.hardware.server.updateserverscreenui", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.hardware.server.updateserverscreenui", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.hardware.server.updateserverscreenui")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.hardware.server.updateserverscreenui", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.hardware.server.updateserverscreenui", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.hardware.server.updateserverscreenui", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
