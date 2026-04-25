---
title: OnDestroy
description: Documentation for greg.SYSTEM.OnDestroy
path: /api/hooks/system/ondestroy
---

# OnDestroy

> **Hook ID:** `greg.SYSTEM.OnDestroy`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: UnityStandardAssets/FirstPersonController.OnDestroy

## Native Signature
```csharp
Il2Cpp.FirstPersonController::OnDestroy()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `OnDestroy` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.OnDestroy", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.OnDestroy");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.OnDestroy", function(payload)
    greg.log("Hook greg.SYSTEM.OnDestroy received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.OnDestroy fired")

greg.on("greg.SYSTEM.OnDestroy", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.OnDestroy", (payload) => {
    console.log("Hook greg.SYSTEM.OnDestroy triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.OnDestroy".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.OnDestroy", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.OnDestroy fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
