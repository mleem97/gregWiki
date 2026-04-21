---
title: HandleNewCableWhileOff
description: Documentation for greg.NETWORK.HandleNewCableWhileOff
path: /api/hooks/network/handlenewcablewhileoff
---

# HandleNewCableWhileOff

> **Hook ID:** `greg.NETWORK.HandleNewCableWhileOff`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.HandleNewCableWhileOff

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::HandleNewCableWhileOff(int)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `HandleNewCableWhileOff` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.HandleNewCableWhileOff", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.HandleNewCableWhileOff");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.HandleNewCableWhileOff", function(payload)
    greg.log("Hook greg.NETWORK.HandleNewCableWhileOff received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.HandleNewCableWhileOff fired")

greg.on("greg.NETWORK.HandleNewCableWhileOff", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.HandleNewCableWhileOff", (payload) => {
    console.log("Hook greg.NETWORK.HandleNewCableWhileOff triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.HandleNewCableWhileOff".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.HandleNewCableWhileOff", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.HandleNewCableWhileOff fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
