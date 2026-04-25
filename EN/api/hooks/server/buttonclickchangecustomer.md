---
title: ButtonClickChangeCustomer
description: Documentation for greg.SERVER.ButtonClickChangeCustomer
path: /api/hooks/server/buttonclickchangecustomer
---

# ButtonClickChangeCustomer

> **Hook ID:** `greg.SERVER.ButtonClickChangeCustomer`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.ButtonClickChangeCustomer

## Native Signature
```csharp
Il2Cpp.Server::ButtonClickChangeCustomer(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonClickChangeCustomer` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.ButtonClickChangeCustomer", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.ButtonClickChangeCustomer");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.ButtonClickChangeCustomer", function(payload)
    greg.log("Hook greg.SERVER.ButtonClickChangeCustomer received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.ButtonClickChangeCustomer fired")

greg.on("greg.SERVER.ButtonClickChangeCustomer", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.ButtonClickChangeCustomer", (payload) => {
    console.log("Hook greg.SERVER.ButtonClickChangeCustomer triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.ButtonClickChangeCustomer".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.ButtonClickChangeCustomer", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.ButtonClickChangeCustomer fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
