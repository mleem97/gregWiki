---
title: OSK_Keymap.AutoCorrectLayout
description: Hook event for OSK_Keymap.AutoCorrectLayout
path: /api/hooks/settings/osk_-keymap-auto-correct-layout
---

# OSK_Keymap.AutoCorrectLayout

> **Hook ID:** `greg.settings.osk_keymap.autocorrectlayout`
> **Category:** Settings
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keymap.AutoCorrectLayout()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String AutoCorrectLayout(String layout)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `layout` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `AutoCorrectLayout` events in `OSK_Keymap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.settings.osk_keymap.autocorrectlayout", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.settings.osk_keymap.autocorrectlayout", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.settings.osk_keymap.autocorrectlayout")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.settings.osk_keymap.autocorrectlayout", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.settings.osk_keymap.autocorrectlayout", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.settings.osk_keymap.autocorrectlayout", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
