---
title: Register
description: Documentation for greg.SYSTEM.Register
path: /api/hooks/system/register
---

# Register

> **Hook ID:** `greg.SYSTEM.Register`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/DeviceTimerManager.Register

## Native Signature
```csharp
Il2Cpp.DeviceTimerManager::Register(ITimedDevice)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Register` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Register", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Register");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Register", function(payload)
    greg.log("Hook greg.SYSTEM.Register received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Register fired")

greg.on("greg.SYSTEM.Register", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Register", (payload) => {
    console.log("Hook greg.SYSTEM.Register triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Register".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Register", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Register fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
