---
title: ShiftDown
description: Documentation for greg.SYSTEM.ShiftDown
path: /api/hooks/system/shiftdown
---

# ShiftDown

> **Hook ID:** `greg.SYSTEM.ShiftDown`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.ShiftDown

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::ShiftDown()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ShiftDown` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ShiftDown", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ShiftDown");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ShiftDown", function(payload)
    greg.log("Hook greg.SYSTEM.ShiftDown received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ShiftDown fired")

greg.on("greg.SYSTEM.ShiftDown", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ShiftDown", (payload) => {
    console.log("Hook greg.SYSTEM.ShiftDown triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ShiftDown".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ShiftDown", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ShiftDown fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
