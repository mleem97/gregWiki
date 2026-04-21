---
title: InteractOnClick
description: Documentation for greg.NETWORK.InteractOnClick
path: /api/hooks/network/interactonclick
---

# InteractOnClick

> **Hook ID:** `greg.NETWORK.InteractOnClick`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SFPModule.InteractOnClick

## Native Signature
```csharp
Il2Cpp.SFPModule::InteractOnClick()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InteractOnClick` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.InteractOnClick", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.InteractOnClick");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.InteractOnClick", function(payload)
    greg.log("Hook greg.NETWORK.InteractOnClick received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.InteractOnClick fired")

greg.on("greg.NETWORK.InteractOnClick", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.InteractOnClick", (payload) => {
    console.log("Hook greg.NETWORK.InteractOnClick triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.InteractOnClick".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.InteractOnClick", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.InteractOnClick fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
