---
title: FirstPersonController._Start_b__57_5
description: Hook event for FirstPersonController._Start_b__57_5
path: /api/hooks/character/first-person-controller-_-start_b__57_5
---

# FirstPersonController._Start_b__57_5

> **Hook ID:** `greg.character.firstpersoncontroller._start_b__57_5`
> **Category:** Character
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `FirstPersonController._Start_b__57_5()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void _Start_b__57_5(CallbackContext ctx)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `ctx` | `CallbackContext` | ... |


## Using this Hook

::: tip
Use this hook to react to `_Start_b__57_5` events in `FirstPersonController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.firstpersoncontroller._start_b__57_5", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.firstpersoncontroller._start_b__57_5", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.firstpersoncontroller._start_b__57_5")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.firstpersoncontroller._start_b__57_5", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.firstpersoncontroller._start_b__57_5", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.firstpersoncontroller._start_b__57_5", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
