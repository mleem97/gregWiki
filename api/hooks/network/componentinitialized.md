---
title: ComponentInitialized
description: Documentation for greg.NETWORK.ComponentInitialized
path: /api/hooks/network/componentinitialized
---

# ComponentInitialized

> **Hook ID:** `greg.NETWORK.ComponentInitialized`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/SFPModule.Awake

## Native Signature
```csharp
Il2Cpp.SFPModule::Awake()
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
        GregAPI.Hooks.On("greg.NETWORK.ComponentInitialized", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ComponentInitialized");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ComponentInitialized", function(payload)
    greg.log("Hook greg.NETWORK.ComponentInitialized received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ComponentInitialized fired")

greg.on("greg.NETWORK.ComponentInitialized", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ComponentInitialized", (payload) => {
    console.log("Hook greg.NETWORK.ComponentInitialized triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ComponentInitialized".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ComponentInitialized", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ComponentInitialized fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
