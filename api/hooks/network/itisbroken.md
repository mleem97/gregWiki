---
title: ItIsBroken
description: Documentation for greg.NETWORK.ItIsBroken
path: /api/hooks/network/itisbroken
---

# ItIsBroken

> **Hook ID:** `greg.NETWORK.ItIsBroken`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/NetworkSwitch.ItIsBroken

## Native Signature
```csharp
Il2Cpp.NetworkSwitch::ItIsBroken()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ItIsBroken` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.ItIsBroken", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.ItIsBroken");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.ItIsBroken", function(payload)
    greg.log("Hook greg.NETWORK.ItIsBroken received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.ItIsBroken fired")

greg.on("greg.NETWORK.ItIsBroken", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.ItIsBroken", (payload) => {
    console.log("Hook greg.NETWORK.ItIsBroken triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.ItIsBroken".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.ItIsBroken", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.ItIsBroken fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
