---
title: LongPressCheck
description: Documentation for greg.SYSTEM.LongPressCheck
path: /api/hooks/system/longpresscheck
---

# LongPressCheck

> **Hook ID:** `greg.SYSTEM.LongPressCheck`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.LongPressCheck

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::LongPressCheck()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LongPressCheck` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.LongPressCheck", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.LongPressCheck");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.LongPressCheck", function(payload)
    greg.log("Hook greg.SYSTEM.LongPressCheck received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.LongPressCheck fired")

greg.on("greg.SYSTEM.LongPressCheck", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.LongPressCheck", (payload) => {
    console.log("Hook greg.SYSTEM.LongPressCheck triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.LongPressCheck".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.LongPressCheck", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.LongPressCheck fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
