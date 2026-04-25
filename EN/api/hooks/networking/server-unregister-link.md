---
title: Server.UnregisterLink
description: Hook event for Server.UnregisterLink
path: /api/hooks/networking/server-unregister-link
---

# Server.UnregisterLink

> **Hook ID:** `greg.networking.server.unregisterlink`
> **Category:** Networking
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Server.UnregisterLink()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void UnregisterLink(CableLink link)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `link` | `CableLink` | ... |


## Using this Hook

::: tip
Use this hook to react to `UnregisterLink` events in `Server`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.server.unregisterlink", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.server.unregisterlink", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.server.unregisterlink")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.server.unregisterlink", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.server.unregisterlink", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.server.unregisterlink", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
