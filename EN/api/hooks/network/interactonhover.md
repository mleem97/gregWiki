---
title: InteractOnHover
description: Documentation for greg.NETWORK.InteractOnHover
path: /api/hooks/network/interactonhover
---

# InteractOnHover

> **Hook ID:** `greg.NETWORK.InteractOnHover`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SFPModule.InteractOnHover

## Native Signature
```csharp
Il2Cpp.SFPModule::InteractOnHover(RaycastHit)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InteractOnHover` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.InteractOnHover", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.InteractOnHover");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.InteractOnHover", function(payload)
    greg.log("Hook greg.NETWORK.InteractOnHover received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.InteractOnHover fired")

greg.on("greg.NETWORK.InteractOnHover", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.InteractOnHover", (payload) => {
    console.log("Hook greg.NETWORK.InteractOnHover triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.InteractOnHover".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.InteractOnHover", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.InteractOnHover fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
