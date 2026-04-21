---
title: ThrowingOutServer
description: Documentation for greg.EMPLOYEE.ThrowingOutServer
path: /api/hooks/employee/throwingoutserver
---

# ThrowingOutServer

> **Hook ID:** `greg.EMPLOYEE.ThrowingOutServer`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Technician.ThrowingOutServer

## Native Signature
```csharp
Il2Cpp.Technician::ThrowingOutServer()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ThrowingOutServer` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.ThrowingOutServer", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.ThrowingOutServer");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.ThrowingOutServer", function(payload)
    greg.log("Hook greg.EMPLOYEE.ThrowingOutServer received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.ThrowingOutServer fired")

greg.on("greg.EMPLOYEE.ThrowingOutServer", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.ThrowingOutServer", (payload) => {
    console.log("Hook greg.EMPLOYEE.ThrowingOutServer triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.ThrowingOutServer".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.ThrowingOutServer", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.ThrowingOutServer fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
