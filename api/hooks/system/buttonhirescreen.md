---
title: ButtonHireScreen
description: Documentation for greg.SYSTEM.ButtonHireScreen
path: /api/hooks/system/buttonhirescreen
---

# ButtonHireScreen

> **Hook ID:** `greg.SYSTEM.ButtonHireScreen`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.ButtonHireScreen

## Native Signature
```csharp
Il2Cpp.ComputerShop::ButtonHireScreen()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonHireScreen` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonHireScreen", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonHireScreen");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonHireScreen", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonHireScreen received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonHireScreen fired")

greg.on("greg.SYSTEM.ButtonHireScreen", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonHireScreen", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonHireScreen triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonHireScreen".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonHireScreen", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonHireScreen fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
