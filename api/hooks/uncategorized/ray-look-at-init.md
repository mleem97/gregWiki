---
title: RayLookAt.Init
description: Hook event for RayLookAt.Init
path: /api/hooks/uncategorized/ray-look-at-init
---

# RayLookAt.Init

> **Hook ID:** `greg.uncategorized.raylookat.init`
> **Category:** Uncategorized
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `RayLookAt.Init()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Init()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `Init` events in `RayLookAt`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.uncategorized.raylookat.init", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.uncategorized.raylookat.init", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.uncategorized.raylookat.init")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.uncategorized.raylookat.init", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.uncategorized.raylookat.init", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.uncategorized.raylookat.init", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
