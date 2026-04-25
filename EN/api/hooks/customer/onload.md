---
title: OnLoad
description: Documentation for greg.CUSTOMER.OnLoad
path: /api/hooks/customer/onload
---

# OnLoad

> **Hook ID:** `greg.CUSTOMER.OnLoad`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBaseDoor.OnLoad

## Native Signature
```csharp
Il2Cpp.CustomerBaseDoor::OnLoad()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnLoad` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.OnLoad", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.OnLoad");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.OnLoad", function(payload)
    greg.log("Hook greg.CUSTOMER.OnLoad received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.OnLoad fired")

greg.on("greg.CUSTOMER.OnLoad", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.OnLoad", (payload) => {
    console.log("Hook greg.CUSTOMER.OnLoad triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.OnLoad".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.OnLoad", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.OnLoad fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
