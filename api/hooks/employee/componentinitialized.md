---
title: ComponentInitialized
description: Documentation for greg.EMPLOYEE.ComponentInitialized
path: /api/hooks/employee/componentinitialized
---

# ComponentInitialized

> **Hook ID:** `greg.EMPLOYEE.ComponentInitialized`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/TechnicianManager.Awake

## Native Signature
```csharp
Il2Cpp.TechnicianManager::Awake()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `queuedJobCount` | `int` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ComponentInitialized` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.ComponentInitialized", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.ComponentInitialized");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.ComponentInitialized", function(payload)
    greg.log("Hook greg.EMPLOYEE.ComponentInitialized received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.ComponentInitialized fired")

greg.on("greg.EMPLOYEE.ComponentInitialized", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.ComponentInitialized", (payload) => {
    console.log("Hook greg.EMPLOYEE.ComponentInitialized triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.ComponentInitialized".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.ComponentInitialized", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.ComponentInitialized fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
