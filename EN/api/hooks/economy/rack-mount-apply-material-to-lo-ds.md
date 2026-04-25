---
title: RackMount.ApplyMaterialToLODs
description: Hook event for RackMount.ApplyMaterialToLODs
path: /api/hooks/economy/rack-mount-apply-material-to-lo-ds
---

# RackMount.ApplyMaterialToLODs

> **Hook ID:** `greg.economy.rackmount.applymaterialtolods`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `RackMount.ApplyMaterialToLODs()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ApplyMaterialToLODs(GameObject rackGO, Material mat)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `rackGO` | `GameObject` | ... |
| `mat` | `Material` | ... |


## Using this Hook

::: tip
Use this hook to react to `ApplyMaterialToLODs` events in `RackMount`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.rackmount.applymaterialtolods", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.rackmount.applymaterialtolods", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.rackmount.applymaterialtolods")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.rackmount.applymaterialtolods", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.rackmount.applymaterialtolods", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.rackmount.applymaterialtolods", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
