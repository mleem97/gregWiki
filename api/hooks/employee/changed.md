---
title: Changed
description: Documentation for greg.EMPLOYEE.Changed
path: /api/hooks/employee/changed
---

# Changed

> **Hook ID:** `greg.EMPLOYEE.Changed`
> **Category:** Employee
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Technician.Update

## Native Signature
```csharp
Il2Cpp.Technician::Update()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Changed` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.EMPLOYEE.Changed", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.EMPLOYEE.Changed");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.EMPLOYEE.Changed", function(payload)
    greg.log("Hook greg.EMPLOYEE.Changed received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.EMPLOYEE.Changed fired")

greg.on("greg.EMPLOYEE.Changed", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.EMPLOYEE.Changed", (payload) => {
    console.log("Hook greg.EMPLOYEE.Changed triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.EMPLOYEE.Changed".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.EMPLOYEE.Changed", func(p greg.Payload) {
    fmt.Println("Hook greg.EMPLOYEE.Changed fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
