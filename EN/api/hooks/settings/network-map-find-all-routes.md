---
title: NetworkMap.FindAllRoutes
description: Hook event for NetworkMap.FindAllRoutes
path: /api/hooks/settings/network-map-find-all-routes
---

# NetworkMap.FindAllRoutes

> **Hook ID:** `greg.settings.networkmap.findallroutes`
> **Category:** Settings
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `NetworkMap.FindAllRoutes()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
List`1 FindAllRoutes(String baseName, String serverName)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `baseName` | `String` | ... |
| `serverName` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `FindAllRoutes` events in `NetworkMap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.settings.networkmap.findallroutes", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.settings.networkmap.findallroutes", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.settings.networkmap.findallroutes")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.settings.networkmap.findallroutes", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.settings.networkmap.findallroutes", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.settings.networkmap.findallroutes", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `List`1`
- **Safe to block?**: Yes
