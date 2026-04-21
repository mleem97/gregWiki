---
title: InteractOnHover
description: Documentation for greg.CUSTOMER.InteractOnHover
path: /api/hooks/customer/interactonhover
---

# InteractOnHover

> **Hook ID:** `greg.CUSTOMER.InteractOnHover`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBaseDoor.InteractOnHover

## Native Signature
```csharp
Il2Cpp.CustomerBaseDoor::InteractOnHover(RaycastHit)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InteractOnHover` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.InteractOnHover", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.InteractOnHover");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.InteractOnHover", function(payload)
    greg.log("Hook greg.CUSTOMER.InteractOnHover received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.InteractOnHover fired")

greg.on("greg.CUSTOMER.InteractOnHover", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.InteractOnHover", (payload) => {
    console.log("Hook greg.CUSTOMER.InteractOnHover triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.InteractOnHover".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.InteractOnHover", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.InteractOnHover fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
