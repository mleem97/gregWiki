---
title: GetCustomerLogo
description: Documentation for greg.SYSTEM.GetCustomerLogo
path: /api/hooks/system/getcustomerlogo
---

# GetCustomerLogo

> **Hook ID:** `greg.SYSTEM.GetCustomerLogo`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.GetCustomerLogo

## Native Signature
```csharp
Il2Cpp.MainGameManager::GetCustomerLogo(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetCustomerLogo` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetCustomerLogo", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetCustomerLogo");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetCustomerLogo", function(payload)
    greg.log("Hook greg.SYSTEM.GetCustomerLogo received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetCustomerLogo fired")

greg.on("greg.SYSTEM.GetCustomerLogo", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetCustomerLogo", (payload) => {
    console.log("Hook greg.SYSTEM.GetCustomerLogo triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetCustomerLogo".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetCustomerLogo", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetCustomerLogo fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
