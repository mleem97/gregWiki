---
title: LastPressed
description: Documentation for greg.SYSTEM.LastPressed
path: /api/hooks/system/lastpressed
---

# LastPressed

> **Hook ID:** `greg.SYSTEM.LastPressed`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.LastPressed

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::LastPressed()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LastPressed` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.LastPressed", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.LastPressed");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.LastPressed", function(payload)
    greg.log("Hook greg.SYSTEM.LastPressed received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.LastPressed fired")

greg.on("greg.SYSTEM.LastPressed", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.LastPressed", (payload) => {
    console.log("Hook greg.SYSTEM.LastPressed triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.LastPressed".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.LastPressed", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.LastPressed fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
