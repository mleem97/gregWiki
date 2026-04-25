---
title: ColorLoaded
description: Documentation for greg.SYSTEM.ColorLoaded
path: /api/hooks/system/colorloaded
---

# ColorLoaded

> **Hook ID:** `greg.SYSTEM.ColorLoaded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/FCP_Persistence.LoadColor

## Native Signature
```csharp
Il2Cpp.FCP_Persistence::LoadColor(Color)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ColorLoaded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ColorLoaded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ColorLoaded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ColorLoaded", function(payload)
    greg.log("Hook greg.SYSTEM.ColorLoaded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ColorLoaded fired")

greg.on("greg.SYSTEM.ColorLoaded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ColorLoaded", (payload) => {
    console.log("Hook greg.SYSTEM.ColorLoaded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ColorLoaded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ColorLoaded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ColorLoaded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
