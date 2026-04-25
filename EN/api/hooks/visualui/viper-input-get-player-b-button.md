---
title: viperInput.GetPlayerBButton
description: Hook event for viperInput.GetPlayerBButton
path: /api/hooks/visualui/viper-input-get-player-b-button
---

# viperInput.GetPlayerBButton

> **Hook ID:** `greg.visualui.viperinput.getplayerbbutton`
> **Category:** Visualui
> **Namespace:** `Il2CppviperTools`

This hook intercepts calls to `viperInput.GetPlayerBButton()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean GetPlayerBButton(Int32 p)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `p` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetPlayerBButton` events in `viperInput`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.viperinput.getplayerbbutton", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.viperinput.getplayerbbutton", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.viperinput.getplayerbbutton")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.viperinput.getplayerbbutton", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.viperinput.getplayerbbutton", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.viperinput.getplayerbbutton", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
