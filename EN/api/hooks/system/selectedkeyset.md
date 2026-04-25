---
title: SelectedKeySet
description: Documentation for greg.SYSTEM.SelectedKeySet
path: /api/hooks/system/selectedkeyset
---

# SelectedKeySet

> **Hook ID:** `greg.SYSTEM.SelectedKeySet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.SetSelectedKey

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::SetSelectedKey(OSK_UI_Key)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `SelectedKeySet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.SelectedKeySet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.SelectedKeySet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.SelectedKeySet", function(payload)
    greg.log("Hook greg.SYSTEM.SelectedKeySet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.SelectedKeySet fired")

greg.on("greg.SYSTEM.SelectedKeySet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.SelectedKeySet", (payload) => {
    console.log("Hook greg.SYSTEM.SelectedKeySet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.SelectedKeySet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.SelectedKeySet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.SelectedKeySet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
