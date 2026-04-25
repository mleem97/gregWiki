---
title: AppPerformanceAdded
description: Documentation for greg.CUSTOMER.AppPerformanceAdded
path: /api/hooks/customer/appperformanceadded
---

# AppPerformanceAdded

> **Hook ID:** `greg.CUSTOMER.AppPerformanceAdded`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.AddAppPerformance

## Native Signature
```csharp
Il2Cpp.CustomerBase::AddAppPerformance(int, float)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AppPerformanceAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.AppPerformanceAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.AppPerformanceAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.AppPerformanceAdded", function(payload)
    greg.log("Hook greg.CUSTOMER.AppPerformanceAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.AppPerformanceAdded fired")

greg.on("greg.CUSTOMER.AppPerformanceAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.AppPerformanceAdded", (payload) => {
    console.log("Hook greg.CUSTOMER.AppPerformanceAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.AppPerformanceAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.AppPerformanceAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.AppPerformanceAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
