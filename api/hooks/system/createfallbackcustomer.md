---
title: CreateFallbackCustomer
description: Documentation for greg.SYSTEM.CreateFallbackCustomer
path: /api/hooks/system/createfallbackcustomer
---

# CreateFallbackCustomer

> **Hook ID:** `greg.SYSTEM.CreateFallbackCustomer`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.CreateFallbackCustomer

## Native Signature
```csharp
Il2Cpp.MainGameManager::CreateFallbackCustomer(CustomerItem, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CreateFallbackCustomer` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CreateFallbackCustomer", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CreateFallbackCustomer");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CreateFallbackCustomer", function(payload)
    greg.log("Hook greg.SYSTEM.CreateFallbackCustomer received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CreateFallbackCustomer fired")

greg.on("greg.SYSTEM.CreateFallbackCustomer", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CreateFallbackCustomer", (payload) => {
    console.log("Hook greg.SYSTEM.CreateFallbackCustomer triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CreateFallbackCustomer".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CreateFallbackCustomer", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CreateFallbackCustomer fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
