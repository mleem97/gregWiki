---
title: FixedUpdate
description: Documentation for greg.SYSTEM.FixedUpdate
path: /api/hooks/system/fixedupdate
---

# FixedUpdate

> **Hook ID:** `greg.SYSTEM.FixedUpdate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_UI_Keyboard.FixedUpdate

## Native Signature
```csharp
Il2Cpp.OSK_UI_Keyboard::FixedUpdate()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `FixedUpdate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.FixedUpdate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.FixedUpdate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.FixedUpdate", function(payload)
    greg.log("Hook greg.SYSTEM.FixedUpdate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.FixedUpdate fired")

greg.on("greg.SYSTEM.FixedUpdate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.FixedUpdate", (payload) => {
    console.log("Hook greg.SYSTEM.FixedUpdate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.FixedUpdate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.FixedUpdate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.FixedUpdate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
