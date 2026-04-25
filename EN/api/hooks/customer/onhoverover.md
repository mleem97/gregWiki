---
title: OnHoverOver
description: Documentation for greg.CUSTOMER.OnHoverOver
path: /api/hooks/customer/onhoverover
---

# OnHoverOver

> **Hook ID:** `greg.CUSTOMER.OnHoverOver`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBaseDoor.OnHoverOver

## Native Signature
```csharp
Il2Cpp.CustomerBaseDoor::OnHoverOver()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnHoverOver` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.OnHoverOver", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.OnHoverOver");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.OnHoverOver", function(payload)
    greg.log("Hook greg.CUSTOMER.OnHoverOver received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.OnHoverOver fired")

greg.on("greg.CUSTOMER.OnHoverOver", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.OnHoverOver", (payload) => {
    console.log("Hook greg.CUSTOMER.OnHoverOver triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.OnHoverOver".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.OnHoverOver", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.OnHoverOver fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
