---
title: ToContainerDispatched
description: Documentation for greg.EMPLOYEE.ToContainerDispatched
path: /api/hooks/employee/tocontainerdispatched
---

# ToContainerDispatched

> **Hook ID:** `greg.EMPLOYEE.ToContainerDispatched`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Technician.SendToContainer

## Native Signature
```csharp
Il2Cpp.Technician::SendToContainer()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ToContainerDispatched` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.ToContainerDispatched", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.ToContainerDispatched");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.ToContainerDispatched", function(payload)
    greg.log("Hook greg.EMPLOYEE.ToContainerDispatched received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.ToContainerDispatched fired")

greg.on("greg.EMPLOYEE.ToContainerDispatched", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.ToContainerDispatched", (payload) => {
    console.log("Hook greg.EMPLOYEE.ToContainerDispatched triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.ToContainerDispatched".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.ToContainerDispatched", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.ToContainerDispatched fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
