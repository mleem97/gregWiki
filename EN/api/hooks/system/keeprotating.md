---
title: KeepRotating
description: Documentation for greg.SYSTEM.KeepRotating
path: /api/hooks/system/keeprotating
---

# KeepRotating

> **Hook ID:** `greg.SYSTEM.KeepRotating`
> **Category:** System
> **Namespace:** `Il2Cpp`

Auto-generated from IL2CPP sources: Il2Cpp/LeanTweenUIElement.KeepRotating

## Native Signature
```csharp
Il2Cpp.LeanTweenUIElement::KeepRotating()
```

## Payload Context
When this hook fires, the event payload contains the following data:

| Name | Type | Description |
|---|---|---|
| `method` | `string` | ... |


## Using this Hook

::: tip
Subscribe to this hook to react to `KeepRotating` events in real-time.
:::

#Tabset
#Tab: C#
```csharp
using gregCore.API;

public class MyMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        GregAPI.Hooks.On("greg.SYSTEM.KeepRotating", OnHookTriggered);
    }

    private void OnHookTriggered(gregCore.Sdk.Models.GregPayload payload)
    {
        GregAPI.LogInfo("Triggered greg.SYSTEM.KeepRotating");
    }
}
```
#Tab: Lua
```lua
greg.on("greg.SYSTEM.KeepRotating", function(payload)
    greg.log("Hook greg.SYSTEM.KeepRotating received")
end)
```
#Tab: Python
```python
def on_hook(payload):
    print("Hook greg.SYSTEM.KeepRotating fired")

greg.on("greg.SYSTEM.KeepRotating", on_hook)
```
#Tab: JavaScript
```javascript
greg.on("greg.SYSTEM.KeepRotating", (payload) => {
    console.log("Hook greg.SYSTEM.KeepRotating triggered");
});
```
#Tab: Rust
```rust
api.subscribe_hook(c"greg.SYSTEM.KeepRotating".as_ptr(), on_hook_callback);
```
#Tab: Go
```go
greg.Subscribe("greg.SYSTEM.KeepRotating", func(p greg.Payload) {
    fmt.Println("Hook greg.SYSTEM.KeepRotating fired")
})
```
#EndTabset

## Safety & Compatibility
- **Status:** Active
- **Strategy:** `Postfix`
- **Safe to block?**: Yes
