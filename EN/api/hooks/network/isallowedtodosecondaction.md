---
title: IsAllowedToDoSecondAction
description: Documentation for greg.NETWORK.IsAllowedToDoSecondAction
path: /api/hooks/network/isallowedtodosecondaction
---

# IsAllowedToDoSecondAction

> **Hook ID:** `greg.NETWORK.IsAllowedToDoSecondAction`
> **Category:** Network
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/CableLink.IsAllowedToDoSecondAction

## Native Signature
```csharp
Il2Cpp.CableLink::IsAllowedToDoSecondAction()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `IsAllowedToDoSecondAction` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.NETWORK.IsAllowedToDoSecondAction", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.NETWORK.IsAllowedToDoSecondAction");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.NETWORK.IsAllowedToDoSecondAction", function(payload)
    greg.log("Hook greg.NETWORK.IsAllowedToDoSecondAction received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.NETWORK.IsAllowedToDoSecondAction fired")

greg.on("greg.NETWORK.IsAllowedToDoSecondAction", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.NETWORK.IsAllowedToDoSecondAction", (payload) => {
    console.log("Hook greg.NETWORK.IsAllowedToDoSecondAction triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.NETWORK.IsAllowedToDoSecondAction".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.NETWORK.IsAllowedToDoSecondAction", func(p greg.Payload) {
    fmt.Println("Hook greg.NETWORK.IsAllowedToDoSecondAction fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
