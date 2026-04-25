---
title: GetCableMaterial
description: Documentation for greg.NETWORK.GetCableMaterial
path: /api/hooks/network/getcablematerial
---

# GetCableMaterial

> **Hook ID:** `greg.NETWORK.GetCableMaterial`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CablePositions.GetCableMaterial

## Native Signature
```csharp
Il2Cpp.CablePositions::GetCableMaterial(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetCableMaterial` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.GetCableMaterial", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.GetCableMaterial");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.GetCableMaterial", function(payload)
    greg.log("Hook greg.NETWORK.GetCableMaterial received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.GetCableMaterial fired")

greg.on("greg.NETWORK.GetCableMaterial", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.GetCableMaterial", (payload) => {
    console.log("Hook greg.NETWORK.GetCableMaterial triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.GetCableMaterial".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.GetCableMaterial", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.GetCableMaterial fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
