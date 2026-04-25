---
title: LayoutLoaded
description: Documentation for greg.SYSTEM.LayoutLoaded
path: /api/hooks/system/layoutloaded
---

# LayoutLoaded

> **Hook ID:** `greg.SYSTEM.LayoutLoaded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.LoadLayout

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::LoadLayout(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LayoutLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.LayoutLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.LayoutLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.LayoutLoaded", function(payload)
    greg.log("Hook greg.SYSTEM.LayoutLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.LayoutLoaded fired")

greg.on("greg.SYSTEM.LayoutLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.LayoutLoaded", (payload) => {
    console.log("Hook greg.SYSTEM.LayoutLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.LayoutLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.LayoutLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.LayoutLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
