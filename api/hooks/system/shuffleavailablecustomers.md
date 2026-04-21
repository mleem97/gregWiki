---
title: ShuffleAvailableCustomers
description: Documentation for greg.SYSTEM.ShuffleAvailableCustomers
path: /api/hooks/system/shuffleavailablecustomers
---

# ShuffleAvailableCustomers

> **Hook ID:** `greg.SYSTEM.ShuffleAvailableCustomers`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.ShuffleAvailableCustomers

## Native Signature
```csharp
Il2Cpp.MainGameManager::ShuffleAvailableCustomers()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShuffleAvailableCustomers` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ShuffleAvailableCustomers", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ShuffleAvailableCustomers");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ShuffleAvailableCustomers", function(payload)
    greg.log("Hook greg.SYSTEM.ShuffleAvailableCustomers received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ShuffleAvailableCustomers fired")

greg.on("greg.SYSTEM.ShuffleAvailableCustomers", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ShuffleAvailableCustomers", (payload) => {
    console.log("Hook greg.SYSTEM.ShuffleAvailableCustomers triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ShuffleAvailableCustomers".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ShuffleAvailableCustomers", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ShuffleAvailableCustomers fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
