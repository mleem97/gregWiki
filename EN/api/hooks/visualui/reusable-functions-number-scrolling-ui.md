---
title: ReusableFunctions.NumberScrollingUI
description: Hook event for ReusableFunctions.NumberScrollingUI
path: /api/hooks/visualui/reusable-functions-number-scrolling-ui
---

# ReusableFunctions.NumberScrollingUI

> **Hook ID:** `greg.visualui.reusablefunctions.numberscrollingui`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ReusableFunctions.NumberScrollingUI()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
IEnumerator NumberScrollingUI(TextMeshProUGUI _text, Int32 _endNumber)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_text` | `TextMeshProUGUI` | ... |
| `_endNumber` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `NumberScrollingUI` events in `ReusableFunctions`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.reusablefunctions.numberscrollingui", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.reusablefunctions.numberscrollingui", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.reusablefunctions.numberscrollingui")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.reusablefunctions.numberscrollingui", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.reusablefunctions.numberscrollingui", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.reusablefunctions.numberscrollingui", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `IEnumerator`
- **Safe to block?**: Yes
