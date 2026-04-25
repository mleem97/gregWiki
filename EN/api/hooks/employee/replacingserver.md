---
title: ReplacingServer
description: Documentation for greg.EMPLOYEE.ReplacingServer
path: /api/hooks/employee/replacingserver
---

# ReplacingServer

> **Hook ID:** `greg.EMPLOYEE.ReplacingServer`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Technician.ReplacingServer

## Native Signature
```csharp
Il2Cpp.Technician::ReplacingServer()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ReplacingServer` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.ReplacingServer", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.ReplacingServer");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.ReplacingServer", function(payload)
    greg.log("Hook greg.EMPLOYEE.ReplacingServer received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.ReplacingServer fired")

greg.on("greg.EMPLOYEE.ReplacingServer", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.ReplacingServer", (payload) => {
    console.log("Hook greg.EMPLOYEE.ReplacingServer triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.ReplacingServer".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.ReplacingServer", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.ReplacingServer fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
