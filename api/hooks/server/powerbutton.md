---
title: PowerButton
description: Documentation for greg.SERVER.PowerButton
path: /api/hooks/server/powerbutton
---

# PowerButton

> **Hook ID:** `greg.SERVER.PowerButton`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.PowerButton

## Native Signature
```csharp
Il2Cpp.Server::PowerButton(bool)
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
        GregAPI.Hooks.On("greg.SERVER.PowerButton", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.PowerButton");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.PowerButton", function(payload)
    greg.log("Hook greg.SERVER.PowerButton received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.PowerButton fired")

greg.on("greg.SERVER.PowerButton", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.PowerButton", (payload) => {
    console.log("Hook greg.SERVER.PowerButton triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.PowerButton".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.PowerButton", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.PowerButton fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
