---
title: CableLoaded
description: Documentation for greg.NETWORK.CableLoaded
path: /api/hooks/network/cableloaded
---

# CableLoaded

> **Hook ID:** `greg.NETWORK.CableLoaded`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CablePositions.LoadCable

## Native Signature
```csharp
Il2Cpp.CablePositions::LoadCable(CableSaveData)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CableLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.CableLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.CableLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.CableLoaded", function(payload)
    greg.log("Hook greg.NETWORK.CableLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.CableLoaded fired")

greg.on("greg.NETWORK.CableLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.CableLoaded", (payload) => {
    console.log("Hook greg.NETWORK.CableLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.CableLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.CableLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.CableLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
