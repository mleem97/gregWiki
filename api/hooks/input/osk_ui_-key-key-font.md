---
title: OSK_UI_Key.KeyFont
description: Hook event for OSK_UI_Key.KeyFont
path: /api/hooks/input/osk_ui_-key-key-font
---

# OSK_UI_Key.KeyFont

> **Hook ID:** `greg.input.osk_ui_key.keyfont`
> **Category:** Input
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_Key.KeyFont()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void KeyFont(TMP_FontAsset keyfont)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `keyfont` | `TMP_FontAsset` | ... |


## Using this Hook

::: tip
Use this hook to react to `KeyFont` events in `OSK_UI_Key`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.osk_ui_key.keyfont", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.osk_ui_key.keyfont", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.osk_ui_key.keyfont")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.osk_ui_key.keyfont", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.osk_ui_key.keyfont", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.osk_ui_key.keyfont", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
