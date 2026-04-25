---
title: ButtonCancelCustomerChoice
description: Documentation for greg.SYSTEM.ButtonCancelCustomerChoice
path: /api/hooks/system/buttoncancelcustomerchoice
---

# ButtonCancelCustomerChoice

> **Hook ID:** `greg.SYSTEM.ButtonCancelCustomerChoice`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.ButtonCancelCustomerChoice

## Native Signature
```csharp
Il2Cpp.MainGameManager::ButtonCancelCustomerChoice()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonCancelCustomerChoice` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonCancelCustomerChoice", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonCancelCustomerChoice");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonCancelCustomerChoice", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonCancelCustomerChoice received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonCancelCustomerChoice fired")

greg.on("greg.SYSTEM.ButtonCancelCustomerChoice", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonCancelCustomerChoice", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonCancelCustomerChoice triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonCancelCustomerChoice".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonCancelCustomerChoice", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonCancelCustomerChoice fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
