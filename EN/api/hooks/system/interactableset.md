---
title: InteractableSet
description: Documentation for greg.SYSTEM.InteractableSet
path: /api/hooks/system/interactableset
---

# InteractableSet

> **Hook ID:** `greg.SYSTEM.InteractableSet`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.SetInteractable

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::SetInteractable(bool)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InteractableSet` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.InteractableSet", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.InteractableSet");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.InteractableSet", function(payload)
    greg.log("Hook greg.SYSTEM.InteractableSet received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.InteractableSet fired")

greg.on("greg.SYSTEM.InteractableSet", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.InteractableSet", (payload) => {
    console.log("Hook greg.SYSTEM.InteractableSet triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.InteractableSet".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.InteractableSet", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.InteractableSet fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
