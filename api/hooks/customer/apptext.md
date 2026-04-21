---
title: AppText
description: Documentation for greg.CUSTOMER.AppText
path: /api/hooks/customer/apptext
---

# AppText

> **Hook ID:** `greg.CUSTOMER.AppText`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.AppText

## Native Signature
```csharp
Il2Cpp.CustomerBase::AppText(int, string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `AppText` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.AppText", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.AppText");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.AppText", function(payload)
    greg.log("Hook greg.CUSTOMER.AppText received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.AppText fired")

greg.on("greg.CUSTOMER.AppText", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.AppText", (payload) => {
    console.log("Hook greg.CUSTOMER.AppText triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.AppText".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.AppText", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.AppText fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
