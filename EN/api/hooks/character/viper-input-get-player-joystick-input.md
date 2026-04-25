---
title: viperInput.GetPlayerJoystickInput
description: Hook event for viperInput.GetPlayerJoystickInput
path: /api/hooks/character/viper-input-get-player-joystick-input
---

# viperInput.GetPlayerJoystickInput

> **Hook ID:** `greg.character.viperinput.getplayerjoystickinput`
> **Category:** Character
> **Namespace:** `Il2CppviperTools`

This hook intercepts calls to `viperInput.GetPlayerJoystickInput()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Vector2 GetPlayerJoystickInput(Int32 p)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `p` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetPlayerJoystickInput` events in `viperInput`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.character.viperinput.getplayerjoystickinput", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.character.viperinput.getplayerjoystickinput", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.character.viperinput.getplayerjoystickinput")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.character.viperinput.getplayerjoystickinput", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.character.viperinput.getplayerjoystickinput", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.character.viperinput.getplayerjoystickinput", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Vector2`
- **Safe to block?**: Yes
