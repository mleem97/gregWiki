---
title: OnFinishSubmit
description: Documentation for greg.SYSTEM.OnFinishSubmit
path: /api/hooks/system/onfinishsubmit
---

# OnFinishSubmit

> **Hook ID:** `greg.SYSTEM.OnFinishSubmit`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityEngine/ButtonExtended.OnFinishSubmit

## Native Signature
```csharp
Il2Cpp.ButtonExtended::OnFinishSubmit()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnFinishSubmit` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnFinishSubmit", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnFinishSubmit");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnFinishSubmit", function(payload)
    greg.log("Hook greg.SYSTEM.OnFinishSubmit received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnFinishSubmit fired")

greg.on("greg.SYSTEM.OnFinishSubmit", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnFinishSubmit", (payload) => {
    console.log("Hook greg.SYSTEM.OnFinishSubmit triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnFinishSubmit".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnFinishSubmit", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnFinishSubmit fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
