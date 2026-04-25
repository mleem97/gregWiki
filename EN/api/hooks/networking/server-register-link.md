---
title: Server.RegisterLink
description: Hook event for Server.RegisterLink
path: /api/hooks/networking/server-register-link
---

# Server.RegisterLink

> **Hook ID:** `greg.networking.server.registerlink`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server.RegisterLink()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void RegisterLink(CableLink link)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `link` | `CableLink` | ... |


## Using this Hook

::: tip
Use this hook to react to `RegisterLink` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.server.registerlink", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.server.registerlink", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.server.registerlink")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.server.registerlink", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.server.registerlink", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.server.registerlink", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
