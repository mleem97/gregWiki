---
title: LeaveTheTrolley
description: Documentation for greg.SYSTEM.LeaveTheTrolley
path: /api/hooks/system/leavethetrolley
---

# LeaveTheTrolley

> **Hook ID:** `greg.SYSTEM.LeaveTheTrolley`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppPolyStang/CarController.LeaveTheTrolley

## Native Signature
```csharp
Il2Cpp.CarController::LeaveTheTrolley()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LeaveTheTrolley` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.LeaveTheTrolley", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.LeaveTheTrolley");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.LeaveTheTrolley", function(payload)
    greg.log("Hook greg.SYSTEM.LeaveTheTrolley received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.LeaveTheTrolley fired")

greg.on("greg.SYSTEM.LeaveTheTrolley", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.LeaveTheTrolley", (payload) => {
    console.log("Hook greg.SYSTEM.LeaveTheTrolley triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.LeaveTheTrolley".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.LeaveTheTrolley", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.LeaveTheTrolley fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
