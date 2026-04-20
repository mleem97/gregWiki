---
title: TMP_TextSelector_A.OnPointerEnter
description: Hook event for TMP_TextSelector_A.OnPointerEnter
path: /api/hooks/visualui/tmp_-text-selector_a-on-pointer-enter
---

# TMP_TextSelector_A.OnPointerEnter

> **Hook ID:** `greg.visualui.tmp_textselector_a.onpointerenter`
> **Category:** Visualui
> **Namespace:** `Il2CppTMPro.Examples`

This hook intercepts calls to `TMP_TextSelector_A.OnPointerEnter()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void OnPointerEnter(PointerEventData eventData)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `eventData` | `PointerEventData` | ... |


## Using this Hook

::: tip
Use this hook to react to `OnPointerEnter` events in `TMP_TextSelector_A`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.tmp_textselector_a.onpointerenter", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.tmp_textselector_a.onpointerenter", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.tmp_textselector_a.onpointerenter")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.tmp_textselector_a.onpointerenter", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.tmp_textselector_a.onpointerenter", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.tmp_textselector_a.onpointerenter", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
