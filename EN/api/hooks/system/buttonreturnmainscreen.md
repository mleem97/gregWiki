---
title: ButtonReturnMainScreen
description: Documentation for greg.SYSTEM.ButtonReturnMainScreen
path: /api/hooks/system/buttonreturnmainscreen
---

# ButtonReturnMainScreen

> **Hook ID:** `greg.SYSTEM.ButtonReturnMainScreen`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.ButtonReturnMainScreen

## Native Signature
```csharp
Il2Cpp.ComputerShop::ButtonReturnMainScreen()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonReturnMainScreen` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonReturnMainScreen", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonReturnMainScreen");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonReturnMainScreen", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonReturnMainScreen received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonReturnMainScreen fired")

greg.on("greg.SYSTEM.ButtonReturnMainScreen", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonReturnMainScreen", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonReturnMainScreen triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonReturnMainScreen".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonReturnMainScreen", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonReturnMainScreen fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
