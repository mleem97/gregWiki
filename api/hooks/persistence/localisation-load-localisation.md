---
title: Localisation.LoadLocalisation
description: Hook event for Localisation.LoadLocalisation
path: /api/hooks/persistence/localisation-load-localisation
---

# Localisation.LoadLocalisation

> **Hook ID:** `greg.persistence.localisation.loadlocalisation`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Localisation.LoadLocalisation()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Dictionary`2 LoadLocalisation(Int32 _uid)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_uid` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `LoadLocalisation` events in `Localisation`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.localisation.loadlocalisation", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.localisation.loadlocalisation", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.localisation.loadlocalisation")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.localisation.loadlocalisation", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.localisation.loadlocalisation", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.localisation.loadlocalisation", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Dictionary`2`
- **Safe to block?**: Yes
