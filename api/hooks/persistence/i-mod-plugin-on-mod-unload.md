---
title: IModPlugin.OnModUnload
description: Hook event for IModPlugin.OnModUnload
path: /api/hooks/persistence/i-mod-plugin-on-mod-unload
---

# IModPlugin.OnModUnload

> **Hook ID:** `greg.persistence.imodplugin.onmodunload`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `IModPlugin.OnModUnload()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnModUnload()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `OnModUnload` events in `IModPlugin`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.imodplugin.onmodunload", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.imodplugin.onmodunload", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.imodplugin.onmodunload")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.imodplugin.onmodunload", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.imodplugin.onmodunload", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.imodplugin.onmodunload", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
