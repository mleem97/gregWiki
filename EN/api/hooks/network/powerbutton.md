---
title: PowerButton
description: Documentation for greg.NETWORK.PowerButton
path: /api/hooks/network/powerbutton
---

# PowerButton

> **Hook ID:** `greg.NETWORK.PowerButton`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.PowerButton

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::PowerButton(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `PowerButton` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.PowerButton", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.PowerButton");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.PowerButton", function(payload)
    greg.log("Hook greg.NETWORK.PowerButton received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.PowerButton fired")

greg.on("greg.NETWORK.PowerButton", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.PowerButton", (payload) => {
    console.log("Hook greg.NETWORK.PowerButton triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.PowerButton".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.PowerButton", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.PowerButton fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
