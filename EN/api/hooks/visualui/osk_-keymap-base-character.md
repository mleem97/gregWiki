---
title: OSK_Keymap.BaseCharacter
description: Hook event for OSK_Keymap.BaseCharacter
path: /api/hooks/visualui/osk_-keymap-base-character
---

# OSK_Keymap.BaseCharacter

> **Hook ID:** `greg.visualui.osk_keymap.basecharacter`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keymap.BaseCharacter()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String BaseCharacter(String accentedChar)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `accentedChar` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `BaseCharacter` events in `OSK_Keymap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_keymap.basecharacter", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_keymap.basecharacter", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_keymap.basecharacter")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_keymap.basecharacter", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_keymap.basecharacter", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_keymap.basecharacter", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
