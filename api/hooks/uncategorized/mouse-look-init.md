---
title: MouseLook.Init
description: Hook event for MouseLook.Init
path: /api/hooks/uncategorized/mouse-look-init
---

# MouseLook.Init

> **Hook ID:** `greg.uncategorized.mouselook.init`
> **Category:** Uncategorized
> **Namespace:** `UnityStandardAssets.Characters.FirstPerson`

This hook intercepts calls to `MouseLook.Init()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void Init(Transform character, Transform camera)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `character` | `Transform` | ... |
| `camera` | `Transform` | ... |


## Using this Hook

::: tip
Use this hook to react to `Init` events in `MouseLook`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.uncategorized.mouselook.init", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.uncategorized.mouselook.init", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.uncategorized.mouselook.init")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.uncategorized.mouselook.init", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.uncategorized.mouselook.init", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.uncategorized.mouselook.init", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
