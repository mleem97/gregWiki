---
title: LocalisedText.SetText
description: Hook event for LocalisedText.SetText
path: /api/hooks/visualui/localised-text-set-text
---

# LocalisedText.SetText

> **Hook ID:** `greg.visualui.localisedtext.settext`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `LocalisedText.SetText()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetText(Int32 _localisation_uid)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_localisation_uid` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetText` events in `LocalisedText`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.localisedtext.settext", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.localisedtext.settext", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.localisedtext.settext")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.localisedtext.settext", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.localisedtext.settext", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.localisedtext.settext", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
