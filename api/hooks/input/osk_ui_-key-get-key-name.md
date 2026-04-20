---
title: OSK_UI_Key.GetKeyName
description: Hook event for OSK_UI_Key.GetKeyName
path: /api/hooks/input/osk_ui_-key-get-key-name
---

# OSK_UI_Key.GetKeyName

> **Hook ID:** `greg.input.osk_ui_key.getkeyname`
> **Category:** Input
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_UI_Key.GetKeyName()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String GetKeyName()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `GetKeyName` events in `OSK_UI_Key`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.input.osk_ui_key.getkeyname", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.input.osk_ui_key.getkeyname", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.input.osk_ui_key.getkeyname")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.input.osk_ui_key.getkeyname", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.input.osk_ui_key.getkeyname", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.input.osk_ui_key.getkeyname", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
