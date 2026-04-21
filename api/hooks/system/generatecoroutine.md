---
title: GenerateCoroutine
description: Documentation for greg.SYSTEM.GenerateCoroutine
path: /api/hooks/system/generatecoroutine
---

# GenerateCoroutine

> **Hook ID:** `greg.SYSTEM.GenerateCoroutine`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_AccentConsole.GenerateCoroutine

## Native Signature
```csharp
Il2Cpp.OSK_AccentConsole::GenerateCoroutine()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GenerateCoroutine` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GenerateCoroutine", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GenerateCoroutine");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GenerateCoroutine", function(payload)
    greg.log("Hook greg.SYSTEM.GenerateCoroutine received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GenerateCoroutine fired")

greg.on("greg.SYSTEM.GenerateCoroutine", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GenerateCoroutine", (payload) => {
    console.log("Hook greg.SYSTEM.GenerateCoroutine triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GenerateCoroutine".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GenerateCoroutine", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GenerateCoroutine fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
