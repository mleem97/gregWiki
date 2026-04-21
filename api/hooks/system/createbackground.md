---
title: CreateBackground
description: Documentation for greg.SYSTEM.CreateBackground
path: /api/hooks/system/createbackground
---

# CreateBackground

> **Hook ID:** `greg.SYSTEM.CreateBackground`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_MiniKeyboard.CreateBackground

## Native Signature
```csharp
Il2Cpp.OSK_MiniKeyboard::CreateBackground()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `CreateBackground` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.CreateBackground", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.CreateBackground");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.CreateBackground", function(payload)
    greg.log("Hook greg.SYSTEM.CreateBackground received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.CreateBackground fired")

greg.on("greg.SYSTEM.CreateBackground", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.CreateBackground", (payload) => {
    console.log("Hook greg.SYSTEM.CreateBackground triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.CreateBackground".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.CreateBackground", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.CreateBackground fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
