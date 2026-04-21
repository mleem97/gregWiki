---
title: LongPressActionSet
description: Documentation for greg.SYSTEM.LongPressActionSet
path: /api/hooks/system/longpressactionset
---

# LongPressActionSet

> **Hook ID:** `greg.SYSTEM.LongPressActionSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Settings.SetLongPressAction

## Native Signature
```csharp
Il2Cpp.OSK_Settings::SetLongPressAction(UnityAction<OSK_LongPressPacket>)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LongPressActionSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.LongPressActionSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.LongPressActionSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.LongPressActionSet", function(payload)
    greg.log("Hook greg.SYSTEM.LongPressActionSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.LongPressActionSet fired")

greg.on("greg.SYSTEM.LongPressActionSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.LongPressActionSet", (payload) => {
    console.log("Hook greg.SYSTEM.LongPressActionSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.LongPressActionSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.LongPressActionSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.LongPressActionSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
