---
title: InitializeLoadedRack
description: Documentation for greg.RACK.InitializeLoadedRack
path: /api/hooks/rack/initializeloadedrack
---

# InitializeLoadedRack

> **Hook ID:** `greg.RACK.InitializeLoadedRack`
> **Category:** Rack
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Rack.InitializeLoadedRack

## Native Signature
```csharp
Il2Cpp.Rack::InitializeLoadedRack(Il2CppStructArray<int>)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InitializeLoadedRack` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.RACK.InitializeLoadedRack", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.RACK.InitializeLoadedRack");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.RACK.InitializeLoadedRack", function(payload)
    greg.log("Hook greg.RACK.InitializeLoadedRack received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.RACK.InitializeLoadedRack fired")

greg.on("greg.RACK.InitializeLoadedRack", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.RACK.InitializeLoadedRack", (payload) => {
    console.log("Hook greg.RACK.InitializeLoadedRack triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.RACK.InitializeLoadedRack".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.RACK.InitializeLoadedRack", func(p greg.Payload) {
    fmt.Println("Hook greg.RACK.InitializeLoadedRack fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
