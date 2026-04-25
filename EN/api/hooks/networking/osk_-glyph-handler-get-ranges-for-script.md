---
title: OSK_GlyphHandler.GetRangesForScript
description: Hook event for OSK_GlyphHandler.GetRangesForScript
path: /api/hooks/networking/osk_-glyph-handler-get-ranges-for-script
---

# OSK_GlyphHandler.GetRangesForScript

> **Hook ID:** `greg.networking.osk_glyphhandler.getrangesforscript`
> **Category:** Networking
> **Namespace:** `Il2CppviperOSK`

This hook intercepts calls to `OSK_GlyphHandler.GetRangesForScript()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IReadOnlyList`1 GetRangesForScript(Script script)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `script` | `Script` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetRangesForScript` events in `OSK_GlyphHandler`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.networking.osk_glyphhandler.getrangesforscript", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.networking.osk_glyphhandler.getrangesforscript", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.networking.osk_glyphhandler.getrangesforscript")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.networking.osk_glyphhandler.getrangesforscript", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.networking.osk_glyphhandler.getrangesforscript", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.networking.osk_glyphhandler.getrangesforscript", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IReadOnlyList`1`
- **Safe to block?**: Yes
