---
title: ButtonConfirmHire
description: Documentation for greg.EMPLOYEE.ButtonConfirmHire
path: /api/hooks/employee/buttonconfirmhire
---

# ButtonConfirmHire

> **Hook ID:** `greg.EMPLOYEE.ButtonConfirmHire`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/HRSystem.ButtonConfirmHire

## Native Signature
```csharp
Il2Cpp.HRSystem::ButtonConfirmHire()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonConfirmHire` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.ButtonConfirmHire", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.ButtonConfirmHire");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.ButtonConfirmHire", function(payload)
    greg.log("Hook greg.EMPLOYEE.ButtonConfirmHire received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.ButtonConfirmHire fired")

greg.on("greg.EMPLOYEE.ButtonConfirmHire", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.ButtonConfirmHire", (payload) => {
    console.log("Hook greg.EMPLOYEE.ButtonConfirmHire triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.ButtonConfirmHire".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.ButtonConfirmHire", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.ButtonConfirmHire fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
