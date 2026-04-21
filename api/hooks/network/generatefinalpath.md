---
title: GenerateFinalPath
description: Documentation for greg.NETWORK.GenerateFinalPath
path: /api/hooks/network/generatefinalpath
---

# GenerateFinalPath

> **Hook ID:** `greg.NETWORK.GenerateFinalPath`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CablePositions.GenerateFinalPath

## Native Signature
```csharp
Il2Cpp.CablePositions::GenerateFinalPath(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GenerateFinalPath` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GenerateFinalPath", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GenerateFinalPath");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GenerateFinalPath", function(payload)
    greg.log("Hook greg.NETWORK.GenerateFinalPath received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GenerateFinalPath fired")

greg.on("greg.NETWORK.GenerateFinalPath", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GenerateFinalPath", (payload) => {
    console.log("Hook greg.NETWORK.GenerateFinalPath triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GenerateFinalPath".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GenerateFinalPath", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GenerateFinalPath fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
