---
title: OSK_Keymap.SupportGlyphs
description: Hook event for OSK_Keymap.SupportGlyphs
path: /api/hooks/visualui/osk_-keymap-support-glyphs
---

# OSK_Keymap.SupportGlyphs

> **Hook ID:** `greg.visualui.osk_keymap.supportglyphs`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_Keymap.SupportGlyphs()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SupportGlyphs(OSK_LanguagePackage glyphProfile)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `glyphProfile` | `OSK_LanguagePackage` | ... |


## Using this Hook

::: tip
Use this hook to react to `SupportGlyphs` events in `OSK_Keymap`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_keymap.supportglyphs", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_keymap.supportglyphs", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_keymap.supportglyphs")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_keymap.supportglyphs", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_keymap.supportglyphs", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_keymap.supportglyphs", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
