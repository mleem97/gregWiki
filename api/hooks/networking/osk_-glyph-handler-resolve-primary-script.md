---
title: OSK_GlyphHandler.ResolvePrimaryScript
description: Hook event for OSK_GlyphHandler.ResolvePrimaryScript
path: /api/hooks/networking/osk_-glyph-handler-resolve-primary-script
---

# OSK_GlyphHandler.ResolvePrimaryScript

> **Hook ID:** `greg.networking.osk_glyphhandler.resolveprimaryscript`
> **Category:** Networking
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_GlyphHandler.ResolvePrimaryScript()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Script ResolvePrimaryScript(CultureInfo culture)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `culture` | `CultureInfo` | ... |


## Using this Hook

::: tip
Use this hook to react to `ResolvePrimaryScript` events in `OSK_GlyphHandler`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.osk_glyphhandler.resolveprimaryscript", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.osk_glyphhandler.resolveprimaryscript", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.osk_glyphhandler.resolveprimaryscript")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.osk_glyphhandler.resolveprimaryscript", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.osk_glyphhandler.resolveprimaryscript", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.osk_glyphhandler.resolveprimaryscript", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Script`
- **Safe to block?**: Yes
