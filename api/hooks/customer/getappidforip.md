---
title: GetAppIDForIP
description: Documentation for greg.CUSTOMER.GetAppIDForIP
path: /api/hooks/customer/getappidforip
---

# GetAppIDForIP

> **Hook ID:** `greg.CUSTOMER.GetAppIDForIP`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.GetAppIDForIP

## Native Signature
```csharp
Il2Cpp.CustomerBase::GetAppIDForIP(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetAppIDForIP` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.GetAppIDForIP", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.GetAppIDForIP");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.GetAppIDForIP", function(payload)
    greg.log("Hook greg.CUSTOMER.GetAppIDForIP received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.GetAppIDForIP fired")

greg.on("greg.CUSTOMER.GetAppIDForIP", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.GetAppIDForIP", (payload) => {
    console.log("Hook greg.CUSTOMER.GetAppIDForIP triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.GetAppIDForIP".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.GetAppIDForIP", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.GetAppIDForIP fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
