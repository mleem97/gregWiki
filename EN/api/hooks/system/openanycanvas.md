---
title: OpenAnyCanvas
description: Documentation for greg.SYSTEM.OpenAnyCanvas
path: /api/hooks/system/openanycanvas
---

# OpenAnyCanvas

> **Hook ID:** `greg.SYSTEM.OpenAnyCanvas`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/MainGameManager.OpenAnyCanvas

## Native Signature
```csharp
Il2Cpp.MainGameManager::OpenAnyCanvas()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OpenAnyCanvas` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OpenAnyCanvas", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OpenAnyCanvas");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OpenAnyCanvas", function(payload)
    greg.log("Hook greg.SYSTEM.OpenAnyCanvas received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OpenAnyCanvas fired")

greg.on("greg.SYSTEM.OpenAnyCanvas", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OpenAnyCanvas", (payload) => {
    console.log("Hook greg.SYSTEM.OpenAnyCanvas triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OpenAnyCanvas".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OpenAnyCanvas", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OpenAnyCanvas fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
