---
title: Server.UpdateAppID
description: Hook event for Server.UpdateAppID
path: /api/hooks/economy/server-update-app-id
---

# Server.UpdateAppID

> **Hook ID:** `greg.economy.server.updateappid`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server.UpdateAppID()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UpdateAppID(Int32 _appID)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_appID` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `UpdateAppID` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.server.updateappid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.server.updateappid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.server.updateappid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.server.updateappid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.server.updateappid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.server.updateappid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
