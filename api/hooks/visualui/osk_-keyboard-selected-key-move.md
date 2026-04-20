---
title: OSK_Keyboard.SelectedKeyMove
description: Hook event for OSK_Keyboard.SelectedKeyMove
path: /api/hooks/visualui/osk_-keyboard-selected-key-move
---

# OSK_Keyboard.SelectedKeyMove

> **Hook ID:** `greg.visualui.osk_keyboard.selectedkeymove`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.SelectedKeyMove()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
OSK_Key SelectedKeyMove(Vector2 dir, Vector2Int currentLoc, Boolean makeSoundIfMove)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `dir` | `Vector2` | ... |
| `currentLoc` | `Vector2Int` | ... |
| `makeSoundIfMove` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `SelectedKeyMove` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_keyboard.selectedkeymove", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_keyboard.selectedkeymove", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_keyboard.selectedkeymove")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_keyboard.selectedkeymove", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_keyboard.selectedkeymove", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_keyboard.selectedkeymove", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `OSK_Key`
- **Safe to block?**: Yes
