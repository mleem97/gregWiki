---
title: DelayedAppDoorOpening
description: Documentation for greg.CUSTOMER.DelayedAppDoorOpening
path: /api/hooks/customer/delayedappdooropening
---

# DelayedAppDoorOpening

> **Hook ID:** `greg.CUSTOMER.DelayedAppDoorOpening`
> **Category:** Customer
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CustomerBase.DelayedAppDoorOpening

## Native Signature
```csharp
Il2Cpp.CustomerBase::DelayedAppDoorOpening(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `DelayedAppDoorOpening` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.CUSTOMER.DelayedAppDoorOpening", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.CUSTOMER.DelayedAppDoorOpening");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.CUSTOMER.DelayedAppDoorOpening", function(payload)
    greg.log("Hook greg.CUSTOMER.DelayedAppDoorOpening received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.CUSTOMER.DelayedAppDoorOpening fired")

greg.on("greg.CUSTOMER.DelayedAppDoorOpening", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.CUSTOMER.DelayedAppDoorOpening", (payload) => {
    console.log("Hook greg.CUSTOMER.DelayedAppDoorOpening triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.CUSTOMER.DelayedAppDoorOpening".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.CUSTOMER.DelayedAppDoorOpening", func(p greg.Payload) {
    fmt.Println("Hook greg.CUSTOMER.DelayedAppDoorOpening fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
