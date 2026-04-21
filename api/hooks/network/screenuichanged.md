---
title: ScreenUIChanged
description: Documentation for greg.NETWORK.ScreenUIChanged
path: /api/hooks/network/screenuichanged
---

# ScreenUIChanged

> **Hook ID:** `greg.NETWORK.ScreenUIChanged`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.UpdateScreenUI

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::UpdateScreenUI()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ScreenUIChanged` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ScreenUIChanged", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ScreenUIChanged");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ScreenUIChanged", function(payload)
    greg.log("Hook greg.NETWORK.ScreenUIChanged received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ScreenUIChanged fired")

greg.on("greg.NETWORK.ScreenUIChanged", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ScreenUIChanged", (payload) => {
    console.log("Hook greg.NETWORK.ScreenUIChanged triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ScreenUIChanged".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ScreenUIChanged", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ScreenUIChanged fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
