---
title: RefreshPortDisplay
description: Documentation for greg.NETWORK.RefreshPortDisplay
path: /api/hooks/network/refreshportdisplay
---

# RefreshPortDisplay

> **Hook ID:** `greg.NETWORK.RefreshPortDisplay`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitchConfiguration.RefreshPortDisplay

## Native Signature
```csharp
Il2Cpp.NetworkSwitchConfiguration::RefreshPortDisplay()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `RefreshPortDisplay` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.RefreshPortDisplay", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.RefreshPortDisplay");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.RefreshPortDisplay", function(payload)
    greg.log("Hook greg.NETWORK.RefreshPortDisplay received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.RefreshPortDisplay fired")

greg.on("greg.NETWORK.RefreshPortDisplay", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.RefreshPortDisplay", (payload) => {
    console.log("Hook greg.NETWORK.RefreshPortDisplay triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.RefreshPortDisplay".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.RefreshPortDisplay", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.RefreshPortDisplay fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
