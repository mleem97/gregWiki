---
title: RayLookAt._Init_b__20_3
description: Hook event for RayLookAt._Init_b__20_3
path: /api/hooks/uncategorized/ray-look-at-_-init_b__20_3
---

# RayLookAt._Init_b__20_3

> **Hook ID:** `greg.uncategorized.raylookat._init_b__20_3`
> **Category:** Uncategorized
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `RayLookAt._Init_b__20_3()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void _Init_b__20_3(CallbackContext ctx)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `ctx` | `CallbackContext` | ... |


## Using this Hook

::: tip
Use this hook to react to `_Init_b__20_3` events in `RayLookAt`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.uncategorized.raylookat._init_b__20_3", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.uncategorized.raylookat._init_b__20_3", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.uncategorized.raylookat._init_b__20_3")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.uncategorized.raylookat._init_b__20_3", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.uncategorized.raylookat._init_b__20_3", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.uncategorized.raylookat._init_b__20_3", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
