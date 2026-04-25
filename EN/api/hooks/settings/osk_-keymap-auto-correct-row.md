---
title: OSK_Keymap.AutoCorrectRow
description: Hook event for OSK_Keymap.AutoCorrectRow
path: /api/hooks/settings/osk_-keymap-auto-correct-row
---

# OSK_Keymap.AutoCorrectRow

> **Hook ID:** `greg.settings.osk_keymap.autocorrectrow`
> **Category:** Settings
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keymap.AutoCorrectRow()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String AutoCorrectRow(String row)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `row` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `AutoCorrectRow` events in `OSK_Keymap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.settings.osk_keymap.autocorrectrow", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.settings.osk_keymap.autocorrectrow", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.settings.osk_keymap.autocorrectrow")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.settings.osk_keymap.autocorrectrow", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.settings.osk_keymap.autocorrectrow", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.settings.osk_keymap.autocorrectrow", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
