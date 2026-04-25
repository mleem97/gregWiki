---
title: OpenDoor
description: Documentation for greg.CUSTOMER.OpenDoor
path: /api/hooks/customer/opendoor
---

# OpenDoor

> **Hook ID:** `greg.CUSTOMER.OpenDoor`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBaseDoor.OpenDoor

## Native Signature
```csharp
Il2Cpp.CustomerBaseDoor::OpenDoor()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OpenDoor` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.OpenDoor", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.OpenDoor");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.OpenDoor", function(payload)
    greg.log("Hook greg.CUSTOMER.OpenDoor received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.OpenDoor fired")

greg.on("greg.CUSTOMER.OpenDoor", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.OpenDoor", (payload) => {
    console.log("Hook greg.CUSTOMER.OpenDoor triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.OpenDoor".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.OpenDoor", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.OpenDoor fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
