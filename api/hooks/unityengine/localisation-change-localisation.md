---
title: Localisation.ChangeLocalisation
description: Hook event for Localisation.ChangeLocalisation
path: /api/hooks/unityengine/localisation-change-localisation
---

# Localisation.ChangeLocalisation

> **Hook ID:** `greg.unityengine.localisation.changelocalisation`
> **Category:** Unityengine
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Localisation.ChangeLocalisation()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ChangeLocalisation(Int32 _uid)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_uid` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `ChangeLocalisation` events in `Localisation`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.unityengine.localisation.changelocalisation", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.unityengine.localisation.changelocalisation", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.unityengine.localisation.changelocalisation")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.unityengine.localisation.changelocalisation", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.unityengine.localisation.changelocalisation", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.unityengine.localisation.changelocalisation", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
