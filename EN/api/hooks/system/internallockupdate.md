---
title: InternalLockUpdate
description: Documentation for greg.SYSTEM.InternalLockUpdate
path: /api/hooks/system/internallockupdate
---

# InternalLockUpdate

> **Hook ID:** `greg.SYSTEM.InternalLockUpdate`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/MouseLook.InternalLockUpdate

## Native Signature
```csharp
Il2Cpp.MouseLook::InternalLockUpdate()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `InternalLockUpdate` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.InternalLockUpdate", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.InternalLockUpdate");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.InternalLockUpdate", function(payload)
    greg.log("Hook greg.SYSTEM.InternalLockUpdate received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.InternalLockUpdate fired")

greg.on("greg.SYSTEM.InternalLockUpdate", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.InternalLockUpdate", (payload) => {
    console.log("Hook greg.SYSTEM.InternalLockUpdate triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.InternalLockUpdate".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.InternalLockUpdate", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.InternalLockUpdate fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
