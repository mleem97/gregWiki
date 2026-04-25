---
title: GetCustomerTotalRequirement
description: Documentation for greg.SYSTEM.GetCustomerTotalRequirement
path: /api/hooks/system/getcustomertotalrequirement
---

# GetCustomerTotalRequirement

> **Hook ID:** `greg.SYSTEM.GetCustomerTotalRequirement`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.GetCustomerTotalRequirement

## Native Signature
```csharp
Il2Cpp.MainGameManager::GetCustomerTotalRequirement(CustomerItem)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetCustomerTotalRequirement` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetCustomerTotalRequirement", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetCustomerTotalRequirement");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetCustomerTotalRequirement", function(payload)
    greg.log("Hook greg.SYSTEM.GetCustomerTotalRequirement received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetCustomerTotalRequirement fired")

greg.on("greg.SYSTEM.GetCustomerTotalRequirement", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetCustomerTotalRequirement", (payload) => {
    console.log("Hook greg.SYSTEM.GetCustomerTotalRequirement triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetCustomerTotalRequirement".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetCustomerTotalRequirement", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetCustomerTotalRequirement fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
