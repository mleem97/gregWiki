---
title: TickTimer
description: Documentation for greg.SERVER.TickTimer
path: /api/hooks/server/ticktimer
---

# TickTimer

> **Hook ID:** `greg.SERVER.TickTimer`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.TickTimer

## Native Signature
```csharp
Il2Cpp.Server::TickTimer()
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
        GregAPI.Hooks.On("greg.SERVER.TickTimer", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.TickTimer");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.TickTimer", function(payload)
    greg.log("Hook greg.SERVER.TickTimer received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.TickTimer fired")

greg.on("greg.SERVER.TickTimer", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.TickTimer", (payload) => {
    console.log("Hook greg.SERVER.TickTimer triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.TickTimer".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.TickTimer", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.TickTimer fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
