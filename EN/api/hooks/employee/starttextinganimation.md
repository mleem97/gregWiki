---
title: StartTextingAnimation
description: Documentation for greg.EMPLOYEE.StartTextingAnimation
path: /api/hooks/employee/starttextinganimation
---

# StartTextingAnimation

> **Hook ID:** `greg.EMPLOYEE.StartTextingAnimation`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Technician.StartTextingAnimation

## Native Signature
```csharp
Il2Cpp.Technician::StartTextingAnimation()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `StartTextingAnimation` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.StartTextingAnimation", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.StartTextingAnimation");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.StartTextingAnimation", function(payload)
    greg.log("Hook greg.EMPLOYEE.StartTextingAnimation received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.StartTextingAnimation fired")

greg.on("greg.EMPLOYEE.StartTextingAnimation", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.StartTextingAnimation", (payload) => {
    console.log("Hook greg.EMPLOYEE.StartTextingAnimation triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.StartTextingAnimation".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.StartTextingAnimation", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.StartTextingAnimation fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
