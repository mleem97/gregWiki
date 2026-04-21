---
title: OnDestroy
description: Documentation for greg.SERVER.OnDestroy
path: /api/hooks/server/ondestroy
---

# OnDestroy

> **Hook ID:** `greg.SERVER.OnDestroy`
> **Category:** Server
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/Server.OnDestroy

## Native Signature
```csharp
Il2Cpp.Server::OnDestroy()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnDestroy` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SERVER.OnDestroy", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SERVER.OnDestroy");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SERVER.OnDestroy", function(payload)
    greg.log("Hook greg.SERVER.OnDestroy received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SERVER.OnDestroy fired")

greg.on("greg.SERVER.OnDestroy", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SERVER.OnDestroy", (payload) => {
    console.log("Hook greg.SERVER.OnDestroy triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SERVER.OnDestroy".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SERVER.OnDestroy", func(p greg.Payload) {
    fmt.Println("Hook greg.SERVER.OnDestroy fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
