---
title: InteractOnClick
description: Documentation for greg.CUSTOMER.InteractOnClick
path: /api/hooks/customer/interactonclick
---

# InteractOnClick

> **Hook ID:** `greg.CUSTOMER.InteractOnClick`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBaseDoor.InteractOnClick

## Native Signature
```csharp
Il2Cpp.CustomerBaseDoor::InteractOnClick()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InteractOnClick` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.InteractOnClick", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.InteractOnClick");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.InteractOnClick", function(payload)
    greg.log("Hook greg.CUSTOMER.InteractOnClick received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.InteractOnClick fired")

greg.on("greg.CUSTOMER.InteractOnClick", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.InteractOnClick", (payload) => {
    console.log("Hook greg.CUSTOMER.InteractOnClick triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.InteractOnClick".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.InteractOnClick", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.InteractOnClick fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
