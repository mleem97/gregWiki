---
title: OnDestroy
description: Documentation for greg.CUSTOMER.OnDestroy
path: /api/hooks/customer/ondestroy
---

# OnDestroy

> **Hook ID:** `greg.CUSTOMER.OnDestroy`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBaseDoor.OnDestroy

## Native Signature
```csharp
Il2Cpp.CustomerBaseDoor::OnDestroy()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnDestroy` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.OnDestroy", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.OnDestroy");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.OnDestroy", function(payload)
    greg.log("Hook greg.CUSTOMER.OnDestroy received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.OnDestroy fired")

greg.on("greg.CUSTOMER.OnDestroy", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.OnDestroy", (payload) => {
    console.log("Hook greg.CUSTOMER.OnDestroy triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.OnDestroy".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.OnDestroy", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.OnDestroy fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
