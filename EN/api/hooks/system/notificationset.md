---
title: NotificationSet
description: Documentation for greg.SYSTEM.NotificationSet
path: /api/hooks/system/notificationset
---

# NotificationSet

> **Hook ID:** `greg.SYSTEM.NotificationSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/StaticUIElements.SetNotification

## Native Signature
```csharp
Il2Cpp.StaticUIElements::SetNotification(int, Sprite, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `NotificationSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.NotificationSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.NotificationSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.NotificationSet", function(payload)
    greg.log("Hook greg.SYSTEM.NotificationSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.NotificationSet fired")

greg.on("greg.SYSTEM.NotificationSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.NotificationSet", (payload) => {
    console.log("Hook greg.SYSTEM.NotificationSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.NotificationSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.NotificationSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.NotificationSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
