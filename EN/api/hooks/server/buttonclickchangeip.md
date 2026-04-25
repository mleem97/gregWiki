---
title: ButtonClickChangeIP
description: Documentation for greg.SERVER.ButtonClickChangeIP
path: /api/hooks/server/buttonclickchangeip
---

# ButtonClickChangeIP

> **Hook ID:** `greg.SERVER.ButtonClickChangeIP`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.ButtonClickChangeIP

## Native Signature
```csharp
Il2Cpp.Server::ButtonClickChangeIP()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonClickChangeIP` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.ButtonClickChangeIP", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.ButtonClickChangeIP");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.ButtonClickChangeIP", function(payload)
    greg.log("Hook greg.SERVER.ButtonClickChangeIP received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.ButtonClickChangeIP fired")

greg.on("greg.SERVER.ButtonClickChangeIP", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.ButtonClickChangeIP", (payload) => {
    console.log("Hook greg.SERVER.ButtonClickChangeIP triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.ButtonClickChangeIP".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.ButtonClickChangeIP", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.ButtonClickChangeIP fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
