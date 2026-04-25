---
title: ShiftUp
description: Documentation for greg.SYSTEM.ShiftUp
path: /api/hooks/system/shiftup
---

# ShiftUp

> **Hook ID:** `greg.SYSTEM.ShiftUp`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.ShiftUp

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::ShiftUp()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShiftUp` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ShiftUp", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ShiftUp");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ShiftUp", function(payload)
    greg.log("Hook greg.SYSTEM.ShiftUp received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ShiftUp fired")

greg.on("greg.SYSTEM.ShiftUp", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ShiftUp", (payload) => {
    console.log("Hook greg.SYSTEM.ShiftUp triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ShiftUp".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ShiftUp", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ShiftUp fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
