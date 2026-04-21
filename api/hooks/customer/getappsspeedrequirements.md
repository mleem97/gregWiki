---
title: GetAppsSpeedRequirements
description: Documentation for greg.CUSTOMER.GetAppsSpeedRequirements
path: /api/hooks/customer/getappsspeedrequirements
---

# GetAppsSpeedRequirements

> **Hook ID:** `greg.CUSTOMER.GetAppsSpeedRequirements`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.GetAppsSpeedRequirements

## Native Signature
```csharp
Il2Cpp.CustomerBase::GetAppsSpeedRequirements()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetAppsSpeedRequirements` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.GetAppsSpeedRequirements", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.GetAppsSpeedRequirements");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.GetAppsSpeedRequirements", function(payload)
    greg.log("Hook greg.CUSTOMER.GetAppsSpeedRequirements received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.GetAppsSpeedRequirements fired")

greg.on("greg.CUSTOMER.GetAppsSpeedRequirements", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.GetAppsSpeedRequirements", (payload) => {
    console.log("Hook greg.CUSTOMER.GetAppsSpeedRequirements triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.GetAppsSpeedRequirements".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.GetAppsSpeedRequirements", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.GetAppsSpeedRequirements fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
