---
title: ShowNetworkConfigCanvas
description: Documentation for greg.SYSTEM.ShowNetworkConfigCanvas
path: /api/hooks/system/shownetworkconfigcanvas
---

# ShowNetworkConfigCanvas

> **Hook ID:** `greg.SYSTEM.ShowNetworkConfigCanvas`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.ShowNetworkConfigCanvas

## Native Signature
```csharp
Il2Cpp.MainGameManager::ShowNetworkConfigCanvas(NetworkSwitch)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShowNetworkConfigCanvas` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ShowNetworkConfigCanvas", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ShowNetworkConfigCanvas");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ShowNetworkConfigCanvas", function(payload)
    greg.log("Hook greg.SYSTEM.ShowNetworkConfigCanvas received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ShowNetworkConfigCanvas fired")

greg.on("greg.SYSTEM.ShowNetworkConfigCanvas", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ShowNetworkConfigCanvas", (payload) => {
    console.log("Hook greg.SYSTEM.ShowNetworkConfigCanvas triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ShowNetworkConfigCanvas".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ShowNetworkConfigCanvas", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ShowNetworkConfigCanvas fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
