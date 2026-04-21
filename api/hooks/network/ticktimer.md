---
title: TickTimer
description: Documentation for greg.NETWORK.TickTimer
path: /api/hooks/network/ticktimer
---

# TickTimer

> **Hook ID:** `greg.NETWORK.TickTimer`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.TickTimer

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::TickTimer()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `TickTimer` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.TickTimer", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.TickTimer");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.TickTimer", function(payload)
    greg.log("Hook greg.NETWORK.TickTimer received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.TickTimer fired")

greg.on("greg.NETWORK.TickTimer", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.TickTimer", (payload) => {
    console.log("Hook greg.NETWORK.TickTimer triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.TickTimer".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.TickTimer", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.TickTimer fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
