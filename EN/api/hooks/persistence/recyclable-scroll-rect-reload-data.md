---
title: RecyclableScrollRect.ReloadData
description: Hook event for RecyclableScrollRect.ReloadData
path: /api/hooks/persistence/recyclable-scroll-rect-reload-data
---

# RecyclableScrollRect.ReloadData

> **Hook ID:** `greg.persistence.recyclablescrollrect.reloaddata`
> **Category:** Persistence
> **Namespace:** `Il2CppPolyAndCode.UI`

This hook intercepts calls to `RecyclableScrollRect.ReloadData()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void ReloadData()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `ReloadData` events in `RecyclableScrollRect`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.recyclablescrollrect.reloaddata", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.recyclablescrollrect.reloaddata", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.recyclablescrollrect.reloaddata")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.recyclablescrollrect.reloaddata", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.recyclablescrollrect.reloaddata", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.recyclablescrollrect.reloaddata", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
