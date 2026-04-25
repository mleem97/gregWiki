---
title: CommandCenter.SpawnOperatorsForLevel
description: Hook event for CommandCenter.SpawnOperatorsForLevel
path: /api/hooks/lifecycle/command-center-spawn-operators-for-level
---

# CommandCenter.SpawnOperatorsForLevel

> **Hook ID:** `greg.lifecycle.commandcenter.spawnoperatorsforlevel`
> **Category:** Lifecycle
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `CommandCenter.SpawnOperatorsForLevel()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SpawnOperatorsForLevel(Int32 level)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `level` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SpawnOperatorsForLevel` events in `CommandCenter`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.lifecycle.commandcenter.spawnoperatorsforlevel", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.lifecycle.commandcenter.spawnoperatorsforlevel", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.lifecycle.commandcenter.spawnoperatorsforlevel")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.lifecycle.commandcenter.spawnoperatorsforlevel", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.lifecycle.commandcenter.spawnoperatorsforlevel", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.lifecycle.commandcenter.spawnoperatorsforlevel", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
