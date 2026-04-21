---
title: CreateUserReport
description: Documentation for greg.SYSTEM.CreateUserReport
path: /api/hooks/system/createuserreport
---

# CreateUserReport

> **Hook ID:** `greg.SYSTEM.CreateUserReport`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/UserReport.CreateUserReport

## Native Signature
```csharp
Il2Cpp.UserReport::CreateUserReport()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CreateUserReport` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CreateUserReport", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CreateUserReport");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CreateUserReport", function(payload)
    greg.log("Hook greg.SYSTEM.CreateUserReport received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CreateUserReport fired")

greg.on("greg.SYSTEM.CreateUserReport", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CreateUserReport", (payload) => {
    console.log("Hook greg.SYSTEM.CreateUserReport triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CreateUserReport".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CreateUserReport", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CreateUserReport fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
