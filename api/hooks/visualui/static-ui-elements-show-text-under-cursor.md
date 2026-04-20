---
title: StaticUIElements.ShowTextUnderCursor
description: Hook event for StaticUIElements.ShowTextUnderCursor
path: /api/hooks/visualui/static-ui-elements-show-text-under-cursor
---

# StaticUIElements.ShowTextUnderCursor

> **Hook ID:** `greg.visualui.staticuielements.showtextundercursor`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.ShowTextUnderCursor()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ShowTextUnderCursor(String text)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `text` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `ShowTextUnderCursor` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.staticuielements.showtextundercursor", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.staticuielements.showtextundercursor", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.staticuielements.showtextundercursor")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.staticuielements.showtextundercursor", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.staticuielements.showtextundercursor", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.staticuielements.showtextundercursor", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
