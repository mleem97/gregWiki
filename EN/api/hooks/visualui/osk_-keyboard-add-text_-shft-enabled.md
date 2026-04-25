---
title: OSK_Keyboard.AddText_ShftEnabled
description: Hook event for OSK_Keyboard.AddText_ShftEnabled
path: /api/hooks/visualui/osk_-keyboard-add-text_-shft-enabled
---

# OSK_Keyboard.AddText_ShftEnabled

> **Hook ID:** `greg.visualui.osk_keyboard.addtext_shftenabled`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keyboard.AddText_ShftEnabled()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void AddText_ShftEnabled(String newText)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `newText` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `AddText_ShftEnabled` events in `OSK_Keyboard`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_keyboard.addtext_shftenabled", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_keyboard.addtext_shftenabled", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_keyboard.addtext_shftenabled")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_keyboard.addtext_shftenabled", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_keyboard.addtext_shftenabled", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_keyboard.addtext_shftenabled", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
