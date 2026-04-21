---
title: ValidateRackPosition
description: Documentation for greg.NETWORK.ValidateRackPosition
path: /api/hooks/network/validaterackposition
---

# ValidateRackPosition

> **Hook ID:** `greg.NETWORK.ValidateRackPosition`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.ValidateRackPosition

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::ValidateRackPosition()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ValidateRackPosition` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ValidateRackPosition", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ValidateRackPosition");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ValidateRackPosition", function(payload)
    greg.log("Hook greg.NETWORK.ValidateRackPosition received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ValidateRackPosition fired")

greg.on("greg.NETWORK.ValidateRackPosition", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ValidateRackPosition", (payload) => {
    console.log("Hook greg.NETWORK.ValidateRackPosition triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ValidateRackPosition".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ValidateRackPosition", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ValidateRackPosition fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
