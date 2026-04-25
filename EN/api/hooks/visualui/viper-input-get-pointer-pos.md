---
title: viperInput.GetPointerPos
description: Hook event for viperInput.GetPointerPos
path: /api/hooks/visualui/viper-input-get-pointer-pos
---

# viperInput.GetPointerPos

> **Hook ID:** `greg.visualui.viperinput.getpointerpos`
> **Category:** Visualui
> **Namespace:** `Il2CppviperTools`

This hook intercepts calls to `viperInput.GetPointerPos()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Vector2 GetPointerPos()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetPointerPos` events in `viperInput`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.viperinput.getpointerpos", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.viperinput.getpointerpos", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.viperinput.getpointerpos")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.viperinput.getpointerpos", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.viperinput.getpointerpos", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.viperinput.getpointerpos", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Vector2`
- **Safe to block?**: Yes
