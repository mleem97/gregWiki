---
title: CommandCenter.DestroyOperatorsForLevel
description: Hook event for CommandCenter.DestroyOperatorsForLevel
path: /api/hooks/lifecycle/command-center-destroy-operators-for-level
---

# CommandCenter.DestroyOperatorsForLevel

> **Hook ID:** `greg.lifecycle.commandcenter.destroyoperatorsforlevel`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CommandCenter.DestroyOperatorsForLevel()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void DestroyOperatorsForLevel(Int32 level)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `level` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `DestroyOperatorsForLevel` events in `CommandCenter`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.commandcenter.destroyoperatorsforlevel", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.commandcenter.destroyoperatorsforlevel", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.commandcenter.destroyoperatorsforlevel")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.commandcenter.destroyoperatorsforlevel", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.commandcenter.destroyoperatorsforlevel", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.commandcenter.destroyoperatorsforlevel", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
