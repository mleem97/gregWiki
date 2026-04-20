---
title: UIExtension.MaxX
description: Hook event for UIExtension.MaxX
path: /api/hooks/visualui/ui-extension-max-x
---

# UIExtension.MaxX

> **Hook ID:** `greg.visualui.uiextension.maxx`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `UIExtension.MaxX()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Single MaxX(RectTransform rectTransform)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `rectTransform` | `RectTransform` | ... |


## Using this Hook

::: tip
Use this hook to react to `MaxX` events in `UIExtension`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.uiextension.maxx", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.uiextension.maxx", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.uiextension.maxx")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.uiextension.maxx", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.uiextension.maxx", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.uiextension.maxx", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Single`
- **Safe to block?**: Yes
