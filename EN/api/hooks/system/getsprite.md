---
title: GetSprite
description: Documentation for greg.SYSTEM.GetSprite
path: /api/hooks/system/getsprite
---

# GetSprite

> **Hook ID:** `greg.SYSTEM.GetSprite`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/GamepadIcons.GetSprite

## Native Signature
```csharp
Il2Cpp.GamepadIcons::GetSprite(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `GetSprite` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.GetSprite", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.GetSprite");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.GetSprite", function(payload)
    greg.log("Hook greg.SYSTEM.GetSprite received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.GetSprite fired")

greg.on("greg.SYSTEM.GetSprite", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.GetSprite", (payload) => {
    console.log("Hook greg.SYSTEM.GetSprite triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.GetSprite".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.GetSprite", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.GetSprite fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
