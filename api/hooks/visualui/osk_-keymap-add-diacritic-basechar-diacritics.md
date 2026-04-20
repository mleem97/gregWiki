---
title: OSK_Keymap.AddDiacritic
description: Hook event for OSK_Keymap.AddDiacritic
path: /api/hooks/visualui/osk_-keymap-add-diacritic-basechar-diacritics
---

# OSK_Keymap.AddDiacritic

> **Hook ID:** `greg.visualui.osk_keymap.adddiacritic`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keymap.AddDiacritic()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String AddDiacritic(Char baseChar, Char[] diacritics)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `baseChar` | `Char` | ... |
| `diacritics` | `Char[]` | ... |


## Using this Hook

::: tip
Use this hook to react to `AddDiacritic` events in `OSK_Keymap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_keymap.adddiacritic", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_keymap.adddiacritic", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_keymap.adddiacritic")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_keymap.adddiacritic", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_keymap.adddiacritic", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_keymap.adddiacritic", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
