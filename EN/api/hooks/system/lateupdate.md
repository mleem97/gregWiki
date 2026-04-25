---
title: LateUpdate
description: Documentation for greg.SYSTEM.LateUpdate
path: /api/hooks/system/lateupdate
---

# LateUpdate

> **Hook ID:** `greg.SYSTEM.LateUpdate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2CppviperOSK/OSK_Receiver.LateUpdate

## Native Signature
```csharp
Il2Cpp.OSK_Receiver::LateUpdate()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `LateUpdate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.LateUpdate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.LateUpdate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.LateUpdate", function(payload)
    greg.log("Hook greg.SYSTEM.LateUpdate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.LateUpdate fired")

greg.on("greg.SYSTEM.LateUpdate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.LateUpdate", (payload) => {
    console.log("Hook greg.SYSTEM.LateUpdate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.LateUpdate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.LateUpdate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.LateUpdate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
