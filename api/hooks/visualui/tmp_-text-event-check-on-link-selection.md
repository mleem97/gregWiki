---
title: TMP_TextEventCheck.OnLinkSelection
description: Hook event for TMP_TextEventCheck.OnLinkSelection
path: /api/hooks/visualui/tmp_-text-event-check-on-link-selection
---

# TMP_TextEventCheck.OnLinkSelection

> **Hook ID:** `greg.visualui.tmp_texteventcheck.onlinkselection`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `TMP_TextEventCheck.OnLinkSelection()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnLinkSelection(String linkID, String linkText, Int32 linkIndex)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `linkID` | `String` | ... |
| `linkText` | `String` | ... |
| `linkIndex` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnLinkSelection` events in `TMP_TextEventCheck`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.tmp_texteventcheck.onlinkselection", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.tmp_texteventcheck.onlinkselection", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.tmp_texteventcheck.onlinkselection")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.tmp_texteventcheck.onlinkselection", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.tmp_texteventcheck.onlinkselection", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.tmp_texteventcheck.onlinkselection", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
