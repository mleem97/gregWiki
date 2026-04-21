---
title: ButtonCheckOut
description: Documentation for greg.SYSTEM.ButtonCheckOut
path: /api/hooks/system/buttoncheckout
---

# ButtonCheckOut

> **Hook ID:** `greg.SYSTEM.ButtonCheckOut`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/ComputerShop.ButtonCheckOut

## Native Signature
```csharp
Il2Cpp.ComputerShop::ButtonCheckOut()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonCheckOut` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonCheckOut", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonCheckOut");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonCheckOut", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonCheckOut received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonCheckOut fired")

greg.on("greg.SYSTEM.ButtonCheckOut", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonCheckOut", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonCheckOut triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonCheckOut".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonCheckOut", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonCheckOut fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
