---
title: I_OSK_Cursor.Show
description: Hook event for I_OSK_Cursor.Show
path: /api/hooks/visualui/i_osk_-cursor-show
---

# I_OSK_Cursor.Show

> **Hook ID:** `greg.visualui.i_osk_cursor.show`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `I_OSK_Cursor.Show()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Show(Boolean show)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `show` | `Boolean` | ... |


## Using this Hook

::: tip
Use this hook to react to `Show` events in `I_OSK_Cursor`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.i_osk_cursor.show", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.i_osk_cursor.show", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.i_osk_cursor.show")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.i_osk_cursor.show", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.i_osk_cursor.show", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.i_osk_cursor.show", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
