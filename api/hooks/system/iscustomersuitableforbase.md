---
title: IsCustomerSuitableForBase
description: Documentation for greg.SYSTEM.IsCustomerSuitableForBase
path: /api/hooks/system/iscustomersuitableforbase
---

# IsCustomerSuitableForBase

> **Hook ID:** `greg.SYSTEM.IsCustomerSuitableForBase`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.IsCustomerSuitableForBase

## Native Signature
```csharp
Il2Cpp.MainGameManager::IsCustomerSuitableForBase(CustomerItem, int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsCustomerSuitableForBase` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.IsCustomerSuitableForBase", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.IsCustomerSuitableForBase");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.IsCustomerSuitableForBase", function(payload)
    greg.log("Hook greg.SYSTEM.IsCustomerSuitableForBase received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.IsCustomerSuitableForBase fired")

greg.on("greg.SYSTEM.IsCustomerSuitableForBase", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.IsCustomerSuitableForBase", (payload) => {
    console.log("Hook greg.SYSTEM.IsCustomerSuitableForBase triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.IsCustomerSuitableForBase".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.IsCustomerSuitableForBase", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.IsCustomerSuitableForBase fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
