---
title: OnLoadingStarted
description: Documentation for greg.EMPLOYEE.OnLoadingStarted
path: /api/hooks/employee/onloadingstarted
---

# OnLoadingStarted

> **Hook ID:** `greg.EMPLOYEE.OnLoadingStarted`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Technician.OnLoadingStarted

## Native Signature
```csharp
Il2Cpp.Technician::OnLoadingStarted()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnLoadingStarted` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.OnLoadingStarted", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.OnLoadingStarted");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.OnLoadingStarted", function(payload)
    greg.log("Hook greg.EMPLOYEE.OnLoadingStarted received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.OnLoadingStarted fired")

greg.on("greg.EMPLOYEE.OnLoadingStarted", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.OnLoadingStarted", (payload) => {
    console.log("Hook greg.EMPLOYEE.OnLoadingStarted triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.OnLoadingStarted".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.OnLoadingStarted", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.OnLoadingStarted fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
