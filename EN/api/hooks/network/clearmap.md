---
title: ClearMap
description: Documentation for greg.NETWORK.ClearMap
path: /api/hooks/network/clearmap
---

# ClearMap

> **Hook ID:** `greg.NETWORK.ClearMap`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkMap.ClearMap

## Native Signature
```csharp
Il2Cpp.NetworkMap::ClearMap()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClearMap` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ClearMap", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ClearMap");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ClearMap", function(payload)
    greg.log("Hook greg.NETWORK.ClearMap received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ClearMap fired")

greg.on("greg.NETWORK.ClearMap", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ClearMap", (payload) => {
    console.log("Hook greg.NETWORK.ClearMap triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ClearMap".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ClearMap", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ClearMap fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
