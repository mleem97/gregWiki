---
title: Text_ShftEnabledAdded
description: Documentation for greg.SYSTEM.Text_ShftEnabledAdded
path: /api/hooks/system/text-shftenabledadded
---

# Text_ShftEnabledAdded

> **Hook ID:** `greg.SYSTEM.Text_ShftEnabledAdded`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Keyboard.AddText_ShftEnabled

## Native Signature
```csharp
Il2Cpp.OSK_Keyboard::AddText_ShftEnabled(string)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `Text_ShftEnabledAdded` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.Text_ShftEnabledAdded", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.Text_ShftEnabledAdded");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.Text_ShftEnabledAdded", function(payload)
    greg.log("Hook greg.SYSTEM.Text_ShftEnabledAdded received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.Text_ShftEnabledAdded fired")

greg.on("greg.SYSTEM.Text_ShftEnabledAdded", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.Text_ShftEnabledAdded", (payload) => {
    console.log("Hook greg.SYSTEM.Text_ShftEnabledAdded triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.Text_ShftEnabledAdded".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.Text_ShftEnabledAdded", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.Text_ShftEnabledAdded fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
