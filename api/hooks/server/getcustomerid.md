---
title: GetCustomerID
description: Documentation for greg.SERVER.GetCustomerID
path: /api/hooks/server/getcustomerid
---

# GetCustomerID

> **Hook ID:** `greg.SERVER.GetCustomerID`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.GetCustomerID

## Native Signature
```csharp
Il2Cpp.Server::GetCustomerID()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetCustomerID` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.GetCustomerID", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.GetCustomerID");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.GetCustomerID", function(payload)
    greg.log("Hook greg.SERVER.GetCustomerID received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.GetCustomerID fired")

greg.on("greg.SERVER.GetCustomerID", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.GetCustomerID", (payload) => {
    console.log("Hook greg.SERVER.GetCustomerID triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.GetCustomerID".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.GetCustomerID", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.GetCustomerID fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
