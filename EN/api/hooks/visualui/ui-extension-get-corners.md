---
title: UIExtension.GetCorners
description: Hook event for UIExtension.GetCorners
path: /api/hooks/visualui/ui-extension-get-corners
---

# UIExtension.GetCorners

> **Hook ID:** `greg.visualui.uiextension.getcorners`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `UIExtension.GetCorners()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Il2CppStructArray`1 GetCorners(RectTransform rectTransform)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `rectTransform` | `RectTransform` | ... |


## Using this Hook

::: tip
Use this hook to react to `GetCorners` events in `UIExtension`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.uiextension.getcorners", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.uiextension.getcorners", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.uiextension.getcorners")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.uiextension.getcorners", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.uiextension.getcorners", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.uiextension.getcorners", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Il2CppStructArray`1`
- **Safe to block?**: Yes
