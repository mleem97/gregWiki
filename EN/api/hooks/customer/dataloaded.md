---
title: DataLoaded
description: Documentation for greg.CUSTOMER.DataLoaded
path: /api/hooks/customer/dataloaded
---

# DataLoaded

> **Hook ID:** `greg.CUSTOMER.DataLoaded`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.LoadData

## Native Signature
```csharp
Il2Cpp.CustomerBase::LoadData(CustomerBaseSaveData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DataLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.DataLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.DataLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.DataLoaded", function(payload)
    greg.log("Hook greg.CUSTOMER.DataLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.DataLoaded fired")

greg.on("greg.CUSTOMER.DataLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.DataLoaded", (payload) => {
    console.log("Hook greg.CUSTOMER.DataLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.DataLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.DataLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.DataLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
