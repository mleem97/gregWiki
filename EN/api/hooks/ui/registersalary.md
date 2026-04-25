---
title: RegisterSalary
description: Documentation for greg.UI.RegisterSalary
path: /api/hooks/ui/registersalary
---

# RegisterSalary

> **Hook ID:** `greg.UI.RegisterSalary`
> **Category:** Ui
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/BalanceSheet.RegisterSalary

## Native Signature
```csharp
Il2Cpp.BalanceSheet::RegisterSalary(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RegisterSalary` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.UI.RegisterSalary", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.UI.RegisterSalary");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.UI.RegisterSalary", function(payload)
    greg.log("Hook greg.UI.RegisterSalary received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.UI.RegisterSalary fired")

greg.on("greg.UI.RegisterSalary", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.UI.RegisterSalary", (payload) => {
    console.log("Hook greg.UI.RegisterSalary triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.UI.RegisterSalary".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.UI.RegisterSalary", func(p greg.Payload) {
    fmt.Println("Hook greg.UI.RegisterSalary fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
