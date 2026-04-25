---
title: OnGUI
description: Documentation for greg.SYSTEM.OnGUI
path: /api/hooks/system/ongui
---

# OnGUI

> **Hook ID:** `greg.SYSTEM.OnGUI`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.OnGUI

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::OnGUI()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnGUI` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnGUI", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnGUI");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnGUI", function(payload)
    greg.log("Hook greg.SYSTEM.OnGUI received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnGUI fired")

greg.on("greg.SYSTEM.OnGUI", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnGUI", (payload) => {
    console.log("Hook greg.SYSTEM.OnGUI triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnGUI".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnGUI", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnGUI fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
