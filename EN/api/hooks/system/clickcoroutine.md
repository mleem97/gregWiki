---
title: ClickCoroutine
description: Documentation for greg.SYSTEM.ClickCoroutine
path: /api/hooks/system/clickcoroutine
---

# ClickCoroutine

> **Hook ID:** `greg.SYSTEM.ClickCoroutine`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Key.ClickCoroutine

## Native Signature
```csharp
Il2Cpp.OSK_UI_Key::ClickCoroutine()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `ClickCoroutine` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.ClickCoroutine", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.ClickCoroutine");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.ClickCoroutine", function(payload)
    greg.log("Hook greg.SYSTEM.ClickCoroutine received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.ClickCoroutine fired")

greg.on("greg.SYSTEM.ClickCoroutine", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.ClickCoroutine", (payload) => {
    console.log("Hook greg.SYSTEM.ClickCoroutine triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.ClickCoroutine".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.ClickCoroutine", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.ClickCoroutine fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
