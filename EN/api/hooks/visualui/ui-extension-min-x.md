---
title: UIExtension.MinX
description: Hook event for UIExtension.MinX
path: /api/hooks/visualui/ui-extension-min-x
---

# UIExtension.MinX

> **Hook ID:** `greg.visualui.uiextension.minx`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `UIExtension.MinX()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Single MinX(RectTransform rectTransform)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `rectTransform` | `RectTransform` | ... |


## Using this Hook

::: tip
Use this hook to react to `MinX` events in `UIExtension`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.uiextension.minx", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.uiextension.minx", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.uiextension.minx")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.uiextension.minx", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.uiextension.minx", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.uiextension.minx", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Single`
- **Safe to block?**: Yes
