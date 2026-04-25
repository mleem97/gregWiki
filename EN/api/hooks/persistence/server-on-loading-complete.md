---
title: Server.OnLoadingComplete
description: Hook event for Server.OnLoadingComplete
path: /api/hooks/persistence/server-on-loading-complete
---

# Server.OnLoadingComplete

> **Hook ID:** `greg.persistence.server.onloadingcomplete`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server.OnLoadingComplete()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnLoadingComplete()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnLoadingComplete` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.server.onloadingcomplete", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.server.onloadingcomplete", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.server.onloadingcomplete")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.server.onloadingcomplete", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.server.onloadingcomplete", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.server.onloadingcomplete", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
