---
title: OSK_GlyphHandler.BuildLookup
description: Hook event for OSK_GlyphHandler.BuildLookup
path: /api/hooks/visualui/osk_-glyph-handler-build-lookup
---

# OSK_GlyphHandler.BuildLookup

> **Hook ID:** `greg.visualui.osk_glyphhandler.buildlookup`
> **Category:** Visualui
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_GlyphHandler.BuildLookup()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Dictionary`2 BuildLookup(OSK_LanguagePackage profile)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `profile` | `OSK_LanguagePackage` | ... |


## Using this Hook

::: tip
Use this hook to react to `BuildLookup` events in `OSK_GlyphHandler`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.osk_glyphhandler.buildlookup", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.osk_glyphhandler.buildlookup", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.osk_glyphhandler.buildlookup")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.osk_glyphhandler.buildlookup", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.osk_glyphhandler.buildlookup", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.osk_glyphhandler.buildlookup", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Dictionary`2`
- **Safe to block?**: Yes
