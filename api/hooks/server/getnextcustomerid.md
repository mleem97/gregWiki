---
title: GetNextCustomerID
description: Documentation for greg.SERVER.GetNextCustomerID
path: /api/hooks/server/getnextcustomerid
---

# GetNextCustomerID

> **Hook ID:** `greg.SERVER.GetNextCustomerID`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.GetNextCustomerID

## Native Signature
```csharp
Il2Cpp.Server::GetNextCustomerID(int, bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetNextCustomerID` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.GetNextCustomerID", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.GetNextCustomerID");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.GetNextCustomerID", function(payload)
    greg.log("Hook greg.SERVER.GetNextCustomerID received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.GetNextCustomerID fired")

greg.on("greg.SERVER.GetNextCustomerID", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.GetNextCustomerID", (payload) => {
    console.log("Hook greg.SERVER.GetNextCustomerID triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.GetNextCustomerID".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.GetNextCustomerID", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.GetNextCustomerID fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
