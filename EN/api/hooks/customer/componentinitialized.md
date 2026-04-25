---
title: ComponentInitialized
description: Documentation for greg.CUSTOMER.ComponentInitialized
path: /api/hooks/customer/componentinitialized
---

# ComponentInitialized

> **Hook ID:** `greg.CUSTOMER.ComponentInitialized`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBaseDoor.Awake

## Native Signature
```csharp
Il2Cpp.CustomerBaseDoor::Awake()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ComponentInitialized` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.ComponentInitialized", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.ComponentInitialized");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.ComponentInitialized", function(payload)
    greg.log("Hook greg.CUSTOMER.ComponentInitialized received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.ComponentInitialized fired")

greg.on("greg.CUSTOMER.ComponentInitialized", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.ComponentInitialized", (payload) => {
    console.log("Hook greg.CUSTOMER.ComponentInitialized triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.ComponentInitialized".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.ComponentInitialized", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.ComponentInitialized fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
