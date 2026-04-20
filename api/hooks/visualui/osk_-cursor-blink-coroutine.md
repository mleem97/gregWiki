---
title: OSK_Cursor.BlinkCoroutine
description: Hook event for OSK_Cursor.BlinkCoroutine
path: /api/hooks/visualui/osk_-cursor-blink-coroutine
---

# OSK_Cursor.BlinkCoroutine

> **Hook ID:** `greg.visualui.osk_cursor.blinkcoroutine`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Cursor.BlinkCoroutine()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator BlinkCoroutine()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `BlinkCoroutine` events in `OSK_Cursor`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_cursor.blinkcoroutine", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_cursor.blinkcoroutine", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_cursor.blinkcoroutine")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_cursor.blinkcoroutine", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_cursor.blinkcoroutine", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_cursor.blinkcoroutine", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
