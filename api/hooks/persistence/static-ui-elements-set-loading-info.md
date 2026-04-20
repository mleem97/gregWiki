---
title: StaticUIElements.SetLoadingInfo
description: Hook event for StaticUIElements.SetLoadingInfo
path: /api/hooks/persistence/static-ui-elements-set-loading-info
---

# StaticUIElements.SetLoadingInfo

> **Hook ID:** `greg.persistence.staticuielements.setloadinginfo`
> **Category:** Persistence
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `StaticUIElements.SetLoadingInfo()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void SetLoadingInfo(String s)
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

| Name | Type | Description |
|---|---|---|
| `s` | `String` | ... |


## Using this Hook

::: tip
Use this hook to react to `SetLoadingInfo` events in `StaticUIElements`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.persistence.staticuielements.setloadinginfo", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.persistence.staticuielements.setloadinginfo", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.persistence.staticuielements.setloadinginfo")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.persistence.staticuielements.setloadinginfo", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.persistence.staticuielements.setloadinginfo", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.persistence.staticuielements.setloadinginfo", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
