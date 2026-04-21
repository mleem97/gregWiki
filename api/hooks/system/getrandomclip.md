---
title: GetRandomClip
description: Documentation for greg.SYSTEM.GetRandomClip
path: /api/hooks/system/getrandomclip
---

# GetRandomClip

> **Hook ID:** `greg.SYSTEM.GetRandomClip`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FootSteps.GetRandomClip

## Native Signature
```csharp
Il2Cpp.FootSteps::GetRandomClip()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetRandomClip` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetRandomClip", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetRandomClip");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetRandomClip", function(payload)
    greg.log("Hook greg.SYSTEM.GetRandomClip received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetRandomClip fired")

greg.on("greg.SYSTEM.GetRandomClip", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetRandomClip", (payload) => {
    console.log("Hook greg.SYSTEM.GetRandomClip triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetRandomClip".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetRandomClip", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetRandomClip fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
