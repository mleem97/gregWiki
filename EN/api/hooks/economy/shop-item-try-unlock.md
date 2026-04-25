---
title: ShopItem.TryUnlock
description: Hook event for ShopItem.TryUnlock
path: /api/hooks/economy/shop-item-try-unlock
---

# ShopItem.TryUnlock

> **Hook ID:** `greg.economy.shopitem.tryunlock`
> **Category:** Economy
> **Namespace:** `Il2Cpp`

This hook intercepts calls to `ShopItem.TryUnlock()` and broadcasts an event to the `gregCore` EventBus.

## Native Signature
```csharp
Void TryUnlock()
```

## Payload Context
When this hook fires, the event payload contains the argument data from the original method call.

*No parameters in payload.*


## Using this Hook

::: tip
Use this hook to react to `TryUnlock` events in `ShopItem`. 
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Subscribe("greg.economy.shopitem.tryunlock", OnHookTriggered);
    }

    private void OnHookTriggered(EventPayload payload)
    {
        // Custom logic here
    }
}
```
#Tab: Lua
```lua
greg.subscribe("greg.economy.shopitem.tryunlock", function(payload)
    -- Custom Lua logic here
end)
```
#Tab: Python
```python
@greg.hook("greg.economy.shopitem.tryunlock")
def on_hook_triggered(payload):
    # Custom Python logic here
    pass
```
#Tab: JavaScript
```javascript
greg.events.on("greg.economy.shopitem.tryunlock", (payload) => {
    // Custom JS logic here
});
```
#Tab: Rust
```rust
greg::subscribe("greg.economy.shopitem.tryunlock", |payload| {
    // Custom Rust logic here
});
```
#Tab: Go
```go
greg.Subscribe("greg.economy.shopitem.tryunlock", func(payload greg.EventPayload) {
    // Custom Go logic here
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Return Type Expected:** `Void`
- **Safe to block?**: Depends on implementation
