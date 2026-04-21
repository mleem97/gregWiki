---
title: ButtonCancelBuying
description: Documentation for greg.EMPLOYEE.ButtonCancelBuying
path: /api/hooks/employee/buttoncancelbuying
---

# ButtonCancelBuying

> **Hook ID:** `greg.EMPLOYEE.ButtonCancelBuying`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/HRSystem.ButtonCancelBuying

## Native Signature
```csharp
Il2Cpp.HRSystem::ButtonCancelBuying()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonCancelBuying` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.ButtonCancelBuying", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.ButtonCancelBuying");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.ButtonCancelBuying", function(payload)
    greg.log("Hook greg.EMPLOYEE.ButtonCancelBuying received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.ButtonCancelBuying fired")

greg.on("greg.EMPLOYEE.ButtonCancelBuying", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.ButtonCancelBuying", (payload) => {
    console.log("Hook greg.EMPLOYEE.ButtonCancelBuying triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.ButtonCancelBuying".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.ButtonCancelBuying", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.ButtonCancelBuying fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
