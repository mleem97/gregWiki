---
title: viperInput.GetPlayerAButton
description: Hook event for viperInput.GetPlayerAButton
path: /api/hooks/visualui/viper-input-get-player-a-button
---

# viperInput.GetPlayerAButton

> **Hook ID:** `greg.visualui.viperinput.getplayerabutton`
> **Category:** Visualui
> **Namespace:** `Il2CppviperTools`

This hook intercepts calls to `viperInput.GetPlayerAButton()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean GetPlayerAButton(Int32 p)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `p` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetPlayerAButton` events in `viperInput`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.viperinput.getplayerabutton", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.viperinput.getplayerabutton", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.viperinput.getplayerabutton")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.viperinput.getplayerabutton", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.viperinput.getplayerabutton", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.viperinput.getplayerabutton", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
