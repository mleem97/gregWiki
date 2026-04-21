---
title: __AssignHandles
description: Documentation for greg.CUSTOMER.__AssignHandles
path: /api/hooks/customer/--assignhandles
---

# __AssignHandles

> **Hook ID:** `greg.CUSTOMER.__AssignHandles`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerNetworkInfo.__AssignHandles

## Native Signature
```csharp
Il2Cpp.CustomerNetworkInfo::__AssignHandles(Unity.Entities.SystemState)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `__AssignHandles` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.__AssignHandles", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.__AssignHandles");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.__AssignHandles", function(payload)
    greg.log("Hook greg.CUSTOMER.__AssignHandles received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.__AssignHandles fired")

greg.on("greg.CUSTOMER.__AssignHandles", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.__AssignHandles", (payload) => {
    console.log("Hook greg.CUSTOMER.__AssignHandles triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.__AssignHandles".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.__AssignHandles", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.__AssignHandles fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
