---
title: SelectedKeyMove
description: Documentation for greg.SYSTEM.SelectedKeyMove
path: /api/hooks/system/selectedkeymove
---

# SelectedKeyMove

> **Hook ID:** `greg.SYSTEM.SelectedKeyMove`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_MiniKeyboard.SelectedKeyMove

## Native Signature
```csharp
Il2Cpp.OSK_MiniKeyboard::SelectedKeyMove(Vector2)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SelectedKeyMove` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SelectedKeyMove", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SelectedKeyMove");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SelectedKeyMove", function(payload)
    greg.log("Hook greg.SYSTEM.SelectedKeyMove received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SelectedKeyMove fired")

greg.on("greg.SYSTEM.SelectedKeyMove", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SelectedKeyMove", (payload) => {
    console.log("Hook greg.SYSTEM.SelectedKeyMove triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SelectedKeyMove".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SelectedKeyMove", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SelectedKeyMove fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
