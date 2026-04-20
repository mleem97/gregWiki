---
title: FirstPersonController.ProgressStepCycle
description: Hook event for FirstPersonController.ProgressStepCycle
path: /api/hooks/character/first-person-controller-progress-step-cycle
---

# FirstPersonController.ProgressStepCycle

> **Hook ID:** `greg.character.firstpersoncontroller.progressstepcycle`
> **Category:** Character
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `FirstPersonController.ProgressStepCycle()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ProgressStepCycle(Single speed)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `speed` | `Single` | ... |


## Using this Hook

::: tip
Use this hook to react to `ProgressStepCycle` events in `FirstPersonController`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.firstpersoncontroller.progressstepcycle", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.firstpersoncontroller.progressstepcycle", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.firstpersoncontroller.progressstepcycle")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.firstpersoncontroller.progressstepcycle", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.firstpersoncontroller.progressstepcycle", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.firstpersoncontroller.progressstepcycle", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
