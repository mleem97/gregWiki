---
title: InitStatic
description: Documentation for greg.SYSTEM.InitStatic
path: /api/hooks/system/initstatic
---

# InitStatic

> **Hook ID:** `greg.SYSTEM.InitStatic`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FCP_Persistence.InitStatic

## Native Signature
```csharp
Il2Cpp.FCP_Persistence::InitStatic()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InitStatic` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.InitStatic", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.InitStatic");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.InitStatic", function(payload)
    greg.log("Hook greg.SYSTEM.InitStatic received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.InitStatic fired")

greg.on("greg.SYSTEM.InitStatic", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.InitStatic", (payload) => {
    console.log("Hook greg.SYSTEM.InitStatic triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.InitStatic".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.InitStatic", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.InitStatic fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
