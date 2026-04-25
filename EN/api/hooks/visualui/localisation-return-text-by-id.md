---
title: Localisation.ReturnTextByID
description: Hook event for Localisation.ReturnTextByID
path: /api/hooks/visualui/localisation-return-text-by-id
---

# Localisation.ReturnTextByID

> **Hook ID:** `greg.visualui.localisation.returntextbyid`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `Localisation.ReturnTextByID()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
String ReturnTextByID(Int32 _uid)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `_uid` | `Int32` | ... |


## Using this Hook

::: tip
Use this hook to react to `ReturnTextByID` events in `Localisation`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.localisation.returntextbyid", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.localisation.returntextbyid", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.localisation.returntextbyid")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.localisation.returntextbyid", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.localisation.returntextbyid", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.localisation.returntextbyid", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `String`
- **Safe to block?**: Yes
