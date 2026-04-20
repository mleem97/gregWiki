---
title: OSK_Keyboard.LoadLayout
description: Hook event for OSK_Keyboard.LoadLayout
path: /api/hooks/persistence/osk_-keyboard-load-layout
---

# OSK_Keyboard.LoadLayout

> **Hook ID:** `greg.persistence.osk_keyboard.loadlayout`
> **Category:** Persistence
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.LoadLayout()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void LoadLayout(String lay)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `lay` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `LoadLayout` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.osk_keyboard.loadlayout", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.osk_keyboard.loadlayout", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.osk_keyboard.loadlayout")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.osk_keyboard.loadlayout", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.osk_keyboard.loadlayout", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.osk_keyboard.loadlayout", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
