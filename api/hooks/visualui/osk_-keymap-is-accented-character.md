---
title: OSK_Keymap.IsAccentedCharacter
description: Hook event for OSK_Keymap.IsAccentedCharacter
path: /api/hooks/visualui/osk_-keymap-is-accented-character
---

# OSK_Keymap.IsAccentedCharacter

> **Hook ID:** `greg.visualui.osk_keymap.isaccentedcharacter`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keymap.IsAccentedCharacter()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Boolean IsAccentedCharacter(Char c)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `c` | `Char` | ... |


## Using this Hook

::: tip
Use this hook to react to `IsAccentedCharacter` events in `OSK_Keymap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_keymap.isaccentedcharacter", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_keymap.isaccentedcharacter", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_keymap.isaccentedcharacter")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_keymap.isaccentedcharacter", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_keymap.isaccentedcharacter", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_keymap.isaccentedcharacter", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Boolean`
- **Safe to block?**: Yes
