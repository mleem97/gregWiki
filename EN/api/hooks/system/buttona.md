---
title: ButtonA
description: Documentation for greg.SYSTEM.ButtonA
path: /api/hooks/system/buttona
---

# ButtonA

> **Hook ID:** `greg.SYSTEM.ButtonA`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.ButtonA

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::ButtonA()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ButtonA` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ButtonA", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ButtonA");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ButtonA", function(payload)
    greg.log("Hook greg.SYSTEM.ButtonA received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ButtonA fired")

greg.on("greg.SYSTEM.ButtonA", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ButtonA", (payload) => {
    console.log("Hook greg.SYSTEM.ButtonA triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ButtonA".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ButtonA", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ButtonA fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
