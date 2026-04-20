---
title: SetIP._ButtonEditLabel_b__30_0
description: Hook event for SetIP._ButtonEditLabel_b__30_0
path: /api/hooks/visualui/set-ip-_-button-edit-label_b__30_0
---

# SetIP._ButtonEditLabel_b__30_0

> **Hook ID:** `greg.visualui.setip._buttoneditlabel_b__30_0`
> **Category:** Visualui
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `SetIP._ButtonEditLabel_b__30_0()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void _ButtonEditLabel_b__30_0(String label)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `label` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `_ButtonEditLabel_b__30_0` events in `SetIP`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.visualui.setip._buttoneditlabel_b__30_0", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.visualui.setip._buttoneditlabel_b__30_0", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.visualui.setip._buttoneditlabel_b__30_0")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.visualui.setip._buttoneditlabel_b__30_0", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.visualui.setip._buttoneditlabel_b__30_0", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.visualui.setip._buttoneditlabel_b__30_0", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
