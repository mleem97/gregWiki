---
title: MouseLookOnDisable
description: Documentation for greg.SYSTEM.MouseLookOnDisable
path: /api/hooks/system/mouselookondisable
---

# MouseLookOnDisable

> **Hook ID:** `greg.SYSTEM.MouseLookOnDisable`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/MouseLook.MouseLookOnDisable

## Native Signature
```csharp
Il2Cpp.MouseLook::MouseLookOnDisable()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `MouseLookOnDisable` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.MouseLookOnDisable", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.MouseLookOnDisable");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.MouseLookOnDisable", function(payload)
    greg.log("Hook greg.SYSTEM.MouseLookOnDisable received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.MouseLookOnDisable fired")

greg.on("greg.SYSTEM.MouseLookOnDisable", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.MouseLookOnDisable", (payload) => {
    console.log("Hook greg.SYSTEM.MouseLookOnDisable triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.MouseLookOnDisable".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.MouseLookOnDisable", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.MouseLookOnDisable fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
