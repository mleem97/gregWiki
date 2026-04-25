---
title: IModPlugin.OnModLoad
description: Hook event for IModPlugin.OnModLoad
path: /api/hooks/persistence/i-mod-plugin-on-mod-load
---

# IModPlugin.OnModLoad

> **Hook ID:** `greg.persistence.imodplugin.onmodload`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `IModPlugin.OnModLoad()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnModLoad(String modFolderPath)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `modFolderPath` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnModLoad` events in `IModPlugin`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.imodplugin.onmodload", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.imodplugin.onmodload", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.imodplugin.onmodload")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.imodplugin.onmodload", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.imodplugin.onmodload", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.imodplugin.onmodload", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
