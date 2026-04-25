---
title: InputManager
description: Documentation for greg.SYSTEM.InputManager.OnControlChange
path: /api/hooks/system/inputmanager
---

# InputManager

> **Hook ID:** `greg.SYSTEM.InputManager.OnControlChange`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/OnControlChange.InputManager.OnControlChange

## Native Signature
```csharp
Il2Cpp.OnControlChange::InputManager.OnControlChange([In] System.Action)
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InputManager` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.InputManager.OnControlChange", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.InputManager.OnControlChange");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.InputManager.OnControlChange", function(payload)
    greg.log("Hook greg.SYSTEM.InputManager.OnControlChange received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.InputManager.OnControlChange fired")

greg.on("greg.SYSTEM.InputManager.OnControlChange", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.InputManager.OnControlChange", (payload) => {
    console.log("Hook greg.SYSTEM.InputManager.OnControlChange triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.InputManager.OnControlChange".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.InputManager.OnControlChange", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.InputManager.OnControlChange fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
