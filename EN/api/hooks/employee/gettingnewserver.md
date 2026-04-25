---
title: GettingNewServer
description: Documentation for greg.EMPLOYEE.GettingNewServer
path: /api/hooks/employee/gettingnewserver
---

# GettingNewServer

> **Hook ID:** `greg.EMPLOYEE.GettingNewServer`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Technician.GettingNewServer

## Native Signature
```csharp
Il2Cpp.Technician::GettingNewServer()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GettingNewServer` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.GettingNewServer", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.GettingNewServer");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.GettingNewServer", function(payload)
    greg.log("Hook greg.EMPLOYEE.GettingNewServer received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.GettingNewServer fired")

greg.on("greg.EMPLOYEE.GettingNewServer", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.GettingNewServer", (payload) => {
    console.log("Hook greg.EMPLOYEE.GettingNewServer triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.GettingNewServer".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.GettingNewServer", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.GettingNewServer fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
